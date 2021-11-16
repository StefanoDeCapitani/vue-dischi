<template>
  <div class="container">
    <form @submit.prevent="onSubmit" class="form">
      <div class="filters">
        <div class="artist-filter">
          <label class="artist-filter__label" for="artist-select"
            >Scegli un artista:
          </label>
          <select
            id="artist-select"
            class="artist-filter__select"
            v-model="selectedAuthor"
            :disabled="selectedGenre !== ''"
          >
            <option v-for="(author, i) in authorsList" :key="i" :value="author">
              {{ author }}
            </option>
          </select>
        </div>
        <div class="genre-filter">
          <label class="genre-filter__label" for="genre-select"
            >Scegli un genere:
          </label>
          <select
            id="genre-select"
            class="genre-filter__select"
            v-model="selectedGenre"
            :disabled="selectedAuthor !== ''"
          >
            <option v-for="(genre, i) in genreList" :key="i" :value="genre">
              {{ genre }}
            </option>
          </select>
        </div>
      </div>
      <button class="btn btn--filter-apply">APPLICA FILTRO</button>
      <button
        type="button"
        class="btn btn--filter-remove"
        @click="onRemoveClick"
      >
        RIMUOVI FILTRO
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CustomFilter",
  props: {
    genreList: Array,
    authorsList: Array,
  },
  data() {
    return {
      selectedAuthor: "",
      selectedGenre: "",
    };
  },
  methods: {
    onSubmit() {
      this.$emit("filter-apply", [this.selectedAuthor, this.selectedGenre]);
    },
    onRemoveClick() {
      this.selectedGenre = "";
      (this.selectedAuthor = ""), this.$emit("filter-remove");
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styles/variables.scss";

.container {
  width: 70%;
  max-width: 1160px;

  padding: 4rem 0 0;
  margin: auto;

  color: white;
  .form {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem 1rem;
    width: 50%;
    margin: auto;

    .filters {
      flex: 0 0 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      font-size: 1rem;
      gap: 1rem;
      .artist-filter {
        flex: 0 0 100%;
        display: flex;
      }
      .genre-filter {
        flex: 0 0 100%;
        display: flex;
      }
      .artist-filter__label,
      .genre-filter__label {
        line-height: 45px;
        padding: 0 1rem;
        background-color: $bg-color-light;
      }
      .artist-filter__select,
      .genre-filter__select {
        flex: 1 0 auto;
        height: 45px;
        padding: 0 0.5rem;
        font-size: inherit;
        border-radius: none;
        &:focus {
          outline: none;
        }
      }
    }

    .btn--filter-apply,
    .btn--filter-remove {
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
    }

    .btn--filter-apply {
      background-color: rgb(84, 146, 84);
    }
    .btn--filter-remove {
      background-color: rgb(165, 85, 85);
    }
  }
}
</style>

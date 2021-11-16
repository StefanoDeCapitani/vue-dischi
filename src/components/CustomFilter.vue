<template>
  <div class="container">
    <div></div>
    <form @submit.prevent="onSubmit" class="filter">
      <div class="filter__input">
        <label class="filter__genre-label" for="genre-select"
          >Scegli un genere:
        </label>
        <select
          id="genre-select"
          class="filter__genre-select"
          v-model="selectedGenre"
        >
          <option v-for="(genre, i) in genreList" :key="i" :value="genre">
            {{ genre }}
          </option>
        </select>
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
  },
  data() {
    return {
      selectedGenre: "",
    };
  },
  methods: {
    onSubmit() {
      this.$emit("filter-apply", this.selectedGenre);
    },
    onRemoveClick() {
      this.selectedGenre = "";
      this.$emit("filter-remove");
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
  .filter {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem 1rem;
    width: 50%;
    margin: auto;

    .filter__input {
      flex: 0 0 100%;
      display: flex;
      align-items: center;
      font-size: 1rem;
      .filter__genre-label {
        line-height: 45px;
        padding: 0 1rem;
        background-color: $bg-color-light;
      }
      .filter__genre-select {
        flex: 1 0 auto;
        height: 45px;
        padding: 0 0.5rem;
        font-size: inherit;
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

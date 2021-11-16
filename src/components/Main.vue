<template>
  <main class="main">
    <Loader v-if="loading" />
    <CustomFilter
      :authorsList="authorsList"
      :genreList="genreList"
      @filter-apply="onFilterApply"
      @filter-remove="onFilterRemove"
    />
    <CardsGrid :albumsList="filteredList" />
  </main>
</template>

<script>
import CardsGrid from "@/components/CardsGrid.vue";
import Loader from "@/components/Loader.vue";
import CustomFilter from "@/components/CustomFilter.vue";
import axios from "axios";

export default {
  name: "Main",
  components: {
    CardsGrid,
    Loader,
    CustomFilter,
  },
  data() {
    return {
      loading: true,
      albumsList: [],
      selectedAuthor: "",
      selectedGenre: "",
    };
  },
  computed: {
    genreList: function () {
      return this.albumsList.reduce((acc, el) => {
        if (!acc.includes(el.genre)) acc.push(el.genre);
        return acc;
      }, []);
    },
    authorsList: function () {
      return this.albumsList.reduce((acc, el) => {
        if (!acc.includes(el.author)) acc.push(el.author);
        return acc;
      }, []);
    },
    filteredList: function () {
      if (this.selectedGenre) {
        return this.albumsList.filter((el) => el.genre === this.selectedGenre);
      }
      if (this.selectedAuthor) {
        return this.albumsList.filter(
          (el) => el.author === this.selectedAuthor
        );
      }
      return this.albumsList;
    },
  },
  methods: {
    onFilterApply(genre) {
      this.selectedAuthor = genre[0];
      this.selectedGenre = genre[1];
    },
    onFilterRemove() {
      this.selectedGenre = "";
      this.selectedAuthor = "";
    },
  },

  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((resp) => {
        this.albumsList.push(...resp.data.response);
      });
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.main {
  background-color: $bg-color-dark;
  height: 100vh;
  position: relative;
}
</style>

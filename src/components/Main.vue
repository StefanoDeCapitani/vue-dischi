<template>
  <main class="main">
    <Loader v-if="loading"></Loader>
    <select name="" id="" v-model="selectedGenre">
      <option v-for="(genre, i) in genreList" :key="i" :value="genre">
        {{ genre }}
      </option>
    </select>
    <button>APPLICA FILTRO</button>
    <CardsGrid :albumsList="filteredList" />
  </main>
</template>

<script>
import CardsGrid from "@/components/CardsGrid.vue";
import Loader from "@/components/Loader.vue";
import axios from "axios";

export default {
  name: "Main",
  components: {
    CardsGrid,
    Loader,
  },
  data() {
    return {
      loading: true,
      albumsList: [],
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
    filteredList: function () {
      if (this.selectedGenre) {
        return this.albumsList.filter((el) => el.genre === this.selectedGenre);
      }
      return this.albumsList;
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

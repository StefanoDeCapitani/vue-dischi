<template>
  <div class="container">
    <div class="cards-grid">
      <Card
        v-for="(album, i) in albumsList"
        :key="i"
        :poster="album.poster"
        :title="album.title"
        :author="album.author"
        :year="album.year"
      />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import axios from "axios";

export default {
  name: "CardsGrid",
  components: {
    Card,
  },
  data() {
    return {
      albumsList: [],
    };
  },
  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((resp) => {
        this.albumsList.push(...resp.data.response);
      });
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.container {
  width: 70%;
  max-width: 1160px;
  height: 100%;

  padding: 2rem 0;
  margin: auto;

  display: grid;
  place-content: center;

  .cards-grid {
    $gap: 0.7rem;
    margin-left: -$gap;
    margin-right: -$gap;

    display: flex;
    flex-flow: row wrap;
    color: white;

    .card {
      width: calc((100% / 5) - ($gap * 2));
      margin: calc($gap);
      padding: 1rem;
      background-color: $bg-color-light;
    }
  }
}
</style>

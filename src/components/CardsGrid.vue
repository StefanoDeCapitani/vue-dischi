<template>
  <div class="cards-grid">
    <Card />
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
  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((resp) => {
        console.log(resp);
      });
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
</style>

<template>
  <main class="main">
    <Loader v-if="loading"></Loader>
    <CardsGrid @contentLoaded="loading = false" />
  </main>
</template>

<script>
import CardsGrid from "@/components/CardsGrid.vue";
import Loader from "@/components/Loader.vue";

export default {
  name: "Main",
  components: {
    CardsGrid,
    Loader,
  },
  data() {
    return {
      loading: true,
    };
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

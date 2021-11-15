<template>
  <main class="main">
    <CardsGrid />
  </main>
</template>

<script>
import CardsGrid from "@/components/CardsGrid.vue";

export default {
  name: "Main",
  components: {
    CardsGrid,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.main {
  background-color: $bg-color-dark;
  height: 100%;
}
</style>

<template>
  <div id="app">
    <Header></Header>
    <Main></Main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
  },
  created() {
    document.title = "Vue Dischi";
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/app.scss";

#app {
  height: 100%;
}
</style>

<template>
  <header class="header">
    <img
      class="header__logo"
      src="../assets/logo-small.svg"
      alt="Spotify logo"
    />
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.header {
  padding: 0.8rem 1.4rem;
  .header__logo {
    height: 44px;
  }
  background-color: $bg-color-light;
}
</style>

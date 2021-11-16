<template>
  <div class="loader">
    <div class="loader__content">
      <img
        class="loader__logo"
        src="@/assets/logo-small.svg"
        alt="Logo Spotify"
      />
      <p class="loader__message">Loading...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style scoped lang="scss">
@import "../assets/styles/variables.scss";

.loader {
  background-color: $bg-color-dark;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: grid;
  place-content: center;
  .loader__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: white;
    .loader__logo {
      width: 100px;
      animation: spin 1.5s linear infinite;
    }
    .loader__message {
      font-size: 1.4rem;
    }
  }
}

@keyframes spin {
  0% {
    transform: rotateZ(360deg);
  }
}
</style>

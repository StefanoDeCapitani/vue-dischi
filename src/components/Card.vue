<template>
  <div class="card">
    <div class="card__image-container">
      <div class="ratio">
        <div class="card__image-content">
          <img class="card__poster" :src="poster" alt="" />
        </div>
      </div>
    </div>
    <h3 class="card__title">{{ title }}</h3>
    <div class="card__specs">
      <p class="card__author">{{ author }}</p>
      <p class="card__year">{{ year }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["poster", "title", "author", "year"],
};
</script>

<style lang="scss" scoped>
.card {
  display: grid;
  grid-template-rows: auto 1fr 0.5fr;
  gap: 1.3rem;

  .ratio {
    position: relative;

    &::before {
      content: "";
      display: block;
      width: 100%;
      padding-top: 100%;
    }

    .card__image-content {
      position: absolute;
      inset: 0;

      .card__poster {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
  }

  .card__title {
    text-transform: uppercase;
    font-size: 1rem;
  }

  .card__title,
  .card__author,
  .card__year {
    text-align: center;
  }

  .card__author,
  .card__year {
    color: #7f7f7f;
  }
}
</style>

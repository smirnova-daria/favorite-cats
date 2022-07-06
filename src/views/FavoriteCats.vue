<template>
  <div>
    Favorite
    <cat-card
      v-for="cat in favoriteCats"
      :key="cat.id"
      :cat="cat"
      :buttonLabel="false"
    ></cat-card>
  </div>
</template>

<script>
import CatCard from "@/components/CatCard.vue";
import { store } from "@/store";
export default {
  components: { CatCard },
  data() {
    return {
      favoriteCats: store.state.favoriteCats,
    };
  },
};
</script>

<style></style>

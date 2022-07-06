<template>
  <div>
    Favorite
    <cat-card v-for="cat in favoriteCats" :key="cat.id" :cat="cat"></cat-card>
  </div>
</template>

<script>
import CatCard from "@/components/CatCard.vue";
export default {
  components: { CatCard },
  data() {
    return {
      favoriteCats: [],
    };
  },
  created() {
    const favoriteCatsData = localStorage.getItem("favorite-cats");

    if (favoriteCatsData) {
      this.favoriteCats = JSON.parse(favoriteCatsData);
    } else {
      this.favoriteCats = [];
    }
  },
};
</script>

<style></style>

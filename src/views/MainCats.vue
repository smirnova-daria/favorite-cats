<template>
  <div>
    Cats
    <cat-card v-for="cat in cats" :cat="cat" :key="cat.id"></cat-card>
  </div>
</template>
<script>
import { fetchCats } from "@/api";
import CatCard from "@/components/CatCard.vue";
export default {
  components: { CatCard },
  data() {
    return {
      cats: [],
      favoriteCats: [],
      limit: 15,
      page: 0,
    };
  },
  created() {
    fetchCats(this.limit, this.page).then((data) => (this.cats = data));
    const favoriteCatsData = localStorage.getItem("favorite-cats");
    if (favoriteCatsData) {
      this.favoriteCats = JSON.parse(favoriteCatsData);
    } else {
      this.favoriteCats = [];
    }
  },
};
</script>

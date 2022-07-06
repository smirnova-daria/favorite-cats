<template>
  <div>
    Cats
    <cat-card
      v-for="cat in cats"
      :cat="cat"
      :key="cat.id"
      :buttonLabel="true"
    ></cat-card>
  </div>
</template>
<script>
import { fetchCats } from "@/api";
import CatCard from "@/components/CatCard.vue";
import { store } from "@/store";
export default {
  components: { CatCard },
  data() {
    return {
      cats: [],
      favoriteCats: store.state.favoriteCats,
      limit: 15,
      page: 0,
    };
  },
  created() {
    fetchCats(this.limit, this.page).then((data) => (this.cats = data));
  },
};
</script>

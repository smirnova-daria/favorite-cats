<template>
  <main>
    <div class="container">
      <div class="cards">
        <cat-card
          v-for="cat in cats"
          :cat="cat"
          :key="cat.id"
          :buttonLabel="true"
        ></cat-card>
      </div>
      <div class="btn-wrapper">
        <button @click="loadMoreCats" class="more-cats-btn">
          ...больше котиков!...
        </button>
      </div>
    </div>
  </main>
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
  methods: {
    loadMoreCats() {
      this.page = this.page + 1;
      fetchCats(this.limit, this.page).then((data) => {
        data.forEach((item) => this.cats.push(item));
      });
    },
  },
};
</script>
<style scoped>
.btn-wrapper {
  display: flex;
  justify-content: center;
  margin: 50px 0;
}
.more-cats-btn {
  border: none;
  background-color: transparent;
  letter-spacing: 0.25px;
  color: #000000;
  cursor: pointer;
}
.more-cats-btn:after {
  border-bottom: 2px solid #2196f3;
  content: "";
  display: block;
  margin: 0.25em auto 0;
  transition: width 250ms ease-in-out 0s;
  width: 0;
}
.more-cats-btn:hover:after {
  transition: width 100ms ease-in-out 0s;
  width: 100%;
}
</style>

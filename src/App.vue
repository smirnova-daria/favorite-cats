<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <div v-for="cat in cats" :key="cat.id" class="card">
      <img :src="cat.url" :alt="'cat' + cat.id" />
    </div>
  </div>
</template>
<script>
import { fetchCats } from "./api";
export default {
  data() {
    return {
      cats: [],
    };
  },
  created() {
    fetchCats().then((data) => (this.cats = data));
  },
};
</script>
<style>
.card {
  width: 225px;
  height: 225px;
}
.card img {
  max-width: 100%;
  width: 100%;
}
</style>

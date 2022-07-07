<template>
  <header><navbar /></header>

  <router-view> </router-view>
</template>
<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>
<style src="./assets/style.css"></style>

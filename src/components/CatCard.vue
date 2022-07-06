<template>
  <article>
    <img :src="cat.url" alt="" />
    <button @click="addToFavoriteList(cat)">{{ setButtonLabel }}</button>
  </article>
</template>

<script>
import { store } from "@/store";
export default {
  data() {
    return {
      buttonState: this.buttonLabel,
    };
  },
  props: {
    cat: Object,
    buttonLabel: Boolean,
  },
  methods: {
    addToFavoriteList(cat) {
      this.buttonState = !this.buttonState;
      store.setFavoriteCats(cat);
    },
  },
  computed: {
    setButtonLabel() {
      return this.buttonState ? "Like" : "Dislike";
    },
  },
};
</script>

<style></style>

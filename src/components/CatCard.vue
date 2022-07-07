<template>
  <article class="card">
    <img :src="cat.url" alt="" />
    <button @click="addToFavoriteList(cat)" class="like-btn">
      <span v-if="buttonState" class="heart"></span>
      <span v-else class="heart-active"></span>
    </button>
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

<style scoped>
.card {
  width: 225px;
  height: 225px;
  overflow: hidden;
  object-fit: cover;
  transition: 0.3s;
  position: relative;
}
.like-btn {
  position: absolute;
  right: 14px;
  bottom: 14px;
  z-index: 3;
  width: 40px;
  height: 37px;
  padding: 0;
  transition: 0.3s;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.heart,
.heart-active {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.heart {
  background-image: url("@/assets/img/heart.svg");
}
.like-btn:hover .heart {
  background-image: url("@/assets/img/hovered-heart.svg");
}
.heart-active {
  background-image: url("@/assets/img/clicked-heart.svg");
}
.like-btn,
.heart-active {
  background-repeat: no-repeat;
  background-position: center center;
}
.card:hover {
  box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.24), 0px 9px 18px rgba(0, 0, 0, 0.18);
  transform: scale(1.15);
}
.card:hover .like-btn {
  opacity: 1;
}
@media (any-hover) {
  .like-btn {
    opacity: 0;
  }
}
@media (max-width: 520px) {
  .card {
    width: 100%;
  }
}
</style>

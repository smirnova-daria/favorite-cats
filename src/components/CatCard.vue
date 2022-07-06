<template>
  <article>
    <img :src="cat.url" alt="" />
    <button>Like</button>
  </article>
</template>

<script>
export default {
  props: {
    cat: Object,
  },
};
</script>

<style></style>

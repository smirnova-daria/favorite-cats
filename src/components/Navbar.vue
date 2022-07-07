<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <nav>
      <router-link
        to="/all-cats"
        class="nav-link"
        :class="$route.path === '/all-cats' ? 'active' : ''"
        >Все котики</router-link
      >
      <router-link
        to="/favorite"
        class="nav-link"
        :class="$route.path === '/favorite' ? 'active' : ''"
        >Любимые котики</router-link
      >
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  height: 64px;
}
.nav-link {
  text-decoration: none;
  line-height: 1.5;
  letter-spacing: 0.25px;
  color: rgba(255, 255, 255, 0.7);

  display: inline-flex;
  height: 100%;
  align-items: center;
  padding: 0 24px;
  transition: 0.3s;
}
.nav-link:hover {
  background-color: #1e88e5;
}
.nav-link.active {
  color: #ffffff;
  background-color: #1e88e5;
}
</style>

import { createRouter, createWebHistory } from "vue-router";
import FavoriteCats from "@/views/FavoriteCats";
import MainCats from "@/views/MainCats";

const routes = [
  { path: "/", component: MainCats },
  { path: "/favorite-cats", component: FavoriteCats },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

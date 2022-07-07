import { createRouter, createWebHistory } from "vue-router";
import FavoriteCats from "@/views/FavoriteCats";
import MainCats from "@/views/MainCats";

const routes = [
  { path: "/favorite-cats/all-cats", component: MainCats },
  { path: "/favorite-cats/favorite", component: FavoriteCats },
  { path: "/favorite-cats/", redirect: "favorite-cats/all-cats" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

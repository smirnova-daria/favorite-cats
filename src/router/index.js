import { createRouter, createWebHistory } from "vue-router";
import FavoriteCats from "@/views/FavoriteCats";
import MainCats from "@/views/MainCats";

const routes = [
  { path: "/all-cats", component: MainCats },
  { path: "/favorite", component: FavoriteCats },
  { path: "/", redirect: "/all-cats" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

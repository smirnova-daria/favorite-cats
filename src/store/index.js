import { reactive } from "vue";

export const store = {
  state: reactive({
    favoriteCats: JSON.parse(localStorage.getItem("favorite-cats")) || [],
  }),
  setFavoriteCats(cat) {
    const stateHasCat = this.state.favoriteCats.find((c) => c.id === cat.id);
    if (stateHasCat) {
      this.state.favoriteCats = this.state.favoriteCats.filter(
        (c) => c.id !== cat.id
      );
      localStorage.setItem(
        "favorite-cats",
        JSON.stringify(this.state.favoriteCats)
      );
    } else {
      this.state.favoriteCats.push(cat);
      localStorage.setItem(
        "favorite-cats",
        JSON.stringify(this.state.favoriteCats)
      );
    }
  },
};

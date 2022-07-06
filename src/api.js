export const fetchCats = () => {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?limit=15&page=0&order=DESC`
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));
};

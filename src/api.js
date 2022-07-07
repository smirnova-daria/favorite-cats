export const fetchCats = (limit, page) => {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}&order=DESC`
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));
};

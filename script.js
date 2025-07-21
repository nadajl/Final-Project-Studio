const movies = [
  {
    title: "Inception",
    image: "https://image.tmdb.org/t/p/w300//qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    year: 2010,
  },
  {
    title: "The Matrix",
    image: "https://image.tmdb.org/t/p/w300//f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    year: 1999,
  },
  {
    title: "Interstellar",
    image: "https://image.tmdb.org/t/p/w300//gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    year: 2014,
  },
];

const container = document.getElementById("movie-list");

movies.forEach((movie) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${movie.image}" alt="${movie.title}" />
    <h3>${movie.title}</h3>
    <p>📅 ${movie.year}</p>
  `;
  container.appendChild(card);
});

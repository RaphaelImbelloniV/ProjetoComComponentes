const moviesMock = [
    { id: 1, title: "The Matrix", year: 1999, poster: "https://picsum.photos/200?1" },
    { id: 2, title: "Inception", year: 2010, poster: "https://picsum.photos/200?2" },
    { id: 3, title: "Interstellar", year: 2014, poster: "https://picsum.photos/200?3" },
    { id: 4, title: "Gladiator", year: 2000, poster: "https://picsum.photos/200?4" }
];

window.onload = () => {
    const loaderArea = document.getElementById("loader-area");
    const gridArea = document.getElementById("grid-area");
    const detailsArea = document.getElementById("details-area");
    const noContentArea = document.getElementById("no-content-area");

    const loader = Loader();
    loaderArea.appendChild(loader);

    setTimeout(() => {
        loaderArea.innerHTML = "";
        renderMovies();
    }, 1000);
};

function renderMovies() {
    const gridArea = document.getElementById("grid-area");
    const detailsArea = document.getElementById("details-area");
    const noContentArea = document.getElementById("no-content-area");

    gridArea.innerHTML = "";
    detailsArea.innerHTML = "";
    noContentArea.innerHTML = "";

    if (moviesMock.length === 0) {
        noContentArea.appendChild(NoContent("Nenhum filme encontrado"));
        return;
    }

    const grid = GridAutoResize();
    gridArea.appendChild(grid);

    moviesMock.forEach(movie => {
        const card = MovieCard(movie, (selected) => {
            detailsArea.innerHTML = "";
            detailsArea.appendChild(MovieDetails(selected));
        });

        grid.appendChild(card);
    });
}
function MovieDetails(movie) {
    const container = document.createElement("div");
    container.className = "movie-details";

    const title = document.createElement("h2");
    title.textContent = `${movie.title} (${movie.year})`;

    const img = document.createElement("img");
    img.src = movie.poster;

    const id = document.createElement("p");
    id.textContent = `ID do filme: ${movie.id}`;

    container.appendChild(title);
    container.appendChild(img);
    container.appendChild(id);

    return container;
}
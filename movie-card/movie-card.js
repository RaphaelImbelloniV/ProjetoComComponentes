function MovieCard(movie, onClick) {
    const card = document.createElement("div");
    card.className = "movie-card";

    const img = document.createElement("img");
    img.src = movie.poster;

    const title = document.createElement("h3");
    title.textContent = movie.title;

    const year = document.createElement("p");
    year.textContent = movie.year;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(year);

    card.addEventListener("click", () => {
        if (onClick) onClick(movie);
    });

    return card;
}
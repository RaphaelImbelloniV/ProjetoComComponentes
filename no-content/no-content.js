function NoContent(message = "Nenhum conteúdo disponível") {
    const div = document.createElement("div");
    div.className = "no-content";
    div.textContent = message;
    return div;
}
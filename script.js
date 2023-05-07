const bookmark = document.querySelector('[data-js="bookmark-icon"]');

bookmark.addEventListener("click", (e) => {
  bookmark.classList.toggle("question-card__bookmark--filled");
});

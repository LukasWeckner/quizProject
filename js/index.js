const bookmark = document.querySelector('[data-js="bookmark-icon"]');
const answerButton = document.querySelector('[data-js="show-answer"]');
const answer = document.querySelector('[data-js="answer"]');

bookmark.addEventListener("click", (e) => {
  bookmark.classList.toggle("question-card__bookmark--filled");
});

answerButton.addEventListener("click", (e) => {
  answer.classList.toggle("--hidden");

  if (answer.classList.contains("--hidden")) {
    answerButton.textContent = "Hide Answer";
  } else {
    answerButton.textContent = "Show Answer";
  }
});

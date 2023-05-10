const form = document.querySelector('[data-js="form"]');
const newCardList = document.querySelector(
  '[data-js="question-card-container"]'
);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("test");

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const questionCard = document.createElement("li");

  questionCard.classList.add("question-card");

  newCardList.append(questionCard);
});

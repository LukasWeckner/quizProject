const form = document.querySelector('[data-js="form"]');
const newCardList = document.querySelector(
  '[data-js="question-card-container"]'
);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("test");

  //access form data
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const formElements = event.target.elements;

  // create elements for new question-card
  const questionCard = document.createElement("li");
  const question = document.createElement("p");
  const button = document.createElement("button");
  const answer = document.createElement("p");
  const bookmark = document.createElement("img");
  const tagContainer = document.createElement("div");
  const tag = document.createElement("span");

  //add classes to new elements
  questionCard.classList.add("question-card");
  question.classList.add("question-card__question");
  button.classList.add("question-card__button");
  answer.classList.add("question-card__answer");
  bookmark.classList.add("question-card__bookmark");
  tagContainer.classList.add("question-card__categories");
  tag.classList.add("question-card__categories-tag");

  //add textContent to new elements
  question.textContent = formElements.newQuestion.value;
  button.textContent = "Show answer";
  answer.textContent = formElements.newAnswer.value;
  tag.textContent = formElements.newTag.value;

  bookmark.src = "../img/bookmark-white.png";

  //append new elements to DOM
  newCardList.append(questionCard);
  questionCard.append(question);
  questionCard.append(button);
  questionCard.append(answer);
  questionCard.append(bookmark);
  questionCard.append(tagContainer);
  tagContainer.append(tag);
});

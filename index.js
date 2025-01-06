// phew… not a lot going on here. Please add some code!
const card = document.querySelector("[data-js='card']");
const answerButton = card.querySelector("[data-js='answer-button']");
const answerDisplay = card.querySelector("[data-js='answer-display']");
// const bookmarkButton = card.querySelector("[data-js='bookmark-button'");

answerButton.addEventListener("click", () => {
  const isAnswerVisible = answerDisplay.classList.contains(
    "card__answer--active"
  );

  if (isAnswerVisible) {
    answerDisplay.classList.remove("card__answer--active");
    answerButton.textContent = "Show answer";
  } else {
    answerDisplay.classList.add("card__answer--active");
    answerButton.textContent = "Hide answer";
  }
});

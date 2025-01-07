// phew… not a lot going on here. Please add some code!
const card = document.querySelector("[data-js='card']");
const answerButton = card.querySelector("[data-js='answer-button']");
const answerDisplay = card.querySelector("[data-js='answer-display']");
// const bookmarkButton = card.querySelector("[data-js='bookmark-button'");
// console.log("here", answerButton);
answerButton.addEventListener("click", () => {
  const isAnswerVisible = answerDisplay.classList.contains(
    "card__answer--active"
  );

  if (isAnswerVisible) {
    // answerDisplay.classList.remove("card__answer--active");
    answerButton.textContent = "Show answer";
  } else {
    // answerDisplay.classList.add("card__answer--active");
    answerButton.textContent = "Hide answer";
  }
  answerDisplay.classList.toggle("card__answer--active");
});

// console.log("card", card);

document.body.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth) * 100; // Horizontal % of mouse position
  const y = (e.clientY / window.innerHeight) * 100; // Vertical % of mouse position
  document.body.style.background = `linear-gradient(${x}deg,rgb(189, 113, 236), #fad0c4)`;
});

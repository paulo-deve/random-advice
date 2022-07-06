const adviceId = document.querySelector(".wrapper p > span");
const adviceText = document.querySelector("blockquote");
const adviceButton = document.querySelector("button");

adviceButton.addEventListener("click", getAdvice);

window.onload = () => {
  getAdvice();
};

function getAdvice() {
  fetch("	https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const advice = data.slip;

      adviceText.innerHTML = `"${advice.advice}"`;
      adviceId.innerHTML = `${advice.id}`;
    })
    .catch((error) => {
      console.log(error);
    });
}

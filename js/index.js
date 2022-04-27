const adviceNumber = document.querySelector(".advice-number");
const adviceText = document.querySelector(".advice-text");
const btn = document.querySelector(".submit-btn");

const addAdvice = () => {
  fetch("https://api.adviceslip.com/advice").then((res) => {
    res.json().then((data) => {
      console.log(data);
      let slip = data.slip;
      let advice = slip.advice;
      let adviceId = slip.id;
      adviceNumber.textContent = `Advice #${adviceId}`;
      adviceText.textContent = `"${advice}"`;
    });
  });
};

btn.addEventListener("click", addAdvice);

window.addEventListener("load", addAdvice);

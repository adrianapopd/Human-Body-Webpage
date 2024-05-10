"use strict";

// Go to challenge2 when click on Submit
let i = 0;
let quizz = {};

function generateAnswers(answers) {
  function generateAnswer(answer, index) {
    const element = document.createElement("label");
    element.innerText = answer;
    element.className = "container";
    const input = document.createElement("input");
    const span = document.createElement("span");
    input.type = "radio";
    input.id = `rd${index + 1}`;
    input.name = `radio${index + 1}`;
    input.value = answer;
    span.className = "checkmark";
    element.appendChild(input);
    element.appendChild(span);
    return element;
  }
  return answers.map((value, index) => generateAnswer(value, index));
}

const showQuestion = (currentQuestion) => {
  const image = document.querySelector(".challenge-left");
  image.src = currentQuestion.image;
  const text = document.querySelector("h3");
  text.innerText = currentQuestion.question;
  const answersElements = generateAnswers(currentQuestion.answers);
  const labelsAll = document.querySelector(".labels");
  labelsAll.innerHTML = "";
  answersElements.forEach((answer) => labelsAll.appendChild(answer));
};

const submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  fn1();
  i++;
  showQuestion(quizz[i]);
});

//Check answers
// let arrfinal = [];
function fn1() {
  console.log("he");
  let arr = [];
  const rd1 = document.getElementById("rd1");
  const rd2 = document.getElementById("rd2");
  const rd3 = document.getElementById("rd3");
  const rd4 = document.getElementById("rd4");

  if (rd1.checked === true) arr.push(rd1.value);
  if (rd2.checked === true) arr.push(rd2.value);
  if (rd3.checked === true) arr.push(rd3.value);
  if (rd4.checked === true) arr.push(rd4.value);
  if (arr.length === 0) alert("No organ selected!");
  console.log(rd3);
  console.log(arr);
  // arrfinal = arrfinal.concat(arr);
  // console.log(arrfinal);

  function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    let result = false;
    for (var i = 0; i < a.length; ++i) {
      if (a[i] === b[i]) result = true;
    }
    return result;
  }
  const isEqual = arraysEqual(arr, quizz[i].correct);
  console.log(isEqual);
  if (i === quizz.length - 1 && isEqual === true)
    alert(`You succeed the challenge!🎉`);
  if (i === quizz.length - 1 && isEqual === false)
    alert(`You failed the challenge!🥲`);
}

const main = async () => {
  const stringJson = await fetch("../challenge/quizz.json");
  const json = await stringJson.json();
  quizz = json.data;
  console.log(quizz);
  showQuestion(quizz[i]);
};

main();

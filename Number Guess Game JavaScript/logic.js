let inputbox = document.getElementById("inputbox");
let submit = document.getElementById("submit");
let guessBox = document.getElementById("preguess");
let gameOver = document.getElementById("Over");
let remainingGuess = document.getElementById("remainingguess");
let answer = document.getElementById("answer");

let chance = 10;
let playgame = true;

answer.innerText = " ";

let gameLogic = () => {
  if (inputbox.value <= 0) {
    alert("Please Enter a Valid Number");
  } else if (inputbox.value > 100) {
    alert("Please Enter a Valid Number");
  } else if (playgame) {
    let randomNum = Math.floor(Math.random() * 100 + 1);
    if (inputbox.value === randomNum) {
      answer.innerText = `Your Guess is Right`;
    } else {
      answer.innerText = " ";
      answer.innerText = `Your Guess is Wrong, Num is ${randomNum}`;
    }

    addNumber();
  }
};

let addNumber = () => {
  let prevNum = [];
  prevNum.push(inputbox.value);
  inputbox.value = "";
  chance--;
  guessBox.textContent += `${prevNum}, `;
  remainingGuess.textContent = `${chance}`;

  chanceTime();
};

function chanceTime() {
  if (chance === 0) {
    playgame = false;
    submit.remove();
    newGame();
  }
  function newGame() {
    let para = document.createElement("h3");
    para.textContent = `Game Over`;
    let btn = document.createElement("button");
    btn.textContent = "Start New Game";
    btn.id = "newGame";
  }
}
submit.addEventListener("click", gameLogic);

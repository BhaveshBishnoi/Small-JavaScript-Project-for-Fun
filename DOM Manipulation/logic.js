let start = document.getElementById("start");
let stop = document.getElementById("stop");
let clr = document.getElementById('colorcode')

let changeColor;

function randomColor() {
  let colors = "0123456789ABCDEF";
  let colorCode = "#";
  for (let i = 0; i < 6; i++) {
    colorCode += colors[Math.floor(Math.random() * 16)];
  }
  return colorCode;
}

function getColors() {
  if(!changeColor){
    changeColor = setInterval(getRandomBG, 1000);
  }

  function getRandomBG() {
    document.body.style.backgroundColor = randomColor();
    clr.innerHTML = `<p> ColorCode - ${randomColor()}</P>`
  }
}

start.addEventListener("click", getColors);

function stopChanging() {
  clearInterval(changeColor);
  changeColor = null;
}

stop.addEventListener("click", stopChanging);


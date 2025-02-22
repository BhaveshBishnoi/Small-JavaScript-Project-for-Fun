var timer = 60;
var scorevalue = 0;
var hitnm;

// Function of Score Start
function scoreVal() {
  scorevalue += 10;
  document.querySelector(".score").textContent = scorevalue;
}
// Function of Score End--------------!

// Function of Hit Tab Start
function hitval() {
  hitnm = Math.floor(Math.random() * 10);
  document.querySelector(".Hit").textContent = hitnm;
}
// Function of Hit Tab End------------!

// Timer Funcrtion Start
function timerClock() {
  var tmr = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector(".timers").textContent = timer;
    } else {
      clearInterval(tmr);
      document.querySelector("#bpnl").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}
// Timer Funcrtion End ------------!

// Make Bubble Function Start
function makeBubble() {
  var gola = "";
  for (i = 1; i <= 216; i++) {
    var nm = Math.floor(Math.random() * 10);
    gola += `<div class="gola">${nm}</div>`;
  }
  document.querySelector("#bpnl").innerHTML = gola;
}
// Make Bubble Function End -----------!

// Game Logic Start
document.getElementById("bpnl").addEventListener('click', function (dval) {
  var clnm = Number(dval.target.textContent);

if(clnm === hitnm){
 makeBubble();
 hitval();
 scoreVal();
}else{
  makeBubble();
  hitval();
}
 });
// Game Logic end
makeBubble();
timerClock();
hitval();

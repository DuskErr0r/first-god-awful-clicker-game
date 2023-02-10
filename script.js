//DOM
const clickHeading = document.querySelector("#click-heading");
const autoHeading = document.querySelector("#auto-heading");
const clickBtn = document.querySelector("#click-btn");
const autoBtn = document.querySelector("#auto-btn");

//game varibles
let clicks = 0;
let cost = 5;
let clicksPerSecond = 0;
let autoClickerAmount = 0;

//event listener
clickBtn.addEventListener("click", function () {
  clicks += 1;
  clickHeading.innerHTML = `Clicks: ${clicks}`;
});

autoBtn.addEventListener("click", function () {
  if(clicks >= 5){
    clicks -= 5;
    clicksPerSecond += 1;
    autoClickerAmount += 1;
  }

});

//functions
function autoClicker() {
  clicks += clicksPerSecond;
}

//Game Loop
window.setInterval(function () {
  autoClicker()
  clickHeading.innerHTML = `Clicks: ${clicks}`;
  autoHeading.innerHTML = `AutoClickers: ${autoClickerAmount}`;
}, 100);

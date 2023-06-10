let countdown;
let timerDisplay = document.querySelector(".display__time-left");
let endTime = document.querySelector(".display__end-time");
const buttons=document.querySelectorAll('[data-time')

function timer(seconds) {
    //clear any existing times
    clearInterval(countdown)
  const now = Date.now();
  const then = now + seconds * 1000; // convert seconds to milliseconds

  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const mins = Math.floor(seconds / 60);
  const remainderSecs = seconds % 60;
  const display = `${mins}:${remainderSecs < 10 ? "0" : ""}${remainderSecs}`;
  document.title = display;
  timerDisplay.textContent = display;
  console.log({ mins, remainderSecs });
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hours = end.getHours();
  const mins = end.getMinutes();
  const adjustedHours = hours > 12 ? hours - 12 : hours;
  endTime.textContent = `Be back at ${adjustedHours}:${
    mins < 10 ? "0" : ""
  }${mins}`;
}

function startTimer(){
    const seconds=parseInt(this.dataset.time)
    timer(seconds)
}

buttons.forEach(button=>button.addEventListener('click',startTimer))
document.customForm.addEventListener('submit',function(e){
    e.preventDefault()
    const mins=this.minutes.value
    console.log(mins)
    timer(mins*60)
    this.reset()
})
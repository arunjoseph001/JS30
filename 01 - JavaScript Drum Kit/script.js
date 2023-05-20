function playSound(e) {
  // console.log(e.keyCode,"this is it");
  // console.log(e.key);
  // console.log(e.code);
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  const key = document.querySelector(`div[data-key="${e.code}"]`);
    
  // console.log(audio, "This is audio");
  // console.log(key, "This is key");
  if (!audio) return;
  audio.currentTime = 0; // rewind to start time
  audio.play();
  key.classList.add("playing");
}

window.addEventListener("keydown", playSound);

function removeTransition(e) {
  if(e.propertyName!=='transform') return;
  e.target.classList.remove('playing');
}

const keys = document.querySelectorAll(".keys");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

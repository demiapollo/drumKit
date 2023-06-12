// write a playsound function for adding a class of playing to the key div and plays the audio after the key is pressed

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

//write a removeTransition function for removing the class of playing from the key div after the transition is over

function removeTransition(e) {
  e.propertyName !== "transform" ? null : e.target.classList.remove("playing");
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);

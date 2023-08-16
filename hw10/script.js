function piano(event){
  const tone = document.querySelector(`audio[data-tone="${event.code}"]`)
  const letter = document.querySelector(`button[data-tone="${event.code}"]`);
  if(!tone) return;
  tone.currentTime = 0;
  tone.play();
  letter.classList.add('pressed');
}
function removePressed(event) {
  event.target.classList.remove('pressed');
}
const buttons = document.querySelectorAll("button");
buttons.forEach((letter) => {letter.addEventListener('transitionend', removePressed)});
window.addEventListener("keydown", piano);
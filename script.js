/* TYPING EFFECT */

const texts = [
  "MCA Student",
  "Data Analytics Enthusiast",
  "Creative Designer"
];

let speed = 100;
const textElements = document.getElementById("typing");

let textIndex = 0;
let charIndex = 0;

function typeWriter() {

  if(charIndex < texts[textIndex].length){

    textElements.innerHTML += texts[textIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeWriter, speed);

  }

  else{

    setTimeout(eraseText, 1500);

  }

}

function eraseText(){

  if(textElements.innerHTML.length > 0){

    textElements.innerHTML =
    textElements.innerHTML.slice(0,-1);

    setTimeout(eraseText,50);

  }

  else{

    textIndex++;

    if(textIndex >= texts.length){
      textIndex = 0;
    }

    charIndex = 0;

    setTimeout(typeWriter,500);

  }

}

window.onload = typeWriter;

/* DARK MODE */

const modeToggle =
document.getElementById("mode-toggle");

modeToggle.onclick = () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        modeToggle.innerHTML = "☀️";

    }

    else{

        modeToggle.innerHTML = "🌙";

    }

};
/* SCROLL PROGRESS BAR */

window.onscroll = () => {

  let scrollTop =
  document.documentElement.scrollTop;

  let height =
  document.documentElement.scrollHeight -
  document.documentElement.clientHeight;

  let scrolled =
  (scrollTop / height) * 100;

  document.getElementById("progress-bar")
  .style.width = scrolled + "%";

};
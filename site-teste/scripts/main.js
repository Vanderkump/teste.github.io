const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "imagens/IOT_garden.webp") {
    myImage.setAttribute("src", "imagens/IOT_garden2.webp");
  } else {
    myImage.setAttribute("src", "imagens/IOT_garden.webp");
  }
};

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'plantar é legal, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'plantar é legal, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
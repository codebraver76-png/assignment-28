let msg = document.getElementById("message");
let box = document.getElementById("box");

document.getElementById("btn1").onclick = function() {
  let name = prompt("What is your name?");
  if (name) {
    msg.textContent = "Hello " + name + "! Welcome to my page.";
    alert("Nice to meet you, " + name + "!");
  }
};

document.getElementById("btn2").onclick = function() {
  box.style.background = "blue";
  box.style.color = "white";
  box.textContent = "Changed!";
};

document.getElementById("btn3").onclick = function() {
  box.style.background = "lightgray";
  box.textContent = "BOX";
};
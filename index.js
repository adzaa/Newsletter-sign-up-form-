"use strict";

const errorTxt = document.getElementById("error-txt");
const inputElement = document.querySelector('input[name="email"]');
const btn = document.getElementById("submit-btn");
const box = document.querySelector(".box");

btn.addEventListener("click", function () {
  var mailFormat = /\S+@\S+\.\S+/;
  const inputValue = inputElement.value;

  if (!inputValue == "" && inputValue.match(mailFormat)) {
    resetDefault();
    const email = inputValue;
    successSubscribe(email);
  } else {
    emailError();
  }
});

function resetDefault() {
  errorTxt.innerHTML = "";
  inputElement.style.border = "";
  inputElement.style.color = "";
  inputElement.style.background = "";
}

function emailError() {
  errorTxt.innerHTML = "Valid email required";
  inputElement.style.border = "1px solid var(--primary-tomato)";
  inputElement.style.color = "var(--primary-tomato)";
  inputElement.style.background = "rgba(255,98,87, 0.2)";
}

function successSubscribe(email) {
  box.style.display = "none";
  const success = document.createElement("div");
  success.classList.add("subscribed-box");

  const icon = document.createElement("img");
  icon.src = "assets/images/icon-success.svg";
  icon.style.width = "50px";

  const h1 = document.createElement("h1");
  h1.textContent = "Thanks for subscribing!";
  h1.style.color = "var(--charcoal-grey)";
  h1.style.fontSize = "56px";

  const p = document.createElement("p");
  p.innerHTML = `A confirmation email has been sent to <b>${email}</b>. Please open it and click the button inside to confirm your subscription.`;

  const button = document.createElement("button");
  button.textContent = "Dismiss message";

  button.addEventListener("click", function () {
    success.style.display = "none";
    box.style.display = "flex";
    inputElement.value = "";
  });

  document.body.appendChild(success);
  button.classList.add("btn");
  success.appendChild(icon);
  success.appendChild(h1);
  success.appendChild(p);
  success.appendChild(button);
}

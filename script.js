"use strict";

// Variables
const screenValue = document.querySelector("#screenValue");
screenValue.innerHTML = "0";

// Functions
function appendNum(value) {
  screenValue.innerHTML === "0" ? (screenValue.innerHTML = value) : (screenValue.innerHTML += value);
}

function clearInput() {
  screenValue.innerHTML = "0";
}

function deleteLastCharacter() {
  screenValue.innerHTML = screenValue.innerHTML.slice(0, -1);
  screenValue.innerHTML.length === 0 ? (screenValue.innerHTML = "0") : null;
}

function calculatePercentage() {
  screenValue.innerHTML /= 100;
}

function changeSign() {
  let num = +screenValue.innerHTML;
  if (num !== 0) {
    num = -num;
    screenValue.innerHTML = num;
  }
}

function calculate() {
  let result;

  try {
    const executeCode = new Function("return " + screenValue.innerHTML);
    result = executeCode();
    result === Infinity ? result = 'Error' : null;
  } catch (error) {
    result = "Error";
  }

  screenValue.innerHTML = result;
}

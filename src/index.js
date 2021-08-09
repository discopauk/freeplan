"use strict";

import "./scss/main.scss";
import "./js/portfolio.js";
import "./js/modal.js";

const body = document.querySelector("body");
const toggle = document.querySelector(".toggle");
const calc = document.querySelector(".calc");
const close = document.querySelector(".close");

toggle.addEventListener("click", () => {
	body.classList.toggle("openHamb");
});
calc.addEventListener("click", () => {
	body.classList.add("openModal");
});
close.addEventListener("click", () => {
	body.classList.remove("openModal");
});
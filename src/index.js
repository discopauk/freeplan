import "./scss/main.scss";
// Hamburger Menu
const body = document.querySelector("body");
document.querySelector(".toggle").addEventListener("click", () => {
	body.classList.toggle("openHamb");
});
document.querySelector(".calc").addEventListener("click", () => {
	body.classList.add("openModal");
});
document.querySelector(".close").addEventListener("click", () => {
	body.classList.remove("openModal");
});
// Modal 
const step = document.querySelector(".step"),
	field = document.querySelectorAll(".field"),
	next = document.querySelector(".next"),
	prev = document.querySelector(".prev");
next.addEventListener("click", function() {
	if (field[0].classList.contains("open")) {
		field[0].classList.remove("open");
		field[1].classList.add("open");
		prev.removeAttribute("disabled");
		step.textContent = "Шаг 2 из 3";
	} else {
		field[1].classList.remove("open");
		field[2].classList.add("open");
		next.setAttribute("disabled", "disabled");
		step.textContent = "Шаг 3 из 3";
	}
});
prev.addEventListener("click", function() {
	if (field[2].classList.contains("open")) {
		field[2].classList.remove("open");
		field[1].classList.add("open");
		next.removeAttribute("disabled");
		step.textContent = "Шаг 2 из 3";
	} else {
		field[1].classList.remove("open");
		field[0].classList.add("open");
		prev.setAttribute("disabled", "disabled");
		step.textContent = "Шаг 1 из 3";
	}
});
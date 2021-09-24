const step = document.querySelector(".step");
const field = document.querySelectorAll(".field");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
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
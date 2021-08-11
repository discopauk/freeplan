const step = document.querySelector(".step");
const field = document.querySelectorAll(".field");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
next.addEventListener("click", function() {
	if (field[0].hasAttribute("style", "display:flex")) {
		field[0].removeAttribute("style");
		field[1].setAttribute("style", "display:flex");
		prev.removeAttribute("disabled");
		step.textContent = "Шаг 2 из 3";
	} else {
		field[1].removeAttribute("style");
		field[2].setAttribute("style", "display:flex");
		next.setAttribute("disabled", "disabled");
		next.textContent = "Рассчитать стоимость";
		next.setAttribute("type", "submit");
		step.textContent = "Шаг 3 из 3";
	}
});
prev.addEventListener("click", function() {
	if (field[2].hasAttribute("style", "display:flex")) {
		field[2].removeAttribute("style");
		field[1].setAttribute("style", "display:flex");
		next.removeAttribute("disabled");
		next.textContent = "Вперед";
		step.textContent = "Шаг 2 из 3";
	} else {
		field[1].removeAttribute("style");
		field[0].setAttribute("style", "display:flex");
		prev.setAttribute("disabled", "disabled");
		step.textContent = "Шаг 1 из 3";
	}
});
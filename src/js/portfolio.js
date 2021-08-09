const card = document.querySelectorAll(".card");
card.forEach((cardItem) => {
	let interval;
	cardItem.addEventListener("mouseover", function() {
		let i = 1;
		interval = setInterval(() => {
			if (i <= card.length) {
				cardItem.style.backgroundImage = `url("./public/portfolio${i}.jpg")`;
				i++;
			} else {
				i = 1;
			}}, 1000);
	});
	cardItem.addEventListener("mouseleave", () => {
		cardItem.removeAttribute("style");
		clearInterval(interval);
	});
});
// const burger = document.querySelector(".burger");
// const menu = document.querySelector(".mobile-menu");

// burger.addEventListener("click", () => {
// 	menu.style.display = menu.style.display === "flex" ? "none" : "flex";
// 	menu.classList.toggle("open");
// });

// const sections = document.querySelector("#sections");
// const dots = document.querySelectorAll(".dot");

// function updateDots() {
// 	const index = Math.round(sections.scrollLeft / window.innerWidth);
// 	dots.forEach((dot, i) => {
// 		dot.classList.toggle("active", i === index);
// 	});
// }

// dots.forEach((dot) => {
// 	dot.addEventListener("click", () => {
// 		const index = dot.dataset.index;
// 		sections.scrollTo({
// 			left: window.innerWidth * index,
// 			behavior: "smooth",
// 		});
// 	});
// });

// sections.addEventListener("scroll", updateDots);

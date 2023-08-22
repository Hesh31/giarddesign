document.addEventListener("DOMContentLoaded", function () {
	var searchToggle = document.getElementById("searchToggle");
	var searchForm = document.querySelector(".search-form");

	searchToggle.addEventListener("click", function () {
		searchForm.classList.toggle("active");
		if (searchForm.classList.contains("active")) {
			searchForm.querySelector("input[type='search']").focus();
		}
	});

	document.addEventListener("click", function (event) {
		if (
			!searchForm.contains(event.target) &&
			!searchToggle.contains(event.target)
		) {
			searchForm.classList.remove("active");
		}
	});
});

const masonry = new Macy({
	container: ".projects-container",
	mobileFirst: true,
	columns: 3,
	breakAt: {
		400: 2,
		700: 3,
		1100: 4,
	},
	margin: {
		x: 20,
		y: 20,
	},
});

const thumbnails = document.querySelectorAll(".thumbnail");
const popup = document.querySelector(".popup");
const popupImg = document.querySelector(".popup__img");
const popupCloseBtn = document.querySelector(".popup__close");
const popupLeftArrow = document.querySelector(".popup__arrow--left");
const popupRightArrow = document.querySelector(".popup__arrow--right");
const expandButton = document.querySelector(".expand-button");
const hiddenThumbnails = document.querySelectorAll(".thumbnail.hidden");
let currentImageIndex;

thumbnails.forEach((thumbnail, index) => {
	thumbnail.addEventListener("click", () => {
		currentImageIndex = index;
		const imageUrl = thumbnail.getAttribute("src");
		popupImg.setAttribute("src", imageUrl);
		popup.classList.remove("hidden");
	});
});

popupCloseBtn.addEventListener("click", () => {
	popup.classList.add("hidden");
});

popupLeftArrow.addEventListener("click", () => {
	currentImageIndex =
		(currentImageIndex - 1 + thumbnails.length) % thumbnails.length;
	popupImg.setAttribute(
		"src",
		thumbnails[currentImageIndex].getAttribute("src")
	);
});

popupRightArrow.addEventListener("click", () => {
	currentImageIndex =
		(currentImageIndex + 1 + thumbnails.length) % thumbnails.length;
	popupImg.setAttribute(
		"src",
		thumbnails[currentImageIndex].getAttribute("src")
	);
});

document.addEventListener("DOMContentLoaded", function () {
	const thumbnails = document.querySelectorAll(".thumbnail.hidden");
	const expandButton = document.querySelector(".expand-button");
	const shadow = document.querySelector(".shadow");
	const container = document.querySelector(".projects-container");
	let masonry;

	expandButton.addEventListener("click", function () {
		thumbnails.forEach((thumbnail) => {
			thumbnail.classList.toggle("hidden");
		});

		if (masonry) {
			masonry.recalculate(true);
		} else {
			masonry = new Macy({
				container: ".projects-container",
				mobileFirst: true,
				columns: 3,
				breakAt: {
					400: 2,
					700: 3,
					1100: 4,
				},
				margin: {
					x: 20,
					y: 20,
				},
			});
		}

		shadow.classList.toggle("hidden");

		if (expandButton.textContent.includes("Rozwiń")) {
			expandButton.innerHTML = "Zwiń <i class='fa-solid fa-up-long'></i>";
			shadow.classList.add("hidden");
			expandButton.style.bottom = "1%";
		} else {
			expandButton.innerHTML = "Rozwiń <i class='fa-solid fa-down-long'></i>";
			expandButton.style.bottom = "10%";
		}
	});
});

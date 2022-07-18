import { foodImg } from "./assets/img/img.js";
export { renderHome };

// Create home page
const renderHome = () => {
	const hero = document.createElement("div");
	hero.classList = "hero";

	const heroImage = document.createElement("div");
	heroImage.classList = "hero__image";
	const image = new Image();
	image.src = foodImg;
	image.alt = "Image of food";
	heroImage.appendChild(image);

	const heroText = document.createElement("div");
	heroText.classList = "hero__text";
	heroText.style.height = "30rem";

	const heroTextHeading = document.createElement("h1");
	const heroTextParagraph = document.createElement("p");
	heroTextHeading.innerHTML = `Order Tasty & Fresh Food <span>anytime!</span>`;
	heroTextParagraph.textContent =
		"Just confirm your order and enjoy our delicious fastest delivery.";

	const heroBtn = document.createElement("button");
	heroBtn.textContent = "Explore Menu";
	heroBtn.classList = "btn btn-hero";
	heroBtn.id = "btn-hero";

	heroText.append(heroTextHeading, heroTextParagraph, heroBtn);
	hero.append(heroImage, heroText);

	return hero;
};

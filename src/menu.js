import { burger, createSvgIcon, greyStar } from "./assets/img/img.js";
import { mdiFire, mdiHeart } from "@mdi/js";

export default function renderMenu() {
	const menu = document.createElement("div");
	menu.classList = "menu";
	menu.id = "menu";

  // call food card
	foodCard(menu);
	foodCard(menu);
	foodCard(menu);
	foodCard(menu);
	foodCard(menu);
	foodCard(menu);
	foodCard(menu);
	foodCard(menu);
	foodCard(menu);
	foodCard(menu);
	foodCard(menu);
	foodCard(menu);

	return menu;
}

// Create menu food card
function foodCard(menu) {
	const food = document.createElement("div");
	food.classList = "food";

	const foodImage = document.createElement("div");
	foodImage.classList = "food__image";
	const image = new Image();
	image.src = burger;
	image.alt = "food image";
	foodImage.appendChild(image);

	const heartIcon = document.createElement("span");
	heartIcon.classList = "heart-icon";
	createSvgIcon(heartIcon, mdiHeart);
	foodImage.appendChild(heartIcon);

	const foodDetails = document.createElement("div");
	foodDetails.classList = "flex food__details";

	const foodName = document.createElement("h2");
	foodName.classList = "food__name";
	foodName.textContent = "Double Cheese Potato Burger";

	const foodCategoryAndRating = document.createElement("div");
	foodCategoryAndRating.classList = "flex food__category-and-rating";
	const foodCategory = document.createElement("div");
	foodCategory.classList = "food__category";
	foodCategory.textContent = "Burger";

	const foodRating = document.createElement("span");
	const foodRatingImage = new Image();
	foodRatingImage.src = greyStar;
	foodRating.classList = "food__rating";

	const foodRatingFill = document.createElement("div");
	foodRatingFill.classList = "food__rating--fill";
	foodRating.append(foodRatingImage, foodRatingFill);

	const foodReview = document.createElement("div");
	foodReview.classList = "food__review";
	foodReview.textContent = "2,144 Reviews";
	foodCategoryAndRating.append(foodCategory, foodRating, foodReview);

	const foodCaloriesAndType = document.createElement("div");
	foodCaloriesAndType.classList = "flex food__calories-and-type";
	const fireIcon = document.createElement("span");
	fireIcon.classList = "fire-icon";
	createSvgIcon(fireIcon, mdiFire);
	const foodCalories = document.createElement("div");
	foodCalories.classList = "food__calories";
	foodCalories.textContent = "220 - 28- Kcal";

	const foodType = document.createElement("div");
	foodType.classList = "food__type";
	foodType.textContent = "Veg";
	foodCaloriesAndType.append(fireIcon, foodCalories, foodType);

	const foodPriceAndCounter = document.createElement("div");
	foodPriceAndCounter.classList = "flex food__price-and-counter";
	const foodPrice = document.createElement("div");
	foodPrice.classList = "food__price";
	foodPrice.textContent = "5.99$";

	const foodCounter = document.createElement("div");
	foodCounter.classList = "food__counter flex";
	const foodCounterAdd = document.createElement("button");
	foodCounterAdd.textContent = "+";
	foodCounterAdd.classList = "btn btn-counter";
	const foodCounterDisplay = document.createElement("input");
	foodCounterDisplay.value = "0";
	const foodCounterMinus = document.createElement("button");
	foodCounterMinus.textContent = "−";
	foodCounterMinus.classList = "btn btn-counter";
	foodCounter.append(foodCounterMinus, foodCounterDisplay, foodCounterAdd);

	foodPriceAndCounter.append(foodPrice, foodCounter);

	foodDetails.append(
		foodName,
		foodCategoryAndRating,
		foodCaloriesAndType,
		foodPriceAndCounter
	);

	food.append(foodImage, foodDetails);
	menu.appendChild(food);
}

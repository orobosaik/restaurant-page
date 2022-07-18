import burger from "./menu/burger.jpg";
import greyStar from "./menu/grey-star.svg";
import foodImg from "./home/food.jpg";
import Logo from "./page-load/logo.png";


export { burger, greyStar, foodImg, Logo }

// Create svg element with icon path
export function createSvgIcon(node, mdiIcon) {
	const iconSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	const iconPath = document.createElementNS(
		"http://www.w3.org/2000/svg",
		"path"
	);

	iconSvg.classList.add("svg-icon");
	iconSvg.setAttribute("fill", "none");
	iconSvg.setAttribute("viewBox", "0 0 24 24");
	iconSvg.setAttribute("stroke", "currentColor");
	iconPath.setAttribute(
    "d", mdiIcon);

	iconSvg.appendChild(iconPath);

	return node.appendChild(iconSvg);
}
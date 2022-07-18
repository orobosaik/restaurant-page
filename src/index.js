import { header, main, footer } from "./page-load.js";
import { renderHome } from "./home.js";
import renderMenu from "./menu.js";
import renderContact from "./contact.js";
import "./style.css";

// Render the pages
header();
main(renderHome());
footer();

// Change the view between home, menu and contact
function changeView(e) {
	let id = e.target.id;
	let homeBtn = document.querySelector("#btn-home");
	let menuBtn = document.querySelector("#btn-menu");
	let contactBtn = document.querySelector("#btn-contact");
	let prev = document.querySelector("#main");
	const header = document.querySelector(".header");

	if (id === "btn-home") {
		removeActiveNav(); // remove active styling
		homeBtn.classList.add("active"); // add active style
		prev.remove(); // remove previous main element
		main(renderHome()); // add new main element
		header.scrollIntoView({ behavior: "smooth" }, true); // Scroll to the top page in every change
	} else if (id === "btn-menu" || id === "btn-hero") {
		removeActiveNav();
		menuBtn.classList.add("active");
		prev.remove();
		main(renderMenu());
		header.scrollIntoView({ behavior: "smooth" }, true);
	} else if (id === "btn-contact") {
		removeActiveNav();
		contactBtn.classList.add("active");
		prev.remove();
		main(renderContact());
		header.scrollIntoView({ behavior: "smooth" }, true);
	}
}

// Remove the styling for active nav
function removeActiveNav() {
	const navBtn = Array.from(document.querySelectorAll(".btn-nav"));
	navBtn.forEach((btn) => btn.classList.remove("active"));
}

// Buttons event listener
document.addEventListener("click", (e) => changeView(e));

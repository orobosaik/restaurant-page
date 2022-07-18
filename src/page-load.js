import { Logo } from "./assets/img/img";
export { header, main, footer};

// Header Section
const header = () => {
	const header = document.createElement("header");
	content.appendChild(header);
	header.classList = "header";

	const headerContainer = document.createElement("div");
	headerContainer.classList = "container header-container";
	header.appendChild(headerContainer);

	// Logo
	const logoContainer = document.createElement("div");
	headerContainer.appendChild(logoContainer);
	logoContainer.classList = "header__logo";

	const logoImg = new Image();
	logoImg.src = Logo;
	logoImg.alt = 'logo image'
	logoContainer.appendChild(logoImg);

	// Nav bar
	const nav = document.createElement("nav");
	headerContainer.appendChild(nav);
	nav.classList = "header__nav";

	// Nav bar buttons
	const navUl = document.createElement("ul");
	nav.appendChild(navUl);

	const homeBtn = document.createElement("li");
	homeBtn.classList = "btn btn-nav active";
	homeBtn.textContent = "Home";
	homeBtn.id = 'btn-home'

	const menuBtn = document.createElement("li");
	menuBtn.classList = "btn btn-nav";
	menuBtn.textContent = "Menu";
	menuBtn.id = 'btn-menu'

	const contactBtn = document.createElement("li");
	contactBtn.classList = "btn btn-nav";
	contactBtn.textContent = "Contact";
	contactBtn.id = 'btn-contact'

	navUl.append(homeBtn, menuBtn, contactBtn);

	// sticky Header
	let fixedNav = nav;
	//scroll logic
	window.addEventListener("scroll", () => {
		let h = logoContainer.getBoundingClientRect().height+ 10;

		if (window.scrollY > h) {
			let w = nav.getBoundingClientRect().height -10;
			fixedNav.classList.add("fixed");
			fixedNav.parentElement.style.marginBottom = w + "px";
		} else {
			fixedNav.classList.remove("fixed");
			fixedNav.parentElement.style.marginBottom = '';
		}
	});
};

// Main Section
const main = (data) => {
	const main = document.createElement("main");
	main.classList = "main";
	main.id = "main";

	const mainContainer = document.createElement('div');
	mainContainer.classList = 'main-container container'

	const header = document.querySelector('.header');
	header.after(main)
	main.appendChild(mainContainer)
	mainContainer.appendChild(data);
};

// Footer Section
const footer = () => {
	const footer = document.createElement("footer");
	footer.classList = "footer";
	content.appendChild(footer);

	const footerContainer = document.createElement("div");
	footerContainer.classList = "container footer-container";
	const owner = document.createElement("div");
	owner.classList = "footer__owner";
	owner.textContent = "All Rights Reserved Ik's Restaurant";

	const year = document.createElement("div");
	year.classList = "footer__year";
	year.textContent = "Copyright © 2022";

	footer.appendChild(footerContainer);
	footerContainer.append(owner, year);
};

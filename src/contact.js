import { mdiEmail, mdiMapMarkerRadius, mdiPhone } from "@mdi/js";
import { createSvgIcon } from "./assets/img/img";

export default function renderContact() {
	const contact = document.createElement("div");
	contact.classList = "contact";

	const contactInfo = document.createElement("div");
	contactInfo.classList = "contact__info flex";

  // create contact card
	const address = contactCard(
		"address",
		"Address",
		mdiMapMarkerRadius,
		"974 Hodkiewicz Rapid, Iowa City, Oregon"
  );
  // create phone card
  const phone = contactCard("phone", "Phone", mdiPhone, "498-349-6099 x4191");
  // create email card
	const email = contactCard(
		"email",
		"Email",
		mdiEmail,
		"example@ikrestaurant.com"
	);

	contactInfo.append(address, phone, email);

	contact.append(contactInfo, showOpenTime());
	return contact;
}

// Create card
function contactCard(cardType, cardTitleContent, iconName, cardTextContent) {
	const card = document.createElement("div");
	card.classList = `${cardType}`;
	const cardTitle = document.createElement("h2");
	cardTitle.textContent = `${cardTitleContent}`;

	const cardTextWrapper = document.createElement("div");
	cardTextWrapper.classList = `flex ${cardType}__text-wrapper`;
	const cardTextIcon = document.createElement("span");
	cardTextIcon.classList = `${cardType}-icon`;
	createSvgIcon(cardTextIcon, iconName);
	const cardText = document.createElement("p");
	cardText.textContent = cardTextContent;
	cardTextWrapper.append(cardTextIcon, cardText);

	card.append(cardTitle, cardTextWrapper);
	return card;
}

// Open time section
function showOpenTime() {
	const openTime = document.createElement("div");
	openTime.classList = "open-time";

	const h2 = document.createElement("h2");
	const p1 = document.createElement("p");
	const p2 = document.createElement("p");
	const p3 = document.createElement("p");

	function insertDays(node, span1Text, span2Text) {
		const span1 = document.createElement("span");
		span1.classList = "days";
		span1.textContent = span1Text;
		const span2 = document.createElement("span");
		span2.classList = "time";
		span2.textContent = span2Text;

		node.append(span1, span2);
	}

	h2.textContent = "We're here for you";
	insertDays(p1, "Monday - Friday:", "7 a.m - 9 p.m Central");
	insertDays(p2, "Saturday:", "8 a.m - 5 p.m Central");
	insertDays(p3, "Sunday:", "9 a.m - 5 p.m Central");

	openTime.append(h2, p1, p2, p3);
	return openTime;
}

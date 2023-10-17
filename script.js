let input = document.getElementById("email");
let button = document.querySelector("button");
let allDiv = document.querySelector(".all");
let subDiv = document.querySelector(".sub");
let error = document.querySelector(".all .error");
let dismiss = document.querySelector(".dismiss");

button.addEventListener("click", submitButton);
window.addEventListener("resize", updateImageSource);

function submitButton(e) {
	e.preventDefault(); // Prevent form submission and page reload
	if (input.value === "" || input.value !== "ash@loremcompany.com") {
		// Input is empty, add the "input-empty" class and display the error
		input.classList.add("input-empty");
		error.style.display = "block";
	} else if (input.value === "ash@loremcompany.com") {
		// Valid email address, hide the "Stay Updated" div and show the "Thanks for Subscribing" div
		allDiv.style.display = "none";
		subDiv.style.display = "flex";
	}
}

dismiss.addEventListener("click", () => {
	subDiv.style.display = "none";
});

// Function to change the image source based on screen width
function updateImageSource() {
	const imageElement = document.getElementById("myImage");

	if (window.innerWidth < 768) {
		imageElement.src = "/assets/images/illustration-sign-up-mobile.svg";
	} else {
		imageElement.src = "/assets/images/illustration-sign-up-desktop.svg";
	}
}

// Call the function initially to set the correct image source
updateImageSource();

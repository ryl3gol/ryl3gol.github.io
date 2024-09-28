const myImage = document.querySelector("img");

myImage.onclick = () => {
	const mySrc = myImage.getAttribute("src");
	if (mySrc === "https://s3.amazonaws.com/files.d20.io/marketplace/248506/G5ufSQ1yTocG37-dJsGEMQ/max.jpg"){
		myImage.setAttribute("src", "https://s3.amazonaws.com/files.d20.io/images/148473649/MUZKRvqLQmMpzlQP8VjBTA/max.jpg");
	} else {
		myImage.setAttribute("src", "https://s3.amazonaws.com/files.d20.io/marketplace/248506/G5ufSQ1yTocG37-dJsGEMQ/max.jpg");
	}
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
	const myName = prompt("Please enter your name.");
	if (!myName) {
		setUserName();
	} else {
		localStorage.setItem("name", myName);
		myHeading.textContent = `Welcome to Delethon, ${myName}`;
	}
}

if (!localStorage.getItem("name")) {
	setUserName();
} else {
	const storedName = localStorage.getItem("name");
	myHeading.textContent = `Welcome to Delethon, ${storedName}`;
}

myButton.onclick = () => {
	setUserName();
};
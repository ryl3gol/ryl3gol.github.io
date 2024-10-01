const myImage = document.querySelector("img");

myImage.onclick = () => {
	const mySrc = myImage.getAttribute("src");
	if (mySrc === "images/Delethon_Map.jpg"){
		myImage.setAttribute("src", "images/FoF_Cover.jpg");
	} else {
		myImage.setAttribute("src", "images/Delethon_Map.jpg");
	}
};
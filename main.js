function update() {
	document.getElementById("img_container").style.top = "15%";
	document.getElementById("img_description").style.top = "45%";
	var toremove = document.getElementById("img_button");
	toremove.parentNode.removeChild(toremove);
	var new_description = document.createElement("div");
	new_description.style.backgroundColor = "aliceblue";
	new_description.style.color = "Black";
	new_description.style.position = "absolute";
	new_description.style.top = "60%";
	new_description.style.left = "35%";
	new_description.style.width = "30%";
	new_description.style.height = "20%";
	new_description.setAttribute("id","new_description");
	document.getElementById("id_container").appendChild(new_description);
	var paragraph = document.createElement("p");
	document.getElementById("new_description").appendChild(paragraph);
	document.getElementById("new_description").firstChild.setAttribute("id", "paragraph_description");
	document.getElementById("paragraph_description").textContent = description;
}

var description = "I am a student at the Faculty of Electrical Engineering in Osijek, Croatia currently working on my masters degree in computer engineering. My interests include front-end development and data visualization using D3.js - Data Driven Documents, JavaScript library.";
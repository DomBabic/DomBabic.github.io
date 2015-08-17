function update()
{
    document.getElementById("content_holder").style.WebkitAnimation = "update 1s forwards";
    var toremove = document.getElementById("img_button");
	toremove.parentNode.removeChild(toremove);
    var new_description = document.createElement("div");
    new_description.style.opacity = 0;
    new_description.setAttribute("id","new_description");
    document.getElementById("content_holder").appendChild(new_description);
    var paragraph = document.createElement("p");
	document.getElementById("new_description").appendChild(paragraph);
	document.getElementById("new_description").firstChild.setAttribute("id", "paragraph_description");
	document.getElementById("paragraph_description").textContent = description;
    document.getElementById("new_description").style.WebkitAnimation = "update_text 1s forwards";
}

var description = "I am a student at the Faculty of Electrical Engineering in Osijek, Croatia currently working on my masters degree in computer engineering. My interests include front-end development and data visualization using D3.js - Data Driven Documents, JavaScript library.";
var i = 0;
var img_array_main = ["https://scontent-vie1-1.xx.fbcdn.net/hphotos-xtp1/v/t1.0-9/s720x720/10003119_294288357395090_552386787_n.jpg?oh=0263a5b06a52be627d8f09ec7d79ff73&oe=55F5FAA1","https://scontent-vie1-1.xx.fbcdn.net/hphotos-ash2/v/t1.0-9/528298_251474151676511_1359849458_n.jpg?oh=7a77b080d0d919478dda4839698a9894&oe=563417EC", "https://scontent-vie1-1.xx.fbcdn.net/hphotos-xtp1/v/t1.0-9/11221783_480827942074463_3323054522344897332_n.jpg?oh=f10bfe7b2bfd77fc6942c9c413594d9d&oe=56239A26"];

document.getElementById("img_container").style.backgroundImage = "url(" + img_array_main[i] + ")";
document.getElementById("img_container").style.WebkitAnimation = "fadein 2s forwards";
setInterval(next_img, 5000);

function next_img()
{
	document.getElementById("img_container").style.WebkitAnimation = "fadeout 1s forwards";

		if(i == 2)
		{
			i = 0;
			document.getElementById("img_container").style.backgroundImage = "url(" + img_array_main[i] + ")";
			document.getElementById("img_container").style.WebkitAnimation = "fadein 2s forwards";
		}
		else
		{
			i++;
			document.getElementById("img_container").style.backgroundImage = "url(" + img_array_main[i] + ")";
			document.getElementById("img_container").style.WebkitAnimation = "fadein 2s forwards";
		}

}
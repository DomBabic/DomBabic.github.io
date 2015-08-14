var i = 0;
var img_array = ["https://scontent-vie1-1.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/11046278_480656008758323_5716920360418460252_n.jpg?oh=f92b38db77d4ee26dc14a140f7841321&oe=561F48CA","https://scontent-mxp1-1.xx.fbcdn.net/hphotos-xft1/t31.0-8/11121625_481378365352754_2315564641860893900_o.jpg","https://scontent-vie1-1.xx.fbcdn.net/hphotos-xta1/t31.0-8/11537620_480647815425809_1147277891441398608_o.jpg","https://scontent-vie1-1.xx.fbcdn.net/hphotos-xtf1/t31.0-8/10582944_353118171512108_8538295755954475572_o.jpg"];

var img_description = ["I was born on 2nd of February in 1993. I grew up in Ivankovo, Croatia - a small town where I had attended elementary school. I went to highschool in Vinkovci, which required me to travel every day. Soon after highschool I enrolled in Faculty of Electrical Engineering and moved to Osijek where I currently reside.", "Throughout my life I have spent countless hours playing video games. I have an extensive video game library which keeps expanding. My favourite genre, be it in video games or books, is fantasy closely followed by science fiction. I find video games to be relaxing, and considering the price at which games are being sold, it is possibly the cheapest hobby.", "I am also a great fan of comic book heroes and villains. Lately, thanks to Marvel and DC Comics, I have had a lot of movies to watch. Apart from movies, I also follow certain superhero series such as Arrow and The Flash which are based on DC superheroes Oliver Queen aka Green Arrow and Barry Allen aka Flash.", "Considering that I am a huge fan of science fiction, I enjoyed watching Star Trek and Stargate series. Apart from those two series I also watch Doctor Who, which I absolutely adore. I was extremely happy to play games based on Star Trek universe, one of which was Star Trek Online."];

var img_element = document.createElement("img");
img_element.setAttribute("id", "img_id");
img_element.setAttribute("src", img_array[i]);
document.getElementById("image_frame").appendChild(img_element);
document.getElementById("img_id").style.WebkitAnimation = "fadein 2s forwards";
document.getElementById("img_description_pl").textContent = img_description[0];
document.getElementById("img_description_pl").style.WebkitAnimation = "fadein 2s forwards";

function next(a)
{
	document.getElementById("img_id").style.WebkitAnimation = "fadeout 1s forwards";
	document.getElementById("img_description_pl").style.WebkitAnimation = "fadeout 1s forwards";
	setTimeout(function change()
	{
		if(i == 3)
		{
			i = 0;
			img_element.setAttribute("src", a[i]);
			document.getElementById("img_description_pl").textContent = img_description[i];
			document.getElementById("img_description_pl").style.WebkitAnimation = "fadein 2s forwards";
			document.getElementById("img_id").style.WebkitAnimation = "fadein 2s forwards";
		}
		else
		{
			i++;
			img_element.setAttribute("src", a[i]);
			document.getElementById("img_description_pl").textContent = img_description[i];
			document.getElementById("img_description_pl").style.WebkitAnimation = "fadein 2s forwards";
			document.getElementById("img_id").style.WebkitAnimation = "fadein 2s forwards";
		}
	} , 100);
}

function previous(a)
{
	document.getElementById("img_id").style.WebkitAnimation = "fadeout 1s forwards";
	document.getElementById("img_description_pl").style.WebkitAnimation = "fadeout 1s forwards";
	setTimeout(function change()
	{
		if(i == 0)
		{
			i = 3;
			img_element.setAttribute("src", a[i]);
			document.getElementById("img_description_pl").textContent = img_description[i];
			document.getElementById("img_description_pl").style.WebkitAnimation = "fadein 2s forwards";
			document.getElementById("img_id").style.WebkitAnimation = "fadein 2s forwards";
		}
		else
		{
			i--;
			img_element.setAttribute("src", a[i]);
			document.getElementById("img_description_pl").textContent = img_description[i];
			document.getElementById("img_description_pl").style.WebkitAnimation = "fadein 2s forwards";
			document.getElementById("img_id").style.WebkitAnimation = "fadein 2s forwards";
		}
	} , 100);
}
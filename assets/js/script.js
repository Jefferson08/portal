
var slideItem = 0;

window.onload = function() {


	setInterval(passarSlide, 3000);

	var slidewidth = document.getElementById("slideshow").offsetWidth;
	var objs = document.getElementsByClassName("slide");

	for (var i = 0; i <= 3; i++){
		objs[i].style.width = slidewidth +"px";
	}

	document.getElementsByClassName("bolinha")[0].style.backgroundColor = "blue";
}

function passarSlide(){
	var slidewidth = document.getElementById("slideshow").offsetWidth;
	var objs2 = document.getElementsByClassName("bolinha");

	console.log(slideItem);
	console.log(slidewidth);

	if (slideItem === 0) {
			document.getElementsByClassName("slideshow_area")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
			objs2[0].style.backgroundColor = "blue";
			objs2[1].style.backgroundColor = "red";
			objs2[2].style.backgroundColor = "red";
			objs2[3].style.backgroundColor = "red";

			slideItem++;

		} else if (slideItem === 1) {
			document.getElementsByClassName("slideshow_area")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
			objs2[0].style.backgroundColor = "red";
			objs2[1].style.backgroundColor = "blue";
			objs2[2].style.backgroundColor = "red";
			objs2[3].style.backgroundColor = "red";

			slideItem++;

		} else if (slideItem === 2) {
			document.getElementsByClassName("slideshow_area")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
			objs2[0].style.backgroundColor = "red";
			objs2[1].style.backgroundColor = "red";
			objs2[2].style.backgroundColor = "blue";
			objs2[3].style.backgroundColor = "red";

			slideItem++;

		} else if (slideItem === 3) {
			document.getElementsByClassName("slideshow_area")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
			objs2[0].style.backgroundColor = "red";
			objs2[1].style.backgroundColor = "red";
			objs2[2].style.backgroundColor = "red";
			objs2[3].style.backgroundColor = "blue";

			slideItem = 0;

		}

}

function mudarSlide(pos){
	slideItem = pos;
	var slidewidth = document.getElementById("slideshow").offsetWidth;

	document.getElementsByClassName("slideshow_area")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";

}

function toggleMenu(){

	var menu = document.getElementById("menu");

	if (menu.style.display == 'none' || menu.style.display == '') {
		menu.style.display = "block";
	} else {
		menu.style.display = "none";
	}
}






function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

//side-nav-bar//

$(document).ready(function(){

	$('div.dropdown').each(function() {
		var $dropdown = $(this);

		$("a.dropdown-link", $dropdown).click(function(e) {
			e.preventDefault();
			$div = $("div.dropdown-container", $dropdown);
			$div.toggle();
			$("div.dropdown-container").not($div).hide();
			return false;
		});
	});


myShow = w3.slideshow(".maincontent", 0);
musicShow = w3.slideshow(".music", 0);



});










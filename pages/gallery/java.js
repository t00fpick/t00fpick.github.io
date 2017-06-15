

$('.vidbtn').click(function () {
	$('.cont-vid').toggle(500);

})

$('.musicbtn').click(function () {
	$('.con-music').toggle(1000);

})

$('.keednbtn').click(function () {
	$('.con-keedn').toggle(1000);
	
})

$('.bestbtn').click(function () {
	$('.con-best').toggle(1000);

})

function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

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

	$('html').click(function(){
		$("div.dropdown-container").hide();
	});

});





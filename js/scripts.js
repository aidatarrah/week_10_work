

/*
$(document).ready(function(){
			$("body").hover(function(){
			$("#overlay").toggle('slow');
      $("h1").toggle('slow');
			});
	});
*/
/*
  $(document).ready(function(){
    $(".first").hover(function(){
      $(this).html("url(img/001-about.jpg)");
    }, function(){
      $(this).html("url(img/project-001.jpg)");
    });
  });



  $(document).ready(function(){
  			$(".first").hover(function(){
  			$("#overlay").toggle('slow');
        $("h1").toggle('slow');
  			});
  	});
/*
    jQuery(function() {

let my_switch = false;

	$('#my_button').hover(function () {

	if (my_switch == false) {
		my_switch = true;
	$('#my_image').attr('src', 'images/kitten.png');
} else {
	my_switch = false;
	$('#my_image').attr('src', 'images/puppy.png');
}

  });

});

*/

jQuery(function() {

let my_switch = false;

$('.first').hover(function () {

/* first */
if (my_switch == false) {
my_switch = true;
$('.firstProject').attr('src', 'img/001-about.jpg');
} else {
my_switch = false;
$('.firstProject').attr('src', 'img/001.jpg');
}

});

/* second */

$('.second').hover(function () {

if (my_switch == false) {
my_switch = true;
$('.secondProject').attr('src', 'img/002-about.jpg');
} else {
my_switch = false;
$('.secondProject').attr('src', 'img/002.jpg');
}

});

/* third */

$('.third').hover(function () {

if (my_switch == false) {
my_switch = true;
$('.thirdProject').attr('src', 'img/003-about.jpg');
} else {
my_switch = false;
$('.thirdProject').attr('src', 'img/003.jpg');
}

});

});

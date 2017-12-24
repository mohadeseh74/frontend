
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 75) {
    $('.bottomMenu').slideDown();
  } else {
    $('.bottomMenu').slideUp();
  }
});
$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});
});
$(document).ready(function(){
	$('.open-1').click(function(){
		$('#nav-icon3').toggleClass('open');
	});
});
$(document).ready(function(){
	$('.open-2').click(function(){
		$('#nav-icon3').toggleClass('open');
	});
});
$(document).ready(function(){
	$('.open-3').click(function(){
		$('#nav-icon3').toggleClass('open');
	});
});
$(document).ready(function(){
	$('.open-4').click(function(){
		$('#nav-icon3').toggleClass('open');
	});
});
$(document).ready(function(){
	$('.open-5').click(function(){
		$('#nav-icon3').toggleClass('open');
	});
});

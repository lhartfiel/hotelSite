var homeHover = function(){
	$('.homeImg').on('mouseleave', function(){
		$('.overlayBody').fadeOut();
		$(this).removeClass('imgOverlay');
		
	});
	$('.homeImg').on('mouseenter', function(){
		$(this).addClass('imgOverlay').fadeIn().find('p').addClass('overlayBody').fadeIn(800);
		});
};

var roomSlide = function(){

	$('.rooms').each(function(){
		$(this).on('click', '.plus', function(){
			$(this).parent().parent().parent().addClass('ImgSection').next().slideDown(1500);
			$(this).hide().next().show().on('click', function(){
				$(this).parent().parent().parent().next().slideUp(1500).previous().removeClass('ImgSection');
			})
		});
		$(this).on('click', '.minus', function(){
			$('.minus').hide();
			$('.plus').show();
		});
	});
};

var pickDate = function(){
    $( "#datepicker" ).datepicker();
    $("#datepicker2").datepicker();
}

$(document).ready(function(){
	$('.overlay').fadeIn(2100);
	homeHover();
	roomSlide();
	pickDate();
});
	

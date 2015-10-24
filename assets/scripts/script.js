// function showMetrics(){
// 	window.setTimeout(function(){
// 		$('#fun-title').animate({
// 			'top' : '0',
// 			'text-align': 'left',
// 			'opacity':'0.5'
// 		}, 400);
// 	}, 1000)
// }

var menuClosed = false;


function toggleMenu(){
	if (menuClosed){
		menuClosed = false;
		$('#page').finish().animate({
			'margin-left':'0'
		}, 500);
		$('.menu-toggle-btn').finish().animate({
			'left':'420px'
		}, 500);
		$('.side-menu').finish().animate({
			'left':'0'
		}, 500);
	}else{
		menuClosed = true;
		$('#page').animate({
			'margin-left':'-420px'
		}, 500);
		$('.menu-toggle-btn').finish().animate({
			'left':'0'
		}, 500);
		$('.side-menu').finish().animate({
			'left':'-420px'
		}, 500);
	}

}

function transform(){
	$('body').css('overflow','hidden');
	$('.transform-rotate-img').animate({  borderSpacing: 360 }, {
	    step: function(now,fx) {
	      $(this).css('-webkit-transform','rotate('+now+'deg)');
	      $(this).css('-moz-transform','rotate('+now+'deg)');
	      $(this).css('transform','rotate('+now+'deg)');
	    },
	    duration:2000,
		complete: function(){
			$('.header-image-top').show();
			$('.header-image-bottom').show();
			$('.header-image').hide();
			$('.header-image-top').animate({
				'margin-top': '-'+$(window).height()+'px'
			}, 2000);
			$('.version-gap').animate({
				'height': 2*$(window).height()+'px'
			}, 2000, function(){
				$('.paper-container').fadeOut('slow');
				$('.fun-version').fadeIn('slow', function(){
					// showMetrics();
				});
				// $('body').css('overflow','auto');

			});
		}
	},'linear' );
}

(function(){
	// $('#transform-btn').click(function(){
	// 	transform();
	// });

	$('.fun-version').fadeIn();
	$('.menu-toggle-btn').click(function(){
		toggleMenu();
	});
}());
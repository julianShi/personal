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
			'left':'220px'
		}, 500);
		$('.side-menu').finish().animate({
			'left':'0'
		}, 500);
	}else{
		menuClosed = true;
		$('#page').animate({
			'margin-left':'-220px'
		}, 500);
		$('.menu-toggle-btn').finish().animate({
			'left':'0'
		}, 500);
		$('.side-menu').finish().animate({
			'left':'-220px'
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

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

(function(){
	// $('#transform-btn').click(function(){
	// 	transform();
	// });

	$('.fun-version').fadeIn();
	$('.menu-toggle-btn').click(function(){
		toggleMenu();
	});

	$('#timeline-reset').click(function(){
		$('.collapse').collapse('hide');
		$('li.timelineData').finish().slideDown('fast');
		$('#timeline-navigator').html('');
	});
	$('.menu-btn').each(function(){
		$(this).click(function(){
			if (typeof $(this).data('class') !== 'undefined'){
				var target = $(this).data('class');
				$('li.timelineData').finish().slideUp('fast');
				$('li.timelineData'+target).finish().slideDown('fast');
				$('.collapse'+target).collapse('show');
				if ($(this).data('title')){
					$('#timeline-navigator').html(' > ' + $(this).data('title'));
				}else{
					$('#timeline-navigator').html('');
				}
			}
			scrollToAnchor('timeline');
		});
	});
}());

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
				'margin-top': '-'+$(window).height()/2+'px'
			}, 2000);
			$('.version-gap').animate({
				'height': $(window).height()+'px'
			}, 2000, function(){
				$('.paper-container').fadeOut('slow');
				$('.fun-version').fadeIn('slow', function(){
					initFunVersion();
					$('body').css('overflow','auto');
					// showMetrics();
				});

			});
		}
	},'linear' );
}

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

function jumpInRecurse(list, i){
		console.log(list[i]);
	if (list[i]){
		$(list[i]).animate({
			'font-size': '40px'
		}, 300);
		window.setTimeout(function(){
			jumpInRecurse(list, i+1);
		}, 150);
	}
}

function initFunVersion(){
	$('.fun-version').fadeIn('fast',function(){
		window.setTimeout(function(){
			toggleMenu();
		}, 1000);
	});
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
				scrollToAnchor('timeline');
			}
		});
	});

	$('#profile-btn').click(function(){
		scrollToAnchor('profile');
	});
	$('#contact-btn').click(function(){
		scrollToAnchor('contact');
		$('.contact-links').children().each(function(){
			$(this).css('font-size', 0);
		});
		window.setTimeout(function(){
			jumpInRecurse($('.contact-links').children(), 0);
		}, 500);
	});
}

(function(){
	$('body').css('overflow','hidden');
	$('#transform-btn').click(function(){
		transform();
	});
}());

document.body.onload = function(){
	setTimeout(function(){
		var preloader = document.getElementById('page-preloader');
		if(!preloader.classList.contains('done')){
			preloader.classList.add('done');
		}
	}, 470);
}

$(document).ready(function(){

// tabs for projects
	$('.panel__link').on('click', function(e){
		e.preventDefault();

		var item = $(this).closest('.panel'),
				contentItem = $('.project__content'),
				itemPosition = item.index();

		contentItem.eq(itemPosition)
			.addClass('active').siblings().removeClass('active');
	});

// to open current project

	$('.panel__link').on('click', function(){
		if($('.panel').hasClass('open')){

		} else {
			$('.panels').css('margin-top', '0px');
			$(this).parent().addClass('open').siblings().addClass('close');
			$(this).children().hide();
			$('.panel__content-open').fadeIn('1000');
			$('.project-description-wrapper').slideDown();
			$('.project-description').slideDown();
		}
	});


// scroll to project
/*	$('.panel').on('click', function(e){
		e.preventDefault();
		var scroll_el = $(this).attr('data-href');
		if ($(scroll_el).length != 0) {
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top + 30}, 500);
		}
		return false;
	});*/

// parallax for project

	$(window).scroll(function(){
		var st = $(this).scrollTop();

		$('.project-description').css({
			'transform' : 'translate(0%,-' + st/100 + '%'
		});

		$

/*		$('.panel').css({'top': -$(window).scrollTop()/3});*/
	});


// read more text

	$('.read-more').on('click', function(e){
		e.preventDefault();
		$('.read-more-wrapper').slideDown();
		$(this).hide();
	})

// back to all btn

	$('.btn-back').on('click',function(){
		$('.panels').css('margin-top', '89px');
		$('.panel').removeClass('open').removeClass('close');
		$('.panel__content-open').hide();
		$('.panel__content').show();
		$('.project-description-wrapper').slideUp();
		$('.project-description').slideUp();
	})

if($('.panel').hasClass('open')){
	$('.panel__content').hide();
}
// next project btn

	$('.btn-next').on('click', function(){
		$('.panel.open').removeClass('open').addClass('close').next().addClass('open').removeClass('close');
		if($('.panel').hasClass('open')){
			$('.panel__content').hide();
		}
		
	});

});
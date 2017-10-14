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
		$('.panels').css('margin-top', '0px');
		$(this).parent().addClass('open').siblings().addClass('close');
		$(this).children().hide();
		$('.project-description').slideDown();

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
			'transform' : 'translate(0%,-' + st/10 + '%'
		})

	});

});
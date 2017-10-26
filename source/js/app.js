document.body.onload = function(){
	setTimeout(function(){
		var preloader = document.getElementById('page-preloader');
		if(!preloader.classList.contains('done')){
			preloader.classList.add('done');
		}
	}, 4700);
}

$(document).ready(function(){

// menu btn

	$('.menu__icon').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('menu__icon-active');
		$('.menu').toggleClass('menu-active');
	});

// tabs for projects
	$('.panel__link').on('click', function(e){
		e.preventDefault();

		var item = $(this).closest('.panel'),
				contentItem = $('.project__content'),
				itemPosition = item.index();

		if($('.panel').hasClass('open')){

		} else {
			contentItem.eq(itemPosition)
			.addClass('active').siblings().removeClass('active');
		}
	});

// to open current project

	$('.panel__link').on('click', function(){
		if($('.panel').hasClass('open')){

		} else {
			$('.panels').css('margin-top', '0px');
			$(this).parent().addClass('open').siblings().addClass('close');
			$('.panel__link').children().hide();
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
		if($('.panel').last().hasClass('open')){
			$('.panel').last().addClass('close').removeClass('open');
			$('.panel').first().addClass('open').removeClass('close');
		} else {
			$('.panel.open').removeClass('open').addClass('close').next().addClass('open').removeClass('close');
		}
		if($('.panel').hasClass('open')){
			$('.panel__content').hide();
		}
		if($('.project__content').last().hasClass('active')){
			$('.project__content').last().removeClass('active');
			$('.project__content').first().addClass('active');
		} else {
			$('.project__content.active').removeClass('active').next().addClass('active');
		}
	});

// open modal form
	$('.btn-big').on('click',function(e){
		e.preventDefault();
		$('.modal-form').addClass('_show');
	});

// close modal form
	$('.btn-form-close').on('click',function(e){
		e.preventDefault();
		$('.modal-form').removeClass('_show');
	});

// form confirm

	$('.btn-submite').on('click', function(e){
		e.preventDefault();

		$('.form-confirm-wrapper').fadeIn();
		setTimeout(function(){
			$('.form-confirm-wrapper').fadeOut();
		}, 8000);
		setTimeout(function(){
			$('.field-container input[type="text"]').val('');
			$('.input-placeholder').show();
		}, 4000);
	});

	$('.input-placeholder').on('click', function(){
		$(this).hide();
		$(this).next().focus();
	});
	$('.form-input').on('click', function(){
		let $this = $(this);

		$this.prev().hide();
		if($this.val()) {
			$this.show();
		} else {
			$this.hise();
		}
	});


});
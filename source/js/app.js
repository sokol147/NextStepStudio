document.body.onload = function(){
	setTimeout(function(){
		var preloader = document.getElementById('page-preloader');
		if(!preloader.classList.contains('done')){
			preloader.classList.add('done');
		}
	}, 4700);
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

// to open single project
	$('.panel__link').on('click', function(){
		$(this).parent().addClass('open').siblings().addClass('close');
		$(this).children().hide();
	});

});
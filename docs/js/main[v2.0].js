$(function() {
	var slideMenu = false;
	var slideForm = false;
	if ( $(window).width() >= 320 &  $(window).width() < 1199) {
		$(".header__menu-button_icon").click(function(e) {
			e.preventDefault(e);
			if(slideMenu) {
				$(this).toggleClass('open');
		        $(".object__menu-slide-box").animate({left: '161vw'}, 300);
		        $(".object__contact-form").animate({left: '-100vw'}, 300);
		        $("body").toggleClass('open');
		        slideForm = false;
		        slideMenu = false;
		    } else {
		    	$(this).toggleClass('open');
		        $(".object__menu-slide-box").animate({left: '0'}, 300);
		        $("body").toggleClass('open');   
		        slideMenu = true;
		    }
		});
		$( ".object__contact-form_activator" ).click(function(e) {
    		e.stopPropagation();
			e.preventDefault();
	    	$(".object__contact-form").animate({left: '0vw'}, 300);
	        slideForm = true;
		});
	} else if ( $(window).width() > 1200) {   
		$(".header__menu-button_icon").click(function(e) {
			e.stopPropagation();
			e.preventDefault();
			if(slideMenu) {
				$(this).toggleClass('open');
		        $(".object__menu-slide-box").animate({left: '161vw'}, 300);
		        $(".object__contact-form").animate({left: '-61vw'}, 300);
		        $("body").toggleClass('open');
		        slideForm = false;
		        slideMenu = false;
		    } else {
		    	$(this).toggleClass('open');
		        $(".object__menu-slide-box").animate({left: '61vw'}, 300);
		        $("body").toggleClass('open');   
		        slideMenu = true;
		    }
		});
		$( ".object__contact-form_activator" ).click(function(e) {
    		e.stopPropagation();
			e.preventDefault();
	    	$(".object__contact-form").animate({left: '0vw'}, 300);
	        slideForm = true;
		});
		$(window).click(function() {
			if(slideMenu && slideForm) {
				e.stopPropagation();
	    	} else if (slideMenu) {
	    		$(".header__menu-button_icon").toggleClass('open');
		        $(".object__menu-slide-box").animate({left: '161vw'}, 300);
		        $(".object__contact-form").animate({left: '-61vw'}, 300);
		        $(".face-page__title_cases-menu, .face-page__title_cases-menu.fixed").toggleClass('open');
		        $("body").removeClass('open');
		        slideMenu = false;
	    	}
		});
	};
});




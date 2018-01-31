$(function() {
	var slideMenu = false;
	var slideForm = false;
	function removeOpen() {
		$("body, .face-page__title, .object__background-image, .footer, hr").removeClass('open');
		$(".logo-dark, .fb-dark, .vk-dark, .ins-dark").toggleClass('coverup');
		$(".logo, .fb, .vk, .ins").removeClass('coverup');
	}; 

	function addOpen() {
		$("body, .face-page__title, .object__background-image, .footer, hr").toggleClass('open');
		$(".logo, .fb, .vk, .ins").toggleClass('coverup');
		$(".logo-dark, .fb-dark, .vk-dark, .ins-dark").removeClass('coverup');
	}; 

	function formButton() {
    	$( ".object__contact-form_activator" ).click(function(e) {
    		e.stopPropagation();
			e.preventDefault();
	    	$(".object__contact-form").animate({left: '0vw'}, 200);
	        slideForm = true;
		});
	};

	function menuButtonMobile() {
		$(".header__menu-button_icon").click(function(e) {
			e.preventDefault(e);
			if(slideMenu) {
				$(this).removeClass('open');
		        $(".object__menu-slide-box").animate({left: '161vw'}, 200);
		        $(".object__contact-form").animate({left: '-100vw'}, 200);
		        $(".header, .header.scroll").removeClass('open');
		        slideForm = false;
		        slideMenu = false;
		    } else {
		    	$(this).toggleClass('open');
		        $(".object__menu-slide-box").animate({left: '0'}, 200);
		        $(".header, .header.scroll").addClass('open');
		        slideMenu = true;
		    }
		});
	};

	if ( $(window).width() >= 320 &  $(window).width() < 479) {
		menuButtonMobile();
		formButton();
	} else if ( $(window).width() > 375 & $(window).width() < 415) {
		menuButtonMobile();
		formButton();
	} else if ( $(window).width() > 416 & $(window).width() < 1199) {
		menuButtonMobile();
		formButton();
	} else if ( $(window).width() > 1200) {   
		$(".header__menu-button_icon").click(function(e) {
			e.stopPropagation();
			e.preventDefault();
			if(slideMenu) {
				$(this).removeClass('open');
		        $(".object__menu-slide-box").animate({left: '161vw'}, 200);
		        $(".object__contact-form").animate({left: '-61vw'}, 200);
		        $(".face-page__title_cases-menu, .face-page__title_cases-menu.fixed").removeClass('open');
		        removeOpen();
		        slideForm = false;
		        slideMenu = false;
		    } else {
		    	$(this).toggleClass('open');
		        $(".object__menu-slide-box").animate({left: '61vw'}, 200);
		        $(".face-page__title_cases-menu, .face-page__title_cases-menu.fixed").addClass('open');
		        addOpen();
		        
		        slideMenu = true;
		    }
		});
		formButton();
		$(window).click(function() {
			if(slideMenu && slideForm) {
				e.stopPropagation();
	    	} else if (slideMenu) {
	    		$(".header__menu-button_icon").removeClass('open');
		        $(".object__menu-slide-box").animate({left: '161vw'}, 200);
		        $(".object__contact-form").animate({left: '-61vw'}, 200);
		        $(".face-page__title_cases-menu, .face-page__title_cases-menu.fixed").removeClass('open');
		        removeOpen();
		        slideMenu = false;
	    	}
		});
	};
});




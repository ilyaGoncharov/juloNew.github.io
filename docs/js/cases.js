$(document).ready(function(){
	var development = true;
	var design = false;
	var marketing = false;
	if ( $(window).width() >= 320 &  $(window).width() < 479) {
	
	} else if ( $(window).width() > 375 & $(window).width() < 415) {
		
	} else if ( $(window).width() > 416 & $(window).width() < 1024) {
		
	} else if ( $(window).width() > 1200) {      
		$(".face-page__title_design-button").click(function() {
			$(".design").animate({left: '0vw'}, 600);
			$(".development").animate({left: '100vw'}, 600);
			$(".marketing").animate({left: '200vw'}, 600);
		});
		$(".face-page__title_development-button").click(function() {
			$(".design").animate({left: '-100vw'}, 600);
			$(".development").animate({left: '0vw'}, 600);
			$(".marketing").animate({left: '100vw'}, 600);
		});
		$(".face-page__title_marketing-button").click(function() {
			$(".design").animate({left: '-200vw'}, 600);
			$(".development").animate({left: '-100vw'}, 600);
			$(".marketing").animate({left: '0vw'}, 600);
		});

		/*$(".header__menu-button_icon").click(function(e) {
			e.preventDefault();
			if(slideMenu) {
				$(this).removeClass('open');
		        $(".face-page__title, .object__background-image, .footer__contacts").removeClass('open');
		        $(".logo-dark, .fb-dark, .vk-dark").toggleClass('coverup');
		        $(".logo, .fb, .vk").removeClass('coverup');
		        $(".object__menu-slide-box").animate({left: '161vw'}, 600);
		        $(".object__contact-form").animate({left: '-61vw'}, 600);
		        slideForm = false;
		        slideMenu = false;
		    } else {
		    	$(this).toggleClass('open');
		        $(".object__menu-slide-box").animate({left: '61vw'}, 600);
		        $(".face-page__title, .object__background-image, .footer__contacts").toggleClass('open');
		        $(".logo, .fb, .vk").toggleClass('coverup');
		        $(".logo-dark, .fb-dark, .vk-dark").removeClass('coverup');
		        slideMenu = true;
		    }
		});
		$( ".object__contact-form_activator" ).click(function(e) {
			e.preventDefault();
			if(slideForm) {
				$(".object__contact-form").animate({left: '-61vw'}, 600);
		        slideForm = false;
		    } else {
		    	$(".object__contact-form").animate({left: '0vw'}, 600);
		        slideForm = true;
		    }	
		});*/
	}
});

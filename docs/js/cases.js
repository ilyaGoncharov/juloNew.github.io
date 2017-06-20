$(document).ready(function() {
	/*$("#test").html('<object data="http://milyakov.com/"/>');*/
	if ( $(window).width() >= 320 &  $(window).width() < 479) {
		$(".face-page__title_design-button").click(function() {
			$(".face-page__title_development-button").removeClass('active');
			$(".face-page__title_marketing-button").removeClass('active');
			$(".face-page__title_design-button").toggleClass('active');
			$(".development").removeClass('open');
			$(".design").toggleClass('open');
			$(".marketing").removeClass('open');
			$('.wrapper').height($(window).height() + 1500);
		});
		$(".face-page__title_marketing-button").click(function() {
			$(".face-page__title_development-button").removeClass('active');
			$(".face-page__title_marketing-button").toggleClass('active');
			$(".face-page__title_design-button").removeClass('active');
			$(".development").removeClass('open');
			$(".design").removeClass('open');
			$(".marketing").toggleClass('open');
		    $('.wrapper').height($(window).height() + 1000);
		});
		$(".face-page__title_development-button").click(function() {
			$(".face-page__title_development-button").toggleClass('active');
			$(".face-page__title_marketing-button").removeClass('active');
			$(".face-page__title_design-button").removeClass('active');
			$(".development").toggleClass('open');
			$(".design").removeClass('open');
			$(".marketing").removeClass('open');
			$('.wrapper').height($(window).height() + 2000);			
		});

		$(".header").addClass('scroll');

		$(window).scroll(function() {
		    var height = $(window).scrollTop();
		    if (height >= 200) {
		    	$(".header").addClass('scrolled');
		    }
		    else if (height < 300) {
		    	$(".header").removeClass('scrolled');
		    }
		});

	}	else if ( $(window).width() > 375 & $(window).width() < 415) {
		$(".face-page__title_design-button").click(function() {
			$(".face-page__title_development-button").removeClass('active');
			$(".face-page__title_marketing-button").removeClass('active');
			$(".face-page__title_design-button").toggleClass('active');
			$(".development").removeClass('open');
			$(".design").toggleClass('open');
			$(".marketing").removeClass('open');
			$('.wrapper').height($(window).height() + 1500);
			
		});
		$(".face-page__title_marketing-button").click(function() {
			$(".face-page__title_development-button").removeClass('active');
			$(".face-page__title_marketing-button").toggleClass('active');
			$(".face-page__title_design-button").removeClass('active');
			$(".development").removeClass('open');
			$(".design").removeClass('open');
			$(".marketing").toggleClass('open');
		    $('.wrapper').height($(window).height() + 1000);
		   	
		});
		$(".face-page__title_development-button").click(function() {
			$(".face-page__title_development-button").toggleClass('active');
			$(".face-page__title_marketing-button").removeClass('active');
			$(".face-page__title_design-button").removeClass('active');
			$(".development").toggleClass('open');
			$(".design").removeClass('open');
			$(".marketing").removeClass('open');
			$('.wrapper').height($(window).height() + 2000);			
		});

		$(window).scroll(function() {
		    var height = $(window).scrollTop();
		    if (height >= 200) {
		    	$(".header").addClass('scrolled');
		    }
		    else if (height < 300) {
		    	$(".header").removeClass('scrolled');
		    }
		});
	}	else if ( $(window).width() > 416 & $(window).width() < 1199) {
		$(".face-page__title_design-button").click(function() {
			$(".face-page__title_development-button").removeClass('active');
			$(".face-page__title_marketing-button").removeClass('active');
			$(".face-page__title_design-button").toggleClass('active');
			$(".development").removeClass('open');
			$(".design").toggleClass('open');
			$(".marketing").removeClass('open');
			$('.wrapper').height($(window).height() + 1500);
		});
		$(".face-page__title_marketing-button").click(function() {
			$(".face-page__title_development-button").removeClass('active');
			$(".face-page__title_marketing-button").toggleClass('active');
			$(".face-page__title_design-button").removeClass('active');
			$(".development").removeClass('open');
			$(".design").removeClass('open');
			$(".marketing").toggleClass('open');
		    $('.wrapper').height($(window).height() + 1000);
		});
		$(".face-page__title_development-button").click(function() {
			$(".face-page__title_development-button").toggleClass('active');
			$(".face-page__title_marketing-button").removeClass('active');
			$(".face-page__title_design-button").removeClass('active');
			$(".development").toggleClass('open');
			$(".design").removeClass('open');
			$(".marketing").removeClass('open');
			$('.wrapper').height($(window).height() + 2000);
		});
		/*$(window).scroll(function() {
		    var height = $(window).scrollTop();
		    if (height > 600) {
		    	$(".header").addClass('scroll');
		    }
		    else if (height < 400) {
		    	$(".header").removeClass('scroll');
		    }
		});*/
	}	else if ( $(window).width() > 1200) {   
		$(".wrapper").height($(window).height() + 1000);
		var pagePosition = "development";
		$(".face-page__title_design-button").click(function() {
			$(".face-page__title_development-button").removeClass('active');
			$(".face-page__title_marketing-button").removeClass('active');
			$(".face-page__title_design-button").toggleClass('active');
			$(".development").animate({left: '-100vw'}, 400);
			$(".design").animate({left: '0vw'}, 400);
			$(".marketing").animate({left: '100vw'}, 400);
			$('.wrapper').height($(window).height() + 1500);
			pagePosition = "design";
			console.log(pagePosition);
			$(".cases-body__block-1, .cases-body__block-2, .cases-body__block-3, .tehnocor-img, .tc-img, .tehnocor-img-2, .tc-img-2").removeClass('scrolled');
			$.scrollify.instantMove(1);
			$(".cases-body__block-1, .tehnocor-img-2").addClass('scrolled');
		});
		$(".face-page__title_marketing-button").click(function() {
			$(".face-page__title_development-button").removeClass('active');
			$(".face-page__title_marketing-button").toggleClass('active');
			$(".face-page__title_design-button").removeClass('active');
			$(".development").animate({left: '-200vw'}, 400);
			$(".design").animate({left: '-100vw'}, 400);
			$(".marketing").animate({left: '0vw'}, 400);
		    $('.wrapper').height($(window).height() + 1000);
		    pagePosition = "marketing";
		    console.log(pagePosition);
		    $.scrollify.instantMove(1);
		    $(".cases-body__block-1, .cases-body__block-2, .cases-body__block-3, .tehnocor-img, .tc-img, .tehnocor-img-2, .tc-img-2").removeClass('scrolled');
			$.scrollify.instantMove(1);
			$(".cases-body__block-1, .st-img").addClass('scrolled');
		});
		$(".face-page__title_development-button").click(function() {
			$(".face-page__title_development-button").toggleClass('active');
			$(".face-page__title_marketing-button").removeClass('active');
			$(".face-page__title_design-button").removeClass('active');
			$(".development").animate({left: '0vw'}, 400);
			$(".design").animate({left: '100vw'}, 400);
			$(".marketing").animate({left: '200vw'}, 400);
			$('.wrapper').height($(window).height() + 2000);
			pagePosition = "development";
			console.log(pagePosition);
			$(".cases-body__block-1, .cases-body__block-2, .cases-body__block-3, .tehnocor-img, .tc-img, .tehnocor-img-2, .tc-img-2").removeClass('scrolled');
			$.scrollify.instantMove(1);
			$(".cases-body__block-1, .snabservice-img").addClass('scrolled');
		});
    	$(function() {
			$.scrollify({
				section : ".scroll",
				sectionName : "",
				interstitialSection : ".face-page",
				easing: "easeOutExpo",
				scrollSpeed: 600,
				offset : -100,
				scrollbars: true,
				standardScrollElements: ".face-page",
				setHeights: false,
				overflowScroll: true,
				updateHash: true,
				touchScroll: true,
				before:function(section) {
				},
				after:function(section) {
					if (pagePosition === "development") {
						console.log(section);
						if (section === 1) {
							$(".face-page__title_cases-menu").addClass('fixed');
			    			$(".header, .cases-body__block-1, .snabservice-img").addClass('scrolled');
			    			$(".cases-body__block-2, .tehnocor-img, .cases-body__block-3, .tc-img ").removeClass('scrolled');
						} else if (section === 2) {
			    			$(".cases-body__block-1, .snabservice-img").removeClass('scrolled');
			    			$(".header, .cases-body__block-2, .tehnocor-img").addClass('scrolled');
			    			$(".cases-body__block-3, .tcm-img").removeClass('scrolled');
						} else if (section === 3) {
			    			$(".cases-body__block-2, .tehnocor-img").removeClass('scrolled');
			    			$(".cases-body__block-3, .tcm-img").addClass('scrolled');
						} else if (section === 0) {
			    			$(".face-page__title_cases-menu").removeClass('fixed');
			    			$(".header").removeClass('scrolled');
						} else {
							$(".cases-body__block-3, .tcm-img").removeClass('scrolled');
						}
					} else if (pagePosition === "design") {
						if (section === 1) {
							$(".face-page__title_cases-menu").addClass('fixed');
			    			$(".header, .cases-body__block-1, .tehnocor-img-2").addClass('scrolled');
			    			$(".cases-body__block-2, .tcm-img-2").removeClass('scrolled');
			    			console.log(section);
						} else if (section === 2) {
			    			$(".cases-body__block-1, .tehnocor-img-2, .cases-body__block-3, .milyakov-img").removeClass('scrolled');
			    			$(".cases-body__block-2, .tcm-img-2").addClass('scrolled');
			    			console.log(section);
						} else if (section === 3) {
			    			$(".cases-body__block-2, .tcm-img-2").removeClass('scrolled');
							$(".cases-body__block-3, .milyakov-img").addClass('scrolled');
			    			console.log(section);
						} else if (section === 0) {
			    			$(".face-page__title_cases-menu").removeClass('fixed');
			    			$(".header").removeClass('scrolled');
			    			console.log(section);
						} else {
							$(".cases-body__block-1, .tehnocor-img-2").removeClass('scrolled');
							$(".cases-body__block-3, .milyakov-img").removeClass('scrolled');
							console.log(section);
						}
					} else if (pagePosition === "marketing") {
						if (section === 1) {
							$(".face-page__title_cases-menu").addClass('fixed');
			    			$(".header, .cases-body__block-1, .snabservice-img").addClass('scrolled');
			    			console.log(section);
						} else {
							$(".face-page__title_cases-menu").removeClass('fixed');
							$(".header, .cases-body__block-1, .snabservice-img").removeClass('scrolled');
							console.log(section);
						}
					}
				},
				afterResize:function() {},
				afterRender:function() {}
			});
		});
	} 
});



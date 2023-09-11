/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Sticky Header Js
03. HeaderHeight js
04. Add tag js
05. Common Js
06. Mobile Menu Js
07. Search js
08. Offcanvas Js
09. Body overlay Js
10. Back To Top Js
11. Mouse Custom js
12. Wow Js
13. Counter js
****************************************************/

(function ($) {
	"use strict";

	var windowOn = $(window);

	////////////////////////////////////////////////////
	// 01. PreLoader Js
	windowOn.on('load', function () {
		$("#loading").fadeOut(500);
	});


	
	////////////////////////////////////////////////////
	// 02. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();	
		if (scroll < 200) {
			$("#header-sticky").removeClass("tp-header-sticky");
		} else {
			$("#header-sticky").addClass("tp-header-sticky");
		}
	});
	

	////////////////////////////////////
	// 03. HeaderHeight js
	if ($('.tp-header-height').length > 0) {
		var headerHeight = document.querySelector(".tp-header-height");
			  
		var setHeaderHeight = headerHeight.offsetHeight;
			  
		$(".tp-header-height").each(function () {
			$(this).css({
				'height' : setHeaderHeight + 'px'
			});
		});
	}


	////////////////////////////////////
	// 04. Add tag 
	$('.tp-main-menu ul li a').each(function(){
		$(this).wrapInner("<span></span>");
		});



	////////////////////////////////////////////////////
	// 05. Common Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	$("[data-text-color]").each(function () {
		$(this).css("color", $(this).attr("data-text-color"));
	});

	$(".has-img").each(function () {
		var imgSrc = $(this).attr("data-menu-img");
		var img = `<img class="mega-menu-img" src="${imgSrc}" alt="img">`;
		$(this).append(img);

	});

	
	////////////////////////////////////////////////////
	// 06. Mobile Menu Js
	if($('.tp-main-menu-content').length && $('.tp-main-menu-mobile').length){
		let navContent = document.querySelector(".tp-main-menu-content").outerHTML;
		let mobileNavContainer = document.querySelector(".tp-main-menu-mobile");
		mobileNavContainer.innerHTML = navContent;
	
	
		let arrow = $(".tp-main-menu-mobile .has-dropdown > a");
	
		arrow.each(function () {
			let self = $(this);
			let arrowBtn = document.createElement("BUTTON");
			arrowBtn.classList.add("dropdown-toggle-btn");
			arrowBtn.innerHTML = "<i class='fa-regular fa-angle-right'></i>";
	
			self.append(function () {
			  return arrowBtn;
			});
	
			self.find("button").on("click", function (e) {
			  e.preventDefault();
			  let self = $(this);
			  self.toggleClass("dropdown-opened");
			  self.parent().toggleClass("expanded");
			  self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
			  self.parent().parent().children(".submenu").slideToggle();
			  
	
			});
	
		  });
	}


	////////////////////////////////////////////////////
	// 07. Search Js
	$(".search-open-btn").on("click", function () {
		$(".search-area").addClass("search-opened");
		$(".search-overlay").addClass("opened");
	});
	$(".search-close-btn").on("click", function () {
		$(".search-area").removeClass("search-opened");
		$(".search-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 08. Offcanvas Js
	$(".offcanvas-open-btn").on("click", function () {
		$(".offcanvas__area").addClass("offcanvas-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".offcanvas-close-btn").on("click", function () {
		$(".offcanvas__area").removeClass("offcanvas-opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 09. Body overlay Js
	$(".body-overlay").on("click", function () {
		$(".offcanvas__area").removeClass("offcanvas-opened");
		$(".tp-search-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});


	
	////////////////////////////////////////////////////
	// 10. Back To Top Js
	function back_to_top() {
		var btn = $('#back_to_top');
		var btn_wrapper = $('.back-to-top-wrapper');

		windowOn.scroll(function () {
			if (windowOn.scrollTop() > 300) {
				btn_wrapper.addClass('back-to-top-btn-show');
			} else {
				btn_wrapper.removeClass('back-to-top-btn-show');
			}
		});

		btn.on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, '300');
		});
	}
	back_to_top();


	//////////////////////////////////
	// 11. Mouse Custom Cursor
	function itCursor() {
        var myCursor = jQuery(".mouseCursor");
        if (myCursor.length) {
            if ($("body")) {
                const e = document.querySelector(".cursor-inner"),
                    t = document.querySelector(".cursor-outer");
                let n,
                    i = 0,
                    o = !1;
                (window.onmousemove = function(s) {
                    o ||
                        (t.style.transform =
                            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                        (e.style.transform =
                            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                        (n = s.clientY),
                        (i = s.clientX);
                }),
                $("body").on("mouseenter", "button, a, .cursor-pointer", function() {
                        e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
                    }),
                    $("body").on("mouseleave", "button, a, .cursor-pointer", function() {
                        ($(this).is("a", "button") &&
                            $(this).closest(".cursor-pointer").length) ||
                        (e.classList.remove("cursor-hover"),
                            t.classList.remove("cursor-hover"));
                    }),
                    (e.style.visibility = "visible"),
                    (t.style.visibility = "visible");
            }
        }
    }
    itCursor();

	$(".tp-cursor-point-area").on("mouseenter", function () {
		$(".mouseCursor").addClass("cursor-big");
	});

	$(".tp-cursor-point-area").on("mouseleave", function () {
		$(".mouseCursor").removeClass("cursor-big");
	});
	$(".tp-cursor-point-area").on("mouseleave", function () {
		$(".mouseCursor").removeClass("cursor-big");
	});


	////////////////////////////////////////////////////
	// Home One Hero Active
	var slider = new Swiper('.tp-hero-active', {
		slidesPerView: 4,
		spaceBetween: 10,
		loop: true,
		breakpoints: {
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});


	////////////////////////////////////////////////////
	// Home One Video Active
	var slider = new Swiper('.tp-video-play-active', {
		slidesPerView: 4,
		spaceBetween: 20,
		loop: true,
		breakpoints: {
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'650': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});


	////////////////////////////////////////////////////
	// Home Two criteria Active
	if ($('.tp-criteria-active').length > 0) {
		var slider = new Swiper('.tp-criteria-active', {
			slidesPerView: 4,
			spaceBetween: 30,
			loop: true,
			breakpoints: {
				'1700':{
					slidesPerView:4,
				},
				'1400':{
					slidesPerView:4,
				},
				'1200':{
					slidesPerView:3,
				},
				'767': {
					slidesPerView:3,
				},
				'576': {
					slidesPerView:2,
				},
				'0': {
					slidesPerView:1,
				},
				},
				// Navigation arrows
				navigation: {
					nextEl: ".criteria-button-next-1",
					prevEl: ".criteria-button-prev-1",
				},
			});
		}


	////////////////////////////////////////////////////
	// Home Two Movies Active
	if($('.tp-movies-active').length > 0){
		const slider = new Swiper('.tp-movies-active', {
			loop: true,
			slidesPerView: 5,
			spaceBetween: 30,
			breakpoints: {
				'1700':{
					slidesPerView:5,
				},
				'1400':{
					slidesPerView:4,
				},
				'1200':{
					slidesPerView:3,
				},
				'992':{
					slidesPerView:3,
				},
				'767': {
					slidesPerView:2,
				},
				'540': {
					slidesPerView:2,
				},
				'0': {
					slidesPerView:1,
				},
				},
			// scrollbar
			scrollbar: {
			el: ".tp-scrollbar",
			clickable: true,
			draggable: true,
			},
			});
		}


	////////////////////////////////////////////////////
	// Home Three Hero Active
	if($('.tp-hero-active-3').length > 0){
		const slider = new Swiper('.tp-hero-active-3', {
			loop: true,
			slidesPerView: 3,
			centeredSlides: true,
			breakpoints: {
				'1700':{
					slidesPerView:3,
				},
				'1400':{
					slidesPerView:3,
				},
				'1200':{
					slidesPerView:3,
				},
				'992':{
					slidesPerView:3,
				},
				'767': {
					slidesPerView:3,
				},
				'576': {
					slidesPerView:3,
				},
				'0': {
					slidesPerView:1,
				},
				},
			// scrollbar
			scrollbar: {
			el: ".tp-scrollbar-2",
			clickable: true,
			draggable: true,
			},
			});
		}


	////////////////////////////////////////////////////
	// Home Three categories Active
	if($('.tp-categories-active').length > 0){
		const slider = new Swiper('.tp-categories-active', {
			loop: true,
			slidesPerView: 4,
			spaceBetween: 30,
			breakpoints: {
				'1700':{
					slidesPerView:4,
				},
				'1400':{
					slidesPerView:4,
				},
				'1200':{
					slidesPerView:4,
				},
				'992':{
					slidesPerView:3,
				},
				'767': {
					slidesPerView:3,
				},
				'576': {
					slidesPerView:3,
				},
				'0': {
					slidesPerView:1,
				},
				},
			});
		}


	////////////////////////////////////////////////////
	// Home 3 testimonial Active
	if ($('.tp-testimonial-active').length > 0) {
		var slider = new Swiper('.tp-testimonial-active', {
			slidesPerView: 2,
			spaceBetween: 30,
			loop: true,
			breakpoints: {
				'1700':{
					slidesPerView:2,
				},
				'1400':{
					slidesPerView:2,
				},
				'1200':{
					slidesPerView:2,
				},
				'767': {
					slidesPerView:2,
				},
				'576': {
					slidesPerView:1,
				},
				'0': {
					slidesPerView:1,
				},
				},
			});
		}


	////////////////////////////////////////////////////
	// Blog Active
	if ($('.tp-blog-post-active').length > 0) {
		var slider = new Swiper('.tp-blog-post-active', {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			breakpoints: {
				'1700':{
					slidesPerView:1,
				},
				'1400':{
					slidesPerView:1,
				},
				'1200':{
					slidesPerView:1,
				},
				'767': {
					slidesPerView:1,
				},
				'576': {
					slidesPerView:1,
				},
				'0': {
					slidesPerView:1,
				},
				},
				// Navigation arrows
				navigation: {
					nextEl: ".tp-blog-next-1",
					prevEl: ".tp-blog-prev-1",
				},
			});
		}
	

	////////////////////////////////////////////////////
	/* 12. MagnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/* magnificPopup video view */
	$(".popup-video").magnificPopup({
		type: "iframe",
	});


	////////////////////////////////////////////////////
	// 13. Wow Js
	new WOW().init();

	////////////////////////////////////////////////////
	// 14. Counter Js
	new PureCounter();


})(jQuery);
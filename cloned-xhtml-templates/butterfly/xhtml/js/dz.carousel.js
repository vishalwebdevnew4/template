/* JavaScript Document */
jQuery(document).ready(function() {
    'use strict';

	/* image-carousel function by = owl.carousel.js */
	jQuery('.img-carousel').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		dots: false,
		autoplaySpeed: 2000,
		navSpeed: 2000,
		paginationSpeed: 2000,
		slideSpeed: 2000,
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},			
			1024:{
				items:3
			},
			1200:{
				items:4
			}
		}
	})

	/* image-carousel no margin function by = owl.carousel.js */
	jQuery('.img-carousel-content').owlCarousel({
		loop:true,
		autoplay:true,
		margin:30,
		nav:true,
		dots: false,
		autoplaySpeed: 2000,
		navSpeed: 2000,
		paginationSpeed: 2000,
		slideSpeed: 2000,
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},			
			1024:{
				items:3
			},
			1200:{
				items:4
			}
		}
	})

	/* service carousel no margin function by = owl.carousel.js */
	jQuery('.service-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		margin:30,
		nav:true,
		dots: false,
		autoplaySpeed: 2000,
		navSpeed: 2000,
		paginationSpeed: 2000,
		slideSpeed: 2000,
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},			
			1024:{
				items:3
			},
			1400:{
				items:3.7
			}
		}
	})
	
	/*  Portfolio Carousel function by = owl.carousel.js */
	jQuery('.portfolio-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		margin:30,
		nav:true,
		dots: false,
		autoplaySpeed: 2000,
		navSpeed: 2000,
		paginationSpeed: 2000,
		slideSpeed: 2000,
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},			
			1024:{
				items:3
			},
			1200:{
				items:4
			}
		}
	})

	/*  Portfolio Carousel no margin function by = owl.carousel.js */
	jQuery('.portfolio-carousel-nogap').owlCarousel({
		loop:true,
		autoplay:true,
		margin:0,
		nav:true,
		dots: false,
		autoplaySpeed: 2000,
		navSpeed: 2000,
		paginationSpeed: 2000,
		slideSpeed: 2000,
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:3
			},
			1200:{
				items:4
			}
		}
	})
	
	/*  Blog post Carousel function by = owl.carousel.js */
	jQuery('.blog-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		margin:30,
		nav:true,
		dots: false,
		autoplaySpeed: 2000,
		navSpeed: 2000,
		paginationSpeed: 2000,
		slideSpeed: 2000,
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},			
			991:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})
	
	/*  Blog post Carousel function by = owl.carousel.js */
	jQuery('.event-carousel').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		dots: false,
		autoplaySpeed: 2000,
		navSpeed: 2000,
		paginationSpeed: 2000,
		slideSpeed: 2000,
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:3
			},
			1000:{
				items:3
			}
		}
	})		
	
	/*  Blog post Carousel function by = owl.carousel.js */
	jQuery('.spa-service-carousel').owlCarousel({
		loop:true,
		nav:true,
		dots: false,
		autoplaySpeed: 2000,
		navSpeed: 2000,
		paginationSpeed: 2000,
		slideSpeed: 2000,
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})	
	
	/* testimonial one function by = owl.carousel.js */
	jQuery('.beauty-care').owlCarousel({
		loop:true,
		autoplay:true,
		nav:true,
		dots: false,
		autoplaySpeed: 2000,
		navSpeed: 2000,
		paginationSpeed: 2000,
		slideSpeed: 2000,
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:1
			},			
			
			767:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})
	
	/*  Blog post Carousel function by = owl.carousel.js */
	jQuery('.client-logo-carousel').owlCarousel({
		loop:true,
		autoplay:true,
		margin:30,
		nav:true,
		dots: false,
		autoplaySpeed: 2000,
		navSpeed: 2000,
		paginationSpeed: 2000,
		slideSpeed: 2000,
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:3
			},
			1000:{
				items:5
			}
		}
	})	
	
	/* Fade slider for home function by = owl.carousel.js */
	jQuery('.owl-fade-one').owlCarousel({
		loop:true,
		autoplay:true,
		autoplayTimeout:2000,
		margin:30,
		nav:true,
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		items:1,
		dots: false,
		animateOut:'fadeOut',
	})	
	
	/*  testimonial one function by = owl.carousel.js */
	jQuery('.testimonial-one').owlCarousel({
		loop:true,
		autoplay:true,
		margin:30,
		nav:true,
		dots: false,
		autoplaySpeed: 2000,
		navSpeed: 2000,
		paginationSpeed: 2000,
		slideSpeed: 2000,
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:1
			},			
			
			767:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})		
	
	/* testimonial two function by = owl.carousel.js */
	jQuery('.testimonial-two').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		dots: false,
		autoplaySpeed: 2000,
		navSpeed: 2000,
		paginationSpeed: 2000,
		slideSpeed: 2000,
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			991:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})
		
	/*  testimonial three function by = owl.carousel.js */
	jQuery('.testimonial-three').owlCarousel({
		loop:true,
		margin:30,
		nav:true,
		dots: false,
		autoplaySpeed: 2000,
		navSpeed: 2000,
		paginationSpeed: 2000,
		slideSpeed: 2000,
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			991:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})
	
	/*  testimonial four function by = owl.carousel.js */
	jQuery('.testimonial-four').owlCarousel({
		loop:true,
		margin:80,
		nav:true,
		dots: false,
		autoplaySpeed: 2000,
		navSpeed: 2000,
		paginationSpeed: 2000,
		slideSpeed: 2000,
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			991:{
				items:2
			}
		}
	})
	
	/*  testimonial four function by = owl.carousel.js */
	jQuery('.testimonial-five').owlCarousel({
		loop:true,
		autoplay:true,
		margin:30,
		nav:false,
		dots: false,
		autoplaySpeed: 2000,
		navSpeed: 2000,
		paginationSpeed: 2000,
		slideSpeed: 2000,
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			991:{
				items:2
			}
		}
	})
	
	/*  Our Classes function by = owl.carousel.js */
	jQuery('.our-classes').owlCarousel({
		loop:true,
		margin:30,
		nav:false,
		dots: false,
		autoplaySpeed: 2000,
		navSpeed: 2000,
		paginationSpeed: 2000,
		slideSpeed: 2000,
		navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			
			480:{
				items:2
			},			
			
			767:{
				items:3
			},
			1000:{
				items:5
			}
		}
	})


	if (jQuery('.blog-slideshow').length > 0) {
		var swiperTestimonial = new Swiper('.blog-slideshow', {
			loop: true,
			spaceBetween: 0,
			slidesPerView: "auto",
			speed: 1500,
			autoplay: {
				delay: 2000,
			},
			pagination: {
				el: ".swiper-pagination-two",
				clickable: true,
			},
		});
	}


	
});
/* Document .ready END */
jQuery(document).ready(function() {

	if (jQuery('.status-swiper').length > 0) {
		var Statusswiper = new Swiper('.status-swiper', {
			loop: true,
			spaceBetween: 0,
			slidesPerView: "auto",
			speed: 1500,
			effect: "fade",
			// autoplay: {
			// 	delay: 2000,
			// },
			pagination: {
				el: ".status-pagination",
				clickable: true,
			},
		});

		jQuery('.post-status-btn').on('click', function () {
			Statusswiper.slideTo(0); 
			Statusswiper.autoplay.start(); 
		});
	}


	
	if ($('.galley-thumb-swiper').length > 0 && $('.galley-swiper').length > 0) {
		var swiper = new Swiper(".galley-thumb-swiper", {
		loop: false,
		spaceBetween: 10,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesProgress: true,
		});
	
		var swiper2 = new Swiper(".galley-swiper", {
		loop: true,
		spaceBetween: 10,
		thumbs: {
			swiper: swiper,
		},
		});
	}


})

// gallery-thumb-swiper 

	// Galley-Thumb-Swiper ======

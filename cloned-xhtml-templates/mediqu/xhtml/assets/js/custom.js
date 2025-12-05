 var Mediqu = function(){
	"use strict"
	
	/* Search Bar ============ */
	var screenWidth = $( window ).width();
	
	var handleSelectPicker = function(){
		if(jQuery('.dataTables_length select').length > 0 ){
			jQuery('.dataTables_length select').selectpicker();
		}
	}
	
	var handleMetisMenu = function() {
		if(jQuery('#menu').length > 0 ){
			$("#menu").metisMenu();
		}
		jQuery('.metismenu > .mm-active ').each(function(){
			if(!jQuery(this).children('ul').length > 0)
			{
				jQuery(this).addClass('active-no-child');
			}
		});
	}
	
	var handleAllChecked = function() {
		if(jQuery('.check-wrapper').length > 0){				
			$(".check-all").on('click',function() {
				jQuery(this).closest('.check-wrapper').find('.check-input').prop('checked', $(this).prop("checked"));
			});
		}
	}
	
	var handleNavigation = function() {
		$(".nav-control").on('click', function() {
			$('#main-wrapper').toggleClass("menu-toggle");
			$(".hamburger").toggleClass("is-active");
		});
	}
	
	var handleCurrentActive = function() {
		var nk = window.location.href;
		var o = $("ul#menu a").filter(function() {
			return this.href === nk;
		});

		// Remove existing classes first
		$("ul#menu li").removeClass("mm-active");
		$("ul#menu a").removeClass("mm-active");
		$("ul#menu ul").removeClass("mm-show").attr("aria-expanded", "false");

		if (o.length > 0) {
			// Mark the matched <a> and its hierarchy
			o.addClass("mm-active");
			var parentLi = o.parent();
			parentLi.addClass("mm-active");

			var parentUl = parentLi.parent();
			while (parentUl.is("ul")) {
				parentUl.addClass("mm-show").attr("aria-expanded", "true");
				var upperLi = parentUl.parent();
				if (upperLi.is("li")) {
					upperLi.addClass("mm-active");
				}
				parentUl = upperLi.parent();
			}
		} else {
			// Default: only activate the first <li> and its structure
			var firstLi = $("ul#menu > li:first");
			firstLi.addClass("mm-active");
			firstLi.children('a').attr('aria-expanded', 'true').addClass('mm-active');
			firstLi.children('ul').addClass('mm-show').attr('aria-expanded', 'true');
		}
	};
	
	var handleMiniSidebar = function() {
		$("ul#menu>li").on('click', function() {
			const sidebarStyle = $('body').attr('data-sidebar-style');
			if (sidebarStyle === 'mini') {
				$(this).find('ul').stop()
			}
		})
	}
	
	var handleMinHeight = function() {
		var win_h = window.innerHeight;
		var win_h = window.innerHeight;
		if (win_h > 0 ? win_h : screen.height) {
			$(".content-body").css("min-height", (window.innerHeight - 70) + "px");	
			setTimeout(() => {
				if($('body').attr('data-layout') === "vertical"){
					if(
						($('body').attr('data-sidebar-style') === "mini") && ($('.deznav .metismenu').height() > (window.innerHeight - 60))
						||
						($('body').attr('data-sidebar-style') === "modern") && ($('.deznav .metismenu').height() > (window.innerHeight - 60))
						||
						($('body').attr('data-sidebar-style') === "full") && $('#main-wrapper').hasClass('menu-toggle') && ($('.deznav .metismenu').height() > (window.innerHeight - 60))
					){	
						$(".content-body").css("min-height", ($('.deznav .metismenu').height() + 110) + "px");
					}
				}
			},500);
		};
		
		setTimeout(() => {
			if(
				$('body').attr('data-header-position') === "fixed" 
				&& 
				$('body').attr('data-layout') === "horizontal"
				&&
				$('body').attr('data-sidebar-position') === "fixed"
			){
				$('.content-body').css("padding-top" ,  ($('.deznav').height() + $('.header').height()) + 'px');
			}else if(
				$('body').attr('data-header-position') === "fixed" 
				&& 
				$('body').attr('data-layout') === "horizontal"
				&&
				$('body').attr('data-sidebar-position') === "static"
			){
				$('.content-body').css("padding-top" , $('.header').height() + "px" );
			}else if(
				$('body').attr('data-header-position') === "static" 
				&& 
				$('body').attr('data-layout') === "horizontal"
				&&
				$('body').attr('data-sidebar-position') === "fixed"
			){
				$('.content-body').css("padding-top" , "0px" );
			}else {
				$('.content-body').css("padding-top" , "" );
			}
		},400);
		
	}
	
	
	var handleHeaderHight = function() {
		const headerHight = $('.header').innerHeight();
		$(window).scroll(function() {
			if ($('body').attr('data-layout') === "horizontal" && $('body').attr('data-header-position') === "static" && $('body').attr('data-sidebar-position') === "fixed")
			$(this.window).scrollTop() >= headerHight ? $('.deznav').addClass('fixed') : $('.deznav').removeClass('fixed')
		});
	}
	
	var handleMenuTabs = function() {
		if(screenWidth <= 991 ){
			jQuery('.menu-tabs .nav-link').on('click',function(){
				if(jQuery(this).hasClass('open'))
				{
					jQuery(this).removeClass('open');
					jQuery('.fixed-content-box').removeClass('active');
					jQuery('.hamburger').show();
				}else{
					jQuery('.menu-tabs .nav-link').removeClass('open');
					jQuery(this).addClass('open');
					jQuery('.fixed-content-box').addClass('active');
					jQuery('.hamburger').hide();
				}
			});
			jQuery('.close-fixed-content').on('click',function(){
				jQuery('.fixed-content-box').removeClass('active');
				jQuery('.hamburger').removeClass('is-active');
				jQuery('#main-wrapper').removeClass('menu-toggle');
				jQuery('.hamburger').show();
			});
		}
	}
	
	// var headerFix = function(){
		// /* Main navigation fixed on top  when scroll down function custom */		
		// jQuery(window).on('scroll', function () {
			
			// if(jQuery('.header').length > 0){
				// var menu = jQuery('.header');
				// $(window).scroll(function(){
					// var sticky = $('.header'),
					// scroll = $(window).scrollTop();

					// if (scroll >= 100){
						// sticky.addClass('is-fixed');
					// }else {
						// sticky.removeClass('is-fixed');
					// }
				// });				
			// }
		// });
		// /* Main navigation fixed on top  when scroll down function custom end*/
	// }
	
	var handleChatbox = function() {
		jQuery('.btn-chatbox').on('click',function(){
			jQuery('.chatbox').addClass('active');
		});
		jQuery('.chatbox-close').on('click',function(){
			jQuery('.chatbox').removeClass('active');
		});
	}
	
	var handleBtnNumber = function() {
		$('.btn-number').on('click', function(e) {
			e.preventDefault();

			fieldName = $(this).attr('data-field');
			type = $(this).attr('data-type');
			var input = $("input[name='" + fieldName + "']");
			var currentVal = parseInt(input.val());
			if (!isNaN(currentVal)) {
				if (type == 'minus')
					input.val(currentVal - 1);
				else if (type == 'plus')
					input.val(currentVal + 1);
			} else {
				input.val(0);
			}
		});
	}
	
	var handleDzChatUser = function() {
		jQuery('.dz-chat-user-box .dz-chat-user').on('click',function(){
			jQuery('.dz-chat-user-box').addClass('d-none');
			jQuery('.dz-chat-history-box').removeClass('d-none');
		}); 
		
		jQuery('.dz-chat-history-back').on('click',function(){
			jQuery('.dz-chat-user-box').removeClass('d-none');
			jQuery('.dz-chat-history-box').addClass('d-none');
		});
	}
	
	var handleDzFullScreen = function() {
		jQuery('.dz-fullscreen').on('click',function(){
			jQuery('.dz-fullscreen').toggleClass('active');
		});
		jQuery('.dz-fullscreen').on('click',function(e){
			if(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement) { 
				/* Enter fullscreen */
				if(document.exitFullscreen) {
					document.exitFullscreen();
				} else if(document.msExitFullscreen) {
					document.msExitFullscreen(); /* IE/Edge */
				} else if(document.mozCancelFullScreen) {
					document.mozCancelFullScreen(); /* Firefox */
				} else if(document.webkitExitFullscreen) {
					document.webkitExitFullscreen(); /* Chrome, Safari & Opera */
				}
			}
			else { /* exit fullscreen */
				if(document.documentElement.requestFullscreen) {
					document.documentElement.requestFullscreen();
				} else if(document.documentElement.webkitRequestFullscreen) {
					document.documentElement.webkitRequestFullscreen();
				} else if(document.documentElement.mozRequestFullScreen) {
					document.documentElement.mozRequestFullScreen();
				} else if(document.documentElement.msRequestFullscreen) {
					document.documentElement.msRequestFullscreen();
				}
			}		
		});
	}

	var handleShowPass = function(){
		jQuery('.show-pass').on('click',function(){
			var inputType = jQuery(this).parent().find('.dz-password');
			if(inputType.attr('type') == 'password')
			{
				inputType.attr('type', 'text');
				jQuery(this).addClass('active');
			}
			else
			{
				inputType.attr('type', 'password');
				jQuery(this).removeClass('active');
			}
		});
	}
	
	var handleLightgallery = function(){
		if(jQuery('#lightgallery').length > 0){
			$('#lightgallery').lightGallery({
				loop:true,
				thumbnail:true,
				exThumbImage: 'data-exthumbimage'
			});
		}
		if(jQuery('#lightgallery2').length > 0){
			$('#lightgallery2').lightGallery({
				loop:true,
				thumbnail:true,
				exThumbImage: 'data-exthumbimage'
			});
		}
	}
	
	var handleCustomFileInput = function() {
		$(".custom-file-input").on("change", function() {
			var fileName = $(this).val().split("\\").pop();
			$(this).siblings(".custom-file-label").addClass("selected").html(fileName);
		});
	}
	
	var heartBlast = function (){
		$(".heart").on("click", function() {
			$(this).toggleClass("heart-blast");
		});
	}

	var vHeight = function(){
        var ch = $(window).height() - 206;
        $(".chatbox .msg_card_body").css('height',ch);
    }
	
	var handleCkEditor = function(){
		if(jQuery("#ckeditor").length>0) {
			ClassicEditor
			.create( document.querySelector( '#ckeditor' ), {
				simpleUpload: {
                    uploadUrl: 'ckeditor-upload.php', 
                }
			} )
			.then( editor => {
				window.editor = editor;
			} )
			.catch( err => {
				console.error( err.stack );
			} );
		}
	}
	
	var handleMenuPosition = function(){
		if(screenWidth > 1024){
			$(".metismenu  li").unbind().each(function (e) {
				if ($('ul', this).length > 0) {
					var elm = $('ul:first', this).css('display','block');
					var off = elm.offset();
					var l = off.left;
					var w = elm.width();
					var elm = $('ul:first', this).removeAttr('style');
					var docH = $("body").height();
					var docW = $("body").width();
					
					if(jQuery('html').hasClass('rtl')){
						var isEntirelyVisible = (l + w <= docW);	
					}else{
						var isEntirelyVisible = (l > 0)?true:false;	
					}
					
					if (!isEntirelyVisible) {
						$(this).find('ul:first').addClass('left');
					} else {
						$(this).find('ul:first').removeClass('left');
					}
				}
			});
		}
	}
	
	// var handleChartSidebar = function(){
		// $('.chat-rightarea-btn').on('click',function(){
			// $(this).toggleClass('active');
			// $('.chat-right-area').toggleClass('active');
		// })
		// $('.chat-hamburger').on('click',function(){
			// $('.chat-left-area').toggleClass('active');
		// })
	// }
	
	var handleDraggableCard = function() {
		if ($('.dz-draggable').length > 0) {
			var dzDraggable = function () {
				return {
					init: function () {
						var containers = document.querySelectorAll('.dz-draggable');

						if (containers.length === 0) {
							return false;
						}
						
						new Sortable.default(containers, {
							draggable: '.draggable',
							handle: '.draggable-handle',
							mirror: {
								appendTo: '.dz-draggable',
								constrainDimensions: true
							}
						});
					}
				};
			}();

			jQuery(document).ready(function () {
				dzDraggable.init();
			});
		}
	}

	var setCurrentYear = function () {
		const currentDate = new Date();
		let currentYear = currentDate.getFullYear();
		let elements = document.getElementsByClassName('current-year');

		for (const element of elements) {
			element.innerHTML = currentYear;
		}
	}

	var mobileEmailPanel = function(){
		if($('.mobile-email-panel').length > 0){
			$(".mobile-email-panel").on('click', function(){
				$('.email-left-body, .mobile-email-panel').toggleClass("active");
			});
		}
	}
	
	var handleTagify = function (){		
		if(jQuery('.basic-tagify').length > 0 ){
			var input = document.querySelector('.basic-tagify');
			new Tagify(input)
		}
	}
	
	var handleImageUpload = function (){
		if ($('.upload-trigger').length > 0) {
			$('.upload-trigger').on('click', function () {
				$(this).siblings('.imageUpload').click();
			});
			$('.imageUpload').on('change', function () {
				var input = this;
				if (input.files && input.files[0]) {
					var reader = new FileReader();
					reader.onload = function (e) {
						$(input).siblings('.imagePreview').attr('src', e.target.result).hide().fadeIn(650);
					};
					reader.readAsDataURL(input.files[0]);
				}
			});
		}
	}
	
	var handleSupport = function(){
		var support = '<script id="DZScript" src="https://dzassets.s3.amazonaws.com/w3-global-2.0.js?token=W-65c55ee1f058f347bedf27eb1dc2e8f4"></script>';
		jQuery('body').append(support);
	}
	
	var domoPanel = function(){
		$('.dz-demo-trigger').on('click', function() {
			$('.dz-demo-panel').addClass('show');
		});
		$('.dz-demo-close, .bg-close,.dz_theme_demo,.dz_theme_demo_rtl').on('click', function() {
			$('.dz-demo-panel').removeClass('show');
		});
		$('.dz-demo-bx').on('click', function() {
			$('.dz-demo-bx').removeClass('demo-active');
			$(this).addClass('demo-active');
		});
	}
	
	var handleThemeMode = function () {
		if (jQuery(".dz-theme-mode").length > 0) {

			// Toggle button click
			jQuery('.dz-theme-mode').on('click', function () {
				jQuery(this).toggleClass('active');

				var mode = jQuery(this).hasClass('active') ? 'dark' : 'light';

				jQuery('body')
					.attr('data-bs-theme', mode)
					.attr('data-theme-version', mode);

				setCookie('version', mode);
				jQuery('#theme_version').val(mode).selectpicker('refresh');

				$('.default-select').selectpicker('refresh');
			});

			// Initial load: set body attributes based on cookie or select
			var version = getCookie('version') || jQuery('#theme_version').val() || 'light';

			jQuery('body')
				.attr('data-bs-theme', version)
				.attr('data-theme-version', version);

			jQuery('.dz-theme-mode').removeClass('active');

			setTimeout(function () {
				if (version === "dark") {
					jQuery('.dz-theme-mode').addClass('active');
				}
			}, 1500);

			// When the select changes
			jQuery('#theme_version').on('change', function () {
				var selectedVersion = jQuery(this).val();

				jQuery('body')
					.attr('data-bs-theme', selectedVersion)
					.attr('data-theme-version', selectedVersion);

				setCookie('version', selectedVersion);

				if (selectedVersion === 'dark') {
					jQuery('.dz-theme-mode').addClass('active');
				} else {
					jQuery('.dz-theme-mode').removeClass('active');
				}

				$('.default-select').selectpicker('refresh');
			});

			// On page load: apply active state if select is 'dark'
			if (jQuery('#theme_version').val() === 'dark') {
				jQuery('.dz-theme-mode').addClass('active');
			}
		}
	};

	var handleDatePicker = function(){
		if(jQuery('.bs-datepicker').length > 0 ){
			$('.bs-datepicker').datepicker({
				format: 'mm/dd/yyyy',
				autoclose: true,
				todayHighlight: true
			});
		}
	}

	var handleTheme = function(){
		$('#preloader').fadeOut(1000);
		$('#main-wrapper').addClass('show');
	}

	var handelBootstrapSelect = function(){
		jQuery('select').selectpicker();
	}	

	var handleDataAction = function() {
		$('a[data-action="collapse"]').on("click", function(i) {
			i.preventDefault(),
			$(this).closest(".card").find('[data-action="collapse"] i').toggleClass("mdi-arrow-down mdi-arrow-up"),
			$(this).closest(".card").children(".card-body").collapse("toggle");
		});

		$('a[data-action="expand"]').on("click", function(i) {
			i.preventDefault(),
			$(this).closest(".card").find('[data-action="expand"] i').toggleClass("icon-size-actual icon-size-fullscreen"),
			$(this).closest(".card").toggleClass("card-fullscreen");
		});

		$('[data-action="close"]').on("click", function() {
			$(this).closest(".card").removeClass().slideUp("fast");
		});

		$('[data-action="reload"]').on("click", function() {
			var e = $(this);
			e.parents(".card").addClass("card-load"),
			e.parents(".card").append('<div class="card-loader"><i class=" ti-reload rotate-refresh"></div>'),
			setTimeout(function() {
				e.parents(".card").children(".card-loader").remove(),
					e.parents(".card").removeClass("card-load")
			}, 2000)
		});
	}

	var handleDzLoadMore = function() {
		$(".dz-load-more").on('click', function(e){
			e.preventDefault();	//STOP default action
			$(this).append(' <i class="fa fa-refresh"></i>');
			
			var dzLoadMoreUrl = $(this).attr('rel');
			var dzLoadMoreId = $(this).attr('id');
			
			$.ajax({
				method: "POST",
				url: dzLoadMoreUrl,
				dataType: 'html',
				success: function(data) {
					$( "#"+dzLoadMoreId+"Content").append(data);
					$('.dz-load-more i').remove();
				}
			})
		});
	}
	
    
	var handleDatetimepicker = function(){
		if(jQuery("#datetimepicker1").length>0) {
			$('#datetimepicker1').datetimepicker({
				inline: true,
			});
		}
	}
	
	
	
	/* Function ============ */
	return {
		init:function(){
			handleSelectPicker();
			handleMetisMenu();
			handleAllChecked();
			mobileEmailPanel();
			handleNavigation();
			handleCurrentActive();
			handleMiniSidebar();
			handleMinHeight();
			handleHeaderHight();
			handleMenuTabs();
			handleChatbox();
			handleBtnNumber();
			handleDzChatUser();
			handleDzFullScreen();
			handleShowPass();
			heartBlast();
			handleLightgallery();
			handleCustomFileInput();
			vHeight();
			handleCkEditor();
			handleMenuPosition();
			handleDraggableCard();
			setCurrentYear();
			handleTagify();
			handleImageUpload();
			handleSupport();
			domoPanel();
			handleThemeMode();
			handleDatePicker();
			handleTheme();
			handelBootstrapSelect();
			handleDataAction();
			handleDzLoadMore();
			handleDatetimepicker();
		},
		
		load:function(){
			handleSupport();
			handleTheme();
			handleSelectPicker();
		},
		
		resize:function(){
			vHeight();
			handleMinHeight();
			handleThemeMode();
		},
		
		handleMenuPosition:function(){
			handleMenuPosition();
		},
	}
	
}();


/* Document.ready Start */	
jQuery(document).ready(function() {
    'use strict';
	
	Mediqu.init();
	
	$('.btn-active').click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		}else{
			$(this).addClass('active');
		}
	});
	
	jQuery(".accordion-close").on('click',function(){
		jQuery(this).closest('.accordion-item').remove();
	})
	
	if(jQuery('.dropdown-badge').length > 0){
		$(".dropdown-badge-menu .dropdown-item").click(function(){
			var badgeText = $(this).text();
			var dataBadge = $(this).attr("data-badge");

			var dropdown = $(this).closest(".dropdown-badge");
			var toggleButton = dropdown.find(".dropdown-toggle");
			
			var btnClasses = ["btn-primary", "btn-secondary", "btn-success", "btn-danger", "btn-warning", "btn-info", "btn-light", "btn-dark"];

			// Remove only these color classes
			toggleButton.removeClass(btnClasses.join(" "));

			// Update button text and add new badge class
			toggleButton.text(badgeText).addClass(dataBadge);
		});
	}
	
});
/* Document.ready Start */	
// jQuery(document).ready(function() {
	// $('[data-bs-toggle="popover"]').popover();
    // 'use strict';
	// Mediqu.init();
	
// });
/* Document.ready END */

/* Window Load START */
jQuery(window).on('load',function () {
	'use strict'; 
	Mediqu.load();
	
	setTimeout(function(){
		Mediqu.handleMenuPosition();
	}, 1000);
	
});
/*  Window Load END */

/* Window Resize START */
jQuery(window).on('resize',function () {
	'use strict'; 
	Mediqu.resize();
	
	setTimeout(function(){
		Mediqu.handleMenuPosition();
	}, 1000);
});
/*  Window Resize END */
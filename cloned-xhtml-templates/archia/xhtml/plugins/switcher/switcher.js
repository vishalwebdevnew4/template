var currentURL      = window.location.href; 
function addSwitcher()
{
	var urlLTR = '';
	var urlRTL = '';
	if(currentURL.indexOf('xhtml-rtl') > -1){
		urlLTR = currentURL.replace('xhtml-rtl', 'xhtml')
		urlRTL = currentURL;
	}else{
		urlRTL = currentURL.replace('xhtml', 'xhtml-rtl')
		urlLTR = currentURL;
	}
	
	var dzSwitcher = '<div id="dzSwitcher" class="styleswitcher"><div class="switcher-btn-bx"><a class="switch-btn closed"><span class="fa fa-cogs fa-lg"></span></a></div><div class="styleswitcher-inner"><a href="javascript:void(0);" class="dez-page btn btn-sm" onclick="deleteAllCookie()">Delete All Cookie</a><div class="theme-box"><h5 class="switcher-title"><span>Theme</span></h5><h6 class="switcher-title">Standard</h6><ul val="themeStandardColor" class="color-skins-db theme-panel-save"><li><a class="theme-skin skin-1" href="javascript:void(0);" dir="css/skin/skin-1" data-logo-selector=".logo-dark img, .logo-white img, .page-dark .header .logo-dark img" data-logo-image="images/logo.png, images/logo-white.png, images/logo-white.png" title="default Theme"></a></li><li><a class="theme-skin skin-2" href="javascript:void(0);" dir="css/skin/skin-2" data-logo-selector=".logo-dark img, .logo-white img, .page-dark .header .logo-dark img" data-logo-image="images/logo-2.png, images/logo-white-2.png, images/logo-white-2.png" title="pink Theme"></a></li><li><a class="theme-skin skin-3" href="javascript:void(0);" dir="css/skin/skin-3" data-logo-selector=".logo-dark img, .logo-white img, .page-dark .header .logo-dark img" data-logo-image="images/logo-3.png, images/logo-white-3.png, images/logo-white-3.png" title="sky Theme"></a></li><li><a class="theme-skin skin-4" href="javascript:void(0);" dir="css/skin/skin-4" data-logo-selector=".logo-dark img, .logo-white img, .page-dark .header .logo-dark img" data-logo-image="images/logo-4.png, images/logo-white-4.png, images/logo-white-4.png" title="green Theme"></a></li><li><a class="theme-skin skin-5" href="javascript:void(0);" dir="css/skin/skin-5" data-logo-selector=".logo-dark img, .logo-white img, .page-dark .header .logo-dark img" data-logo-image="images/logo-5.png, images/logo-white-5.png, images/logo-white-5.png" title="green Theme"></a></li></ul><h6 class="switcher-title">Full Color</h6><ul val="themeFullColor" class="color-skins theme-panel-save"><li><a class="theme-skin skin-1" href="javascript:void(0);" dir="css/skin/color/skin-1" data-logo-selector=".logo-dark img, .logo-white img, .page-dark .header .logo-dark img" data-logo-image="images/logo.png, images/logo-white.png, images/logo-white.png" title="default Theme"></a></li><li><a class="theme-skin skin-2" href="javascript:void(0);" dir="css/skin/color/skin-2" data-logo-selector=".logo-dark img, .logo-white img, .page-dark .header .logo-dark img" data-logo-image="images/logo-2.png, images/logo-white-2.png, images/logo-white-2.png" title="pink Theme"></a></li><li><a class="theme-skin skin-3" href="javascript:void(0);" dir="css/skin/color/skin-3" data-logo-selector=".logo-dark img, .logo-white img, .page-dark .header .logo-dark img" data-logo-image="images/logo-3.png, images/logo-white-3.png, images/logo-white-3.png" title="sky Theme"></a></li><li><a class="theme-skin skin-4" href="javascript:void(0);" dir="css/skin/color/skin-4" data-logo-selector=".logo-dark img, .logo-white img, .page-dark .header .logo-dark img" data-logo-image="images/logo-4.png, images/logo-white-4.png, images/logo-white-4.png" title="green Theme"></a></li><li><a class="theme-skin skin-5" href="javascript:void(0);" dir="css/skin/color/skin-5" data-logo-selector=".logo-dark img, .logo-white img, .page-dark .header .logo-dark img" data-logo-image="images/logo-5.png, images/logo-white-5.png, images/logo-white-5.png" title="green Theme"></a></li></ul></div><div class="theme-box theme-btn-group"><h5 class="switcher-title"><span>Layout</span></h5><ul val="layout" class="layout-view theme-panel-save"><li class="wide-layout active"><a href="javascript:void(0);" dir="wide-layout">Wide</a></li><li class="boxed"><a href="javascript:void(0);" dir="boxed">Boxed</a></li><li class="frame"><a href="javascript:void(0);" dir="frame">Frame</a></li></ul><div id="ThemeRangeSlider" class="price-slide-2 range-slider" style="display:none"><div class="price"><input type="text" id="FramePadding" class="amount" readonly="" value="20px"><div id="slider-range-3"></div></div></div></div><div class="theme-box theme-btn-group"><h5 class="switcher-title"><span>Theme Direction</span></h5><ul class="theme-view"><li class="active"><a href="'+urlLTR+'">LTR</a></li><li class=""><a href="'+urlRTL+'">RTL</a></li></ul></div><div class="theme-box theme-btn-group"><h5 class="switcher-title"><span>Header</span></h5><ul val="header" class="header-view theme-panel-save"><li class="header-fixed active"><a href="javascript:void(0);" dir="sticky-header">Fixed</a></li><li class="header-static"><a href="javascript:void(0);" dir="sticky-no">Static</a></li></ul></div><div class="theme-box theme-btn-group"><h5 class="switcher-title"><span>Theme Mode</span></h5><ul val="themeMode" class="theme-mode theme-panel-save"><li class="layout-light active"><a href="javascript:void(0);" dir="light">Light</a></li><li class="layout-dark"><a href="javascript:void(0);" dir="dark">Dark</a></li></ul></div><div class="theme-box bx-fr-visible"><h5 class="switcher-title"><span>Background</span></h5><h6 class="switcher-title">Color</h6><ul val="bgColor" class="bg-color-switcher theme-panel-save"><li><a class="bg-color-1" href="javascript:void(0);" dir="#a8ca1e"></a></li><li><a class="bg-color-2" href="javascript:void(0);" dir="#f9bf26"></a></li><li><a class="bg-color-3" href="javascript:void(0);" dir="#4d84ff"></a></li><li><a class="bg-color-4" href="javascript:void(0);" dir="#d19d47"></a></li><li><a class="bg-color-5" href="javascript:void(0);" dir="#275A53"></a></li></ul><h6 class="switcher-title">Image</h6><ul val="bgImage" class="background-switcher theme-panel-save"><li><img src="images/switcher/switcher-bg/bg1.jpg" dir="images/background/bg1.jpg" alt=""></li><li><img src="images/switcher/switcher-bg/bg2.jpg" dir="images/background/bg2.jpg" alt=""></li><li><img src="images/switcher/switcher-bg/bg3.jpg" dir="images/background/bg3.jpg" alt=""></li><li><img src="images/switcher/switcher-bg/bg4.jpg" dir="images/background/bg4.jpg" alt=""></li></ul><h6 class="switcher-title">Pattern</h6><ul val="bgPatten" class="pattern-switcher theme-panel-save"><li><img src="images/switcher/switcher-patterns/bg1.jpg" dir="images/pattern/pt1.jpg" alt=""></li><li><img src="images/switcher/switcher-patterns/bg2.jpg" dir="images/pattern/pt2.jpg" alt=""></li><li><img src="images/switcher/switcher-patterns/bg3.jpg" dir="images/pattern/pt3.jpg" alt=""></li><li><img src="images/switcher/switcher-patterns/bg4.jpg" dir="images/pattern/pt4.jpg" alt=""></li><li><img src="images/switcher/switcher-patterns/bg5.jpg" dir="images/pattern/pt5.jpg" alt=""></li><li><img src="images/switcher/switcher-patterns/bg6.jpg" dir="images/pattern/pt6.jpg" alt=""></li><li><img src="images/switcher/switcher-patterns/bg7.jpg" dir="images/pattern/pt7.jpg" alt=""></li><li><img src="images/switcher/switcher-patterns/bg8.jpg" dir="images/pattern/pt8.jpg" alt=""></li><li><img src="images/switcher/switcher-patterns/bg9.jpg" dir="images/pattern/pt9.jpg" alt=""></li><li><img src="images/switcher/switcher-patterns/bg10.jpg" dir="images/pattern/pt10.jpg" alt=""></li><li><img src="images/switcher/switcher-patterns/bg11.jpg" dir="images/pattern/pt11.jpg" alt=""></li><li><img src="images/switcher/switcher-patterns/bg12.jpg" dir="images/pattern/pt12.jpg" alt=""></li></ul></div></div></div><div class="styleswitcher-right"><div class="switcher-btn-bx"><a class="switch-btn-right closed" href="javascript:void(0);">Check Demo</a></div><div class="styleswitcher-inner"><div class="switch-demo-bx"><ul class="switch-demo"><li><a href="index.html?color-standard=color_2"><img src="images/demo/index.jpg" alt=""></a></li><li><a href="index-dark.html?color-standard=color_2"><img src="images/demo/index-dark.jpg" alt=""></a></li><li><a href="index-2.html"><img src="images/demo/index-2.jpg" alt=""></a></li><li><a href="index-dark-2.html"><img src="images/demo/index-dark-2.jpg" alt=""></a></li><li><a href="index-3.html?color-standard=color_1"><img src="images/demo/index-3.jpg" alt=""></a></li><li><a href="index-dark-3.html?color-standard=color_1"><img src="images/demo/index-dark-3.jpg" alt=""></a></li><li><a href="index-4.html?color-standard=color_1"><img src="images/demo/index-4.jpg" alt=""></a></li><li><a href="index-dark-4.html?color-standard=color_1"><img src="images/demo/index-dark-4.jpg" alt=""></a></li><li><a href="index-5.html?color-standard=color_1"><img src="images/demo/index-5.jpg" alt=""></a></li><li><a href="index-dark-5.html?color-standard=color_1"><img src="images/demo/index-dark-5.jpg" alt=""></a></li><li><a href="index-6.html?color-standard=color_1"><img src="images/demo/index-6.jpg" alt=""></a></li><li><a href="index-dark-6.html?color-standard=color_1"><img src="images/demo/index-dark-6.jpg" alt=""></a></li></ul></div></div></div>';
	
	if($("#dzSwitcher").length == 0) {
		jQuery('body').append(dzSwitcher);
	}
}


jQuery(window).on('load',function(){
	
	//=== Switcher panal slide function	=====================//
	jQuery('.styleswitcher').animate({
		'left': '-260px'
	});
	jQuery('.styleswitcher-right').animate({
		'right': '-300px',
		'left': 'auto'
	});
	jQuery('.switch-btn').addClass('closed');
	//=== Switcher panal slide function END	=====================//
	
});
	
$(function(){		
	"use strict";
	
	addSwitcher();
	//=== Switcher panal slide function	=====================//
	jQuery('.switch-btn').on('click',function () {	
		if (jQuery(this).hasClass('open')) {
			jQuery(this).addClass('closed');
			jQuery(this).removeClass('open');
			jQuery('.styleswitcher').animate({
				'left': '-260px'
			});
			
		} else {
			if (jQuery(this).hasClass('closed')) {
			jQuery(this).addClass('open');
			jQuery(this).removeClass('closed');
			jQuery('.styleswitcher').animate({
				'left': '0'
			});
			
			}
		}	
	});
	jQuery('.switch-btn-right').on('click',function () {	
		if (jQuery(this).hasClass('open')) {
			jQuery(this).addClass('closed');
			jQuery(this).removeClass('open');
			
			jQuery('.styleswitcher-right').animate({
				'right': '-300px',
				'left': 'auto'
			});
		} else {
			if (jQuery(this).hasClass('closed')) {
			jQuery(this).addClass('open');
			jQuery(this).removeClass('closed');
			
			jQuery('.styleswitcher-right').animate({
				'right': '0',
				'left': 'auto'
			});
			}
		}	
	});
	
	
	
	/* url color set */
	var getUrlParameter = function getUrlParameter(sParam) {
		var sPageURL = window.location.search.substring(1),
			sURLVariables = sPageURL.split('&'),
			sParameterName,
			i;

		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');

			if (sParameterName[0] === sParam) {
				return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
			}
		}
		return false;
	};
	
	var themeColor =  getUrlParameter('color-full');
	var themeStandard =  getUrlParameter('color-standard');
	if(themeColor){
		var index = themeColor?.split('_')[1];
		const logoUrls = document.querySelectorAll('.color-skins li a');
		var logoImage = $(logoUrls[index - 1]).attr('data-logo-image');
		var logoSelector = $(logoUrls[index - 1]).attr('data-logo-selector');
		if(logoUrls && index){
			deleteCookie('themeStandardColor_value');
			deleteCookie('themeStandardColor_logo_selector');
			deleteCookie('themeStandardColor_logo_image');
			setCookie('themeFullColor_value','css/skin/color/skin-'+index,1);
			setCookie('themeFullColor_logo_selector',logoSelector,1);
			setCookie('themeFullColor_logo_image',logoImage,1);
		}
	}
	if(themeStandard){
		var index = themeStandard?.split('_')[1];
		const logoUrls = document.querySelectorAll('.color-skins-db li a');
		var logoImage = $(logoUrls[index - 1]).attr('data-logo-image');
		var logoSelector = $(logoUrls[index - 1]).attr('data-logo-selector');
		if(logoUrls && index){
			deleteCookie('themeFullColor_value');
			deleteCookie('themeFullColor_logo_selector');
			deleteCookie('themeFullColor_logo_image');
			setCookie('themeStandardColor_value','css/skin/skin-'+index,1);
			setCookie('themeStandardColor_logo_selector',logoSelector,1);
			setCookie('themeStandardColor_logo_image',logoImage,1);
		}
	}
	/* url color set */
	
	
	
	//=== Switcher panal slide function END	=====================//

	//=== Color css change function	=====================//

	
	jQuery(document).on('click', '.color-skins li a', function(){
		jQuery('.color-skins-db li,.color-skins li').removeClass('active');
		jQuery(this).parent('li').addClass('active');
		jQuery(".skin").attr("href", jQuery(this).attr('dir')+'.css');
	
		var logoSelectorArr = jQuery(this).data('logo-selector').split(',');
		var logoSrcArr		= jQuery(this).data('logo-image').split(',');
		
		var arrCount = logoSelectorArr.length;
		for(var i=0; i<arrCount; i++){
			jQuery(logoSelectorArr[i]).attr('src',logoSrcArr[i]);
		}
		return false;
	});
	
	jQuery(document).on('click', '.color-skins-db li a', function(){
		jQuery('.color-skins-db li,.color-skins li').removeClass('active');
		jQuery(this).parent('li').addClass('active');
		jQuery(".skin").attr("href", jQuery(this).attr('dir')+'.css');
	
		var logoSelectorArr = jQuery(this).data('logo-selector').split(',');
		var logoSrcArr		= jQuery(this).data('logo-image').split(',');
		
		var arrCount = logoSelectorArr.length;
		for(var i=0; i<arrCount; i++){
			jQuery(logoSelectorArr[i]).attr('src',logoSrcArr[i]);
		}
		return false;
	});
	
	//=== Color css change function	=====================//	
	
	
	
	
	//=== Background image change function	=====================//
	jQuery('.background-switcher li img').on('click',function(){
	 var imgbg = jQuery(this).attr('dir');
	 //console.<span id="IL_AD2" class="IL_AD">log</span>(imgbg);
	 jQuery('#bg').css({backgroundImage: "url("+imgbg+")"});
		jQuery('.background-switcher li, .pattern-switcher li, .bg-color-switcher li').removeClass('active');
		jQuery(this).parent('li').addClass('active');
	 });
	//=== Background image change function	End=====================//
	
	
	//=== Background pattern change function	=====================//
	jQuery('.pattern-switcher li img').on('click',function(){
	 var imgbg = jQuery(this).attr('dir');
	 //console.<span id="IL_AD2" class="IL_AD">log</span>(imgbg);
	 jQuery('#bg').css({backgroundImage: "url("+imgbg+")"});
	 jQuery("#bg").css( "background-size", "auto");
	 jQuery('.background-switcher li, .pattern-switcher li, .bg-color-switcher li').removeClass('active');
		jQuery(this).parent('li').addClass('active');
	 
	 });
	//=== Background pattern change function End=====================//
	
	//=== Background pattern change function	=====================//
	jQuery('.bg-color-switcher li a').on('click',function(){
	 var bgcolor = jQuery(this).attr('dir');
	 //alert(bgcolor);
	 //console.<span id="IL_AD2" class="IL_AD">log</span>(bgcolor);
		jQuery('#bg').css('background-color', bgcolor);
		jQuery('#bg').css('background-image', '');
		jQuery('.background-switcher li, .pattern-switcher li, .bg-color-switcher li').removeClass('active');
		jQuery(this).parent('li').addClass('active');
	 });
	//=== Background pattern change function End=====================//
	

	//=== Layout boxed & fullscreen change function	=====================//
	jQuery('.layout-view li ').on('click', function(){
		jQuery('.layout-view li ').removeClass('active');
		jQuery(this).addClass('active');	
	});
	jQuery('.bx-fr-visible').hide();
	jQuery('.wide-layout').on('click',function() { 
		jQuery("body").addClass('wide-layout');
		jQuery("body").removeClass('boxed');
		jQuery("body").removeClass('frame').removeAttr("style");
		jQuery('.bx-fr-visible').hide('slow');
		$(window).trigger('resize');
		jQuery('#ThemeRangeSlider').hide('slow');
	});
	
	jQuery('.boxed').on('click',function() { 
		jQuery("body").addClass('boxed');
		jQuery("body").removeClass('wide-layout');
		jQuery("body").removeClass('frame').removeAttr("style");
		jQuery('.bx-fr-visible').show('slow');
		$(window).trigger('resize');
		jQuery('#ThemeRangeSlider').hide('slow');
	});
	jQuery('.frame').on('click',function() { 
		jQuery("body").addClass('frame');
		jQuery("body").removeClass('wide-layout');
		jQuery("body").removeClass('boxed');
		jQuery('#ThemeRangeSlider').show('slow');
		jQuery('.bx-fr-visible').show('slow');
		//themeFramePadding();
		jQuery(".main-bar-wraper").addClass('sticky-no');
		jQuery(".main-bar-wraper").removeClass('sticky-header');
		$(window).trigger('resize');
	});
	themeFramePadding();
	//=== Layout boxed & fullscreen change function	END=====================//
	


	//=== Nav light & dark change function	END=====================//
	jQuery('.nav-view li ').on('click', function(){
		jQuery('.nav-view li ').removeClass('active');
		jQuery(this).addClass('active');	
	});
	
	jQuery('.nav-light').on('click',function() { 
		jQuery(".header-nav").addClass('nav-light');
		jQuery(".header-nav").removeClass('nav-dark');
	});
	
	jQuery('.nav-dark').on('click',function() { 
		jQuery(".header-nav").addClass('nav-dark');
		jQuery(".header-nav").removeClass('nav-light');
	});
	//=== Nav light & dark change function	END=====================//	
	
	jQuery('.header-view li ').on('click', function(){
		jQuery('.header-view li ').removeClass('active');
		jQuery(this).addClass('active');
	});
	
	jQuery('.header-fixed').on('click',function() { 
		jQuery(".main-bar-wraper").addClass('sticky-header');
		jQuery(".main-bar-wraper").removeClass('sticky-no');
	});
	
	jQuery('.header-static').on('click',function() { 
		jQuery(".main-bar-wraper").addClass('sticky-no');
		jQuery(".main-bar-wraper").removeClass('sticky-header');
	});
	
	
	//=== Nav light & dark change function	END=====================//	
	
	var currentURL      = window.location.href;
	
	
	if(currentURL.indexOf('index-dark') === -1 && currentURL.indexOf('index') > -1){
		deleteCookie('themeMode_value');
	}
	
	if(currentURL.indexOf('index-dark') > -1){
		setCookie('themeMode_value','dark',1);
		jQuery('.theme-mode li').removeClass('active');
		jQuery('.theme-mode [dir="dark"]').parent().addClass('active');
	}
	
	jQuery('.theme-mode li a').on('click', function(){
		jQuery('.theme-mode li').removeClass('active');
		jQuery(this).parent().addClass('active');
		if($(this).attr('dir') === 'dark'){
			jQuery("body").addClass('page-dark');
			jQuery("body").removeClass('page-light');
			jQuery('link[href*="css/templete.css"]').after('<link rel="stylesheet" type="text/css" href="css/dark.css">');
			
			if(currentURL.indexOf('index-dark') == -1 && currentURL.indexOf('index') > -1){
				var darkFileUrl = currentURL.replace('index', 'index-dark')
				window.location.replace(darkFileUrl);
			}
			
		}else{
			jQuery("body").addClass('page-light');
			jQuery("body").removeClass('page-dark');
			jQuery('link[href*="css/dark.css"]').remove();
			
			if(currentURL.indexOf('index') > -1){
				var lightFileUrl = currentURL.replace('index-dark', 'index')
				window.location.replace(lightFileUrl);
			}
		}
		/* if(getCookie('themeStandardColor_value').length == 1 || getCookie('themeStandardColor_value').length == 0){
			setCookie('themeStandardColor_logo_selector','.logo-dark img, .logo-white img, .page-dark .header .logo-dark img',1);
			setCookie('themeStandardColor_logo_image','images/logo.png, images/logo-white.png, images/logo-white.png',1);
		}
		if(getCookie('themeFullColor_value').length == 1 || getCookie('themeFullColor_value').length == 0){
			setCookie('themeFullColor_logo_selector','.logo-dark img, .logo-white img, .page-dark .header .logo-dark img',1);
			setCookie('themeFullColor_logo_image','images/logo.png, images/logo-white.png, images/logo-white.png',1);
		} */
		
		//for logo
		var tf_logo_selector = getCookie('themeFullColor_logo_selector');
		var tf_logo_image = getCookie('themeFullColor_logo_image');
		var logoSelectorArr = tf_logo_selector.split(',');
		var logoSrcArr		= tf_logo_image.split(',');
		var arrCount = logoSelectorArr.length;
		for(var i=0; i<arrCount; i++){
			jQuery(logoSelectorArr[i]).attr('src',logoSrcArr[i]);
		}
		
		var ts_logo_selector = getCookie('themeStandardColor_logo_selector');
		var ts_logo_image = getCookie('themeStandardColor_logo_image');
		var logoSelectorArr2 = ts_logo_selector.split(',');
		var logoSrcArr2		= ts_logo_image.split(',');
		var arrCount2 = logoSelectorArr2.length;
		for(var i=0; i<arrCount2; i++){
			jQuery(logoSelectorArr2[i]).attr('src',logoSrcArr2[i]);
		}
	});
	
	
	
	
	
	jQuery(window).on('scroll', function () {
			if(jQuery('.sticky-header').length > 0){
				var menu = jQuery('.sticky-header');
				if ($(window).scrollTop() > menu.offset().top) {
					menu.addClass('is-fixed');
					
				} else {
					menu.removeClass('is-fixed');
				}
			}
		});
	
});

/* Theme Panel Save */
	
	/*var themeOption = [{'layout':[{'wide','boxed',}],'theme','header','bgcolor','bgpatten'}];*/
	var themeOption = ['themeStandardColor','themeFullColor','layout','header','themeMode','bgColor','bgImage','bgPatten'];
	themeOption['layout'] = ['wide','boxed','frame','frame_value','layout_value'];
	themeOption['themeStandardColor'] = ['skin-1','skin-2','skin-3','skin-4','skin-5','skin-6','skin-7','skin-8','themeStandardColor_value','themeStandardColor_logo'];
	themeOption['themeFullColor'] = ['skin-1','skin-2','skin-3','skin-4','skin-5','skin-6','skin-7','skin-8','themeFullColor_value','themeFullColor_logo'];
	themeOption['header'] = ['fixed','static','header_value'];
	themeOption['themeMode'] = ['light','dark','themeMode_value'];
	themeOption['bgColor'] = ['#a8ca1e','#f9bf26','#4d84ff','#d19d47','bgColor_value'];
	themeOption['bgImage'] =['bg1.jpg','bg2.jpg','bg3.jpg','bg4.jpg','bgImage_value'];
	themeOption['bgPatten'] =['pt1.jpg','pt2.jpg','pt3.jpg','pt4.jpg','pt5.jpg','pt6.jpg','pt7.jpg','pt8.jpg','pt9.jpg','pt10.jpg','pt11.jpg','pt12.jpg','bgPatten_value'];

jQuery(document).ready(function(){
	jQuery('.theme-panel-save li a, .theme-panel-save li img').on('click', function() {
			var optionValue =  jQuery(this).attr('dir');
			var optionData =  jQuery(this).parent().parent().attr('val');
			//themeOption[optionData][optionData+'_value'] = data;
			//alert(data+' '+optionData);
			if(optionData == 'bgColor'){
				deleteCookie('bgImage_value');
				deleteCookie('bgPatten_value');
			}else if(optionData == 'bgImage'){
				deleteCookie('bgColor_value');
				deleteCookie('bgPatten_value');
			}else if(optionData == 'bgPatten'){
				deleteCookie('bgColor_value');
				deleteCookie('bgImage_value');
			}else if(optionData == 'themeStandardColor'){
				deleteCookie('themeFullColor_value');
				deleteCookie('themeFullColor_logo_selector');
				deleteCookie('themeFullColor_logo_image');
				var themeLogoSelector =  jQuery(this).data('logo-selector');
				var themeLogoImage =  jQuery(this).data('logo-image');
				setCookie(optionData+'_logo_selector',themeLogoSelector,1);
				setCookie(optionData+'_logo_image',themeLogoImage,1);
			}else if(optionData == 'themeFullColor'){
				deleteCookie('themeStandardColor_value');
				deleteCookie('themeStandardColor_logo_selector');
				deleteCookie('themeStandardColor_logo_image');
				var themeLogoSelector =  jQuery(this).data('logo-selector');
				var themeLogoImage =  jQuery(this).data('logo-image');
				setCookie(optionData+'_logo_selector',themeLogoSelector,1);
				setCookie(optionData+'_logo_image',themeLogoImage,1);
			}else if(optionData == 'themeStandardColor' || optionData == 'themeFullColor'){
				var themeLogo =  jQuery(this).attr('logo');
				setCookie(optionData+'_logo',themeLogo,1);
			}
			setCookie(optionData+'_value',optionValue,1);
	});
	
	setThemePanel();
	
	//deleteAllCookie();
	//alert(document.cookie);
	//deleteCookie('undefined');
	//setCookie('layout','wide',1);
	//setCookie(themeOption[optionData][optionData+'_value'],data,1);
	/*
	Example - store array in a cookie:

	var arr = ['foo', 'bar', 'baz'];
	var json_str = JSON.stringify(arr);
	createCookie('mycookie', json_str);

	Later on, to retrieve the cookie's contents as an array:

	var json_str = getCookie('mycookie');
	var arr = JSON.parse(json_str);
	*/
	
	
});

function themeFramePadding(){
	var themeOptionFrameValue = getCookie('frame_value');
	if(themeOptionFrameValue == ''){
		themeOptionFrameValue = 20;
	}
	
	$("#slider-range-3").unbind().slider({
			min: 20,
			max: 80,
			value: 20,
			//value: themeOptionFrameValue,
			animate:"slow",
			orientation: "horizontal",
			slide: function( event, ui ) {
				frameSlider = ui.value;
				$('#' + this.id).prev().val(frameSlider+"px");
				$( "#bg" ).css('padding',frameSlider+"px");
				setCookie('frame_value',frameSlider,1);
		   }
	});
}

function setThemePanel(){
	
	jQuery.each(themeOption, function(index, themeOptionItem) {
		themeOptionItemValue = getCookie(themeOptionItem+'_value');
		if(themeOptionItemValue != ''){
				if(themeOptionItem == 'themeStandardColor'){
					jQuery(".skin").attr("href", themeOptionItemValue+".css");
					setThemeLogo(themeOptionItem);
					
					/* To Selected */
					jQuery('.color-skins-db li').removeClass('active');
					jQuery('.color-skins-db [dir="'+themeOptionItemValue+'"]').parent().addClass('active');
				}else if(themeOptionItem == 'themeFullColor'){
					jQuery(".skin").attr("href", themeOptionItemValue+".css");
					setThemeLogo(themeOptionItem);
					
					/* To Selected */
					jQuery('.color-skins li').removeClass('active');
					jQuery('.color-skins [dir="'+themeOptionItemValue+'"]').parent().addClass('active');
					
				}else if(themeOptionItem == 'layout'){
					jQuery('.'+themeOptionItem+'-view li').removeClass('active');
					jQuery('.'+themeOptionItem+'-view').find('.'+themeOptionItemValue).addClass('active');
					if(themeOptionItemValue == 'frame' || themeOptionItemValue == 'boxed'){
						jQuery('.bx-fr-visible').show('slow');
					}
					if(themeOptionItemValue == 'frame'){
						jQuery('#ThemeRangeSlider').show('slow');
						jQuery("body").addClass(themeOptionItemValue);
						themeOptionFrameValue = getCookie('frame_value');
						if(themeOptionFrameValue == ''){
							themeOptionFrameValue = 20;
						}
						jQuery('#FramePadding').val(themeOptionFrameValue+"px");
						jQuery("#bg").css('padding',themeOptionFrameValue+"px");
					}else{
						jQuery("body").addClass(themeOptionItemValue);	
					}
				}else if(themeOptionItem == 'header'){
					jQuery('.'+themeOptionItem+'-view li').removeClass('active');
					if( themeOptionItemValue == 'sticky-header'){
						jQuery('.'+themeOptionItem+'-view').find('.header-fixed').addClass('active');	
					}else if( themeOptionItemValue == 'sticky-no'){
						jQuery('.'+themeOptionItem+'-view').find('.header-static').addClass('active');
					}
					jQuery(".main-bar-wraper").addClass(themeOptionItemValue);
				}else if(themeOptionItem == 'themeMode'){
					if( themeOptionItemValue == 'dark'){
						jQuery("body").addClass('page-dark');
						jQuery("body").removeClass('page-light');
						jQuery('link[href*="css/templete.css"]').after('<link rel="stylesheet" type="text/css" href="css/dark.css">');
					}else if( themeOptionItemValue == 'light'){
						jQuery("body").addClass('page-light');
						jQuery("body").removeClass('page-dark');
						jQuery('link[href*="css/dark.css"]').remove();
					}
					
					
					
					/* To Selected */
					jQuery('.theme-mode li').removeClass('active');
					jQuery('.theme-mode [dir="'+themeOptionItemValue+'"]').parent().addClass('active');
					
				}else if(themeOptionItem == 'bgColor'){
					jQuery('#bg').css('background-color', themeOptionItemValue);
					jQuery('#bg').css('background-image', '');
					/* To Selected */
					jQuery('.bg-color-switcher li').removeClass('active');
					jQuery('.bg-color-switcher [dir="'+themeOptionItemValue+'"]').parent().addClass('active');
				}else if(themeOptionItem == 'bgImage'){
					jQuery('#bg').css({backgroundImage: "url("+themeOptionItemValue+")"});
					/* To Selected */
					jQuery('.background-switcher li').removeClass('active');
					jQuery('.background-switcher [dir="'+themeOptionItemValue+'"]').parent().addClass('active');
				}else if(themeOptionItem == 'bgPatten'){
					jQuery('#bg').css({backgroundImage: "url("+themeOptionItemValue+")"});
					jQuery("#bg").css( "background-size", "auto");
					/* To Selected */
					jQuery('.pattern-switcher li').removeClass('active');
					jQuery('.pattern-switcher [dir="'+themeOptionItemValue+'"]').parent().addClass('active');
				}
		}
	});
	
	var tf_logo_selector = getCookie('themeFullColor_logo_selector');
	var ts_logo_selector = getCookie('themeStandardColor_logo_selector');
		
	if(tf_logo_selector != '')
	{
		var tf_logo_image = getCookie('themeFullColor_logo_image');
		
		var logoSelectorArr = tf_logo_selector.split(',');
		var logoSrcArr		= tf_logo_image.split(',');
		var arrCount = logoSelectorArr.length;
		for(var i=0; i<arrCount; i++){
			jQuery(logoSelectorArr[i]).attr('src',logoSrcArr[i]);
		}
	}
	if(ts_logo_selector != '')
	{
		var ts_logo_image = getCookie('themeStandardColor_logo_image');
		
		var logoSelectorArr = ts_logo_selector.split(',');
		var logoSrcArr		= ts_logo_image.split(',');
		var arrCount = logoSelectorArr.length;
		for(var i=0; i<arrCount; i++){
			jQuery(logoSelectorArr[i]).attr('src',logoSrcArr[i]);
		}
	}
	
}

function setThemeLogo(themeOptionItemAttr){
	var logo = getCookie(themeOptionItemAttr+'_logo');
	if(logo != ''){
		jQuery(".logo-white img").attr("src", logo);
		jQuery(".logo-dark img").attr("src", logo);
		jQuery(".logo-center .logo-c").attr("src", logo);
	}
}


function setCookie(cname, cvalue, exhours) {
		var d = new Date();
		d.setTime(d.getTime() + (30*60*1000)); /* 30 Minutes*/
		var expires = "expires="+ d.toString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteCookie(cname) {
	var d = new Date();
	d.setTime(d.getTime() + (1));
	var expires = "expires="+ d.toString();
	document.cookie = cname + "=;" + expires + ";path=/"; 
}

function deleteAllCookie() {
	jQuery.each(themeOption, function(index, themeOptionItem) {
			deleteCookie(themeOptionItem+'_value');
			deleteCookie(themeOptionItem+'_logo_selector');
			deleteCookie(themeOptionItem+'_logo_image');
	});
	location.reload();
}
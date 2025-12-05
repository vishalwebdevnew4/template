var themeOptionArr = {
	language: '',
	typography: '',
	version: '',
	layout: '',
	primary: '',
	headerBg: '',
	navheaderBg: '',
	sidebarBg: '',
	sidebarStyle: '',
	sidebarPosition: '',
	headerPosition: '',
	containerLayout: '',
	direction: '',
	demo_theme: '',
};
	

(function($) {
	
	"use strict"
	
	var direction =  getUrlParams('dir');
	var theme =  getUrlParams('theme');
	
	/* Dz Theme Demo Settings  */
	var dezThemeSet0 = {
		language: "en_GB",
		typography: "poppins",
		version: "light",
		layout: "vertical",
		primary: "color_1",
		headerBg: "color_1",
		navheaderBg: "color_1",
		sidebarBg: "color_1",
		sidebarStyle: "full",
		sidebarPosition: "fixed",
		headerPosition: "fixed",
		containerLayout: "full",
		direction: direction
	};
	
	var dezThemeSet1 = {
		language: "en_GB",
		typography: "poppins",
		version: "light",
		layout: "vertical",
		primary: "color_1",
		headerBg: "color_1",
		navheaderBg: "color_12",
		sidebarBg: "color_12",
		sidebarStyle: "full",
		sidebarPosition: "fixed",
		headerPosition: "fixed",
		containerLayout: "full",
		direction: direction
	};
	
	var dezThemeSet2 = {
		language: "en_GB",
		typography: "poppins",
		version: "light",
		layout: "vertical",
		primary: "color_9",
		headerBg: "color_1",
		navheaderBg: "color_9",
		sidebarBg: "color_9",
		sidebarStyle: "mini",
		sidebarPosition: "fixed",
		headerPosition: "fixed",
		containerLayout: "full",
		direction: direction
	};
		
	var dezThemeSet3 = {
		language: "en_GB",
		typography: "poppins",
		version: "dark",
		layout: "vertical",
		primary: "color_7",
		headerBg: "color_1",
		navheaderBg: "color_7",
		sidebarBg: "color_7",
		sidebarStyle: "modern",
		sidebarPosition: "fixed",
		headerPosition: "fixed",
		containerLayout: "full",
		direction: direction
	};
	
	var dezThemeSet4 = {
		language: "en_GB",
		typography: "poppins",
		version: "dark",
		layout: "vertical",
		primary: "color_1",
		headerBg: "color_1",
		navheaderBg: "color_1",
		sidebarBg: "color_1",
		sidebarStyle: "mini",
		sidebarPosition: "fixed",
		headerPosition: "fixed",
		containerLayout: "full",
		direction: direction
	};
	
	var dezThemeSet5 = {
		language: "en_GB",
		typography: "poppins",
		version: "light",
		layout: "vertical",
		primary: "color_1",
		headerBg: "color_1",
		navheaderBg: "color_1",
		sidebarBg: "color_1",
		sidebarStyle: "mini",
		sidebarPosition: "fixed",
		headerPosition: "fixed",
		containerLayout: "full",
		direction: direction
	};
	
	var dezThemeSet6 = {
		language: "en_GB",
		typography: "poppins",
		version: "light",
		layout: "horizontal",
		primary: "color_5",
		headerBg: "color_1",
		navheaderBg: "color_1",
		sidebarBg: "color_1",
		sidebarStyle: "full",
		sidebarPosition: "fixed",
		headerPosition: "static",
		containerLayout: "full",
		direction: direction
	};
	
	var dezThemeSet7 = {
		language: "en_GB",
		typography: "poppins",
		version: "light",
		layout: "horizontal",
		primary: "color_2",
		headerBg: "color_1",
		navheaderBg: "color_1",
		sidebarBg: "color_2",
		sidebarStyle: "compact",
		sidebarPosition: "fixed",
		headerPosition: "static",
		containerLayout: "full",
		direction: direction
	};
	
	var dezThemeSet8 = {
		language: "en_GB",
		typography: "poppins",
		version: "light",
		layout: "vertical",
		primary: "color_15",
		headerBg: "color_1",
		navheaderBg: "color_15",
		sidebarBg: "color_1",
		sidebarStyle: "overlay",
		sidebarPosition: "fixed",
		headerPosition: "fixed",
		containerLayout: "wide-boxed",
		direction: direction
	};
	
	var dezThemeSet9 = {
		language: "en_GB",
		typography: "poppins",
		version: "light",
		layout: "horizontal",
		primary: "color_14",
		headerBg: "color_14",
		navheaderBg: "color_14",
		sidebarBg: "color_1",
		sidebarStyle: "full",
		sidebarPosition: "fixed",
		headerPosition: "fixed",
		containerLayout: "full",
		direction: direction
	};
	
	var dezThemeSet10 = {
		language: "en_GB",
		typography: "poppins",
		version: "light",
		layout: "vertical",
		primary: "color_8",
		headerBg: "color_1",
		navheaderBg: "color_8",
		sidebarBg: "color_8",
		sidebarStyle: "compact",
		sidebarPosition: "fixed",
		headerPosition: "fixed",
		containerLayout: "full",
		direction: direction
	};
	
	var dezThemeSet11 = {
		language: "en_GB",
		typography: "poppins",
		version: "light",
		layout: "vertical",
		primary: "color_9",
		headerBg: "color_9",
		navheaderBg: "color_1",
		sidebarBg: "color_1",
		sidebarStyle: "full",
		sidebarPosition: "fixed",
		headerPosition: "fixed",
		containerLayout: "full",
		direction: direction
	};
	
function multiLanguage(){
	var body_lang = $('body').attr('data-language');
	$(`#selectLanguageDropdown .ltool-language.${body_lang}`).click();
	$('#selectLanguageDropdown').removeClass('ltool-is-visible');
}

function themeChange(theme, direction){
	var themeSettings = {};
	themeSettings = eval('dezThemeSet'+theme);
	themeSettings.direction = direction;
	dezSettingsOptions = themeSettings; /* For Screen Resize */
	new dezSettings(themeSettings);
	setThemeInCookie(themeSettings);
	multiLanguage();
}

	function setThemeInCookie(themeSettings){
		jQuery.each(themeSettings, function(optionKey, optionValue) {
			setCookie(optionKey,optionValue);
		});
	}
	
	function setThemeLogo() {
		var logo = getCookie('logo_src');
		
		var logo2 = getCookie('logo_src2');
		
		if(logo != ''){
			jQuery('.nav-header .logo-abbr').attr("src", logo);
		}
		
		if(logo2 != ''){
			jQuery('.nav-header .logo-compact, .nav-header .brand-title').attr("src", logo2);
		}
	}
	
	function setThemeOptionOnPage(){
		if(getCookie('version') != '')
		{
			jQuery.each(themeOptionArr, function(optionKey, optionValue) {
				var optionData = getCookie(optionKey);
				themeOptionArr[optionKey] = (optionData != '')?optionData:dezSettingsOptions[optionKey];
			});
			dezSettingsOptions = themeOptionArr;
			new dezSettings(dezSettingsOptions);
			
			multiLanguage();
			setThemeLogo();
		}
	}
	
	/*  set switcher option start  */
	function getElementAttrs(el) {
		return [].slice.call(el.attributes).map((attr) => {
			return {
				name: attr.name,
				value: attr.value
			}
		});
	}

	function handleSetThemeOption(item, index, arr) {
		
		var attrName = item.name.replace('data-','').replace('-','_');
		
		if(attrName === "sidebarbg" || attrName === "primary" || attrName === "headerbg" || attrName === "nav_headerbg" ){
			if(item.value === "color_1"){
				return false;
			}
			var attrNameColor = attrName.replace("bg","")
			document.getElementById(attrNameColor+"_"+item.value).checked = true;
		}else if(attrName === "navigationbarimg"){
			document.getElementById("sidebar_img_"+item.value.split('sidebar-img/')[1].split('.')[0]).checked = true;
		}else if(attrName === "sidebartext"){
			document.getElementById("sidebar_text_"+item.value).checked = true;
		}else if(attrName === "direction" || attrName === "nav_headerbg" || attrName === "headerbg"){
			document.getElementById("theme_direction").value = item.value;	
		}else if(attrName === "sidebar_style" || attrName === "sidebar_position" || attrName === "header_position" || attrName === "typography" || attrName === "theme_version" ){
			if(item.value === "cairo" || item.value === "full" || item.value === "fixed"|| item.value === "light"){return false}
			document.getElementById(attrName).value = item.value;				
		}else if(attrName === "layout"){
			if(item.value === "vertical"){return false}
			document.getElementById("theme_layout").value = item.value;		
		}
		else if(attrName === "container"){
			if(item.value === "wide"){return false}
			document.getElementById("container_layout").value = item.value;
		}
		
		$('.default-select').selectpicker('refresh');
	}
	/* / set switcher option end / */
	

	$('.dz-demo-trigger').on('click', function() {
		$('.dz-demo-panel').addClass('show');
	});
	$('.dz-demo-close, .bg-close').on('click', function() {
		$('.dz-demo-panel').removeClass('show');
	});
	
	
	$('.dz-demo-bx').on('click', function() {
		$('.dz-demo-bx').addClass('demo-active');
		$(this).addClass('demo-active');
	});

	jQuery(document).on('click', '.dz_theme_demo', function(){
		setTimeout(() => {
			var allAttrs = getElementAttrs(document.querySelector('body'));
			allAttrs.forEach(handleSetThemeOption);
		},1500);
		var demoTheme = jQuery(this).data('theme');
		themeChange(demoTheme, 'ltr');
		setCookie('demo_theme',demoTheme);
		jQuery('.main-css').attr('href','assets/css/style.css');
	});
	
	jQuery(document).on('click', '.dz_theme_demo_rtl', function(){
		var demoTheme = jQuery(this).data('theme');
		themeChange(demoTheme, 'rtl');
		setCookie('demo_theme',demoTheme);
		jQuery('.main-css').attr('href','assets/css/style-rtl.css');
	});
	
	jQuery(window).on('load', function(){
		direction = (direction != undefined)?direction:'ltr';
		if(getCookie('direction') == 'rtl'){
			jQuery('.main-css').attr('href','assets/css/style-rtl.css');
		}

		if(getCookie('demo_theme') != ''){
			$('.dz_theme_demo[data-theme="'+getCookie('demo_theme')+'"]').closest('.dz-demo-bx').addClass('demo-active');
		}
		
		if(theme != undefined){
			if(theme == 'rtl'){
				themeChange(0, 'rtl');
				jQuery('.main-css').attr('href','assets/css/style-rtl.css');
			}else {
				themeChange(theme, direction);
			}
			
		}
		else if(direction != undefined){
			if(getCookie('version') == ''){	
				themeChange(0, direction);
			}
		}

		setTimeout(() => {
			var allAttrs = getElementAttrs(document.querySelector('body'));
			allAttrs.forEach(handleSetThemeOption);
		},1500);

		/* Set Theme On Page From Cookie */
		setThemeOptionOnPage();
		
	});
	
	jQuery(window).on('resize', function(){
		setThemeOptionOnPage();
	});

})(jQuery);
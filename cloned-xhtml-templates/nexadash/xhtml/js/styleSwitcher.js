"use strict"
function addSwitcher()
{
	var dzSwitcher='<div class=sidebar-right><div class=bg-overlay></div><span><a class="sidebar-right-trigger wave-effect wave-effect-x"href=javascript:void(0); data-bs-toggle=tooltip data-original-title="Change Layout"data-placement=right><span><i class="fa fa-cog fa-spin"></i></span></a><a class=sidebar-close-trigger href=javascript:void(0);><span><i class="la-times las"></i></span></a><div class=sidebar-right-inner><div class=customiz><h4>Customize</h4><span>Customize Your Style And Preferences</span></div><div class="dz-scroll switcher-scroll"><div><span>THEME</span></div><div class=admin-settings><div class=row><div class=col-sm-12><div class="align-items-center d-flex justify-content-between select-thems"><div class=d-mode><svg fill=none height=24 viewBox="0 0 24 24"width=24 xmlns=http://www.w3.org/2000/svg><g clip-path=url(#clip0_4_82)><path d="M12.025 23.3407L8.62955 20.0479H3.95118V15.3728L0.584229 12L3.95208 8.62704V3.94519H8.6272L12.025 0.572266L15.3731 3.94497H20.055V8.62694L23.4277 12L20.0549 15.3704V20.0488H15.3728L12.025 23.3407ZM12.025 18.3445C13.7812 18.3445 15.2745 17.7251 16.5049 16.4863C17.7353 15.2474 18.3506 13.7439 18.3506 11.9757C18.3506 10.2214 17.7348 8.72844 16.5034 7.49684C15.2719 6.26524 13.7791 5.64944 12.025 5.64944V18.3445ZM12.025 20.9538L14.6609 18.347H18.3513V14.6568L21.0098 12L18.3493 9.33697V5.64874H14.6645L12.025 2.99022L9.34323 5.64874H5.65298V9.33547L2.9962 12L5.65545 14.6592V18.3445H9.31575L12.025 20.9538Z"fill=#6F767E></path></g><defs><clipPath id=clip0_4_82><rect height=24 width=24 fill=white></rect></clipPath></defs></svg> <span class=ms-2>Dark Mode</span></div><div class="form-check form-switch me-4 text-end toggle-switch"><input class=form-check-input id=flexSwitchCheckDefault type=checkbox> <label for=flexSwitchCheckDefault class=form-check-label></label></div></div></div><div class=col-sm-12><div class="align-items-center d-flex justify-content-between select-thems"><div><svg fill=none height=24 viewBox="0 0 24 24"width=24 xmlns=http://www.w3.org/2000/svg><rect height=20 width=20 rx=3 x=2 y=2 stroke=#6F767E stroke-width=2 /><path d="M1 5C1 2.79086 2.79086 1 5 1H9V23H5C2.79086 23 1 21.2091 1 19V5Z"fill=#6F767E /></svg> <span class=ms-2>Sidebar Position Fixed</span></div><div class="form-check form-switch me-4 text-end toggle-switch"><input class=form-check-input id=sidebar_position type=checkbox> <label for=sidebar_position class=form-check-label></label></div></div></div><div class=col-sm-12><div class="align-items-center d-flex justify-content-between select-thems"><div><svg fill=none height=24 viewBox="0 0 24 24"width=24 xmlns=http://www.w3.org/2000/svg><rect height=20 width=20 rx=3 x=2 y=2 stroke=#6F767E stroke-width=2 /><path d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V8H1V5Z"fill=#6F767E /></svg> <span class=ms-2>Header Static</span></div><div class="form-check form-switch me-4 text-end toggle-switch"><input class=form-check-input id=header_position type=checkbox> <label for=header_position class=form-check-label></label></div></div></div><div class=col-sm-12><div class="align-items-center d-flex justify-content-between select-thems"><div><svg fill=none height=24 viewBox="0 0 24 24"width=24 xmlns=http://www.w3.org/2000/svg><rect height=20 width=20 rx=3 x=2 y=2 stroke=#6F767E stroke-width=2 /><path d="M1 5C1 2.79086 2.79086 1 5 1H19C21.2091 1 23 2.79086 23 5V8H1V5Z"fill=#6F767E /></svg> <span class=ms-2>Header Horizontal</span></div><div class="form-check form-switch me-4 text-end toggle-switch"><input class=form-check-input id=theme_layout type=checkbox> <label for=theme_layout class=form-check-label></label></div></div></div><div class="col-sm-12 sidebar-btn"><p>Sidebar Style<div class=btn-group aria-label="Basic radio toggle button group"id=sidebar_style role=group><div class=row><div class="col-md-6 col-xl-4 p-0"><input class=btn-check id=btnradio1 type=radio name=btnradio value=full autocomplete=off checked> <label for=btnradio1 class="btn btn-outline-primary"><svg fill=none height=96 viewBox="0 0 121 96"width=121 xmlns=http://www.w3.org/2000/svg><g filter=url(#filter0_d_178_1879)><rect height=80 width=105 rx=5 x=8 y=4 fill=white /><rect height=79 width=104 rx=4.5 x=8.5 y=4.5 stroke=#AFBECC /></g><path d="M12 4.5H37.5V83.5H12C10.067 83.5 8.5 81.933 8.5 80V8C8.5 6.067 10.067 4.5 12 4.5Z"fill=#AFBECC stroke=#AFBECC /><defs><filter color-interpolation-filters=sRGB filterUnits=userSpaceOnUse height=96 id=filter0_d_178_1879 width=121 x=0 y=0><feFlood flood-opacity=0 result=BackgroundImageFix /><feColorMatrix type=matrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"in=SourceAlpha result=hardAlpha /><feOffset dy=4 /><feGaussianBlur stdDeviation=4 /><feComposite in2=hardAlpha operator=out /><feColorMatrix type=matrix values="0 0 0 0 0.65 0 0 0 0 0.725 0 0 0 0 0.8 0 0 0 0.1 0"/><feBlend in2=BackgroundImageFix mode=normal result=effect1_dropShadow_178_1879 /><feBlend in2=effect1_dropShadow_178_1879 mode=normal result=shape in=SourceGraphic /></filter></defs></svg> <span>Full</span></label></div><div class="col-md-6 col-xl-4 p-0"><input class=btn-check id=btnradio2 type=radio name=btnradio value=mini autocomplete=off> <label for=btnradio2 class="btn btn-outline-primary"><svg fill=none height=96 viewBox="0 0 121 96"width=121 xmlns=http://www.w3.org/2000/svg><g filter=url(#filter0_d_178_1874)><rect height=80 width=105 rx=5 x=8 y=4 fill=white /><rect height=79 width=104 rx=4.5 x=8.5 y=4.5 stroke=#AFBECC /></g><path d="M8.5 8C8.5 6.067 10.067 4.5 12 4.5H15.5V83.5H12C10.067 83.5 8.5 81.933 8.5 80V8Z"fill=#AFBECC stroke=#AFBECC /><defs><filter color-interpolation-filters=sRGB filterUnits=userSpaceOnUse height=96 id=filter0_d_178_1874 width=121 x=0 y=0><feFlood flood-opacity=0 result=BackgroundImageFix /><feColorMatrix type=matrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"in=SourceAlpha result=hardAlpha /><feOffset dy=4 /><feGaussianBlur stdDeviation=4 /><feComposite in2=hardAlpha operator=out /><feColorMatrix type=matrix values="0 0 0 0 0.65 0 0 0 0 0.725 0 0 0 0 0.8 0 0 0 0.1 0"/><feBlend in2=BackgroundImageFix mode=normal result=effect1_dropShadow_178_1874 /><feBlend in2=effect1_dropShadow_178_1874 mode=normal result=shape in=SourceGraphic /></filter></defs></svg><span>Mini</span></label></div><div class="col-md-6 col-xl-4 p-0"><input class=btn-check id=btnradio3 type=radio name=btnradio value=compact autocomplete=off> <label for=btnradio3 class="btn btn-outline-primary"><svg fill=none height=96 viewBox="0 0 121 96"width=121 xmlns=http://www.w3.org/2000/svg><g filter=url(#filter0_d_178_1885)><rect height=80 width=105 rx=5 x=8 y=4 fill=white /><rect height=79 width=104 rx=4.5 x=8.5 y=4.5 stroke=#AFBECC /></g><path d="M8.5 8C8.5 6.067 10.067 4.5 12 4.5H27.5V83.5H12C10.067 83.5 8.5 81.933 8.5 80V8Z"fill=#AFBECC stroke=#AFBECC /><defs><filter color-interpolation-filters=sRGB filterUnits=userSpaceOnUse height=96 id=filter0_d_178_1885 width=121 x=0 y=0><feFlood flood-opacity=0 result=BackgroundImageFix /><feColorMatrix type=matrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"in=SourceAlpha result=hardAlpha /><feOffset dy=4 /><feGaussianBlur stdDeviation=4 /><feComposite in2=hardAlpha operator=out /><feColorMatrix type=matrix values="0 0 0 0 0.65 0 0 0 0 0.725 0 0 0 0 0.8 0 0 0 0.1 0"/><feBlend in2=BackgroundImageFix mode=normal result=effect1_dropShadow_178_1885 /><feBlend in2=effect1_dropShadow_178_1885 mode=normal result=shape in=SourceGraphic /></filter></defs></svg> <span>Compact</span></label></div><div class="col-md-6 col-xl-4 p-0"><input class=btn-check id=btnradio4 type=radio name=btnradio value=modern autocomplete=off> <label for=btnradio4 class="btn btn-outline-primary"><svg fill=none height=96 viewBox="0 0 121 96"width=121 xmlns=http://www.w3.org/2000/svg><g filter=url(#filter0_d_178_1900)><rect height=80 width=105 rx=5 x=8 y=4 fill=white /><rect height=79 width=104 rx=4.5 x=8.5 y=4.5 stroke=#AFBECC /></g><path d="M8.5 8C8.5 6.067 10.067 4.5 12 4.5H27.5V83.5H12C10.067 83.5 8.5 81.933 8.5 80V8Z"fill=#AFBECC stroke=#AFBECC /><path d="M28 4H44C45.6569 4 47 5.34315 47 7V41C47 42.6569 45.6569 44 44 44H28V4Z"fill=#AFBECC opacity=0.5 /><defs><filter color-interpolation-filters=sRGB filterUnits=userSpaceOnUse height=96 id=filter0_d_178_1900 width=121 x=0 y=0><feFlood flood-opacity=0 result=BackgroundImageFix /><feColorMatrix type=matrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"in=SourceAlpha result=hardAlpha /><feOffset dy=4 /><feGaussianBlur stdDeviation=4 /><feComposite in2=hardAlpha operator=out /><feColorMatrix type=matrix values="0 0 0 0 0.65 0 0 0 0 0.725 0 0 0 0 0.8 0 0 0 0.1 0"/><feBlend in2=BackgroundImageFix mode=normal result=effect1_dropShadow_178_1900 /><feBlend in2=effect1_dropShadow_178_1900 mode=normal result=shape in=SourceGraphic /></filter></defs></svg> <span>Modern</span></label></div><div class="col-md-6 col-xl-4 p-0"><input class=btn-check id=btnradio5 type=radio name=btnradio value=overlay autocomplete=off> <label for=btnradio5 class="btn btn-outline-primary"><svg fill=none height=96 viewBox="0 0 121 96"width=121 xmlns=http://www.w3.org/2000/svg><g filter=url(#filter0_d_178_1890)><rect height=80 width=105 rx=5 x=8 y=4 fill=white /><rect height=79 width=104 rx=4.5 x=8.5 y=4.5 stroke=#AFBECC /></g><path d="M8.5 8C8.5 6.067 10.067 4.5 12 4.5H37.5V83.5H12C10.067 83.5 8.5 81.933 8.5 80V8Z"fill=#AFBECC stroke=#AFBECC /><path d="M38.5 4.5H109C110.933 4.5 112.5 6.067 112.5 8V80C112.5 81.933 110.933 83.5 109 83.5H38.5V4.5Z"fill=#AFBECC stroke=#AFBECC opacity=0.3 /><defs><filter color-interpolation-filters=sRGB filterUnits=userSpaceOnUse height=96 id=filter0_d_178_1890 width=121 x=0 y=0><feFlood flood-opacity=0 result=BackgroundImageFix /><feColorMatrix type=matrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"in=SourceAlpha result=hardAlpha /><feOffset dy=4 /><feGaussianBlur stdDeviation=4 /><feComposite in2=hardAlpha operator=out /><feColorMatrix type=matrix values="0 0 0 0 0.65 0 0 0 0 0.725 0 0 0 0 0.8 0 0 0 0.1 0"/><feBlend in2=BackgroundImageFix mode=normal result=effect1_dropShadow_178_1890 /><feBlend in2=effect1_dropShadow_178_1890 mode=normal result=shape in=SourceGraphic /></filter></defs></svg> <span>Overlay</span></label></div><div class="col-md-6 col-xl-4 p-0"><input class=btn-check id=btnradio6 type=radio name=btnradio value=icon-hover autocomplete=off> <label for=btnradio6 class="btn btn-outline-primary"><svg fill=none height=96 viewBox="0 0 121 96"width=121 xmlns=http://www.w3.org/2000/svg><g filter=url(#filter0_d_178_1895)><rect height=80 width=105 rx=5 x=8 y=4 fill=white /><rect height=79 width=104 rx=4.5 x=8.5 y=4.5 stroke=#AFBECC /></g><path d="M9.5 8C9.5 6.067 11.067 4.5 13 4.5H20.5V83.5H13C11.067 83.5 9.5 81.933 9.5 80V8Z"fill=#AFBECC stroke=#AFBECC /><rect height=6 width=6 rx=2 x=12 y=51 fill=white /><rect height=6 width=6 rx=2 x=12 y=11 fill=white /><rect height=6 width=6 rx=2 x=12 y=21 fill=white /><rect height=6 width=6 rx=2 x=12 y=31 fill=white /><rect height=6 width=6 rx=2 x=12 y=41 fill=white /><defs><filter color-interpolation-filters=sRGB filterUnits=userSpaceOnUse height=96 id=filter0_d_178_1895 width=121 x=0 y=0><feFlood flood-opacity=0 result=BackgroundImageFix /><feColorMatrix type=matrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"in=SourceAlpha result=hardAlpha /><feOffset dy=4 /><feGaussianBlur stdDeviation=4 /><feComposite in2=hardAlpha operator=out /><feColorMatrix type=matrix values="0 0 0 0 0.65 0 0 0 0 0.725 0 0 0 0 0.8 0 0 0 0.1 0"/><feBlend in2=BackgroundImageFix mode=normal result=effect1_dropShadow_178_1895 /><feBlend in2=effect1_dropShadow_178_1895 mode=normal result=shape in=SourceGraphic /></filter></defs></svg> <span>Icon Hover</span></label></div></div></div></div><div class="col-sm-12 main-color"><p>Primary Color<div><span data-bs-toggle=tooltip data-placement=top title="Color 1"><input class="chk-col-primary filled-in"id=primary_color_1 type=radio name=primary_bg value=color_1> <label for=primary_color_1 class=bg-label-pattern></label> </span><span><input class="chk-col-primary filled-in"id=primary_color_2 type=radio name=primary_bg value=color_2> <label for=primary_color_2></label> </span><span><input class="chk-col-primary filled-in"id=primary_color_3 type=radio name=primary_bg value=color_3> <label for=primary_color_3></label> </span><span><input class="chk-col-primary filled-in"id=primary_color_4 type=radio name=primary_bg value=color_4> <label for=primary_color_4></label> </span><span><input class="chk-col-primary filled-in"id=primary_color_5 type=radio name=primary_bg value=color_5> <label for=primary_color_5></label> </span><span><input class="chk-col-primary filled-in"id=primary_color_6 type=radio name=primary_bg value=color_6> <label for=primary_color_6></label> </span><span><input class="chk-col-primary filled-in"id=primary_color_7 type=radio name=primary_bg value=color_7> <label for=primary_color_7></label> </span><span><input class="chk-col-primary filled-in"id=primary_color_8 type=radio name=primary_bg value=color_8> <label for=primary_color_8></label> </span><span><input class="chk-col-primary filled-in"id=primary_color_9 type=radio name=primary_bg value=color_9> <label for=primary_color_9></label> </span><span><input class="chk-col-primary filled-in"id=primary_color_10 type=radio name=primary_bg value=color_10> <label for=primary_color_10></label></span></div></div><div class="col-sm-12 main-color"><p>Navigation Header<div><span><input class="chk-col-primary filled-in"id=nav_header_color_1 type=radio name=navigation_header value=color_1> <label for=nav_header_color_1 class=bg-label-pattern></label> </span><span><input class="chk-col-primary filled-in"id=nav_header_color_2 type=radio name=navigation_header value=color_2> <label for=nav_header_color_2></label> </span><span><input class="chk-col-primary filled-in"id=nav_header_color_3 type=radio name=navigation_header value=color_3> <label for=nav_header_color_3></label> </span><span><input class="chk-col-primary filled-in"id=nav_header_color_4 type=radio name=navigation_header value=color_4> <label for=nav_header_color_4></label> </span><span><input class="chk-col-primary filled-in"id=nav_header_color_5 type=radio name=navigation_header value=color_5> <label for=nav_header_color_5></label> </span><span><input class="chk-col-primary filled-in"id=nav_header_color_6 type=radio name=navigation_header value=color_6> <label for=nav_header_color_6></label> </span><span><input class="chk-col-primary filled-in"id=nav_header_color_7 type=radio name=navigation_header value=color_7> <label for=nav_header_color_7></label> </span><span><input class="chk-col-primary filled-in"id=nav_header_color_8 type=radio name=navigation_header value=color_8> <label for=nav_header_color_8 class=border></label> </span><span><input class="chk-col-primary filled-in"id=nav_header_color_9 type=radio name=navigation_header value=color_9> <label for=nav_header_color_9></label> </span><span><input class="chk-col-primary filled-in"id=nav_header_color_10 type=radio name=navigation_header value=color_10> <label for=nav_header_color_10></label></span></div></div><div class="col-sm-12 main-color"><p>Header Color<div><span><input class="chk-col-primary filled-in"id=header_color_1 type=radio name=header_bg value=color_1> <label for=header_color_1 class=bg-label-pattern></label> </span><span><input class="chk-col-primary filled-in"id=header_color_2 type=radio name=header_bg value=color_2> <label for=header_color_2></label> </span><span><input class="chk-col-primary filled-in"id=header_color_3 type=radio name=header_bg value=color_3> <label for=header_color_3></label> </span><span><input class="chk-col-primary filled-in"id=header_color_4 type=radio name=header_bg value=color_4> <label for=header_color_4></label> </span><span><input class="chk-col-primary filled-in"id=header_color_5 type=radio name=header_bg value=color_5> <label for=header_color_5></label> </span><span><input class="chk-col-primary filled-in"id=header_color_6 type=radio name=header_bg value=color_6> <label for=header_color_6></label> </span><span><input class="chk-col-primary filled-in"id=header_color_7 type=radio name=header_bg value=color_7> <label for=header_color_7></label> </span><span><input class="chk-col-primary filled-in"id=header_color_8 type=radio name=header_bg value=color_8> <label for=header_color_8 class=border></label> </span><span><input class="chk-col-primary filled-in"id=header_color_9 type=radio name=header_bg value=color_9> <label for=header_color_9></label> </span><span><input class="chk-col-primary filled-in"id=header_color_10 type=radio name=header_bg value=color_10> <label for=header_color_10></label></span></div></div><div class="col-sm-12 main-color"><p>Sidebar Color<div><span><input class="chk-col-primary filled-in"id=sidebar_color_1 type=radio name=sidebar_bg value=color_1> <label for=sidebar_color_1 class=bg-label-pattern></label> </span><span><input class="chk-col-primary filled-in"id=sidebar_color_2 type=radio name=sidebar_bg value=color_2> <label for=sidebar_color_2></label> </span><span><input class="chk-col-primary filled-in"id=sidebar_color_3 type=radio name=sidebar_bg value=color_3> <label for=sidebar_color_3></label> </span><span><input class="chk-col-primary filled-in"id=sidebar_color_4 type=radio name=sidebar_bg value=color_4> <label for=sidebar_color_4></label> </span><span><input class="chk-col-primary filled-in"id=sidebar_color_5 type=radio name=sidebar_bg value=color_5> <label for=sidebar_color_5></label> </span><span><input class="chk-col-primary filled-in"id=sidebar_color_6 type=radio name=sidebar_bg value=color_6> <label for=sidebar_color_6></label> </span><span><input class="chk-col-primary filled-in"id=sidebar_color_7 type=radio name=sidebar_bg value=color_7> <label for=sidebar_color_7></label> </span><span><input class="chk-col-primary filled-in"id=sidebar_color_8 type=radio name=sidebar_bg value=color_8> <label for=sidebar_color_8 class=border></label> </span><span><input class="chk-col-primary filled-in"id=sidebar_color_9 type=radio name=sidebar_bg value=color_9> <label for=sidebar_color_9></label> </span><span><input class="chk-col-primary filled-in"id=sidebar_color_10 type=radio name=sidebar_bg value=color_10> <label for=sidebar_color_10></label></span></div></div></div></div><div class="align-items-center d-flex justify-content-between my-4"><a class="btn pull-right w-50 btn-danger me-2"href=javascript:void(0); onclick=deleteAllCookie()>Reset</a><a class="btn pull-right w-50 btn-primary ms-2"href=javascript:void(0);>Preview</a></div></div><div class=note-text><span class=text-danger>*Note :</span> This theme switcher is not part of product. It is only for demo. you will get all guideline in documentation. please check <a class=text-primary href=https://nexadash.dexignzone.com/doc target=_blank>documentation.</a></div></div></div>';
	
	
	var demoPanel='<div class=dz-demo-panel><div class=bg-close></div><a class=dz-demo-trigger href=javascript:void(0) data-original-title="Check out more demos"data-placement=right data-toggle=tooltip><span><i class="las la-tint"></i></span></a><div class=dz-demo-inner><a class="btn btn-sm btn-primary mb-3 px-2 py-1"href=javascript:void(0); onclick=deleteAllCookie()>Delete All Cookie</a><div class=dz-demo-header><h4>Select A Demo</h4><a class=dz-demo-close href=javascript:void(0)><span><i class="las la-times"></i></span></a></div><div class=dz-demo-content><div class="dz-wrapper row"><div class="col-md-6 col-xl-3 mb-4"><div class="dz-demo-bx overlay-bx demo-active"><div class=overlay-wrapper><img alt=""class=w-100 src=images/demo/pic1.jpg></div><div class=overlay-layer><a class="btn btn-sm btn-secondary dz_theme_demo mr-2"href=index.html target=_blank data-theme=1>Demo 1</a></div></div><h5 class="mb-3 text-white">Demo 1</h5></div><div class="col-md-6 col-xl-3 mb-4"><div class="dz-demo-bx overlay-bx"><div class=overlay-wrapper><img alt=""class=w-100 src=images/demo/pic2.jpg></div><div class=overlay-layer><a class="btn btn-sm btn-secondary dz_theme_demo mr-2"href=crm.html target=_blank data-theme=2>Demo 2</a></div></div><h5 class="mb-3 text-white">Demo 2</h5></div><div class="col-md-6 col-xl-3 mb-4"><div class="dz-demo-bx overlay-bx"><div class=overlay-wrapper><img alt=""class=w-100 src=images/demo/pic3.jpg></div><div class=overlay-layer><a class="btn btn-sm btn-secondary dz_theme_demo mr-2"href=finance.html target=_blank data-theme=3>Demo 3</a></div></div><h5 class="mb-3 text-white">Demo 3</h5></div><div class="col-md-6 col-xl-3 mb-4"><div class="dz-demo-bx overlay-bx"><div class=overlay-wrapper><img alt=""class=w-100 src=images/demo/pic4.jpg></div><div class=overlay-layer><a class="btn btn-sm btn-secondary dz_theme_demo mr-2"href=analytics.html target=_blank data-theme=4>Demo 4</a></div></div><h5 class="mb-3 text-white">Demo 4</h5></div><div class="col-md-6 col-xl-3 mb-4"><div class="dz-demo-bx overlay-bx"><div class=overlay-wrapper><img alt=""class=w-100 src=images/demo/pic5.jpg></div><div class=overlay-layer><a class="btn btn-sm btn-secondary dz_theme_demo mr-2"href=index-3.html target=_blank data-theme=5>Demo 5</a></div></div><h5 class="mb-3 text-white">Demo 5</h5></div><div class="col-md-6 col-xl-3 mb-4"><div class="dz-demo-bx overlay-bx"><div class=overlay-wrapper><img alt=""class=w-100 src=images/demo/pic6.jpg></div><div class=overlay-layer><a class="btn btn-sm btn-secondary dz_theme_demo mr-2"href=ecommerce.html target=_blank data-theme=6>Demo 6</a></div></div><h5 class="mb-3 text-white">Demo 6</h5></div><div class="col-md-6 col-xl-3 mb-4"><div class="dz-demo-bx overlay-bx"><div class=overlay-wrapper><img alt=""class=w-100 src=images/demo/pic7.jpg></div><div class=overlay-layer><a class="btn btn-sm btn-secondary dz_theme_demo mr-2"href=course.html target=_blank data-theme=7>Demo 7</a></div></div><h5 class="mb-3 text-white">Demo 7</h5></div><div class="col-md-6 col-xl-3 mb-4"><div class="dz-demo-bx overlay-bx"><div class=overlay-wrapper><img alt=""class=w-100 src=images/demo/pic8.jpg></div><div class=overlay-layer><a class="btn btn-sm btn-secondary dz_theme_demo mr-2"href=medical.html target=_blank data-theme=8>Demo 8</a></div></div><h5 class="mb-3 text-white">Demo 8</h5></div></div></div><div class=note-text><span class=text-danger>*Note :</span> This theme switcher is not part of product. It is only for demo. you will get all guideline in documentation. please check <a class=text-primary href=https://nexadash.dexignzone.com/doc target=_blank>documentation.</a></div></div></div>';
	if($("#dzSwitcher").length == 0) {
		jQuery('body').append(dzSwitcher+demoPanel);
		
			
		 //const ps = new PerfectScrollbar('.sidebar-right-inner');
		 //console.log(ps.reach.x);	
			//ps.isRtl = false;
				
		  $('.sidebar-right-trigger,.sidebar-switcher-trigger').on('click', function() {
				$('.sidebar-right').toggleClass('show');
		  });
		  $('.sidebar-close-trigger,.bg-overlay').on('click', function() {
				$('.sidebar-right').removeClass('show');
		  });
	}
}

(function($) {
    "use strict"
	addSwitcher();

	
    const body = $('body');
    const html = $('html');

    //get the DOM elements from right sidebar
    const typographySelect = $('#typography');
    const versionSelect = $('#flexSwitchCheckDefault');
    const layoutSelect = $('#theme_layout');
    const sidebarStyleSelect = $('#sidebar_style');
    const sidebarPositionSelect = $('#sidebar_position');
    const headerPositionSelect = $('#header_position');
    const containerLayoutSelect = $('#container_layout');
    const themeDirectionSelect = $('#theme_direction');

    //change the theme typography controller
    typographySelect.on('change', function() {
        body.attr('data-typography', this.value);
		
		setCookie('typography', this.value);
    });

    //change the theme version controller
    versionSelect.on('change', function() {
		body.attr('data-theme-version', this.value);
		
		var themeVersion = 'light';
		if(jQuery(this).is(':checked')){
			themeVersion = 'dark';
		}
		body.attr('data-theme-version', themeVersion);
		setCookie('version', themeVersion);
		
		/* if(this.value === 'dark'){
			//jQuery(".nav-header .logo-abbr").attr("src", "./images/logo-white.png");
			jQuery(".nav-header .logo-compact").attr("src", "images/logo-text-white.png");
			jQuery(".nav-header .brand-title").attr("src", "images/logo-text-white.png");
			
			setCookie('logo_src', './images/logo-white.png');
			setCookie('logo_src2', 'images/logo-text-white.png');
		}else{
			jQuery(".nav-header .logo-abbr").attr("src", "./images/logo.png");
			jQuery(".nav-header .logo-compact").attr("src", "images/logo-text.png");
			jQuery(".nav-header .brand-title").attr("src", "images/logo-text.png");
			
			setCookie('logo_src', './images/logo.png');
			setCookie('logo_src2', 'images/logo-text.png');
		} */
		
    }); 
	
	

    //change the sidebar position controller
    sidebarPositionSelect.on('change', function() {
		const value = this.checked === false ?  'fixed' : 'static';
        value === "fixed" && body.attr('data-sidebar-style') === "modern" && body.attr('data-layout') === "vertical" ? 
        alert("Sorry, Modern sidebar layout dosen't support fixed position!") :
        body.attr('data-sidebar-position', value);
		setCookie('sidebarPosition', value);
    });

    //change the header position controller
    headerPositionSelect.on('change', function() {
		const value = this.checked === false ?  'fixed' : 'static';
        body.attr('data-header-position', value);
		setCookie('headerPosition', value);
    });

    //change the theme direction (rtl, ltr) controller
    themeDirectionSelect.on('change', function() {
        html.attr('dir', this.value);
        html.attr('class', '');
        html.addClass(this.value);
        body.attr('direction', this.value);
		setCookie('direction', this.value);
    });

    //change the theme layout controller
    layoutSelect.on('change', function() {
        if(body.attr('data-sidebar-style') === 'overlay') {
            body.attr('data-sidebar-style', 'full');
            body.attr('data-layout', this.value);
            return;
        }
		const value = this.checked === true ?  'horizontal' : 'vertical';
        body.attr('data-layout', value);
		setCookie('layout', value);
    });
    
    //change the container layout controller
    containerLayoutSelect.on('change', function() {
        if(this.value === "boxed") {

            if(body.attr('data-layout') === "vertical" && body.attr('data-sidebar-style') === "full") {
                body.attr('data-sidebar-style', 'overlay');
                body.attr('data-container', this.value);
                
                setTimeout(function(){
                    $(window).trigger('resize');
                },200);
                
                return;
            }
            
            
        }

        body.attr('data-container', this.value);
		setCookie('containerLayout', this.value);
    });

    //change the sidebar style controller
	
	$('#sidebar_style input').on('change', function() {
		var sidebarVal = $('#sidebar_style input:radio:checked').val();
		
		if(body.attr('data-layout') === "horizontal") {
            if(sidebarVal === "overlay") {
                alert("Sorry! Overlay is not possible in Horizontal layout.");
                return;
            }
        }

        if(body.attr('data-layout') === "vertical") {
            if(body.attr('data-container') === "boxed" && sidebarVal === "full") {
                alert("Sorry! Full menu is not available in Vertical Boxed layout.");
                return;
            }

            if(sidebarVal === "modern" && body.attr('data-sidebar-position') === "fixed") {
                alert("Sorry! Modern sidebar layout is not available in the fixed position. Please change the sidebar position into Static.");
                return;
            }
        }
		
        body.attr('data-sidebar-style', sidebarVal);

        if(body.attr('data-sidebar-style') === 'icon-hover') {
            $('.deznav').hover(function() {
			$('#main-wrapper').addClass('iconhover-toggle'); 
            }, function() {
			$('#main-wrapper').removeClass('iconhover-toggle'); 
            });
        } 
		
		setCookie('sidebarStyle', sidebarVal);
		
	});
	
    /* sidebarStyleSelect.on('change', function() {
        if(body.attr('data-layout') === "horizontal") {
            if(this.value === "overlay") {
                alert("Sorry! Overlay is not possible in Horizontal layout.");
                return;
            }
        }

        if(body.attr('data-layout') === "vertical") {
            if(body.attr('data-container') === "boxed" && this.value === "full") {
                alert("Sorry! Full menu is not available in Vertical Boxed layout.");
                return;
            }

            if(this.value === "modern" && body.attr('data-sidebar-position') === "fixed") {
                alert("Sorry! Modern sidebar layout is not available in the fixed position. Please change the sidebar position into Static.");
                return;
            }
        }
		
        body.attr('data-sidebar-style', this.value);

         if(body.attr('data-sidebar-style') === 'icon-hover') {
            $('.deznav').on('hover',function() {
			$('#main-wrapper').addClass('iconhover-toggle'); 
            }, function() {
			$('#main-wrapper').removeClass('iconhover-toggle'); 
            });
        } 
		
		setCookie('sidebarStyle', this.value);
	}); */

    
	
	/* jQuery("#nav_header_color_1").on('click',function(){
		jQuery(".nav-header .logo-abbr").attr("src", "./images/logo.png");
		setCookie('logo_src', './images/logo.png');
		return false;
    }); */
    
	/* jQuery("#sidebar_color_2, #sidebar_color_3, #sidebar_color_4, #sidebar_color_5, #sidebar_color_6, #sidebar_color_7, #sidebar_color_8, #sidebar_color_9, #sidebar_color_10, #sidebar_color_11, #sidebar_color_12, #sidebar_color_13, #sidebar_color_14, #sidebar_color_15").on('click',function(){
		jQuery(".nav-header .logo-abbr").attr("src", "./images/logo-white.png");
		jQuery(".nav-header .brand-title").attr("src", "./images/logo-text-white.png");
		setCookie('logo_src', './images/logo-white.png');
		return false;
    }); */
   
    /* jQuery("#nav_header_color_3").on('click',function(){
		jQuery(".nav-header .logo-abbr").attr("src", "./images/logo-white.png");
		setCookie('logo_src', './images/logo-white.png');
		return false;
    }); */

	
	//change the nav-header background controller
    $('input[name="navigation_header"]').on('click', function() {
		body.attr('data-nav-headerbg', this.value);
		setCookie('navheaderBg', this.value);
    });
	
    //change the header background controller
    $('input[name="header_bg"]').on('click', function() {
        body.attr('data-headerbg', this.value);
		setCookie('headerBg', this.value);
    });

    //change the sidebar background controller
    $('input[name="sidebar_bg"]').on('click', function() {
        body.attr('data-sidebarbg', this.value);
		setCookie('sidebarBg', this.value);
    });
	
	//change the primary color controller
    $('input[name="primary_bg"]').on('click', function() {
        body.attr('data-primary', this.value);
		setCookie('primary', this.value);
    });
	$('input[name="secondary_bg"]').on('click', function() {
        body.attr('data-secondary', this.value);
		setCookie('secondary', this.value);
    });
	
	
	

})(jQuery);

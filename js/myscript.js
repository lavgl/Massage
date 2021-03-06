// var SERVER_PROTOCOL = 'http';
// // var SERVER_HOST = '146.185.176.42';
// var SERVER_HOST = 'localhost';
// // var SERVER_PORT = 3000;
// var SERVER_PORT = 3004;
// var API_PATH = '/api/v1';


$(document).ready(function(){
	$('.bxslider').bxSlider({
		auto: true
	});

	$('.certificates').bxSlider({
		auto: true,
		pagerCustom: '#bx-pager'
	});

	var btnMenu = document.getElementById('btn-menu');
	var menu = document.getElementsByClassName('menu')[0];

	var MENU_VISIBLE = "menu-visible";
	var MENU_INVISIBLE = "menu-invisible";

	var flag = false;

	$('#btn-menu').click(function () {
		if (flag) {
			menu.classList.remove(MENU_VISIBLE);
			menu.classList.add(MENU_INVISIBLE);
			flag = false;
			btnMenu.style.cssText += "color: #60606E;";
		} else {
			menu.classList.remove(MENU_INVISIBLE);
			menu.classList.add(MENU_VISIBLE);
			btnMenu.style.cssText += "color: #FABB90;";
			flag = true;
		}
	});

	$('body').click(function (event) {
		if ($('#btn-menu').is(":visible") && 
			event.target.id !== "btn-menu") {
			menu.classList.remove(MENU_VISIBLE);
		menu.classList.add(MENU_INVISIBLE);
		flag = false;
		btnMenu.style.cssText += "color: #60606E;";
	} 		
});

	$('a[href^="#"]').click(function(){
		var el = $(this).attr('href');
		$('html, body').animate({scrollTop: $(el).offset().top}, 800);
		return false; 
	});	

	$('#change-ru').change(function(){
		if (this.checked) {
			$("[data-localize]").localize("localize", { language: "ru" })
		};
	});
	$('#change-eng').change(function(){
		if (this.checked) {
			$("[data-localize]").localize("localize", { language: "en" })
		};
	});

});

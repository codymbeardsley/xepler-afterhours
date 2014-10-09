(function(){
	$(window).scroll(function() {
		if ($(window).scrollTop() >= 120 && $(window).width() >= 996) {
			$('nav').addClass('fixed');
			$('nav').removeClass('close-ani');
		}
		else {
			$('nav').removeClass('fixed');
			$('nav').addClass('close-ani');
		}
	});
	$('nav').on( "click", '#toggle-menu', function() {
	 	$('#toggle-search').removeClass('open');
	 	$(this).toggleClass('open');
	 	$('nav form').removeClass('open');
	 	$('nav ul').toggleClass('open');
	});
	$('nav').on( "click", '#toggle-search', function() {
	 	$('#toggle-menu').removeClass('open');
	 	$(this).toggleClass('open');
	 	$('nav ul').removeClass('open');
	 	$('nav form').toggleClass('open');
	});
})();

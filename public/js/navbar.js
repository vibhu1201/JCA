(function() {
	$('.dropdown').hover(function() {
  		$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
		}, function() {
  		$(this).find('.dropdown-menu').first().stop(true, true).slideUp()
	});

	var width = $('.justified').width();
	$('.justified').css('margin-left', '-' + (width / 2)+'px');

})();
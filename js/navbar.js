(function() {
	$('.dropdown').hover(function() {
  		$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
		}, function() {
  		$(this).find('.dropdown-menu').first().stop(true, true).slideUp()
	});

	$('.dropdown-toggle').click(function() {
		alert("YAAAAY");
	});	
})();
window.onload = (function() {

	window.setInterval(function(){
  		current_pic = $('.active');

		if(current_pic.next().length == 0) {
			current_pic.fadeOut(800).removeClass('active').addClass('inactive').promise().done(function() {
				$('.images img:first-child').fadeIn(800).addClass('active');
			});	
		}

		else {
			current_pic.fadeOut(800).removeClass('active').addClass('inactive').promise().done(function() {
			current_pic.next().fadeIn(800).addClass('active');
			});
		}

  	}, 5000);
})();

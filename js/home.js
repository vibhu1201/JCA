window.onload = (function() {

	window.setInterval(function(){
  		current_pic = $('.actv');

		if(current_pic.next().length == 0) {
			current_pic.fadeOut(800).removeClass('actv').addClass('inactv').promise().done(function() {
				$('.images img:first-child').fadeIn(800).addClass('actv');
			});	
		}

		else {
			current_pic.fadeOut(800).removeClass('actv').addClass('inactv').promise().done(function() {
			current_pic.next().fadeIn(800).addClass('actv');
			});
		}

  	}, 5000);  	
})();
jQuery( document ).ready(function() {
	$('.hamburger').on('click', function( event ){
		event.preventDefault();
		$('.navigation').slideToggle();
	});
});

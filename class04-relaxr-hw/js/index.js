jQuery(document).ready(function(){


jQuery('.readmore a').on('click',function(){

	// Prevent link from launching
	event.preventDefault(); 

	// Show the paragraph
	jQuery('#show-this-on-click').slideToggle();

	// Show the read less
	jQuery('.readless').slideToggle();

	// Hide the read more
	jQuery('.readmore').slideToggle();

});

jQuery('.readless a').on('click',function(){

	// Prevent link from launching
	event.preventDefault(); 

	// Hide the paragraph
	jQuery('#show-this-on-click').slideToggle();

	// Hide the read less
	jQuery('.readless').slideToggle();

	// Show the read more
	jQuery('.readmore').slideToggle();

});

jQuery('.learnmore').on('click',function(){

	// Prevent link from launching
	event.preventDefault(); 

	// Show the paragraph
	jQuery('#learnmoretext').slideToggle();

	// Hide the learn more
	jQuery('.learnmore').toggle();

});

});
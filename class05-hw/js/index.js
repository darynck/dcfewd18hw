// $(".city").attr("src", "http://lorempixel.com/g/500/400/food"); }

// Wait for the DOM elements to load before executing
$(document).ready(function() {

function iHaveBeenClicked() {

// Prevent the submit button from refreshing the page
    event.preventDefault();

// Get the value of the #city-type input and correct for capitalization
    var cityvalue = $('#city-type').val();
    cityvalue = cityvalue.toLowerCase().trim();

 // if the user inputs New York City / NYC / New York, change the background image to New York City
    if (cityvalue == 'new york city' || cityvalue == 'nyc' || cityvalue == 'new york') {
		$('body').attr('class','nyc')
		cityvalue = 'nyc'
	}

 // if the user inputs San Francisco / SF / Bay Area change the background image to San Francisco
   	else if (cityvalue == 'san francisco' || cityvalue == 'sf' || cityvalue == 'bay area') {
		$('body').attr('class','sf')
		cityvalue = 'sf'
	}

// if the user inputs Los Angeles / LA / LAX change the background image to LA
   	else if (cityvalue == 'los angeles' || cityvalue == 'la' || cityvalue == 'lax') {
		$('body').attr('class','la')
		cityvalue = 'la'
	}

// if the user inputs Austin / ATX change the background image to Austin
   	else if (cityvalue == 'austin' || cityvalue == 'atx') {
		$('body').attr('class','austin')
		cityvalue = 'austin'
	}

// if the user inputs Sydney / SYD change the background image to Sydney
   	else if (cityvalue == 'sydney' || cityvalue == 'syd') {
		$('body').attr('class','sydney')
		cityvalue = 'sydney'
	}	
	else {
		alert('Sorry. That city is not good enough.');
	}

}

// When button is clicked, run the function

$('#submit-btn').click(iHaveBeenClicked);

});
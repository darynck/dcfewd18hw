var total = 0;

function currencyFormat(number) {
	// turn the currency into a number
	number = parseFloat(number);
	// set the correct decimal places
	number = number.toFixed(2);
	// add the currency symbol;
	number = "$" + number;
	// return the value
	return number;
}

function addvalue() {
	//Create variables and populate with values from the DOM
	var entryElement = document.getElementById('newEntry'),
		entriesElement = document.getElementById('entries'),
		totalElement = document.getElementById('total');

	var entry = entryElement.value;

	// convert the entry from a string to a number
	entry = parseFloat(entry);
	if(isNaN(entry)){
		return false;
	}

	// format the number as currency
	var currency = currencyFormat(entry);

	// get the html of the current entries and put it in a variable
	var entriesHTML = entriesElement.innerHTML;

	// add the new entry to the variable
	entriesHTML = entriesHTML + "<div>" + currency + "</div>";

	// replace the content of the entries doc element with the updated variable
	entriesElement.innerHTML = entriesHTML;

	//Update the total variable
	total = parseFloat(total);
	total = total + entry;

	// update the document element with the total
	total Element.innerHTML = currencyFormat(total);

	// empty the entry element
	entryElement.value = '';
}

// listen for click
document.getElementById('entryBtn').onclick = addvalue;
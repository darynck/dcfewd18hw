jQuery(document).ready(function(){

//Set total number and set it to 0
var total = 0;
$('#zero').click(zero);
$('#add5').click(add5);
$('#add10').click(add10);
$('#sub1').click(sub1);


// When user clicks 0, add 0
function zero() {
	total = 0;
	$('#result').html(total);
}

// When user clicks 5, add 5
function add5() {
	total = total + 5;
	$('#result').html(total);

}

// When user clicks 10, add 10
function add10() {
	total = total + 10;
	$('#result').html(total);
}

// When user clicks -1, subtract 1
function sub1() {
	total = total - 1;
	$('#result').html(total);
}

});
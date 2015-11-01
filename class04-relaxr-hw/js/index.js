jQuery(document).ready(function(){

// Remove default launch for links
jQuery('.readmore a').on('click',function(){
    event.preventDefault(); 
});

jQuery('.readless a').on('click',function(){
    event.preventDefault(); 
});

jQuery('a.learnmore').on('click',function(){
    event.preventDefault(); 
});

// Toggle functions

function showContent() {
  jQuery('#show-this-on-click').slideDown();
  jQuery('.readmore').hide();
  jQuery('.readless').show();
}

function hideContent() {
  jQuery('#show-this-on-click').slideToggle();
  jQuery('.readless').slideToggle();
  jQuery('.readmore').slideToggle();
}

// On click, run functions

jQuery('.readmore a').click(showContent);
jQuery('.readless a').click(hideContent);

// Learn more toggle function

function showLearnMore() {
  jQuery('#learnmoretext').slideDown();
  jQuery('.learnmore').hide();
}

jQuery('a.learnmore').click(showLearnMore);

});
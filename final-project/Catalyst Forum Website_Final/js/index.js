$(document).ready(function() {
  $('a[href*=#]').each(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname
    && this.hash.replace(/#/,'') ) {
      var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
       if ($target) {
         var targetOffset = $target.offset().top;


         $(this).click(function() {
            $("#nav li a").removeClass("active");
            $(this).addClass('active');
           $('html, body').animate({scrollTop: targetOffset}, 1000);
           return false;
         });
      }
    }
  });

		var z9ggbxv0tfdwo6;(function(d, t) {
		var s = d.createElement(t), options = {
		'userName':'darynck',
		'formHash':'z9ggbxv0tfdwo6',
		'autoResize':true,
		'height':'463',
		'async':true,
		'host':'wufoo.com',
		'header':'show',
		'ssl':true};
		s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'www.wufoo.com/scripts/embed/form.js';
		s.onload = s.onreadystatechange = function() {
		var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
		try { z9ggbxv0tfdwo6 = new WufooForm();z9ggbxv0tfdwo6.initialize(options);z9ggbxv0tfdwo6.display(); } catch (e) {}};
		var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
		})(document, 'script');


jQuery('.hamburger').click(function(event) {
	event.preventDefault(); 
	jQuery(".cforum_mobile_nav_icons").stop().slideToggle( "slow" ).toggleClass("mobilehide");
  });

	
});
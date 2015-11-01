//Implement the red light using jQuery. Don't forget to add the script tags.

jQuery(document).ready(function(){

   function clearLights(){
       /*
       jQuery('#stopLight').css('background-color','rgb(10,10,10)');
       jQuery('#slowLight').css('background-color','rgb(10,10,10)');
       jQuery('#goLight').css('background-color','rgb(10,10,10');
       */
       jQuery('.bulb').css('background-color','rgb(10,10,10)');
   }

   jQuery('#stopButton').on('click',function(){
       clearLights();
       jQuery('#stopLight').css('background-color','rgb(200,0,0)');
   });

   jQuery('#slowButton').on('click',function(){
       clearLights();
       jQuery('#slowLight').css('background-color','rgb(255,255,0)');
   });
   jQuery('#goButton').on('click',function(){
       clearLights();
       jQuery('#goLight').css('background-color','rgb(0,200,0');
   });
});
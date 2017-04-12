"use strict";


//Events
document.addEventListener("DOMContentLoaded", function(){
    var event1 = document.querySelector('.event1');
    var event2 = document.querySelector('.event2');
    var event3 = document.querySelector('.event3');
    var event4 = document.querySelector('.event4');
    var event5 = document.querySelector('.event5');
    var event6 = document.querySelector('.event6');
    var eventItems =  document.getElementsByClassName('eventItem');
    var eventSlider = document.getElementsByClassName('.eventSlider');

    var handler = function(event) {
        for(var i =0; i < eventItems.length; i++) {
            eventItems[i].classList.add('hidden');
        }
        var className = event.target.getAttribute('class');
        var divItem = document.getElementById(className);
        divItem.classList.remove('hidden');
    };
    
    var sliderinvis = function(event) {
        for(var i=0; i < eventItems.length; i++){
            eventItems[i].classList.add('hidden');
            
        }
         var className1 = event.target.getAttribute('class');
         var divItem1 = document.getElementById(className1);
         divItem1.classList.add('hidden');
       
    }

    event1.addEventListener('click', handler, sliderinvis);
    event2.addEventListener('click', handler, sliderinvis);
    event3.addEventListener('click', handler, sliderinvis);
    event4.addEventListener('click', handler, sliderinvis);
    event5.addEventListener('click', handler, sliderinvis);
    event6.addEventListener('click', handler, sliderinvis);
});



//Slider
jQuery(document).ready(function() {
    
    
    //Slick
    jQuery('#slider').slick();  
    
});


jQuery(document).ready(function() {  
       
    //Slick2
    jQuery('#slider2').slick();
		
  });

$('#slider2').slick({
    
    autoplay:true,
    autoplaySpeed: 1000,
    speed:2000,
    
});

$('#slider').slick({
    
    autoplay:true,
    autoplaySpeed: 2000,
    speed:2000,
    
});




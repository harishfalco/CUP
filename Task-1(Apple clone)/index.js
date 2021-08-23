$(document).ready(function(){

    //hamburger Toggle
    $('.humbarger').click(function(event){
    $('.nav-bar-links').slideToggle(500);
    event.preventDefault();
    
    $('.nav-bar-links a').click(function(event) {
        if ($(window).width() < 768) {
          $('.nav-bar-links').slideUp(500);
          event.preventDefault(); 
        }
      });
});

});
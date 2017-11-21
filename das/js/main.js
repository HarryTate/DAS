function initMap() {

var myCenter = new google.maps.LatLng(52.666399,1.306330);
var mapCanvas = document.getElementById("map");
var mapOptions = {center: myCenter, zoom: 15};
var map = new google.maps.Map(mapCanvas, mapOptions);
var marker = new google.maps.Marker({position:myCenter});
marker.setMap(map);
}


$(document).ready(function() {

  $('.services-image-1 p').hide();


   $('.background-header').mouseenter(function() {
      $(this).fadeTo('slow',1.0);


  });



  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $('.background-header').css('opacity', 0.5);
    } else {
      $('.background-header').css('opacity', 1);
    }
  });


  $('.menubutton').click(function() {
    $( ".mobile-nav" ).slideToggle( "slow", function() {
      // Animation complete.
    });
  });


  $('.services-image-1 #surv').mouseenter(function() {
      $('.services-image-1 #reales,.services-image-1 #construct, .services-image-1 #agricul ').fadeTo('slow',0.5);

  });


  $('.services-image-1 #surv').mouseleave(function() {
      $('.services-image-1 #reales,.services-image-1 #construct, .services-image-1 #agricul ').fadeTo('fast',1.0);

  });


    $('.services-image-1 #reales').mouseenter(function() {
        $('.services-image-1  #surv,.services-image-1 #construct, .services-image-1 #agricul ').fadeTo('slow',0.5);
  });

  $('.services-image-1 #reales').mouseleave(function() {
      $('.services-image-1 #surv,.services-image-1 #construct, .services-image-1 #agricul ').fadeTo('fast',1.0);

  });

  $('.services-image-1 #construct').mouseenter(function() {
      $('.services-image-1  #surv,.services-image-1 #reales, .services-image-1 #agricul ').fadeTo('slow',0.5);
  });

  $('.services-image-1 #construct').mouseleave(function() {
      $('.services-image-1 #surv,.services-image-1 #reales , .services-image-1 #agricul ').fadeTo('fast',1.0);

  });

  $('.services-image-1 #agricul').mouseenter(function() {
      $('.services-image-1  #surv,.services-image-1 #reales, .services-image-1 #construct ').fadeTo('slow',0.5);
  });

  $('.services-image-1 #agricul').mouseleave(function() {
      $('.services-image-1 #surv,.services-image-1 #reales , .services-image-1 #construct ').fadeTo('fast',1.0);

  });




  $('.services-image-1 #surv').mouseenter(function(){
      $('.services-image-1 #surv2 h3 span ').animate({
        width:"555px",
        fontWeight:"600",
    });
  });
  $('.services-image-1').mouseleave(function(){
      $('.services-image-1 h3 span').animate({
        width:"200px",
        fontWeight:"300",
    });
  });

  $('.services-image-1 #surv').mouseenter(function(){
      $('.services-image-1 #surv2 h3 span ').animate({
        width:"555px",
        fontWeight:"600",
    });
  });

  $('.services-image-1 #construct').mouseenter(function(){
      $('.services-image-1 #construct2 h3 span ').animate({
        width:"555px",
        fontWeight:"600",
    });
  });

  $('.services-image-1 #reales').mouseenter(function(){
      $('.services-image-1 #reales2 h3 span ').animate({
        width:"555px",
        fontWeight:"600",
    });
  });

  $('.services-image-1 #agricul').mouseenter(function(){

      $('.services-image-1 #agricul2 h3 span ').animate({

        width:"555px",
        fontWeight:"600",

    });

  });

  $('.services-image-1').mouseleave(function(){
      $('.services-image-1 h3 span').animate({
        width:"200px",
        fontWeight:"300",
    });
  });



});

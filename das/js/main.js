function myMap() {

var myCenter = new google.maps.LatLng(51.508742,-0.120850);
var mapCanvas = document.getElementById("map");
var mapOptions = {center: myCenter, zoom: 15};
var map = new google.maps.Map(mapCanvas, mapOptions);
var marker = new google.maps.Marker({position:myCenter});
marker.setMap(map);
}


$(document).ready(function() {


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




});

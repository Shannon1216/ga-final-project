//js
// initialize the configuration of map
function initMap() {

  var styles = [
{
  stylers: [
  { hue: '#00ffe6'},
  { saturation: -60 }
  ]
},{
  featureType: 'road',
  elementType: 'geometry', 
  stylers: [
  {lightness: 100 },
  {visibility: 'simplified' }
  ]
}, {
  featureType: 'road',
  elementType: 'labels',
  stylers: [
  {visibility: 'off' }
  ]
}, {
  featureType: 'water',
  elementType: 'geometry',
  stylers: [
  { color: '#404041'},
  { visibility: 'inherit'},
  { weight: '8'}
  ]
   }
];
  
navigator.geolocation.getCurrentPosition(function(position) {
   
    // create an object to store lat/lng data
    var userLocation = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    
     var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat:40.8054491, lng: -73.9654415},
      zoom: 10,
      scrollwheel: true,
      styles: styles
    });




//first marker(user location)
    // use Marker constructor to add a marker to map
    var marker = new google.maps.Marker({
      position: {lat:40.8054491, lng: -73.9654415},
      map: map,
      title: 'Monk Cafe'
  });
       // Creating an InfoWindow object
   var infowindow = new google.maps.InfoWindow({
  content: '<h1>Monk Cafe</h1>'+
  '<p>1600 North Blvd</p>'+
  '<p>New York</p>'
 
});

  google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map, marker);
});


});

}

initMap();
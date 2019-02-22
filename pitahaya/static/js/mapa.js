function initMap() {
  // The location of Uluru
  var location = {lat: -2.179955, lng: -79.913678};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 14, center: location});
  // The marker, positioned at Uluru
  // google.maps.event.addDomListener(window, 'load', initialize);
  var marker = new google.maps.Marker({position: location, map: map});
}

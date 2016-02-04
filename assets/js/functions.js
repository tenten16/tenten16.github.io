function initMap() {
  var myLatLng = {lat: 21.0040225, lng: -156.6594173};
  var mapDiv = document.getElementById('g-map');
  var map = new google.maps.Map(mapDiv, {
    center: myLatLng,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    scrollwheel: false,
    draggable: false,
    zoom: 17
  });
  var image = 'assets/img/icons/g-map-pin.png';
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}

var feed = new Instafeed({
  get: 'tagged',
  tagName: 'awesome',
  clientId: 'eb14ce2130ed4a3894c24c065990b2c4',
  });
feed.run();

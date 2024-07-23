// Initialize and add the map
function initMap() {
  // The location of the center of the map
  const location = { lat: -34.397, lng: 150.644 };
  
  // The map, centered at the location
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: location,
  });
  
  // The marker, positioned at the location
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}

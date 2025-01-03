// Initialize the map
var map = L.map('map').setView([3.139, 101.6869], 13); // Replace with your coordinates and zoom level

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add a marker
var marker = L.marker([3.139, 101.6869]).addTo(map); // Replace with your coordinates
marker.bindPopup('<b>Kaisara BeautyClub</b><br>Your address here.').openPopup();

function initVisitorCounter() {
    const counterElement = document.getElementById('visitorCount');
    
    let visitorCount = localStorage.getItem('visitorCount');
    
    if (visitorCount === null) {
        visitorCount = 0;
    } else {
        visitorCount = parseInt(visitorCount);
    }
    
    visitorCount++;
    
    localStorage.setItem('visitorCount', visitorCount);
    
    counterElement.textContent = visitorCount;
    
}

window.addEventListener('load', initVisitorCounter);

function initMap() {

    const latitude = -7.774898;
    const longitude = 110.449579;
    const zoomLevel = 18;
    
    const map = L.map('map').setView([latitude, longitude], zoomLevel);
       
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,              
        minZoom: 3,               
    }).addTo(map);

    const marker = L.marker([latitude, longitude]).addTo(map);

     marker.bindPopup(`
        <div style="text-align: center;">
            <h3 style="margin: 0 0 5px 0; color: #667eea;">Lokasi Saya</h3>
            <p style="margin: 0; color: #666;">UKRIM</p>
        </div>
    `).openPopup(); 
}
window.addEventListener('load', initMap);

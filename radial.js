var circulatingPlanet = document.getElementById('circulating-planet');
var circulatingHost = document.getElementById('circulating-host');
var infoPopup = document.getElementById('info-popup');
var closeBtn = document.getElementById('close-btn');

var angle = 0;

function updatePosition() {
    var hostRadius = 5
    var radius = 150; // Change this to adjust the orbit radius
    var x = radius * Math.cos(angle);
    var y = radius * Math.sin(angle);
    var hostX = hostRadius * Math.cos(angle);
    var hostY = hostRadius * Math.cos(angle);

    circulatingPlanet.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    circulatingHost.style.transform = 'translate(' + hostX + 'px, ' + hostY + 'px)';
}

circulatingPlanet.addEventListener('click', function() {
    infoPopup.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    infoPopup.style.display = 'none';
});

function animate() {
    angle += 0.005; // Change this to adjust the rotation speed
    updatePosition();
    requestAnimationFrame(animate);
}

animate();

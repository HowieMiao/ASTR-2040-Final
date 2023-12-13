var circulatingTransit = document.getElementById('circulating-transit');
var infoPopup = document.getElementById('info-popup');
var closeBtn = document.getElementById('close-btn');


var position = 0; // Initialize the position variable
var direction = 1;


function updateTransit(){
    position += direction * 2;
    circulatingTransit.style.left = position + 'px'

    if(position >= window.innerWidth - 1250 || position <= 0){
        direction *= -1;
    }
}

circulatingTransit.addEventListener('click', function(){
    infoPopup.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    infoPopup.style.display = 'none';
});

function animate() {
    updateTransit();
    requestAnimationFrame(animate);
}

animate();

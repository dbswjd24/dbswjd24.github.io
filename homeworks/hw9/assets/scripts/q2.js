function unhideLightbox(lightboxID) {
    document.getElementById('lightbox-overlay').classList.remove('hidden');
    document.getElementById(lightboxID).classList.remove('hidden');
}

function unhideLightboxDoggo1() {
    unhideLightbox("doggo1");
}
document.getElementById("picture-1").onclick = unhideLightboxDoggo1;

function unhideLightboxDoggo2() {
    unhideLightbox("doggo2");
}
document.getElementById("picture-2").onclick = unhideLightboxDoggo2;

function unhideLightboxDoggo3() {
    unhideLightbox("doggo3");
}
document.getElementById("picture-3").onclick = unhideLightboxDoggo3;

function closeLightbox() {
    document.getElementById('lightbox-overlay').classList.add('hidden');
    var lightboxes = document.getElementsByClassName('lightbox');
    for (var i = 0; i < lightboxes.length; i++) {
        lightboxes[i].classList.add('hidden');
    }
}

document.getElementById('lightbox-overlay').onclick = closeLightbox;

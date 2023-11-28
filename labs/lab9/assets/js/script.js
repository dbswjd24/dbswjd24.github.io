/* Width of each carousel image, in pixels */
let carouselWidth = 400; 

/* Get the elements */
let prevButton = document.getElementById("button-previous");
let nextButton = document.getElementById("button-next");
let imageRow = document.getElementById("carousel-image-row");

/* Create variable to keep track of which image we're on */
let imageNum = 0;

/* Function to shift the image row to the left */
function showNextImage() {
    imageNum++;
    let pixelsFromLeft = -carouselWidth * imageNum;
    imageRow.style.left = pixelsFromLeft + 'px';
    checkControls();
}

/* Function to shift the image row to the right */
function showPrevImage() {
    imageNum--;
    let pixelsFromLeft = -carouselWidth * imageNum;
    imageRow.style.left = pixelsFromLeft + 'px';
    checkControls();
}

/* Set onclick properties for the buttons */
nextButton.onclick = showNextImage;
prevButton.onclick = showPrevImage;

/* Total number of images */
let totalImages = document.getElementsByClassName("carousel-image").length;

/* Function to check and toggle the visibility of control buttons */
function checkControls() {
    if (imageNum === 0) {
        prevButton.classList.add("hidden");
    } else if (prevButton.classList.contains("hidden")) {
        prevButton.classList.remove("hidden");
    }
    if (imageNum === totalImages - 1) {
        nextButton.classList.add("hidden");
    } else if (nextButton.classList.contains("hidden")) {
        nextButton.classList.remove("hidden");
    }
}

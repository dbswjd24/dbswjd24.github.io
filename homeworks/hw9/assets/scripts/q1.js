
//
// Part 1: Code setBackgroundColor() so the background color of #q1-container changes to the color specified
//

function setBackgroundColor(color) {
    document.getElementById("q1-container").style.backgroundColor = color;
}


//
// Part 2: Code the function redButtonClicked() and make the browser run the function for you when #q1-btn-red is clicked
//

function redButtonClicked() {
    setBackgroundColor("#EF476F");
}
document.getElementById("q1-btn-red").onclick = redButtonClicked;


// After you finish part 1 & 2, the clicking the red button should turn the background color red!

//
// Part 3: Program the yellow button similar to what you did with the red button
//

function yellowButtonClicked() {
    setBackgroundColor("#FFD166");
}
document.getElementById("q1-btn-yellow").onclick = yellowButtonClicked;



// TODO: Set the browser to run the function yellowButtonClicked() when someone clicks #q1-btn-yellow





//
// Part 4: A little more practice, let's do the same for the rest of the buttons
//

function greenButtonClicked() {
    setBackgroundColor("#06D6A0");
}
document.getElementById("q1-btn-green").onclick = greenButtonClicked;

function lightBlueButtonClicked() {
    setBackgroundColor("#118AB2");
}
document.getElementById("q1-btn-lightblue").onclick = lightBlueButtonClicked;

function blueButtonClicked() {
    setBackgroundColor("#073B4C");
}
document.getElementById("q1-btn-blue").onclick = blueButtonClicked;

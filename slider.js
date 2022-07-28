let thumbnails = document.getElementsByClassName("thumbnail");
let slider = document.getElementById("slider")
let buttonRight = document.getElementById("slide-right")
let buttonLeft = document.getElementById("slide-left")

buttonLeft.addEventListener("click", function() {
    slider.scrollLeft -= 125; 
})

buttonRight.addEventListener("click", function() {
    slider.scrollLeft += 125; 
})

//this function calculate the maximum width for the slider-container 
// the total width of the container - the current position of the slider 
const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

function autoPlay() {
    if (slider.scrollLeft > (maxScrollLeft - 1)) {
        slider.scrollLeft -= maxScrollLeft;
    } else {
        slider.scrollLeft += 1;
    }
}

let play = setInterval(autoPlay, 50);

for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("mouseover", function () {
        clearInterval(play);
    })
    thumbnails[i].addEventListener("mouseout", function () {
        return play = setInterval(autoPlay, 50);
    })
}
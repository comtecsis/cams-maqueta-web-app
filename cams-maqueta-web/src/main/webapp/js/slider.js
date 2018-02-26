var slideIndex = 0;
var currentSlideIndex = 0;
var slideArray = document.getElementsByClassName("slide");
var sliderLength = slideArray.length;
var autoRotation = true;
var clickDirection = false;
var rightDerection = true;
console.log("new version added 17");
var startSlider = function() {
    document.getElementById("slide0").style.left = "100%";
    if(sliderLength === 1) {
        document.getElementById("slide0").className="singleSlideStyle singleSlide slideOutLeft";
        var imageContainer = document.getElementsByClassName("imageContainer");
        for (var i = 0; i < imageContainer.length; i++) {
            imageContainer[i].className="imageContainer imageContainerSingle";
        }
        var textContainer = document.getElementsByClassName("textContainer");
        for (var i = 0; i < textContainer.length; i++) {
            textContainer[i].className="textContainer textContainerSingle";
        }
        var sliderDirections = document.getElementsByClassName("sliderPrev");
        for (var i = 0; i < sliderDirections.length; i++) {
            sliderDirections[i].style.display = "none";
            autoRotation = false;
        }
        var sliderNextDirections = document.getElementsByClassName("sliderNext");
        for (var i = 0; i < sliderNextDirections.length; i++) {
            sliderNextDirections[i].style.display = "none";
            autoRotation = false;
        }
    } else {
        var listSlides = document.getElementsByClassName("singleSlide");
        for (var i = 0; i < listSlides.length; i++) {
            listSlides[i].style.left = "0px";
        }
        listSlides[0].style.left = "100%";
        document.getElementById("slide0").setAttribute("class", "singleSlide slideInRight");
    }
}
var prevSlide = function() {
    clickDirection = true;
    rightDerection = false;
    prevSlideAnimation();
    setTimeout(function(){
        clickDirection = false;
    },5000);
}
var prevSlideAnimation = function() {
    var nextSlideIndex;
    if (currentSlideIndex === 0) {
        nextSlideIndex = sliderLength - 1;
    } else {
        nextSlideIndex = currentSlideIndex - 1;
    }
    document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
    document.getElementById("slide" + currentSlideIndex).style.left = 0;

    document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInLeft");
    document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutRight");

    currentSlideIndex = nextSlideIndex;
}
var nextSlide = function() {
    clickDirection = true;
    rightDerection = true;
    nextSlideAnimation();
    setTimeout(function(){
        clickDirection = false;
    },5000);
}
var nextSlideAnimation = function() {
    var nextSlideIndex;
    if (currentSlideIndex === (sliderLength - 1)) {
        nextSlideIndex = 0;
    } else {
        nextSlideIndex = currentSlideIndex + 1;
    }

    document.getElementById("slide" + nextSlideIndex).style.left = "100%";
    document.getElementById("slide" + currentSlideIndex).style.left = 0;

    document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInRight");
    document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutLeft");

    currentSlideIndex = nextSlideIndex;
}
setInterval(function(){
    if (autoRotation && !clickDirection) {
        if (rightDerection) {
            nextSlideAnimation();
        } else {
            prevSlideAnimation();
        }
    }
}, 5000);

startSlider();
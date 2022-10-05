
// For Sponsor Logo 
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dot: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})
// StickyTop 
$(window).scroll(function () {
    const scroll = $(window).scrollTop();

    if (scroll >= 92) {
        $(".navbar").addClass("sticky-top-nav");
    } else {
        $(".navbar").removeClass("sticky-top-nav");
    }
});

// Testimonial Slider

var slideIndex = 1;
displaySlide(slideIndex);

function moveSlides(n) {
    displaySlide(slideIndex += n);
}

function activeSlide(n) {
    displaySlide(slideIndex = n);
}

/* Main function */
function displaySlide(n) {
    var i;
    var totalslides = $(".slide");
    var totaldots = $(".sliderDot");

    if (n > totalslides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = totalslides.length;
    }
    for (i = 0; i < totalslides.length; i++) {
        totalslides[i].style.display = "none";
    }
    for (i = 0; i < totaldots.length; i++) {
        totaldots[i].className =
            totaldots[i].className.replace(" active", "");
    }
    totalslides[slideIndex - 1].style.display = "block";
    totaldots[slideIndex - 1].className += " sliderDotActive";
}
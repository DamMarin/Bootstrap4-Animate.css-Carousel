// Activate Carousel
$('#theCarousel').carousel();

//Animate on page load
$AnimOnPageLoad = $('#theCarousel').find('.carousel-item:first').find("[data-animation ^= 'animated']");
Animate($AnimOnPageLoad);

//Function for Animations
function Animate( elements ) {

    elements.each(function () {
        var $this = $(this),
        $animationType = $this.data('animation');

        $this.addClass($animationType).one('webkitAnimationEnd animationend', function () {
            $this.removeClass($animationType);
        });
    });
}

//Repeat the carousel animations
$('#theCarousel').bind('slide.bs.carousel', function (e) {
    $animatingElements = $(e.relatedTarget).find("[data-animation ^= 'animated']");
    Animate($animatingElements);
});

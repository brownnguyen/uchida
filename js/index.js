$('.slide-content').slick({
    arrows: false,
    fade: true
});
$('.what-case').slick({
    arrows: true,
    dots: true
});
let arrowLeft = document.querySelector('.what-case .slick-prev');
let arrowRight = document.querySelector('.what-case .slick-next');
arrowLeft.innerHTML = '<span class="arrowLeft"></span>';
arrowRight.innerHTML = '<span class="arrowRight"></span>';
var Scroll = document.querySelector('.scroll');
$('#scroll').click(function () {
    $('html, body').animate({
        scrollTop: $("#what").offset().top
    }, 1000);
});
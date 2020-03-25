$(function () {

    $('.menu-slider').slick({
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    dots: true,
                    dotsClass: 'menu-dots',
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
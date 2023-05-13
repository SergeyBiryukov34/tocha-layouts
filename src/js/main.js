const $ = require('jquery')
const slick = require('slick-carousel')

$('#slider-rate').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1110,
            settings: 'unslick'
        }
    ]
})

$('#slider-connect').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 768,
            settings: 'unslick'
        }
    ]
})

$('#slider-reviews').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
})

$('#trigger').on('click', () => {
    $('#nav').toggleClass('-translate-x-[50rem]')
    $('body').toggleClass('overflow-hidden')

    if (!$('#nav').hasClass('-translate-x-[50rem]')) {
        $('#trigger')[0].childNodes[1].childNodes[1].attributes[0].value = '/sprite.f14d31f7.svg#close'
    } else {
        $('#trigger')[0].childNodes[1].childNodes[1].attributes[0].value = '/sprite.f14d31f7.svg#burger'
    }
})

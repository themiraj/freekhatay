/*
** With Slick Slider Plugin : https://github.com/marvinhuebner/slick-animation
** And Slick Animation Plugin : https://github.com/marvinhuebner/slick-animation
*/

// Init slick slider + animation
$('.main-slider .slider').slick({
  autoplay: true,
  speed: 800,
  lazyLoad: 'progressive',
  arrows: true,
  dots: false,
	prevArrow: '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
	nextArrow: '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
}).slickAnimation();



$('.slick-nav').on('click touch', function(e) {

    e.preventDefault();

    var arrow = $(this);

    if(!arrow.hasClass('animate')) {
        arrow.addClass('animate');
        setTimeout(() => {
            arrow.removeClass('animate');
        }, 1600);
    }

});

//Slick Carousel Controllers
$(".testimonial-reel").slick({
  centerMode: true,
  centerPadding: "40px",
  dots: true,
  slidesToShow: 3,
  infinite: true,
  arrows: false,
  lazyLoad: "ondemand",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        centerMode: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});





/* faq slider start */
document.addEventListener("DOMContentLoaded", function(event) { 


var acc = document.getElementsByClassName("accordion");
var panel = document.getElementsByClassName('panel');

for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        var setClasses = !this.classList.contains('active');
        setClass(acc, 'active', 'remove');
        setClass(panel, 'show', 'remove');

        if (setClasses) {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }
}

function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}

});
/* faq slider end*/

// Accordion

$(document).on('click','.according-title', function(){
    if($(this).parent('.according-inner').hasClass('open')){
        $(this).parent('.according-inner').removeClass('open');
        $(this).parent('.according-inner').find('.according-content').slideUp();
    }else{
        $(this).parent('.according-inner').addClass('open');
        $(this).parent('.according-inner').find('.according-content').slideDown();
    }
    $(this).parent('.according-inner').siblings().removeClass('open');
    $(this).parent('.according-inner').siblings().find('.according-content').slideUp();
})
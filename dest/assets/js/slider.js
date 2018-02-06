$(document).ready(function(){
  $('.slider__block').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true
  });

  // $('.descript__photo').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 4000,
  //   arrows: false
  // });
  //

  $('.hotel__slider').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: true,
   fade: true,
   asNavFor: '.hotel__slider-nav'
  });

  $('.hotel__slider-nav').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   asNavFor: '.hotel__slider',
   dots: false,
   centerMode: true,
   focusOnSelect: true
  });

  //
  //
  // // SUBPAGE
  // $('.subpageSlider__item').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 4000,
  //   arrows: false
  // });
  //
  // $('.content__slideritem').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 4000,
  //   arrows: false
  // });
  //
  // $('.restMenu__slide').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 4000,
  //   arrows: false
  // });
});

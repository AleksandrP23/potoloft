$(document).ready(function () {
  function initExamplesSlider() {
    $('.portfolio__list-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      arrows: false,
      fade: true,
      asNavFor: '.portfolio__list-thumb',

      responsive: [{
        breakpoint: 768,
        settings: {
          dots: true
        }
      }]
    });

    $('.portfolio__list-thumb').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      asNavFor: '.portfolio__list-slider',
      prevArrow: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="prev-arrow" width="24px" height="42px"><path fill-rule="evenodd"  fill="rgb(255, 255, 255)" d="M23.985,39.194 L21.164,41.994 L2.827,23.799 L2.827,23.799 L0.006,20.999 L21.164,0.005 L23.985,2.804 L5.648,21.000 L23.985,39.194 Z"/></svg>',
      nextArrow: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="next-arrow" width="25px" height="44px"> <path fill-rule="evenodd"  fill="rgb(255, 255, 255)" d="M3.000,43.213 L0.172,40.384 L18.556,21.999 L0.172,3.615 L3.000,0.786 L24.213,21.999 L3.000,43.213 Z"/></svg>',
      focusOnSelect: true
      
    });
  }
  $('.reviews__list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
  })

  function initVideoPopups() {
    $('[data-fancybox="video_popup"]').fancybox({
      // buttons: [
      //   'close'
      // ]
      loop: true,
      autoFocus: false
    })
  }

  function initSertPopups() {
    $('[data-fancybox="gallery"]').fancybox({
      // buttons: [
      //   'close'
      // ]
      loop: true,
      autoFocus: false
    })
  }


  initVideoPopups()
  initExamplesSlider()
  initSertPopups()
})
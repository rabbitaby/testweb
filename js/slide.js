// 메인
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
    autoplay: {
  delay: 3000,
  disableOnInteraction: false,
},
loop : true,
loopAdditionalSlides :0,
slidesOffsetBefore : 0,
scrollbar: {
      el: ".swiper-scrollbar",
    },
  });


// 공지슬라이드
    var swiper = new Swiper(".swipe_notice", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

  // 서포트 슬라이드
  var swiper = new Swiper(".support_slide", {
    slidesPerView: 8,
    spaceBetween: 10,
    autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    },
    loop: true,
    loopAdditionalSlides : 1,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  /* 모바일 */ 
  // 모바일메인
  if (matchMedia("screen and (max-width: 500px)").matches) {
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 10,
      slidesPerView: 1,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
      autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop : true,
  loopAdditionalSlides :0,
  slidesOffsetBefore : 0,
  scrollbar: {
        el: ".swiper-scrollbar",
      },
    });  



    // 모바일서포트
    var swiper = new Swiper(".support_slide", {
      slidesPerView: 2,
      spaceBetween: 10,
      autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      },
      loop: true,
      loopAdditionalSlides : 1,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

// 모바일끝
  }

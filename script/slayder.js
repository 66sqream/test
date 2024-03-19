const rem = 16;

let swiper = new Swiper('.swiper-container.swiper1', {    
    centeredSlides: true,    
    spaceBetween: 20,
});

let swiperFooter = new Swiper('.swiper2', {
    slidesPerView: 1.2,
    loop: true,
    // spaceBetween: 100,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        snapOnRelease: true,
    },
  });
$('.burger').click(function() {
    let burgerMenu = $('.burger-open')
    if($('.burger-open').css('display') === 'none') {
        $('.burger-open').css('display','flex');
        
    } else {
        $('.burger-open').css('display','none');
    }
    
});

// let lastScrollTop = 0;
// $(window).scroll(function() {
//     let scrollTop = $(this).scrollTop();
//     if (scrollTop > lastScrollTop) {
//         $('.header').addClass('absolut').removeClass('visiably').slideUp();
//     } else {
//         $('.header').removeClass('absolut').addClass('visiably').slideDown();
//     }
//     lastScrollTop = scrollTop;
// });

// var lastScrollTop = 0;
// var didScroll = false;
// var delta = 5;
// var headerHeight = $('.header').outerHeight();

// $(window).scroll(function() {
//     didScroll = true;
// });

// setInterval(function() {
//     if (didScroll) {
//         var scrollTop = $(this).scrollTop();
//         if (Math.abs(lastScrollTop - scrollTop) <= delta)
//             return;

//         if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
//             // Скроллим вниз
//             $('.header').removeClass('.visible').addClass('absolut');
//         } else {
//             // Скроллим вверх
//             $('header').removeClass('absolut').addClass('.visible');
//         }
//         lastScrollTop = scrollTop;
//         didScroll = false;
//     }
// }, 250);

$(document).ready(function(){
    let lastScrollTop = 0;
    let header = $('.header');
    let headerHeight = header.outerHeight();
    let heroBlock = $('.hero-block');
    let heroBlockHeight = heroBlock.outerHeight();
  
    $(window).scroll(function(){
      let scrollTop = $(this).scrollTop();
      if (scrollTop > lastScrollTop && scrollTop > heroBlockHeight) {
        // Scroll down
        header.removeClass('absolut');
      } else {
        // Scroll up
        header.addClass('absolut');
        if (scrollTop <= heroBlockHeight) {
            header.removeClass('absolut');
        } else {
          header.removeClass('nav-show');
        }
      }
      lastScrollTop = scrollTop;
    });
  });

//   $(document).ready(function(){
//     var lastScrollTop = 0;
//     var header = $('.header');
//     var headerHeight = header.outerHeight();
//     var heroBlock = $('.hero-block');
//     var heroBlockHeight = heroBlock.outerHeight();
  
//     $(window).scroll(function(){
//       var scrollTop = $(this).scrollTop();
//       if (scrollTop > lastScrollTop && scrollTop > heroBlockHeight) {
//         // Scroll down
//         header.removeClass('absolut').slideUp();
//       } else {
//         // Scroll up
//         if (scrollTop <= heroBlockHeight) {
//           header.addClass('absolut');
//         } else {
//           header.removeClass('absolut');
//         }
//         header.slideDown();
//       }
//       lastScrollTop = scrollTop;
//     });
//   });
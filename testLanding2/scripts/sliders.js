var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    speed: 2000,
    effect: "fade",
    crossFade: true,
    autoplay: {
      disableOnInteraction: false,
    },
  });
  


var swiper1 = new Swiper(".gallerySwiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    grid: {
      rows: 2,
      fill: "row",
    },
    spaceBetween: 49,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + '/'+
                '<span class="' + totalClass + '"></span>';
        },
      },
  });


// console.log(elem.style.marginTop);
let elems = document.querySelectorAll('.gallery-swiper-slide');
    
    
    for (let elem of elems) {
        let attrs = elem.getAttribute('style');
        let styles = attrs.split(';');
        let ind = styles.indexOf(" margin-top: 49px");
        if (ind === 2 || ind === 3){
            elem.style.marginTop = "13px";
        }
    }  
 window.onload = function() {
    // let elems = document.querySelectorAll('.gallery-swiper-slide');
    
    
    // for (let elem of elems) {
    //     let attrs = elem.getAttribute('style');
    //     let styles = attrs.split(';');
    //     let ind = styles.indexOf(" margin-top: 49px");
    //     if (ind === 2 || ind === 3){
    //         elem.style.marginTop = "13px";
    //     }
    // }  
 }

  var swiper = new Swiper(".publicationsSwiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    grid: {
      rows: 1,
    },
    spaceBetween: 50,
    navigation: {
        nextEl: ".publications-swiper-button-next",
        prevEl: ".publications-swiper-button-prev",
      },
    pagination: {
      el: ".publications-swiper-pagination",
      clickable: true,
      type: "fraction",
        renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' + '/'+
                '<span class="' + totalClass + '"></span>';
        },
    },
    
  });

  var swiper = new Swiper(".projectsSwiper", {
    slidesPerView: 3,
    slidesPerGroup: 3,
    grid: {
      rows: 1,
    },
    spaceBetween: 46,
    navigation: {
        nextEl: ".projects-swiper-button-next",
        prevEl: ".projects-swiper-button-prev",
      },
  });

  window.onload();
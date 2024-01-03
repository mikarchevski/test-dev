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


let intervalId;
let intervalId1;
document.querySelectorAll('.top__filters-list-item-label').forEach(e => {
    e.addEventListener('click', e => {
        let menu = e.currentTarget.dataset.path   
        let currentBtn = document.querySelector(`[data-path=${menu}]`); 
        document.querySelectorAll('.top__filters-list-item-content').forEach(e => {
          let currentMenu = document.querySelector(`[data-target=${menu}]`);
          
            if (!currentMenu.classList.contains('open')) {
                e.classList.remove('top__filters-list-item-content--active');
                e.classList.remove('open');
                currentMenu.classList.add('top__filters-list-item-content--active');
                intervalId = setTimeout(() => {
                    currentMenu.classList.add('open');
                }, 0);
            }

            if (currentMenu.classList.contains('open')) {
                clearTimeout(intervalId);
                currentMenu.classList.remove('top__filters-list-item-content--active');
                intervalId = setTimeout(() => {
                    currentMenu.classList.remove('open');
                }, 0);
            }

            window.onclick = e => {
                if (e.target == currentMenu || e.target == document.querySelector(`[data-path=${menu}]`)) {
                    return;
                } else {
                    currentMenu.classList.remove('top__filters-list-item-content--active');
                    currentMenu.classList.remove('open');
                    currentBtn.classList.remove('top__filters-list-item-label--active');
                    currentBtn.classList.remove('open');
                }
            }
        });
        // ----------------------------------------------------------------
        
          console.log(currentBtn);

        if (!currentBtn.classList.contains('open')){
          currentBtn.classList.remove('top__filters-list-item-label--active');
          currentBtn.classList.remove('open');
          currentBtn.classList.add('top__filters-list-item-label--active');
          intervalId1 = setTimeout(() => {
            currentBtn.classList.add('open');
        }, 0);
      }

        if (currentBtn.classList.contains('open')){
          clearTimeout(intervalId1);
          currentBtn.classList.remove('top__filters-list-item-label--active');
          intervalId1 = setTimeout(() => {
            currentBtn.classList.remove('top__filters-list-item-label--active');
            currentBtn.classList.remove('open');
          },0);
        }
    });
});
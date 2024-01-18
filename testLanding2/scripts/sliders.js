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


// let elems = document.querySelectorAll('.gallery-swiper-slide');
    
    
//     for (let elem of elems) {
//         let attrs = elem.getAttribute('style');
//         let styles = attrs.split(';');
//         let ind = styles.indexOf(" margin-top: 49px");
//         if (ind === 2 || ind === 3){
//             elem.style.marginTop = "13px";
//         }
//     }  
//  window.onload = function() {
//     // let elems = document.querySelectorAll('.gallery-swiper-slide');
    
    
//     // for (let elem of elems) {
//     //     let attrs = elem.getAttribute('style');
//     //     let styles = attrs.split(';');
//     //     let ind = styles.indexOf(" margin-top: 49px");
//     //     if (ind === 2 || ind === 3){
//     //         elem.style.marginTop = "13px";
//     //     }
//     // }  
//  }

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

function topMenu(){
  let intervalId;
  let intervalId1;
  document.querySelectorAll('.top__filters-list-item-label').forEach(e => {
      e.addEventListener('click', e => {
          let menu = e.currentTarget.dataset.path   
          let label = e.currentTarget.dataset.path;
          document.querySelectorAll('.top__filters-list-item-content').forEach(e => {
            
            document.querySelectorAll('.top__filters-list-item-label').forEach(l=>{
              let currentBtn = document.querySelector(`[data-path=${label}]`);
              if (!currentBtn.classList.contains('open')){
                l.classList.remove('top__filters-list-item-label--active');
                l.classList.remove('open');
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
  
              window.onclick = f => {
                  if (f.target == currentMenu || f.target == document.querySelector(`[data-path=${menu}]`)) {
                      return;
                  } else {
                      currentMenu.classList.remove('top__filters-list-item-content--active');
                      currentMenu.classList.remove('open');
                      currentBtn.classList.remove('top__filters-list-item-label--active');
                      currentBtn.classList.remove('open');
                  }
              }
            });
          
          });
         
      });
  });
}

topMenu();


//selector
function gallerySelector(){
  let selectorHeader = document.querySelector('.gallery__desc-filter-selector-header');
  let selectorOptions = document.querySelector('.gallery__desc-filter-selector-options');
  let selectItem = document.querySelectorAll('.gallery__desc-filter-selector-options-item');
  let selectorIcon = document.querySelector('.gallery__desc-filter-selector-header-icon');


  selectorHeader.addEventListener('click', ()=>{
    selectorOptions.classList.toggle('gallery__desc-filter-selector-options--active');
    selectorIcon.classList.toggle('gallery__desc-filter-selector-header-icon--active');
  });

  
  selectItem.forEach( item => {
    item.addEventListener('click', ()=> {
      let currentValue = document.querySelector('.gallery__desc-filter-selector-header-current');
      currentValue.innerHTML = item.innerHTML;
      selectorOptions.classList.toggle('gallery__desc-filter-selector-options--active');
      selectorIcon.classList.toggle('gallery__desc-filter-selector-header-icon--active');
    });
  });
}

gallerySelector();

function gallerySliderHover(){
  let sliderImg = document.querySelectorAll('.gallery-swiper-img');
  sliderImg.forEach(e=>{
    e.addEventListener('mouseover', e=>{
      let item = e.currentTarget.dataset.path;
      sliderImg.forEach(e=>{
        let currentImg = document.querySelector(`[data-path=${item}]`);
        console.log(currentImg);

        if (!currentImg.classList.contains('hover')){
          e.classList.remove('hover');
          e.classList.remove('gallery-swiper-img--active');
          currentImg.classList.add('gallery-swiper-img--active');
        }
      });
    });
  });
};

gallerySliderHover();

function catalogCountrySelector() {
let intervalId2;
 document.querySelectorAll('.catalog__about-countries-list-item-link-img').forEach(e=>{
  e.addEventListener('click', e=>{
    let item = e.currentTarget.dataset.path;
    document.querySelectorAll('.catalog__about-countries-list-item-link-img').forEach(e=>{
    
    let currentItem = document.querySelector(`[data-path=${item}]`);
    console.log(currentItem);
    if (!currentItem.classList.contains('test')){
      e.classList.remove('test');
      e.classList.remove('catalog__about-countries-list-item-link-img--active');
      currentItem.classList.add('catalog__about-countries-list-item-link-img--active');
      intervalId2 = setTimeout(() =>{
          currentItem.classList.add('test');
        },0);
      };
    if (currentItem.classList.contains('test')){
      clearTimeout(intervalId2);
      currentItem.classList.remove('test');
      currentItem.classList.remove('catalog__about-countries-list-item-link-img--active');
    }
    })
    
  })
 })
};

catalogCountrySelector();

function publicationsFilter(){
  document.querySelectorAll('.publications__desc-filter-list-item-name').forEach(item=>{
    item.addEventListener('click',()=>{
      item.classList.toggle('publications__desc-filter-list-item-name--active');
    });
  });
};

publicationsFilter();


function showAllEvents(){
  let showAllBtn = document.querySelector('.events__showall');
  showAllBtn.innerHTML = 'Все события';
  showAllBtn.addEventListener('click',()=>{
    let eventList = document.querySelector('.events__list');
    if (showAllBtn.innerHTML =='Все события'){
      showAllBtn.innerHTML ='Показать меньше'
    } else showAllBtn.innerHTML ='Все события'
    eventList.classList.toggle('events__list-all');
    
  });
};

showAllEvents();

function burgerMenu(){
  let burger =  document.querySelector('.header__mobile-burger')
  let overlay = document.querySelector('.header__mobile-overlay');
  burger.addEventListener('click',()=>{
   overlay.classList.add('header__mobile-overlay--show');
   document.querySelector('body').classList.add('body--active');
   document.querySelectorAll('.header__mobile-burger-span').forEach(e =>{
     e.classList.add('header__mobile-burger-span--active');
   });
   window.onclick = f=>{
     document.querySelectorAll('.header__mobile-burger-span').forEach(e=>{
       if(f.target == document.querySelector('.header__mobile-burger')){
         return true;
       } else {
         e.classList.remove('header__mobile-burger-span--active')
         overlay.classList.remove('header__mobile-overlay--show');
         document.querySelector('body').classList.remove('body--active');
       }
     })
       
     };
  
  });
 };
 
 burgerMenu();
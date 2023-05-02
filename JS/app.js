const app = {

    init: function () {
        app.addListenerToButtons();
        app.addListenerToCarouselItems();
        app.addListenerToCloseModal();
    },
    CarouselElm: document.querySelector('.carousel'),
    CarouselWrapElm: document.querySelector('.carousel_wrap'),
    Slide: document.querySelector('.carousel_item'),
    LeftButtonElm: document.querySelector('.LeftButton'),
    RightButtonElm: document.querySelector('.RightButton'),
    ModalElm: document.querySelector('.modal'),
    BackgroundContainerElm: document.querySelector('.backgrounds_container'),
    BackgroundElm: document.querySelector('.background'),

    addListenerToButtons () {
        app.LeftButtonElm.addEventListener('click', app.OnclickLeftButton);
        app.RightButtonElm.addEventListener('click', app.OnclickRightButton);   
    },

    OnclickLeftButton (event) {
        const slideWidth = app.Slide.clientWidth;
        app.CarouselWrapElm.scrollLeft -= slideWidth;
        const backgroundWidth = app.BackgroundElm.clientWidth;
        app.BackgroundContainerElm.scrollLeft -= backgroundWidth;
    },
    OnclickRightButton (event) {
        const slideWidth = app.Slide.clientWidth;
        app.CarouselWrapElm.scrollLeft += slideWidth;
        const backgroundWidth = app.BackgroundElm.clientWidth;
        app.BackgroundContainerElm.scrollLeft += backgroundWidth;
    },    

    addListenerToCarouselItems () {
        const CarouselItemsElm = app.CarouselWrapElm.querySelectorAll('.carousel_item');
       for (const itemElm of CarouselItemsElm) {
        itemElm.addEventListener('click', app.onClickItem);
      }    
    },

    onClickItem() {
        app.ModalElm.style.display = 'block';
        /*app.CarouselWrapElm.style.display = 'none';
        app.LeftButtonElm.style.display = 'none';
        app.RightButtonElm.style.display = 'none';*/
    },         
    
    addListenerToCloseModal () {
        const closeModalButton = document.querySelector('.closeModalButton');
        closeModalButton.addEventListener('click', app.closeModal);
    },

    closeModal () {
        app.ModalElm.style.display = 'none';
    },
}

document.addEventListener('DOMContentLoaded', app.init );
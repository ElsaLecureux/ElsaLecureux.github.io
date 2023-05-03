const app = {

    init: function () {
        app.index = 0
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
    backgroundColors:['#97C3DE', 'blue', 'red', 'pink', 'purple'],
    index: 0,
    

    addListenerToButtons () {
        app.LeftButtonElm.addEventListener('click', app.OnclickLeftButton);
        app.RightButtonElm.addEventListener('click', app.OnclickRightButton);   
    },

    OnclickLeftButton (event) {
        if (app.index > 0) {
            document.body.style.background= app.backgroundColors[app.index];
            app.index = app.index - 1;
            const slideWidth = app.Slide.clientWidth;
            app.CarouselWrapElm.scrollLeft -= slideWidth; 
        } 
        /*if (app.index > 0) {
            app.LeftButtonElm.style.visibility = 'visible';
            
        }
        else {
            app.LeftButtonElm.style.visibility = 'hidden';
        } */                       
    },
    OnclickRightButton (event) {
        if (app.index < 6) {
        document.body.style.background= app.backgroundColors[app.index];
        app.index = app.index + 1;
        const slideWidth = app.Slide.clientWidth;
        app.CarouselWrapElm.scrollLeft += slideWidth;
        }
        /*if (app.index === 5) {
            app.RightButtonElm.style.visibility = 'hidden';
        }
        else {
            app.RightButtonElm.style.visibility = 'visible';
        }*/
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
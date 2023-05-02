const app = {

    init: function () {
        console.log('app.init!');
        app.addListenerToButtons();
        app.addListenerToCarouselItems();
    },
    CarouselElm: document.querySelector('.carousel_wrap'),
    Slide: document.querySelector('.carousel_item'),

    addListenerToButtons () {
        const LeftButtonElm = document.querySelector('.LeftButton');
        const RightButtonElm = document.querySelector('.RightButton');
        LeftButtonElm.addEventListener('click', app.OnclickLeftButton);
        RightButtonElm.addEventListener('click', app.OnclickRightButton);   
    },

    OnclickLeftButton (event) {
        const slideWidth = app.Slide.clientWidth;
        console.log(slideWidth);
        app.CarouselElm.scrollLeft -= slideWidth;
    },
    OnclickRightButton (event) {
        const slideWidth = app.Slide.clientWidth;
        app.CarouselElm.scrollLeft += slideWidth;
    },    

    addListenerToCarouselItems () {
        const CarouselItemsElm = app.CarouselElm.querySelectorAll('.carousel_item');
        console.log(app.CarouselElm);
        console.log(CarouselItemsElm);
       for (const itemElm of CarouselItemsElm) {
        itemElm.addEventListener('click', app.onClickItem);
      }    
    },

    onClickItem() {
        console.log('inside the onClick');
    },         
    
}

document.addEventListener('DOMContentLoaded', app.init );
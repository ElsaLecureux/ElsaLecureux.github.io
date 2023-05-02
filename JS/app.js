const app = {

    init: function () {
        console.log('app.init!');
        app.addListenerToButtons();
        app.addListenerToCarouselItems();
    },
    CarouselElm: document.querySelector('.carousel_wrap'),

    addListenerToButtons () {
        const LeftButtonElm = document.querySelector('.LeftButton');
        const RightButtonElm = document.querySelector('.RightButton');
        LeftButtonElm.addEventListener('click', app.OnclickLeftButton);
        RightButtonElm.addEventListener('click', app.OnclickRightButton);   
    },

    OnclickLeftButton () {
        /*const slideWidth = itemElm.clientWidth;*/
        app.CarouselElm.scrollLeft -= 350;
    },
    OnclickRightButton () {
        /*const slideWidth = itemElm.clientWidth;*/
        app.CarouselElm.scrollLeft += 350;
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
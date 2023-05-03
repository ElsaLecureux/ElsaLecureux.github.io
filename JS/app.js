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
    backgroundColors:['#0B1C3E','#9DA598', '#C77461', '#4AA8D9', '#CE6535', '#607748'],
    index: 0,
    

    addListenerToButtons () {
        app.LeftButtonElm.classList.add('visible'); 
        console.log(app.index);
        app.LeftButtonElm.addEventListener('click', app.OnclickLeftButton);
        app.RightButtonElm.addEventListener('click', app.OnclickRightButton);   
    },

    OnclickLeftButton (event) {
        
        if (app.index > 0) {
            app.index = app.index - 1;
            const slideWidth = app.Slide.clientWidth;
            app.CarouselWrapElm.scrollLeft -= slideWidth;
            document.body.style.background= app.backgroundColors[app.index];    
        } 
        if (app.index === 0) {
            app.LeftButtonElm.classList.add('visible');  
        }
        if (app.index < 5) {
            app.RightButtonElm.classList.remove('visible');  
        }              
    },
    OnclickRightButton (event) {
        if (app.index < 6) {
        app.index = app.index + 1;
        document.body.style.background= app.backgroundColors[app.index];
        const slideWidth = app.Slide.clientWidth;
        app.CarouselWrapElm.scrollLeft += slideWidth;
        }
        if (app.index > 0) {
            app.LeftButtonElm.classList.remove('visible');  
        }
        if (app.index === 5) {
            app.RightButtonElm.classList.add('visible');  
        } 
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
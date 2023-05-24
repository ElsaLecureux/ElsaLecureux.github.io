const app = {

    init: function () {
        app.index = 0
        app.addListenerToButtons();
        app.addListenerToCarouselItems();
        app.addListenerToCloseModal();
    },
    CarouselElm: document.querySelector('.carousel'),
    CarouselWrapElm: document.querySelector('.carousel_wrap'),
    CarouselItemsElm: document.querySelectorAll('.carousel_item'),
    LeftButtonElm: document.querySelector('.LeftButton'),
    RightButtonElm: document.querySelector('.RightButton'),
    ModalElm: document.querySelector('.modal'),
    ModalContentElm: document.querySelectorAll('.modal_content'),
    backgroundColors:['#0B1C3E','#9DA598', '#607748', '#C77461','#4AA8D9', '#CE6535' ],
    backgroundColorsModals:['#0B1C3E00','#9DA59800', '#60774800', '#C7746100','#4AA8D900', '#CE653500'],
    index: 0,
    clickTimeout: false,
    

    addListenerToButtons () {
        app.LeftButtonElm.classList.add('visible'); 
        console.log(app.index);
        app.LeftButtonElm.addEventListener('click', app.OnclickLeftButton);
        app.RightButtonElm.addEventListener('click', app.OnclickRightButton);   
    },

    OnclickLeftButton (event) {
        if (app.clickTimeout === false) {
            app.clickTimeout = true
            if (app.index > 0) {
                app.index = app.index - 1;
                document.body.style.background= app.backgroundColors[app.index];      
                const transition = document.querySelector('.body');
                app.CarouselItemsElm[app.index+1].style.opacity = '0';
                setTimeout(() => {
                    app.CarouselItemsElm[app.index+1].classList.toggle('selected');
                    app.CarouselItemsElm[app.index].style.opacity = '0';
                    app.CarouselItemsElm[app.index].classList.toggle('selected');                
                }, 605)
                setTimeout(() => {  
                    app.CarouselItemsElm[app.index].style.opacity = '1';
                    app.clickTimeout = false;
                  }, 620)
            } 
            if (app.index === 0) {
                app.LeftButtonElm.classList.add('visible');  
            }
            if (app.index < 5) {
                app.RightButtonElm.classList.remove('visible');  
            }              
        }         
    },
    OnclickRightButton (event) {
        if (app.clickTimeout === false) {
            app.clickTimeout = true
            if (app.index < 6) {
                app.index = app.index + 1;
                document.body.style.background= app.backgroundColors[app.index];
                const transition = document.querySelector('.body');
                app.CarouselItemsElm[app.index-1].style.opacity = '0';
                setTimeout(() => {
                    app.CarouselItemsElm[app.index-1].classList.toggle('selected');
                    app.CarouselItemsElm[app.index].style.opacity = '0';
                    app.CarouselItemsElm[app.index].classList.toggle('selected');               
                }, 805)
                setTimeout(() => {
                    app.CarouselItemsElm[app.index].style.opacity = '1';
                    app.clickTimeout = false;
                  }, 820)
                }
                if (app.index > 0) {
                    app.LeftButtonElm.classList.remove('visible');  
                }
                if (app.index === 5) {
                    app.RightButtonElm.classList.add('visible');  
                } 
        }
        
    },    

    addListenerToCarouselItems () {
       for (const itemElm of app.CarouselItemsElm) {
        itemElm.addEventListener('click', app.onClickItem);
      }    
    },

    onClickItem() {
        app.ModalElm.style.background= app.backgroundColorsModals[app.index];
        for (const elm of app.ModalContentElm) {
            let modalNumber = app.index+1;
            if (elm.classList.contains(`${modalNumber}`)) {
                elm.style.display = 'flex';
            } else {
                elm.style.display = 'none';
            }  
        };        
        app.CarouselElm.style.display= 'none';
        app.ModalElm.style.display = 'flex'; 
    },         
    
    addListenerToCloseModal () {
        app.ModalElm.addEventListener('click', app.closeModal);
        const closeModalButtons = document.querySelectorAll('.closeModalButton');
        for (button of closeModalButtons) {
        button.addEventListener('click', app.closeModal);
        }
    },

    closeModal () {
        app.ModalElm.style.display = 'none';
        app.CarouselElm.style.display= 'flex';
    },
}

document.addEventListener('DOMContentLoaded', app.init );
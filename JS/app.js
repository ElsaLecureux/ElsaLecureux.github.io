const app = {

    init: function () {
        app.index = 0
        app.addListenerToButtons();
        app.addListenerToCarouselItems();
        app.addListenerToCloseModal();
    },
    CarouselElm: document.querySelector('.carousel'),
    CarouselWrapElm: document.querySelector('.carousel_wrap'),
    Slide: document.querySelectorAll('.carousel_item'),
    LeftButtonElm: document.querySelector('.LeftButton'),
    RightButtonElm: document.querySelector('.RightButton'),
    ModalElm: document.querySelector('.modal'),
    ModalContentElm: document.querySelectorAll('.modal_content'),
    backgroundColors:['#0B1C3E','#9DA598', '#607748', '#C77461','#4AA8D9', '#CE6535' ],
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
            /*const slideWidth = app.Slide.clientWidth;
            app.CarouselWrapElm.scrollLeft -= slideWidth;*/
            document.body.style.background= app.backgroundColors[app.index];
            app.Slide[app.index].style.opacity = '0';
            transition.ontransitionstart = () => {
                app.Slide[app.index+1].style.opacity = '0';
            }           
            app.Slide[app.index].style.opacity = '1';
            app.Slide[app.index].classList.toggle('selected');               
            app.Slide[app.index+1].classList.toggle('selected');
            const transition = document.querySelector('.body');
            transition.ontransitionend = () => {
                app.Slide[app.index].style.opacity = '1';
            }
            
 
           
               
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
        const transition = document.querySelector('.body');
        transition.ontransitionstart = () => {
            app.Slide[app.index-1].style.opacity = '0';
            app.Slide[app.index-1].classList.toggle('selected');
        }
        transition.ontransitionend = () => {
                app.Slide[app.index].style.opacity = '0';
                app.Slide[app.index].classList.toggle('selected');               
                app.Slide[app.index].style.opacity = '1';
            }
        /*const slideWidth = app.Slide.clientWidth;
        app.CarouselWrapElm.scrollLeft += slideWidth;*/
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
        app.ModalElm.style.background= app.backgroundColors[app.index];
        for (const elm of app.ModalContentElm) {
            let modalNumber = app.index+1;
            if (elm.classList.contains(`${modalNumber}`)) {
                elm.style.display = 'flex';
            } else {
                elm.style.display = 'none';
            }  
        }
        app.ModalElm.style.display = 'block'; 
        /*app.CarouselWrapElm.style.display = 'none';
        app.LeftButtonElm.style.display = 'none';
        app.RightButtonElm.style.display = 'none';*/ 
    },         
    
    addListenerToCloseModal () {
        const closeModalButtons = document.querySelectorAll('.closeModalButton');
        for (button of closeModalButtons) {
        button.addEventListener('click', app.closeModal);
        }
    },

    closeModal () {
        app.ModalElm.style.display = 'none';
    },
}

document.addEventListener('DOMContentLoaded', app.init );
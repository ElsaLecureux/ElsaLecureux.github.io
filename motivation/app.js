const app = {

    init: function () {
        app.addEventListenerTitle();
    },
    titleElm : document.querySelector('.qualities_title'),
    conscientiousElm: document.querySelector('.conscientious'),
    teamspiritElm: document.querySelector('.teamspirit'),
    creativityElm: document.querySelector('.creativity'),
    autonomyElm: document.querySelector('.autonomy'),
    organizedElm: document.querySelector('.organized'),
    adaptabilityElm: document.querySelector('.adaptability'),
    learningElm: document.querySelector('.learning'),
    communicationElm: document.querySelector('.communication'),
    addEventListenerTitle ()  {
        app.titleElm.addEventListener('animationend',app.addQualities)
    },
    addQualities () {
        setTimeout(() => {
            app.conscientiousElm.classList.add('visible');
        }, 200);
        setTimeout(() => {
            app.teamspiritElm.classList.add('visible');
        }, 800);
        setTimeout(() => {
            app.creativityElm.classList.add('visible');
        }, 1400) 
        setTimeout(() => {
            app.autonomyElm.classList.add('visible');
        }, 2000)
        setTimeout(() => {
            app.organizedElm.classList.add('visible');
        }, 2600)
        setTimeout(() => {
            app.adaptabilityElm.classList.add('visible');
        }, 3200)
        setTimeout(() => {
            app.learningElm.classList.add('visible');
        }, 3800)
        setTimeout(() => {
            app.communicationElm.classList.add('visible');
        }, 4400)    
    },
    
}

document.addEventListener('DOMContentLoaded', app.init );
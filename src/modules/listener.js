var brends__list = document.querySelector('.brends__list')
var brends__li = brends__list.children
var expand__brends = document.getElementById('expand__button-brends')

var repair__list = document.querySelector('.repair__list')
var repair__li = repair__list.children
var expand__repair = document.getElementById('expand__button-repair')

var expand = document.querySelector('.expand')
var menu = document.querySelector('.menu')
var button_open_menu = document.querySelector('.button-open-menu')
var button_close_menu = document.querySelector('.button-close-menu')
var page_blur = document.querySelector('.page-blur')

var feedback = document.querySelector('.feedback')
var button_open_feedback = document.querySelectorAll('.button-feedback-open')
var button_close_feedback = document.querySelector('.button-feedback-close')

var call = document.querySelector('.call')
var button_call_open = document.querySelectorAll('.button-call-open')
var button_call_close = document.querySelector('.button-call-close')


//событие списка брендов

expand__brends.addEventListener('click', expand__brends_listener)

function expand__brends_listener() {

    var expand__img = expand__brends.querySelector('.expand__img')
    var expand__hide = expand__brends.querySelector('.expand__hide') //скрыть
    var expand__show = expand__brends.querySelector('.expand__show') //показать все
    var i

    if (window.innerWidth < 1120) {
        i = 6
    } else {
        i = 8
    }

    if (expand__hide.classList.contains('hidden')) {

        for (i; i < brends__li.length; i++) {
            brends__li[i].style.display = 'flex'
        }

        expand__img.style.transform = 'rotate(180deg)';

        expand__hide.classList.remove('hidden');
        expand__show.classList.add('hidden');

    } else {

        for (i; i < brends__li.length; i++) {
            brends__li[i].style.display = 'none'
        }

        expand__img.style.transform = 'rotate(0deg)';

        expand__hide.classList.add('hidden');
        expand__show.classList.remove('hidden');

    }

}

//событие списка техники

expand__repair.addEventListener('click', expand__repair_listener)

function expand__repair_listener() {

    var expand__img = expand__repair.querySelector('.expand__img')
    var expand__hide = expand__repair.querySelector('.expand__hide') //скрыть
    var expand__show = expand__repair.querySelector('.expand__show') //показать все
    var i

    if (window.innerWidth < 1120) {
        i = 3
    }

    if (window.innerWidth >= 1120) {
        i = 4
    }

    if (expand__hide.classList.contains('hidden')) {

        for (i; i < repair__li.length; i++) {
            repair__li[i].style.display = 'flex'
        }

        expand__img.style.transform = 'rotate(180deg)';

        expand__hide.classList.remove('hidden');
        expand__show.classList.add('hidden');

    } else {

        for (i; i < repair__li.length; i++) {
            repair__li[i].style.display = 'none'
        }

        expand__img.style.transform = 'rotate(0deg)';

        expand__hide.classList.add('hidden');
        expand__show.classList.remove('hidden');

    }

}

// menu

button_open_menu.addEventListener('click', function () {
    menu.style.display = 'flex'
    page_blur.style.display = 'block'
    //page_blur.style.left = '320px'
    //page_blur.style.right = '0'

})

button_close_menu.addEventListener('click', function () {
    menu.style.display = 'none'

    if (feedback.style.display === 'flex' || call.style.display === 'flex') {
        page_blur.style.display = 'fixed'
    } 
    
    if (feedback.style.display === 'none' && call.style.display === 'none') {
        page_blur.style.display = 'none'
    }

})


//сообщение

for (let i = 0; i < button_open_feedback.length; i++) {
    button_open_feedback[i].addEventListener(
        'click',
        function () {
            feedback.style.display = 'flex'
            call.style.display = 'none'
            page_blur.style.display = 'block'
        }
    );
}

button_close_feedback.addEventListener('click', function () {
    feedback.style.display = 'none'

    if (menu.style.display === 'flex' || call.style.display === 'flex') {
        page_blur.style.display = 'fixed'
    } else {
        page_blur.style.display = 'none'
    }
})


//звонок

for (let i = 0; i < button_call_open.length; i++) {
    button_call_open[i].addEventListener(
        'click',
        function () {
            call.style.display = 'flex'
            feedback.style.display = 'none'
            page_blur.style.display = 'block'
        }
    );
}

button_call_close.addEventListener('click', function () {
    call.style.display = 'none'

    if (menu.style.display === 'flex' || feedback.style.display === 'flex') {
        page_blur.style.display = 'fixed'
    } else {
        page_blur.style.display = 'none'
    }
})
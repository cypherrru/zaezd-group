import $ from '../main/node_modules/jquery';
import '../slick/slick.min.js';
import '../slick/slick.css';
import '../slick/slick-theme.css';
import '../maskPlugin/jquery.maskedinput.min.js';


document.addEventListener('DOMContentLoaded', function () {
    // Затемнение и появление/скрытие окна с заявкой
    function requestMenuOpen() {
        document.querySelector('.popups').classList.add('popups--active')
    }

    function requestMenuClass() {
        document.querySelector('.popups').classList.remove('popups--active')
    }

    // При нажатии на кнопку открывать меню, 
    // при нажатии на крестик - закрывать
    document.querySelectorAll('.request-btn')[0].addEventListener('click', requestMenuOpen)
    document.querySelectorAll('.request-btn')[1].addEventListener('click', requestMenuOpen)
    document.querySelector('.popup-callback__close').addEventListener('click', requestMenuClass)

    // Если клик был сделан вне контента 
    // модального окна, выходим из модалки
    $(document).mouseup(function (e) {
        var div = $(".popup-callback__content");
        if (!div.is(e.target) &&
            div.has(e.target).length === 0) {
            $(".popups").removeClass("popups--active");
        }
    });

    // При нажатии на бургер превратить его в крест и наоборот
    document.querySelector('.header__burger-menu').addEventListener('click', function () {
        document.querySelector('.header__burger-menu').classList.toggle('header__burger-menu--active')
        document.querySelector('.header__wrap').classList.toggle('header__wrap--active')
    })

    // Маска для номера телефона (РУССИА)
    $("#phone-number").mask("+7 (999) 999-9999");

    // Расрытие блока с вариантами на калькуляторе
    $('.select__selected').on('click', function() {
        $(this).parent('.select').addClass('open')
    })

    // При нажатии на один из вариантов в выпадающем меню
    // присвоить выбранное значение скрытым инпутам и отобразить
    // затем скрыть всплывающее меню
    $('.select__item').on('click', function() {
        let value = $(this).text();
        console.log(value);
        $(this).parent().parent().children('.select__selected').text(value);
        console.log($(this).parent().text());
        console.log($(this).parent().parent().children('.calc__input').val(value));
        $(".select").removeClass("open");
    })

    // Сокрытие блока с вариантами на 
    // калькуляторе при нажатии на любую область
    $(document).mouseup(function () {
        $(".select").removeClass("open");
    });
    
    // Раскрывать именно тот список, по которому нажали
    $('.select__selected').on('click', function() {
        $(this).parent('.select').addClass('open')
    })

});
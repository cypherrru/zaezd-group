import $ from 'jquery';
import '../../global/global.js';
import './styles/index.scss';
import '../../slick/slick.min.js';
import '../../slick/slick.css';
import '../../slick/slick-theme.css';

document.addEventListener('DOMContentLoaded', function () {
    $('.header').on('click', function() {
        $(this).addClass('header-active')
    })
});
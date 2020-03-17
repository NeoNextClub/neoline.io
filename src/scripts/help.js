import '../style/global.scss';
import '../style/help.scss';
import * as $ from 'jquery';

$(document).ready(function () {
    $('.item-title').on('click', function() {
        $(this).children('.down').toggleClass('active');
        $(this).parent('.category-item').children('.item-content').toggle();
    })
});
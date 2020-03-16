import '../style/global.scss';
import '../style/help.scss';
import * as $ from 'jquery';

$(document).ready(function () {
    $('.item-title').on('click', function() {
        if($(this).children('.down').hasClass('active')) {
            $(this).children('.down').removeClass('active');
        } else {
            $(this).children('.down').addClass('active');
        }
        $(this).parent('.category-item').children('.item-content').toggle();
    })
});
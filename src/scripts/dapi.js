import '../style/dapi.scss';
import './prism.js';
import * as $ from 'jquery';
let offsetHs = [];
let targetAnchorIndex = -1;
let bodyClientWidth;

$(document).ready(function () {
    initView();

    // 侧边栏二级目录收放
    $('.aside-item h4').on('click', function () {
        const asideContentClass = $(this).attr('class');
        const asideContentDisplay = $(`div.item-content.${asideContentClass}`).css('display');
        if (asideContentDisplay === 'block') {
            $(`h4.${asideContentClass} img`).addClass('close');
        } else {
            $(`h4.${asideContentClass} img`).removeClass('close');
        }
        $(`div.item-content.${asideContentClass}`).slideToggle();
    });

    // 侧边栏目录条目点击样式
    $('aside.catalogue a').on('click', function () {
        $('aside.catalogue a').removeClass('active');
        $(this).addClass('active');
    });

    // 小屏幕，显示侧边栏
    $('header .menu').on('click', function () {
        if (bodyClientWidth !== document.body.clientWidth) {
            bodyClientWidth = document.body.clientWidth;
            offsetHs = [];
            targetAnchorIndex = 0;
            handleOffsetValue();
            handleActiveAnchor();
        }
        $('.veil').fadeIn();
        $('aside.veil-catalogue').addClass('show');
    });

    // 小屏幕，隐藏侧边栏
    $('.veil').on('click', function () {
        $('aside.veil-catalogue').removeClass('show');
        $('.veil').fadeOut();
    });

    // 小屏幕，点击侧边栏菜单时不隐藏侧边栏
    $('.veil .catalogue').on('click', function (e) {
        e.stopPropagation();
    });

    $(window).on('resize', function () {
        if (document.body.clientWidth >= 1000) {
            bodyClientWidth = document.body.clientWidth;
            offsetHs = [];
            targetAnchorIndex = 0;
            handleOffsetValue();
            handleActiveAnchor();
        }
    });

    $('.content').on('scroll', throttle(handleActiveAnchor, 500));
});

// 初始化样式
function initView() {
    bodyClientWidth = document.body.clientWidth;
    handleOffsetValue();
    handleActiveAnchor();
}

// 当前页面的锚点添加 class: active
function handleActiveAnchor() {
    const contentScrollTop = $('.content').scrollTop();
    let i = 0;
    const menus = $('.catalogue.normal a');
    for (; i < menus.length; i++) {
        if (contentScrollTop < offsetHs[i]) {
            break;
        }
    }
    if (targetAnchorIndex !== i) {
        targetAnchorIndex = i;
        $('aside.normal a').removeClass('active');
        $('aside.veil-catalogue a').removeClass('active');
        $($('aside.normal a')[targetAnchorIndex]).addClass('active');
        $($('aside.veil-catalogue a')[targetAnchorIndex]).addClass('active');
    }
}

// 计算每个锚点的距离 $('.content') 的高度
function handleOffsetValue() {
    const menus = $('.catalogue.normal a');
    for (var i = 0; i < menus.length; i++) {
        var menuID = $(menus[i]).attr('href');
        if (i === 0) {
            offsetHs[0] = $(menuID).get(0).offsetHeight; // 每个锚点自身的高度
        } else {
            offsetHs[i] = offsetHs[i - 1] + $(menuID).get(0).offsetHeight;
        }
    }
}

// 函数节流，每隔1000毫秒触发一次scroll事件
function throttle(func, delay) {
    let timer = null;
    let startTime = Date.now();
    return function () {
        let currentTime = Date.now();
        let remaining = delay - (currentTime - startTime);
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        if (remaining <= 0) {
            func.apply(context, args);
            startTime = Date.now();
        } else {
            timer = setTimeout(func, remaining);
        }
    }
}

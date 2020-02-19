import '../style/index.scss';
import * as $ from 'jquery';

let assetLen = 3;
let assetIndex = 1;
let android_google = 'https://play.google.com/store/apps/details?id=com.neoline.app';
let android_package = 'https://dl.neoline.cn/app/download';
let ios_store = 'https://itunes.apple.com/cn/app/id1484779135?mt=8';
let ios_testflight = 'https://testflight.apple.com/join/9MloO2jC';

$(document).ready(function() {
    judgeMobile();
    $('section.asset .preview').on('click', function() {
        if (assetIndex === 1) {
            return;
        }
        assetIndex--;
        if (assetIndex === 1) {
            $('section.asset .preview').addClass('prohibited');
        } else {
            $('section.asset .preview').removeClass('prohibited');
        }
        if (assetIndex === assetLen) {
            $('section.asset .next').addClass('prohibited');
        } else {
            $('section.asset .next').removeClass('prohibited');
        }
        $('section.asset img.asset').hide();
        $(`section.asset img.asset.asset${assetIndex}`).show();
    });
    $('section.asset .next').on('click', function() {
        if (assetIndex === assetLen) {
            return;
        }
        assetIndex++;
        if (assetIndex === 1) {
            $('section.asset .preview').addClass('prohibited');
        } else {
            $('section.asset .preview').removeClass('prohibited');
        }
        if (assetIndex === assetLen) {
            $('section.asset .next').addClass('prohibited');
        } else {
            $('section.asset .next').removeClass('prohibited');
        }
        $('section.asset img.asset').hide();
        $(`section.asset img.asset.asset${assetIndex}`).show();
    });

    $('.android-google').on('click', function() {
        if (is_weixn()) {
            $(".weixin-tip").fadeIn();
        } else {
            window.location.href = android_google;
        }
    });
    
    $('.android-package').on('click', function() {
        if (is_weixn()) {
            $(".weixin-tip").fadeIn();
        } else {
            window.location.href = android_package;
        }
    });

    $('.ios-store').on('click', function() {
        if (is_weixn()) {
            $(".weixin-tip").fadeIn();
        } else {
            window.location.href = ios_store;
        }
    });

    $('.ios-testflight').on('click', function() {
        if (is_weixn()) {
            $(".weixin-tip").fadeIn();
        } else {
            window.location.href = ios_testflight;
        }
    });

    $('.weixin-tip button').on('click', function() {
        $(".weixin-tip").fadeOut();
    })
});

function judgeMobile() {
    let u = navigator.userAgent;
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //判断是否是 android终端
    let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (isAndroid) {
        $('section.summary .mobile.android').css('display', 'flex');
    }
    if (isIOS) {
        $('section.summary .mobile.ios').css('display', 'flex');
    }
}

// is wechat browser
function is_weixn() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}

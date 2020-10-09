import '../style/index.scss';
import * as $ from 'jquery';

let assetLen = 3;
let assetIndex = 1;
let android_google = 'https://play.google.com/store/apps/details?id=com.neoline.app';
let android_package = 'https://neoline.oss-cn-hongkong.aliyuncs.com/downloads/NeoLine.apk';
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
$('.register').on('click',function(){
    pupopTip();
})
function pupopTip() {
    let popup = $('<div class="pupop-box">'
        +'<div class="pupop-content">'+
            '<form>'+
                '<div class="title">订阅电子报<img class="pup-close" src="/assets/images/newsletter-close.png" alt=""></div>'+
                '<div class="ipt-title">E-MAIL</div>'+
                '<input type="email" id="email" placeholder="请填写您的邮箱地址" required style="">'+
                '<div class="detail"><input type="checkbox" value="0" id="checkbox-1" style="display: none;"><label for="checkbox-1"></label><span class="text-indent">从NeoLine团队获取最新更新</span></div>'+
                '<div class="detail"><input type="checkbox" value="0" id="checkbox-2" style="display: none;"><label for="checkbox-2"></label><p>您可以随时取消订阅这些通讯。 有关如何退订，我们的隐私惯例以及我们如何致力于保护和尊重您的隐私的更多信息，请查看我们的隐私政策。</p></div>'+
            '</form>'+
            '<button class="submit">提交</button>'+
        '</div>'+
    '</div>')
    $("body").append(popup);
    $('.pupop-box').fadeIn();
    $('body').on('click','.pup-close',function() {
        $('.pupop-box').fadeOut(function () {$(this).remove()})
    })
}
$(function() {
  
  
  $('.header-icon').click(function(){
    $('.header-icon').toggleClass('open');
    $('.header-menu').slideToggle(500);

    $(document).click(function(event) {
      if(!$(event.target).closest('.header-icon,.header-menu').length) {
        $('.header-menu').slideUp();
      } 
    });
  });


 

  // トップへ戻る
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.floating').fadeIn();
    } else {
      $('.floating').fadeOut();
    }
  });

  // ヘッダーをtopで固定
    var nav = $('header');　//固定したいDivのIDを入力

    // メニューのtop座標を取得する
    var offsetTop = nav.offset().top;
    
    var floatMenu = function() {
      // スクロール位置がメニューのtop座標を超えたら固定にする
      if ($(window).scrollTop() > offsetTop) {
        nav.addClass('header-fixed');
      } else {
        nav.removeClass('header-fixed');
      }
    }
    $(window).scroll(floatMenu);
    $('body').bind('touchmove', floatMenu);

   // スムーススクロール
  //  var scroll = new SmoothScroll('a[href*="#"]');
  $('a[href^="#"]').click(function(){

     var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
     var headerHeight = 50;
    var position = target.offset().top - headerHeight;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
 
  });


 
});

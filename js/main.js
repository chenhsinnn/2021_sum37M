/*
 ** 回版頭
*/
jQuery(function(){
	jQuery("#gotop").click(function(){
		jQuery("html,body").stop(true,false).animate({scrollTop:0},700); //設定回頁面頂端
		return false;
	});
  jQuery(window).scroll(function() {
      if ( jQuery(this).scrollTop() > 300){ //設定大於300px才顯示浮層
          jQuery('#gotop').fadeIn("fast");
      } else {
          jQuery('#gotop').stop().fadeOut("fast");
      }
  });


//   // 錨點點擊
//   var $window = $(window);
//   var $anchorLink = $('.anchor_link');
//   $anchorLink.on('click', function (e) {
//     e.preventDefault();
//     var hash = this.hash;

//     if (hash) {
//       TweenMax.to($window, 1.5, { scrollTo: hash, autoKill: true, overwrite: 5, ease: Power4.easeOut, force3D: true });
//     }
//   });

  // 選單打開/關閉
  var $navOpen = $('.nav_open');
  var $nav = $('.nav');
  $navOpen.on('click', function () {
    $navOpen.toggleClass('active');
    $nav.toggleClass('active');
  });

  // 選單點擊
  var $navItem = $('.nav_bar > li > a');
  $navItem.on('click', function () {
    $navOpen.removeClass('active');
    $nav.removeClass('active');
  });

  var $read = $('input[name="read"]');
  $read.on('change', function () {
    var $this = $(this);
    var $checkbtn = $this.closest('.check_label').find('.checkbtn');

    if ($this.prop('checked')) {
      $checkbtn.addClass('active');
    }
    else {
      $checkbtn.removeClass('active');
    }
  });

  
});

/*
	 ** wow.js
	*/
  var wow = new WOW({
    boxClass:     'wow',      // 要套用WOW.js縮需要的動畫class(預設是wow)
    animateClass: 'animated', // 要"動起來"的動畫(預設是animated, 因此如果你有其他動畫library要使用也可以在這裡調整)
    mobile:       true,       // 手機上是否要套用動畫 (預設是true)
    live:         true,       // 非同步產生的內容是否也要套用 (預設是true, 非常適合搭配SPA)
    callback:     function(box) {
      // 當每個要開始時, 呼叫這裡面的內容, 參數是要開始進行動畫特效的element DOM
    },
    scrollContainer: null // 可以設定成只套用在某個container中捲動才呈現, 不設定就是整個視窗
  });
	wow.init();
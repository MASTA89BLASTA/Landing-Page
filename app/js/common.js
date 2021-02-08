(function($){
  $(function(){
  /*let myParallaxBubblesLeft = $(".slider_icons-bubbles_parallax-left").get(0);
  let myParallaxBubblesRight = $(".slider_icons-bubbles_parallax-right").get(0);

  new simpleParallax(myParallaxBubblesLeft, {
    orientation: 'up right',
    overflow: true
  });
  new simpleParallax(myParallaxBubblesRight, {
    orientation: 'down',
    overflow: true
  });*/
  
    $(".slider_icons-bubbles_parallax-left").paroller({ factor: 0.5, factorXs: 0.2, type: 'foreground', direction: 'vertical' });
    $(".slider_icons-bubbles_parallax-right").paroller({ factor: 0.5, factorXs: 0.2, type: 'foreground', direction: 'vertical' });

    $('.bxslider').bxSlider({
      pager: true,
      controls: true,
      auto: true,
      pause: 10000,
      mode: 'fade',
      minSlides: 1,
      maxSlides: 1
    });

    function dropDownMenu(elem_1, elem_2, elem_3, elem_4) {
      $(elem_1).on("click", function () {
        $(elem_2).toggleClass("active_button_class");
        showHiddenMenu(elem_1, elem_3, elem_4);
      });
    }
    
    dropDownMenu(".stability_24-text_p", ".stability_24-arrow", ".stability_24-text_hidden", ".stability_24-icon_items" );
    dropDownMenu(".led_text-p", ".led_arrow", ".led-text_hidden", ".led-icon_items" );
    dropDownMenu(".lights_off_text-p", ".lights_off-arrow", ".lights_off-text_hidden", ".lights_off-icon_items" );
    dropDownMenu(".splitter_text-p", ".splitter-arrow", ".splitter-text_hidden", ".splitter-icon_items" );
    dropDownMenu(".power_off-text_p", ".power_off-arrow", ".power_off-text_hidden", ".power_off-icon_items" );
    
    
    function showHiddenMenu(obj_1, obj_2, obj_3) {
      //внутри нашего пункта меню находим "выпадашку"
      let $dropMenu = $(obj_1).parent().find(obj_2);
      //если наш dropMenu видимый - скрываем, если скрыт - показываем
      if ($dropMenu.is(":visible")) {
        $(obj_1).css({"color": "#2E3A59"});
        $(obj_3).css({"height" : "50px"})
        $dropMenu.fadeOut(200);
      } else {
        //скрываем все видимые "выпадашки" на странице    
        $dropMenu.hide(":visible");
        $(obj_1).css({"color": "#00C368"});
        $(obj_3).css({"height" : "143px"})
        $dropMenu.fadeIn(400);
      }
    }

    /*$('.slider_icons-img_items').on('mouseover', function() {
      $(this).find('svg').children().css({
        'stroke': '#00C368'
      });
    });
    $('.slider_icons-img_items').on('mouseleave', function() {
      $(this).find('svg').children().css({
        'stroke': '#2E3A59'
      });
    });

    /*$('img.bxslider_icon-items').each(function(){
      var $img = $(this);
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');
      $.get(imgURL, function(data) {
        var $svg = $(data).find('svg');
        if(typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass+' replaced-svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
          $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }
        $img.replaceWith($svg);
      }, 'xml');
    });*/
  });  
})(jQuery);
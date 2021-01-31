$(document).ready(function() {
    let myParallaxBubblesLeft = $(".slider_icons-bubbles_parallax-left").get(0);
    let myParallaxBubblesRight = $(".slider_icons-bubbles_parallax-right").get(0);
      
    new simpleParallax(myParallaxBubblesLeft, {
      orientation: 'up right'
    });
    new simpleParallax(myParallaxBubblesRight, {
      orientation: 'down'
    });

    $('.bxslider').bxSlider({
      pager: true,
      controls: true,
      auto: true,
      pause: 10000,        
      mode: 'fade',
      minSlides: 1,
      maxSlides: 1
    });

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
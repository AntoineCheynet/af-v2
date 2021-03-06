$(document).ready(function () {

  // ANIMATIONS ON SCROLL START
      var scroll_start = 0;
      var startchange = $('body');
      var offset = startchange.offset();
      $(document).scroll(function() {
          scroll_start = $(this).scrollTop();
          if(scroll_start > offset.top) {
            $('h1').css('margin-top', '4px');
            $('.toggle-button').css('top', '10px');
            $('#contact-link').css('top', '20px');
            $('#h2-blog').css('top', '50px');

          } else {
            $('h1').css('margin-top', '');
            $('.toggle-button').css('top', '');
            $('#contact-link').css('top', '');
            $('#h2-blog').css('top', '');
      }
    });

    // UI ANIMATION
    $('body').addClass('animated fadeIn');

    // ACTIVATE POINTER EVENTS ON CLICK ON MAP
    $('#map').css('pointer-events', 'none');

    $('.map-wrapper').click(function() {
      $('#map').css('pointer-events', 'auto');
    });

});

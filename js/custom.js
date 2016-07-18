
 /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets
});


$(document).ready(function() {

  /* Home Slideshow Vegas
  -----------------------------------------------*/
  $(function() {
    $('body').vegas({
        slides: [
            { src: 'images/slide-1.jpg' },
            { src: 'images/slide-2.jpg' }
        ],
        timer: false,
        transition: [ 'zoomOut', ]
    });
  });


   /* Back top
  -----------------------------------------------*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
        });
        // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
      })


  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });

/*Correo*/


$(document).ready(function() {
    $().ajaxStart(function() {
        $('#loading').show();
        $('#resultado').hide();
    }).ajaxStop(function() {
        $('#loading').hide();
        $('#resultado').fadeIn('slow');
    });
    $('#enviar').submit(function() {
        $.ajax({
            type: 'POST',
            url: $(this).attr('action'),
            data: $(this).serialize(),
            success: function(data) {
                $('#resultado').html(data);

            }
        })

        return false;
    });
})

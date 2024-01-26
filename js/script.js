$('.openNav').click(() => {
    $('#leftMenu').animate({ width: '250px' }, 100)
    $('#home-content').animate({ marginLeft: '250px' }, 100)
})
$('.closebtn').click(() => {
    $('#leftMenu').animate({ width: '0px' }, 100)
    $('#home-content').animate({ marginLeft: '0px' }, 100)
})
for (let i = 1; i <= $('.toggle').length; i++) {
    $(`.toggle:nth-of-type(${i})`).click(() => {
        $(`.inner:nth-of-type(${i})`).slideToggle(500)
    })
}

$(document).ready(function() {
    // Set the date we're counting down to
    var eventDate = new Date("March 10, 2024 00:00:00").getTime();
    // Update the countdown every 1 second
    var x = setInterval(function() {
      // current date and time
      var now = new Date().getTime();
      // Calculate the remaining time
      var distance = eventDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Display
      $('.seconds').text(`${seconds} s`)
      $('.minutes').text(`${minutes} m`)
      $('.hours').text(`${hours} h`)
      $('.days').text(`${days} d`)	
      if (distance < 0) {
        clearInterval(x);
      }
    }, 1000);
  });

    $('textarea').keyup(function () {
        var X = 100 - $(this).val().length;
        if (X < 0) {
            X = 'your available character finished ';
        }
        $('#chars').text(X);
    });
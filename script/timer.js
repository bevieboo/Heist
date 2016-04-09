function beginTimer() {
  // This function starts the timer without a 3 second delay in the beginning.
  var i = 0;
  $('#display-num').html(gamePlay.level1[i]);
  handleTimer();
}

function handleTimer() {
  var i = 1;
  var timer = setInterval(function() {
    // Every 3 seconds, display number from array.
    $('#display-num').html(gamePlay.level1[i]);
    i += 1;
    // Stop timer:
    if (i <= gamePlay.level1.length) {
    } else {
      clearInterval(timer);
      $('#display-num').empty();
    }
  }, 3000); // Function is running every 3 seconds.
}

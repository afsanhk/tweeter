$(document).ready(function () {
  $('.new-tweet').children('form').on('submit', function(event) {
    event.preventDefault();
    const tweetContent = ($(this).serialize()); //$(this).serialize() is whatever is typed into the form!
    
    // Validation Pseudo
    /*
    
    */
    $.post('/tweets', tweetContent); // This is AJAX shorthand in jQuery
  });
});

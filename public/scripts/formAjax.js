$(document).ready(function() {
  $('.new-tweet').children('form').on('submit', function(event) {
    event.preventDefault();
    const tweetContent = ($(this).serialize()); //$(this).serialize() is fieldname=formcontent.
    const tweetText = event.target.text.value; //event.target points to the form HTML element. .text points to textarea. .value returns the updated value
    const maxLength = 140;

    // Remove error (if any) - by sliding it up.
    $('.new-tweet').children('.validation-error').text('').slideUp();

    // Validation Checks - error messages will slide down.
    // 1) If the form has more than 140 characters, return an error message and don't post.
    if (tweetText.length > maxLength) {
      $('.new-tweet').children('div').text(`Please limit your tweet to ${maxLength} characters!`).removeClass('hidden').slideDown();
      return;

    // 2) If the form is empty, return an error message and don't post.
    } else if (tweetText.length === 0) {
      $('.new-tweet').children('div').text('Please make sure to write something!').removeClass('hidden').slideDown();
      return;

    // 3) Otherwise, post.
    } else {
      $.post('/tweets', tweetContent, function() { // AJAX shorthand in jQuery to post.
        $('.new-tweet').children('form')[0].reset(); // Clears the form - source: https://stackoverflow.com/questions/10633605/clear-form-values-after-submission-ajax
        $.getScript('/scripts/client.js'); // AJAX shorthand to get a script - runs tweet loading script again.
      });
    }
  });
});

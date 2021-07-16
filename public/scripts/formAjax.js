$(document).ready(function() {

  // Event handler for form submission
  $('.new-tweet').children('form').on('submit', function(event) {
    event.preventDefault();
    const tweetContent = ($(this).serialize()); //$(this).serialize() converts input to fieldname=formcontent for POST-ing.
    const tweetText = event.target.text.value; //event.target.text.value points to updated form value of HTML element after input.
    const maxLength = 140;

    // Remove errors (if any) - by sliding it up.
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
        $.getScript('/scripts/client.js'); // AJAX shorthand to get a script - runs tweet loading script again.
        $('.new-tweet').children('form').trigger('reset'); // Resets form
        $('.new-tweet').children('form').children('div').children('.counter').text(`${maxLength}`); // Sets counter back to 140
      });
    }
  });
});
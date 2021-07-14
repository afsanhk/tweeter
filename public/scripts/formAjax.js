$(document).ready(function () {
  $('.new-tweet').children('form').on('submit', function(event) {
    event.preventDefault();
    const tweetContent = ($(this).serialize()); //$(this).serialize() is fieldname=formcontent.
    const tweetText = tweetContent.replace('text=',''); // TweetContent without the fieldname
    const maxLength = 140; 

    // Remove error (if any) -- we might want to do this by adding another class .closed. This will allow us to play with transitions.
    $('.new-tweet').children('.validation-error').remove(); 

    // Validation Checks
    if (tweetText.length > maxLength) { // 1) If the form has more than 140 characters, return an error message and don't post.
      const $div = $("<div>").addClass('validation-error').text(`Please limit your tweet to ${maxLength} characters!`);
      $('.new-tweet').prepend($div); // Prepend so it shows above the form
      return;

    } else if (tweetText.length === 0) { // 2) If the form is empty, return an error message and don't post.
      const $div = $("<div>").addClass('validation-error').text('Please make sure to write something!');
      $('.new-tweet').prepend($div);
      return;

    } else { // 3) Otherwise, post.
      $.post('/tweets', tweetContent, function () { // AJAX shorthand in jQuery to post.
        $('.new-tweet').children('form')[0].reset(); // Clears the form - source: https://stackoverflow.com/questions/10633605/clear-form-values-after-submission-ajax
        $.getScript('/scripts/client.js'); // AJAX shorthand to get a script - runs tweet loading script again.
      }); 
    }
  });
});

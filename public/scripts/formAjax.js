$(document).ready(function () {
  $('.new-tweet').children('form').on('submit', function(event) {
    event.preventDefault();
    const tweetContent = ($(this).serialize()); //$(this).serialize() is fieldname=formcontent.
    const tweetText = decodeURI(tweetContent).substr(5); // TweetContent without the fieldname & encoding %20,etc.
    const maxLength = 140; 

    // Remove error (if any) - by hiding it. 
    $('.new-tweet').children('.validation-error').addClass('hidden').text(''); 

    // Validation Checks
    // 1) If the form has more than 140 characters, return an error message and don't post.
    if (tweetText.length > maxLength) { 
      $('.new-tweet').children('div').removeClass('hidden').text(`Please limit your tweet to ${maxLength} characters!`);
      return;

    // 2) If the form is empty, return an error message and don't post.  
    } else if (tweetText.length === 0) { 
      $('.new-tweet').children('div').removeClass('hidden').text('Please make sure to write something!');      
      return;

    // 3) Otherwise, post.  
    } else { 
      $.post('/tweets', tweetContent, function () { // AJAX shorthand in jQuery to post.
        $('.new-tweet').children('form')[0].reset(); // Clears the form - source: https://stackoverflow.com/questions/10633605/clear-form-values-after-submission-ajax
        $.getScript('/scripts/client.js'); // AJAX shorthand to get a script - runs tweet loading script again.
      }); 
    }
  });
});

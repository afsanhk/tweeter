$(document).ready(function () {
  $('.new-tweet').children('form').on('submit', function(event) {
    event.preventDefault();
    const tweetContent = ($(this).serialize()); //$(this).serialize() is whatever is typed into the form!
    const tweetText = tweetContent.replace('text=',''); // TweetContent without the fieldname
    const maxLength = 140; 

    // Validation Checks
    if (tweetText.length > maxLength) { // 1) If the form has more than 140 characters, return an alert and don't post.
      alert('Please limit your tweet to 140 characters!');
      return;
    } else if (tweetText.length === 0) { // 2) If the form is empty, return an alert and don't post.
      alert('Please make sure to write something!')
      return;
    } else {  // 3) Otherwise, post.
      $.post('/tweets', tweetContent); // This is AJAX shorthand in jQuery
    }
    
  });
});

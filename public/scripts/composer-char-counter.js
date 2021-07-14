$(document).ready(function() {
  
  $("#tweet-text").on('input', function() { // Use input instead of keyup/down/press because it counts copy/paste.
    // Note: $(this) selects #tweet-area as the 'target' for our methods
    let charCount = $(this).val().length; // $(this).val().length --> .val() returns what is inside the text area and .length returns the length i.e characters entered.

    // Set charCounter to the .counter class element
    const maxLength = 140; // The max length is 140. Don't set this equal to countElement.val() as the value of $('.counter') will decrease as you input more chars.
    $(this).siblings('div').children('.counter').text(maxLength - charCount);

    // Set font color to red if more than 140 chars
    if (charCount > 140) {
      $(this).siblings('div').children('.counter').addClass('error-tweet-text'); // This style is defined in new-tweet.css and only activates when >140 chars.
    } else {
      $(this).siblings('div').children('.counter').removeClass('error-tweet-text'); // Class is removed and styling is back to default when <140 chars.
    }
  }); 
});



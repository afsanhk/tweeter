/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

  // 1. Function creates a single tweet article
  const createTweetElement = function(data) {
    const $output = $('<article class="tweet">'); // Output is a tweet class article
    
    // Article Header Tags
    const $articleHeader = $('<header>'); // Set article header tag
    const $articleHeaderDiv = $('<div>'); // Set div in article header
    const $headerAvatar = $('<img class="image">').attr('src', data.user.avatars); // Set image tag with avatar
    const $headerName = $('<span class="name">').html(data.user.name);
    const $headerHandle = $('<span class="username">').html(data.user.handle);

    // Append Header Tags
    $articleHeaderDiv.append($headerAvatar).append($headerName);
    $articleHeader.append($articleHeaderDiv).append($headerHandle);

    // Tweet Body
    const $tweetBody = $('<p>').html(data.content.text);

    // Article Footer
    const $articleFooter = $('<footer>');
    const $timeAgo = $('<span>').html(timeago.format(data.created_at));
    const $icons = $('<div><i class="fas fa-flag"></i><i class="fas fa-retweet"></i><i class="fas fa-heart"></i></div>');

    // Append Footer tags
    $articleFooter.append($timeAgo).append($icons);

    // Append $output
    $output.append($articleHeader).append($tweetBody).append($articleFooter);

    return $output;
  };

  // 2. Function renders multiple tweet articles based on object data
  const renderTweets = function(tweets) {
        
    $('#allTweets').html(''); // Clears default text
    for (let key in tweets) { // loops through tweets
      $tweet = createTweetElement(tweets[key]); // calls createTweetElement for each tweet
      $('#allTweets').prepend($tweet); // takes return value and prepends (ensures order) it to the tweets container
    }
  };

  // 3. Gets JSON from /tweets and renders tweets using the parsed data.
  const loadtweets = function() {
    $.getJSON('/tweets', function(data) { // jQuery shorthand for Ajax
      renderTweets(data);
    });
  }
  
  loadtweets();

});

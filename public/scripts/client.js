/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {
  
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
 }

  const createTweetElement = function (data) {
    const $output = $('<article class="tweet">'); // Output is a tweet class article
    
    // Article Header Tags
    const $articleHeader = $('<header>'); // Set article header tag
    const $articleHeaderDiv = $('<div>'); // Set div in article header
    const $headerAvatar = $('<img class="image">').attr('src', data.user.avatars) // Set image tag with avatar
    const $headerName = $('<span class="name">').html(data.user.name)
    const $headerHandle = $('<span class="username">').html(data.user.handle)

    // Append Header Tags
    $articleHeaderDiv.append($headerAvatar)
    $articleHeaderDiv.append($headerName)
    $articleHeader.append($articleHeaderDiv)
    $articleHeader.append($headerHandle)

    // Tweet Body 
    const $tweetBody = $('<p>').html(data.content.text);

    // Article Footer
    const $articleFooter = $('<footer>');
    const $timeAgo = $('<span>').html(timeago.format(data.created_at))
    const $icons = $('<div><i class="fas fa-flag"></i><i class="fas fa-retweet"></i><i class="fas fa-heart"></i></div>')

    $articleFooter.append($timeAgo)
    $articleFooter.append($icons)

    // Append $output
    $output.append($articleHeader)
    $output.append($tweetBody)
    $output.append($articleFooter)

    return $output;
  }


  const $tweet = createTweetElement(tweetData);
  console.log($tweet);
  $('#allTweets').html('');
  $('#allTweets').append($tweet);
  
});

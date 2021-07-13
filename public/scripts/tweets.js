$(document).ready(function() {
  $.getJSON('/tweets', function(data){ // Data is the parsed JSON.


    // This code loads data, but need to do this for all tweets.
    for(let key in data) {
      $('#allTweets').children().children('header').children('div').children('.image').html('<img src="'+data[key].user.avatars+'">');
      $('#allTweets').children().children('header').children('div').children('.name').html(data[key].user.name);
      $('#allTweets').children().children('header').children('.username').html(data[key].user.handle);
      $('#allTweets').children().children('p').html(data[key].content.text);
      $('#allTweets').children().children('footer').children('span').html(timeago.format(data[key].created_at));
    }
  
  })
  

});
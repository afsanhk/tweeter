$(document).ready(function() {
  $.getJSON('/tweets', function(data){ // Data is the parsed JSON.


    // This code loads data, but need to do this for all tweets.
    // for(let key in data) { // Use this later when we are trying to add all tweets.
      let key = 0;
      $('#allTweets').children().children('header').children('div').children('.image').attr("src", data[key].user.avatars);
      $('#allTweets').children().children('header').children('div').children('.name').html(data[key].user.name);
      $('#allTweets').children().children('header').children('.username').html(data[key].user.handle);
      $('#allTweets').children().children('p').html(data[key].content.text);
      $('#allTweets').children().children('footer').children('span').html(timeago.format(data[key].created_at));
    // }
  
  })
  

});
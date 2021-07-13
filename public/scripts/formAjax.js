$(document).ready(function () {

  $('.new-tweet').children('form').on('submit', function(event) {
    event.preventDefault();
    console.log('Default action prevented!')
  })


});

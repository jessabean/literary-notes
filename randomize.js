var $button = $('.next')

$.getJSON('notes.json', randomize
  ).fail(function (j, t, e) {
   console.error(e);
});


var randomize = function(data) {
  var range = data.notes.length,
      random_index = Math.floor(Math.random() * range),
      item = data.notes[random_index];
  
  $('.quote-content').html(item.quote); 
  $('.quote-book').html(item.title);
  $('.quote-author').html(item.author);
};

$button.on('click', function(event) {
  randomize();
});


var Journal = require('./../js/journal.js').journalModule;

$(document).ready(function() {
  $("#journal").submit(function(event) {
    event.preventDefault();
    $("#output").show();
    $('#word-count').empty();
    $('#vowel-count').empty();
    $('#consonant-count').empty();
    $('#first-sentence').empty();
    var title = $('#title').val();
    var entry = $('#entry').val();
    var newEntry = new Journal(title, entry);
    var wordCount = newEntry.wordCount(entry);
    var vowelCount = newEntry.vowelCount(entry);
    var consonantCount = newEntry.consonantCount(entry);
    var firstSentence = newEntry.firstSentence(entry);
    $('#word-count').append(wordCount);
    $('#vowel-count').append(vowelCount);
    $('#consonant-count').append(consonantCount);
    $('#first-sentence').append(firstSentence);
  });
});

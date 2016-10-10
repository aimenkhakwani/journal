(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Journal(title, entry) {
  this.title = title;
  this.entry = entry;
}

Journal.prototype.wordCount = function (entry) {
  var words =  entry.split(" ");
  var chars = entry.split("");
  var output = 0;
  if (chars[chars.length-1]  === " ") {
    output = words.length - 1;
  } else {
    output = words.length;
  }
  return output;
};

Journal.prototype.vowelCount = function(journal) {
  var entry = journal.toLowerCase();
  var letters =  entry.split("");
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var output = 0;
  for(var i = 0; i < letters.length; i++) {
    for(var j = 0; j < vowels.length; j++) {
      if(letters[i] === vowels[j]) {
          output += 1;
      }
    }
  }
  return output;
};

Journal.prototype.consonantCount = function(journal) {
  var entry = journal.toLowerCase();
  var letters =  entry.split("");
  var consonant = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  var output = 0;
  for(var i = 0; i < letters.length; i++) {
    for(var j = 0; j < consonant.length; j++) {
      if(letters[i] === consonant[j]) {
          output += 1;
      }
    }
  }
  return output;
};

Journal.prototype.firstSentence = function(journal) {
  var sentences =  journal.split(".");
  var output = "";
  var sentence = sentences[0];
  var sentenceWords = sentence.split(" ");
  if (sentence.length <= 8) {
    output = sentence;
  } else {
    output = [];
    for (var i = 0; i < 8; i++) {
      output.push(sentenceWords[i]);
    }
    output = output.join(" ");
  }

  return output;
};

exports.journalModule = Journal;

},{}],2:[function(require,module,exports){
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

},{"./../js/journal.js":1}]},{},[2]);

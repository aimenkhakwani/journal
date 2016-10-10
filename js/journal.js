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

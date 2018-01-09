var sentence = prompt("Enter a sentence: ");

var first_last_cap = function(sentence){
  var first = sentence.charAt(0).toUpperCase();
  var last = sentence.slice(-1).toUpperCase();
  return first + last;
};

var first_last_reverse = function(sentence){
  var first = sentence.charAt(0).toUpperCase();
  var last = sentence.slice(-1).toUpperCase();
  return last + first;
};

var new_sentence = function(sentence){
  var end = first_last_reverse(sentence);
  return sentence + end;
};

var new_calculation = function(sentence){
  var num =  Math.floor(sentence.length/2);
  var middle_letter = sentence.charAt(num);
  return middle_letter + new_sentence(sentence);
};

var reverse_sentence = function(sentence){
  var new_word = new_calculation(sentence);
  var split_word = new_word.split("");
  var reverse_word = split_word.reverse();
  var join_word = reverse_word.join("");
  return join_word;
};

var result = reverse_sentence(sentence);

alert(result);

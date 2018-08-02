var words = ["ground", "control", "to", "major", "tom"];

var map = function (array, fun) {
  var result = [];
  array.forEach(function(element) {
    result.push(fun(element));
  });
  console.log(result);
};

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});



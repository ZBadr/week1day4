var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

function map (arr, func) {
var out = [];
for ( var i = 0; i < arr.length; i++) {
  out.push(func(arr[i]));
}
console.log(out);
}
var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var result = input.map(function(object) {
  var z2 = Math.pow(object.x,2) + Math.pow(object.y,2);
  var z = Math.sqrt(z2);
  return z;
  });

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
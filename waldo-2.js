function findWaldo(arr, found) {
  arr.forEach(function(value, i) {
    if (value === "Waldo") {
      found(i);   // execute callback
    }
  })
}

function actionWhenFound(where) {
  console.log("Found him at index "  + where + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
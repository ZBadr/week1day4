function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(where) {
  console.log("Found Waldo at index "  + where + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
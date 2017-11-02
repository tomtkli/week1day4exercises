function findWaldo(arr, found) {
  arr.forEach(function(element, i) {
    if (element === "Waldo") {
      found(i);   // execute callback
    }
  });
}

function actionWhenFound(found) {
  console.log("Found Waldo " + "at " + "index " + found );
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
/*var age = 19
typeof age

console.log(typeof age) 

var food = "turkey, rice, beans, honey";
var Bfood = food.split(",");
console.log(Bfood);

*/

/*function addFour(a, b, c, d) {
  return a + b + c + d;
}
var num = [1, 2, 3, 4];
console.log(addFour(...num)); */

/*function countDownToZero(n) {
  // base case. Stop at 0
  if (n < 0) {
    return; // stop the function
  } else {
    console.log(n);
    countDownToZero(n - 1); // count down 1
  }
}
countDownToZero(10); */

//Bubble Sort
function swap(array, index1, index2) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function bubbleSort(array) {
  for (var i = 0, arrayLength = array.length; i < arrayLength; i++) {
    for (var j = 0; j <= i; j++) {
      if (array[i] < array[j]) {
        swap(array, i, j);
      }
    }
  }
  return array;
}
console.log(bubbleSort([6, 1, 2, 3, 4, 5]));

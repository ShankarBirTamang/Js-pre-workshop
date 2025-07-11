// YOUR CODE BELOW
// function reverseArray(array) {
//   let originalElements = [];

//   //pop all elements from array , and store them in originalElements array
//   while (array.length) {
//     originalElements.push(array.pop());
//   }

//   //pop all of the elements from originalElements array and unshift them back into array
//   while (originalElements.length) {
//     array.unshift(originalElements.pop());
//   }
//   return array;
// }

//Alternatively
function reverseArray(array) {
    let left = 0, right = array.length - 1;

    while (left < right) {
      [array[left], array[right]] = [array[right], array[left]]; // Swap
      left++;
      right--;
    }

    return array;
  }

// function reverseArray(array) {
//   let reversed = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     reversed.push(array[i]);
//   }
//   // Optionally, copy reversed back to array if you want in-place change
//   for (let i = 0; i < array.length; i++) {
//     array[i] = reversed[i];
//   }
//   return array;
// }
// let myArray = [1, 2, 3, 4];
// reverseArray(myArray);
// console.log(myArray); // [4, 3, 2, 1]

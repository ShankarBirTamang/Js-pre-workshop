// YOUR CODE BELOW
// function oddCouple(arrNumbers) {
//   let oddNumbers = [];
//   oddNumbers = arrNumbers.filter((num) => num % 2 === 1);

//   return oddNumbers.slice(0, 2);
// }

//Alternatively without using filter and slice method
function oddCouple(arrNumbers) {
  let oddNumbers = [];
  for (let i = 0; i < arrNumbers.length; i++) {
    let currentNum = arrNumbers[i];
    if (currentNum % 2) {
      oddNumbers.push(currentNum);
      if (oddNumbers.length === 2) {
        return oddNumbers;
      }
    }
  }
  return oddNumbers;
}

console.log(oddCouple([1, 2, 3, 4, 5]));
console.log(oddCouple([10, 15, 20]));
console.log(oddCouple([2, 4, 6, 8]));

/* Lokesh
function oddCouple(arr) {
  let result_arr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result_arr.push(arr[i]);
      if (result_arr.length === 2) break;
    }
  }
  return result_arr;
}

*/

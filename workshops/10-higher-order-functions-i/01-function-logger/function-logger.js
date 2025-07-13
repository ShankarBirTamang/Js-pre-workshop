// YOUR CODE BELOW
function functionLogger(myCallBackFunction, value) {

  let result = myCallBackFunction(value);

  return result;
}

function squareNum(x) {
  return x * x;
}

let squareOfFour = functionLogger(squareNum, 4);
console.log(squareOfFour); // 16

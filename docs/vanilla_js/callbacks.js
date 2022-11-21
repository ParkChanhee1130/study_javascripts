console.log(`first`);
// console.log(`second`);
// setTimeout(functionRef, delay)
setTimeout(function () {
  console.log(`setTimeout : second`);
}, 2000);
console.log(`third`);

// 5 + 6
function plus(first, second) {
  return first + second;
}
// plus(5, 6);

// 5 - 6
function minus(first, second) {
  return first - second;
}
// minus(5, 6);

function callbackFunction(callback, first, second) {
  let result = callback(first, second);
  console.log(`result : ${result}`);
}

callbackFunction(plus, 5, 6);
callbackFunction(minus, 5, 6);

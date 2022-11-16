// 정수 n개가 주어졌을 때, n개의 합을 구하는 함수를 작성하시오.

function sum(numbers) {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }

  return sum;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sum(arr));

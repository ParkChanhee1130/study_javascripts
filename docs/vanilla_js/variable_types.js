let let_first = 10;

{
  console.log(`In let_first ${let_first}`);
  let let_second = 20;
  console.log(`In let_second ${let_second}`);
}
console.log(`Out let_first ${let_first}`);
// console.log(`Out let_second ${let_second}`); // error

//check typeof
console.log(`typeof let_first : ${typeof let_first}`);
let_first = "good";
console.log(`typeof let_first : ${typeof let_first}`);

console.log();

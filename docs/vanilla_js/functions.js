// rest parameters
function printRestparams(...args) {
  let restParam = (arg) => {
    if (typeof arg == "object") {
    }
    console.log(`arg : ${arg}`);
  };
  args.forEach(restParam);
}

{
  printRestparams(2, 4, 5);
  printRestparams(2, 4, 5, 6, 7);
}

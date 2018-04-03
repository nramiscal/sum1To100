// sum 1 to 100 recursively

function sum1To100v3(){
  let sum = 0;
  let i = 1;

  function helper(){
    if (i > 100){
      return sum;
    }
    sum += i;
    i++;
    return helper();
  }

  return helper();
}

console.log(sum1To100v3()); // 5050

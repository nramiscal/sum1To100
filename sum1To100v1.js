// sum 1 to 100 using a for loop

function sum1To100v1(){
  let sum = 0;
  for (var i = 1; i <= 100; i++){
    sum += i;
  }
  return sum;
}

console.log(sum1To100v1()); // 5050

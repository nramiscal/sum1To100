// sum 1 to 100 using while loop

function sum1To100v2(){
  let sum = 0;
  let i = 1;
  while (i <= 100){
    sum += i;
    i++;
  }
  return sum;
}

console.log(sum1To100v2()); // 5050

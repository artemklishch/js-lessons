let sum = 0;
let wholePart, reminder, result;
for(let i = 0; i <= 1000; i++){
    sum += i;
}
wholePart = Math.trunc(sum/1234);
reminder = sum/1234 - wholePart;
result = wholePart > reminder || false;
console.log(result);
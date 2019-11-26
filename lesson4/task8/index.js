let sum = 0;
for(let i = 0; i <= 1000; i++){
    sum += i;
}
let numberAfterDevision = sum/1234;
let reminder = numberAfterDevision % 1234; 
console.log(numberAfterDevision > reminder || false);
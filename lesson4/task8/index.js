let sum = 0;
let resultAfterDevision, wholePart;
for(let i = 0; i <= 1000; i++){
    sum += i;
}
wholePart = Math.trunc(sum/1234);
switch(wholePart > 0){
    case true: console.log(true); break;
    case false: console.log(false); break;
}

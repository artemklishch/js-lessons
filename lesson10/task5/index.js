const getTotalPrice = arr => "$" +
    Math.floor((arr.reduce((acc,num) => acc += num))*100)/100;

// const arr = [24.456, 256.18, 10.11111];
// console.log(getTotalPrice(arr));
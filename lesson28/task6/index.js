const fibonacci = num => {
    if (num < 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
};

export const maxFibonacci = value => {
    let index = 0;
    let maxFib = 0;
    while(true){
        let fib = fibonacci(index);
        if(fib <= value){
            maxFib = fib;
            index++;
        } else return maxFib;
    }
}; 
// console.log(maxFibonacci(8));


//maxFibonacci(15) // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
// const fibFunc = (num) => {
//   let arr = [0,1];
//   let a = 0;
//   let b = 1;
//   for (let i = 3; i <= num; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//     arr.push(c);
//   }
//   return arr;
// };
// export const maxFibonacci = func => value => {
//   let arr = func(value).reverse();
//   return arr.find(elem => elem < value);
// };

// const findMaxFibNumber = maxFibonacci(fibFunc);
// console.log(findMaxFibNumber(0.1));

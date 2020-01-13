//maxFibonacci(15) // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
export const maxFibonacci = (value) => {
  let num1 = 0;
    let num2 = 1;
    let result = 0;
    const fibMethods = {
      fibFunc(){
        result = num1 + num2;
        num1 = num2;
        num2 = result;
        if(result < value) {
          this.fibFunc();
          result = num1;
        }
        return this;
      },
      result(){
        return result;
      },
    };
    return fibMethods;
};
const result = maxFibonacci(15).fibFunc().result();
console.log(result);






// const fib = n => {
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
//   }





// function fib(n) {
//     let a = 1;
//     let b = 1;
//     for (let i = 3; i <= n; i++) {
//         if(b >= n){
//             b = a;
//             break;
//         } 
//       let c = a + b;
//       a = b;
//       b = c;
//     }
//     return b;
//   }
  

// const fib = n => {
//     let prev = 0, next = 1;
//     for(let i = 0; i < n; i++){
//       next = prev + next;
//       prev = next - prev;
//     }
//     return prev;
//   }



// const fib = n => {
//     if(n <= 1){
//       return n;
//     }else{
//       return fib(n - 1) + fib(n - 2);
//     }
//   }
  //console.log(fib(15));



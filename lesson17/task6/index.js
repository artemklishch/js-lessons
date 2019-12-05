export function bind(func, context){
    return function(...args) {
		return func.apply(context, args);
	}
}

// function mult(a,b){
// 	return this.mult = a * b;
// }
// const obj1 = {
// 	mult: 0,
// };
// const obj2 = {
// 	mult:0,
// };
// const aMult = bind(mult, obj1);
// console.log(aMult(2,2));
// console.log(obj1);

// aMult.call(obj2, 3, 3);
// console.log(obj2, obj1)
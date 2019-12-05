export function bind(func, context, ...args){
    return function(...args) {
		return func.apply(context,	args);
	}
}

// function sum(a,b){
// 	return a + b;
// }
// const obj = {
// 	num: 2,
// 	sum(a,b){
// 		return a + b;
// 	},
// };
// const a = bind(sum, obj);
// console.log(a(2,2));
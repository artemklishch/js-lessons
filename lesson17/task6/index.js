export function bind(func, context, ...args1){
    return function(...args2) {
		return func.apply(context, args2, args1);
	}
}
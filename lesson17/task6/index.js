export function bind(func, context, ...args1){
    return function(...args2) {
		return func.call(context, ...args2, ...args1);
	}
}

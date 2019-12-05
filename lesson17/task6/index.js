export function bind(func, context){
    return function(...args) {
		return func.apply(context,	args);
	}
}

const a = function () {
	return this;
}

const b = bind(a, {foo: 'var' });
 console.log(b.call({name: "tom"}));
const c = bind(b, null);
const d = bind(c, { g: '1' });
console.log(c());
console.log(d());


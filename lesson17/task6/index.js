export function bind(func, context, ...args1){
    return function(...args2) {
		return func.call(context, ...args2, ...args1);
	}
}





// const bruce = {name: "Bruce"};
// const madeline = {name: "Madeline"};
// function update(occupation, birthYear){
// 	this.birthYear = birthYear;
// 	this.occupation = occupation;
// }

// const updateBruce = bind(update, bruce, 1949);

// console.log(bruce);
// console.log(madeline);
// console.log('\n');
// updateBruce("actor");
// console.log(bruce);
// updateBruce("king",1274);
// console.log(bruce);
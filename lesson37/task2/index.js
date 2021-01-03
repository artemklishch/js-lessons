// "use strict";
function func1() {
  console.log(this);
}
func1();

function func2(data) {
  console.log(data);
  console.log(this.name, "\n", this.name + data);
}
function func3(...data) {
  //   data.forEach((el) => console.log(el));
  console.log(data);
}
func2.call({ name: "Tom" }, ", hello!");
const arr1 = ["1", "2", "3"];
func3.apply(null, arr1);

console.log(Math.max.apply(null, [1, 2, 3, 4, 5]));

function func3(name, age) {
  this.name = name;
  this.age = age;
}
const a1 = new func3("Tom", 30);
console.log(a1);

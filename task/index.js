class Transport {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }
  getWheels() {
    console.log("Here wheels - ", this.wheels);
  }
  getName() {
    console.log("Name is - ", this.name);
  }
}

class Auto extends Transport {
  constructor(name, engine, wheels) {
    super();
    this.name = name;
    this.engine = engine;
    this.wheels = wheels;
  }
  getWheels() {
    console.log("Here 1111111 wheels - ", this.wheels);
  }
}

const a = new Auto("Audi", "fdgsdfgdsf", 4);
console.log(a);
a.getWheels();
a.getName();

const clickBtn = document.getElementById("clickBtn");
// clickBtn.addEventListener('click', () =>{
//   console.log('this obj', this) // window
// })
const foo1 = () => {
  console.log("this 3", this);
};
clickBtn.addEventListener("click", function () {
  console.log("this obj", this); // button element
});
const foo2 = function () {
  console.log("this 3", this);
};
clickBtn.addEventListener("click", foo1); // window
clickBtn.addEventListener("click", foo2); // button element

window.addEventListener("resize", function () {
  console.log("this 2", this); // window
});

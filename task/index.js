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

const a = new Auto("Audi", 'fdgsdfgdsf', 4);
console.log(a)
a.getWheels()
a.getName()


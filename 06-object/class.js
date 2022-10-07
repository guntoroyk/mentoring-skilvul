class Vehicle {
  constructor(name, engine) {
    this._name = name;
    this._engine = engine;
  }

  getDetails() {
    return `Name: ${this.name}, engine: ${this.engine}`;
  }

  get name() {
    return this._name;
  }

  set name(str) {
    this._name = str;
  }
}

const motorcycle1 = new Vehicle("Vario", "125cc");

// console.log(motorcycle1.getDetails());

console.log(motorcycle1.name);
motorcycle1.name = "mio";
console.log(motorcycle1.getDetails());

console.log(motorcycle1._name);

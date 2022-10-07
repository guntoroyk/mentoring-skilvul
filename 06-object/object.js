// Object di JavaScript

// tipe data di JS
// number, string, boolean, null, undefined
// array, object

let person = {
  //properties
  name: "Ivan",
  age: 18,
  hobby: "ngoding",
  "Home Address": "Bandung, Jawa Barat",
  pet: {
    name: "Opet",
    kind: "Cat",
  },
  pets: [
    {
      name: "Opet",
      kind: "Cat",
    },
    {
      name: "Kiko",
      kind: "Dog",
    },
  ],

  // method
  greeting: function () {
    console.log("Hello");
  },
};

// console.log(person.name);
// console.log(person["age"]);
// console.log(person["Home Address"]);

person.greeting();

person.name = "Ivan Gunawan";
person["age"] = 40;

// console.log(person.name);
// console.log(person["age"]);

person.country = "Indonesia";

// console.log(person.country);
// console.log(person.pet.name);
// console.log(person.pets[1].name);

// let person2 = person;

// person2.name = "Umar";

// console.log("person.name", person.name);
// console.log("person2.name", person2.name);

// let name = "Guntoro";

// let name2 = name;

// name2 = "Fabyan";

// console.log("name", name);
// console.log("name2", name2);

// function changeName(obj) {}

// changeName(person);

// console.log("person.name", person.name);

let person3 = Object.assign({}, person);

console.log("person3", person3);

person3.name = "Dani";

console.log("person.name", person.name);
console.log("person3.name", person3.name);

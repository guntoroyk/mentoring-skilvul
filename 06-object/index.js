// let arr = [1, 2, 3, 4, 5];

// // method
// // method = function
// // method itu ada di sebuah objek

// arr.push();

// // property
// arr.length;

// let str = "ini string";

// str.length;
// str.charAt(0);

// let hurufKecil = ["a", "b", "c"];

// hurufKecil.forEach(function (el, i) {
//   hurufKecil[i] = el.toUpperCase();
// });

// console.log(hurufKecil);

// let hurufBesar = hurufKecil.map(function (el) {
//   return el.toUpperCase();
// });

// console.log("hurufBesar", hurufBesar);

let arrNumber = [1, 2, 3, 4, 5];

// kalikan 2
// dibalik

// let result = arrNumber
//   .map((num) => num * 2)
//   .reverse()
//   .join();

// console.log("result", result);

// for (let num of arrNumber) {
//   console.log("num", num);
// }

// let str = "ini nama saya";

// for (let s of str) {
//   console.log("s", s);
// }

// let obj = {
//   id: 1,
//   name: "nama 1",
// };

// for (let key in obj) {
//   console.log("key", key);
//   console.log("value", obj[key]);
// }

// for of
// digunakan untuk semua tipe data yg iterable
// tipe data iterable: array, string, Maps, NodeLists
// for of tidak bisa digunakan untuk object

// let inventory = [
//   ["Kaos Polos", 10],
//   ["Jaket Hodie", 15],
//   ["Topi", 20],
//   ["Celana", 5],
//   ["Celana 2", 5],
//   ["Celana 3", 5],
// ];

// // let barisKe1 = inventory[1];
// // console.log(barisKe1);

// // let namaPakaian = barisKe1[0];
// // console.log(namaPakaian);

// // console.log(inventory[1][0]);

// let result = inventory.slice(0, 5);
// console.log(result);

const months = ["Jan", "March", "April", "June"];

months.splice(1, 0, "Feb");
months.splice(4, 0, "Mei");

console.log(months);

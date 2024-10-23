// Construktor funksiya

// 1

// function User(name, age, weight) {
//   this.name = name;
//   this.age = age;
//   this.weight = weight;
// }

// let john = new User("John", 20, 65);

// console.log(john);

// 2

// function Cars(name, color, price) {
//   this.name = name;
//   this.color = color;
//   this.price = price;
// }

// let bmw = new Cars("Bmw", "black", 80000);

// console.log(bmw);

// 3

// const Country = function (name, population, area) {
//   this.name = name;
//   this.population = population;
//   this.area = area;
// };

// let uzb = new Country("Uzbekistan", 36000000, 448900);

// console.log(uzb);

// 4

// const Product = function (name, status, price) {
//   this.name = name;
//   this.status = status;
//   this.price = price;
// };

// let laptop = new Product("Hp", "New", 9000000);

// console.log(laptop);

// 5

// const Books = function (name, page, year) {
//   this.name = name;
//   this.page = page;
//   this.year = year;
// };

// let book = new Books("Steve Jobs", 656, 2011);

// console.log(book);

// Class

// 1

// class User {
//   constructor(name, age, weight) {
//     this.name = name;
//     this.age = age;
//     this.weight = weight;
//   }
// }

// let john = new User("John", 25, 70);

// console.log(john);

// 2

// class Car {
//   constructor(name, color, price) {
//     this.name = name;
//     this.color = color;
//     this.price = price;
//   }
// }

// let tesla = new Car("Tesla", "White", 1200000);
// console.log(tesla);

// 3

// class Country {
//   constructor(name, population, area) {
//     this.name = name;
//     this.population = population;
//     this.area = area;
//   }
// }

// let india = new Country("India", 14000000, 3280000);

// console.log(india);

// 4

// class Product {
//   constructor(name, status, price) {
//     this.name = name;
//     this.status = status;
//     this.price = price;
//   }
// }

// let laptop = new Product("Macbook", "New", 10000000);

// console.log(laptop);

// 5

// class Book {
//   constructor(name, page, year) {
//     this.name = name;
//     this.page = page;
//     this.year = year;
//   }
// }

// let book = new Book("Ilon Musk", 688, 2023);

// console.log(book);

// Massiv va obyektlar

// 1-MASALA

// const oquvchilar = [
//   { ism: "Ali", yosh: 17 },
//   { ism: "O'ktam", yosh: 18 },
//   { ism: "Sardor", yosh: 19 },
// ];

// oquvchilar.forEach(function (value) {
//   console.log(value.ism, value.yosh);
// });

// 2-MASALA

// const mahsulotlar = [
//   { nom: "Olma", narx: 100 },
//   { nom: "Nok", narx: 150 },
//   { nom: "Banan", narx: 200 },
// ];

// let res = mahsulotlar.map(function (value) {
//   return {
//     nom: value.nom,
//     narx: value.narx * 1.2,
//   };
// });

// console.log(res);

// 3-MASALA

// const oquvchilar = [
//   { ism: "Dilorom", yosh: 20 },
//   { ism: "Shahrizoda", yosh: 17 },
//   { ism: "Akbar", yosh: 19 },
// ];

// let res = oquvchilar.filter(function (value) {
//   return value.yosh > 18;
// });

// console.log(res);

// 4-MASALA

// const kitoblar = [
//   { nom: "Kitob A", muallif: "Said Ahmad" },
//   { nom: "Kitob B", muallif: "Zokir Khoshimov" },
//   { nom: "Kitob C", muallif: "Murodjon Abduqodirov" },
// ];

// let res = kitoblar.map(function (value) {
//   return {
//     nom: value.nom,
//     muallif: (value.muallif = "Said Ahmad"),
//   };
// });

// console.log(res);

// 5-MASALA

// const xodimlar = [
//   { ism: "Rashid", ishHaqi: 3000 },
//   { ism: "Dilshod", ishHaqi: 2500 },
//   { ism: "Farhod", ishHaqi: 4000 },
// ];

// let res = xodimlar.map(function (value) {
//   return {
//     ism: value.ism,
//     ishHaqi: Math.trunc(value.ishHaqi * 1.1),
//   };
// });

// console.log(res);

// 6-MASALA

// const oquvchilar = [
//   { ism: "Jasur", yosh: 21 },
//   { ism: "Sardorbek", yosh: 22 },
//   { ism: "Azizbek", yosh: 20 },
// ];

// let res = oquvchilar.map(function (value) {
//   return {
//     ism: "Mr " + value.ism,
//     yosh: value.yosh,
//   };
// });

// console.log(res);

// 7-MASALA

// const avtomobillar = [
//   { nom: "Tesla", tur: "elektr" },
//   { nom: "Toyota", tur: "benzin" },
//   { nom: "Nissan Leaf", tur: "elektr" },
// ];

// let res = avtomobillar.filter(function (value) {
//   return value.tur == "elektr";
// });

// console.log(res);

// 8-MASALA

// const foydalanuvchilar = [
//   { ism: "Aziz", email: "aziz@example.com" },
//   { ism: "Nodir", email: "nodir@example.com" },
//   { ism: "Malika", email: "malika@example.com" },
// ];

// function users(foydalanuvchilar) {
//   let res = foydalanuvchilar.map(function (value) {
//     return {
//       ism: value.ism,
//       email: value.email,
//     };
//   });
//   return res;
// }

// console.log(users(foydalanuvchilar));

// 9-MASALA

// const mahsulotlar = [
//   { nom: "Televizor", narx: 500 },
//   { nom: "Konditsioner", narx: 700 },
//   { nom: "Butler", narx: 300 },
// ];

// function maxProduct(mahsulotlar) {
//   let max = mahsulotlar[0];
//   mahsulotlar.forEach(function (value) {
//     if (value.narx > max.narx) {
//       max = value;
//     }
//   });
//   return max;
// }

// console.log(maxProduct(mahsulotlar));

// 10-MASALA

// const oquvchilar = [
//   { ism: "Zarina", ball: 85 },
//   { ism: "Doston", ball: 90 },
//   { ism: "Gulbahor", ball: 95 },
// ];

// function oquvchilarBall(oquvchilar) {
//   let sum = 0;
//   let len = oquvchilar.length;

//   oquvchilar.forEach(function (value) {
//     sum += value.ball;
//   });

//   let newBall = sum / len;

//   oquvchilar.forEach(function (value) {
//     value.ball = newBall;
//   });

//   return oquvchilar;
// }

// console.log(oquvchilarBall(oquvchilar));

// String metodiga oid masalalar

// 1-MASALA

// let str = "Hello World";
// console.log(str.toLowerCase());

// 2-MASALA

// let str = "Hello world";
// console.log(str.length);

// 4-MASALA

// let str = "hello javascript";

// function shortStr(str) {
//   if (str.length > 10) {
//     return str.slice(0, 10);
//   }
//   return str;
// }

// console.log(shortStr(str));

// 5-MASALA

// let str = "salom javascript";

// function changeStrletter(str) {
//   return str.replace(/a/g, "o");
// }

// console.log(changeStrletter(str));

// 6-MASALA

// let str = "javascript";

// function strIndex(str, index) {
//   let symbol = str.charAt(index);
//   return symbol;
// }

// console.log(strIndex(str, 5));

// 7-MASALA

// let str = "hello  JavaScript";

// function searchStr(str) {
//   return str.includes("JavaScript") ? "Mavjud" : "Mavjud emas";
// }
// console.log(searchStr(str));

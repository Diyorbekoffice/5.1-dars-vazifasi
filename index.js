// __________________/ Destructuring assignment ga oid vazifa __________________

// // 1-masala
// const info = ['Ali', 30, 'Toshkent'];
// const [name, age, city] = info;
// console.log(name);
// console.log(age);
// console.log(city);

// // 2-masala
// const colors = ["red", "green", "blue", "yellow", "purple"];
// const [color1, color2, ...res] = colors;
// console.log(color1);
// console.log(color2);
// console.log(res);

// // 3-masala
// function firstAndLast(arr) {
//     const [first, ...rest] = arr; // Birinchi elementni ajratib oldik
//     const last = rest.pop();
//     return [first, last];
//   }

//   const result = firstAndLast([10, 20, 30, 40]);
//   console.log(result); 

// 4-masala
// const numbers = [1, 2, 3, 4, 5, 6];

// const [, second, , , fifth] = numbers;

// console.log(second);
// console.log(fifth);


// ______________________/ Object Destructuring \______________________
// // 1-masala
// const book = {
//     title: "JavaScript for Beginners",
//     author: "John Doe",
//     year: 2021
//   };
// const {title, author} = book;
// console.log(title);
// console.log(author);

// // 2-masala
// const location = {
//     city: "Toshkent",
//     coordinates: {
//         latitude: 41.2995,
//         longitude: 69.2401
//     }
// };
// const {coordinates: {latitude, longitude}} = location;
// console.log(latitude);
// console.log(longitude);

// // 3-masala
// const person = {
//     firstName: "Ali",
//     lastName: "Valiyev",
//     age: 28
// };
// const {firstName: name, lastName: surname, age: year} = person;
// console.log(name);
// console.log(surname);
// console.log(year);

// // 4-masala
// const settings = {
//     theme: "dark",
//     language: "uz"
//   };
//   const { theme, language, mode = "light", fontSize = 16 } = settings;

//   console.log(theme);  
//   console.log(language); 
//   console.log(mode);     
//   console.log(fontSize);

// __________________/ Qo'shimcha Mashqlar \ ___________________________
// // 1-masala
// function configure(options) {
//     const { host = "localhost", port = 8080, protocol = "http" } = options;
//     console.log(`Connecting to ${protocol}://${host}:${port}`);
//   }
//   configure({ host: "127.0.0.1" });

// // 2-masala
// function combineAndExtract(arr1, arr2) {
//   const combined = [...arr1, ...arr2];
//   const [first, second, third] = combined;
//   return { first, second, third };
// }
// const result = combineAndExtract([1, 2], [3, 4, 5]);
// console.log(result);



// ___________________________/ Masalalar \___________________________
// // 1.1-masala
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function OddNum(arg) {
// 	let arr = arg.filter(num => num % 2 === 1);
// 	return arr;
// }console.log(OddNum(num));

// // 1.2-masala
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const OddNum = function(arg) {
// 	let arr = arg.filter(num => num % 2 === 1);
// 	return arr;
// }
// let res = OddNum(num);
// console.log(res);

// // 1.3-masala
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const OddNum = arg => arg.filter(num => num % 2 === 1);
// console.log(OddNum(num));

// // 2.1-masala
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function OddNum(arg) {
// 	let arr = Math.min(...arg);
// 	return arr;
// }console.log(OddNum(num));

// // 2.2-masala
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let OddNum = function (arg) {
// 	let arr = Math.min(...arg);
// 	return arr;
// }
// let res = OddNum(num);
// console.log(res);

// // 2.3-masala
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let OddNum = arg => Math.min(...arg);
// let res = OddNum(num);
// console.log(res);

// // 3.1-masala
// let num = [1, 2, 'a', 3, 'v', 6];
// function CheckNum(arg) {
// 	let arr = arg.filter(num => typeof num === 'number');
// 	return arr;
// }
// let res = CheckNum(num);
// console.log(res);

// // 3.2-masala
// let num = [1, 2, 'a', 3, 'v', 6];
// let CheckNum = function (arg) {
// 	let arr = arg.filter(num => typeof num === 'number');
// 	return arr;
// }
// let res = CheckNum(num);
// console.log(res);

// // 3.3-masala
// let num = [1, 2, 'a', 3, 'v', 6];
// let CheckNum = arg => arg.filter(num => typeof num === 'number');

// let res = CheckNum(num);
// console.log(res);

// // 4.1-masala
// let num = 5;
// function sqrtNum(arg) {
// 	let arr = arg ** 2;
// 	return arr;
// }
// let res = sqrtNum(num);
// console.log(res);

// // // 4.2-masala
// let num = 5;
// let sqtrNum = function (arg) {
// 	let arr = arg ** 2;
// 	return arr;
// }
// let res = sqtrNum(num);
// console.log(res);

// // 4.3-masala
// let num = 5;
// let CheckNum = arg => arg ** 2;

// let res = CheckNum(num);
// console.log(res);

// // 5.1-masala
// let str = 'salom bolalar';
// function reverseStr(arg) {
// 	let arr = arg.split('').reverse().join('');
// 	return arr
// }
// let res = reverseStr(str);
// console.log(res);

// // 5.2-masala
// let str = 'salom bolalar';
// let reverseStr = function (arg) {
// 	let arr = arg.split('').reverse().join('');
// 	return arr
// }
// let res = reverseStr(str);
// console.log(res);

// // 5.3-masala
// let str = 'salom bolalar';
// let reverseStr = arg => arg.split('').reverse().join('');
// let res = reverseStr(str);
// console.log(res);

// // 6.1-masala
// let str = 'aaa!a ,151';
// function countLetters(arg) {
//     let arr = arg.split('').filter(char => isNaN(char) &&  /[a-zA-Z]/.test(char));
//     return arr.length;
// }
// let res = countLetters(str);
// console.log(res);

// // 6.2-masala
// let str = 'aaa!a ,151';
// let countLetters = function (arg) {
//     let arr = arg.split('').filter(char => isNaN(char) &&  /[a-zA-Z]/.test(char));
//     return arr.length;
// }
// let res = countLetters(str);
// console.log(res);

// // // 6.3-masala
// let str = 'aaa!a ,151';
// let countLetters = arg => arg.split('').filter(char => isNaN(char) &&  /[a-zA-Z]/.test(char)).length;
// let res = countLetters(str);
// console.log(res);

// // 7.1-masala
// let num = [1, 2, 3, 4, 5];
// function thirdLevel(arg) {
// 	let arr = arg.map(num => num ** 3);
// 	return arr;
// }
// let res = thirdLevel(num);
// console.log(res);

// // 7.2-masala
// let num = [1, 2, 3, 4, 5];
// let thirdLevel = function (arg) {
// 	let arr = arg.map(num => num ** 3);
// 	return arr;
// }
// let res = thirdLevel(num);
// console.log(res);

// // 7.3-masala
// let num = [1, 2, 3, 4, 5];
// let thirdLevel = arg => arg.map(num => num ** 3);
// let res = thirdLevel(num);
// console.log(res);


// // 8.1-masala
// function reverseVowels(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//     let foundVowels = str.split('').filter(char => vowels.includes(char)); 
//     let reversedVowels = foundVowels.reverse(); 

//     let result = str.split('').map(char => {
//         if (vowels.includes(char)) {
//             return reversedVowels.shift(); 
//         } else {
//             return char;
//         }
//     }).join('');

//     return result;
// }

// let str = "hello world";
// let res = reverseVowels(str);
// console.log(res);

// // 8.2-masala
// let reverseVowels = function (str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//     let foundVowels = str.split('').filter(char => vowels.includes(char)); 
//     let reversedVowels = foundVowels.reverse(); 

//     let result = str.split('').map(char => {
//         if (vowels.includes(char)) {
//             return reversedVowels.shift(); 
//         } else {
//             return char;
//         }
//     }).join('');

//     return result;
// }

// let str = "hello world";
// let res = reverseVowels(str);
// console.log(res);

// // 8.3-masala
// let reverseVowels  = str =>{
//     const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//     let foundVowels = str.split('').filter(char => vowels.includes(char)); 
//     let reversedVowels = foundVowels.reverse(); 

//     let result = str.split('').map(char => {
//         if (vowels.includes(char)) {
//             return reversedVowels.shift(); 
//         } else {
//             return char;
//         }
//     }).join('');

//     return result;
// }

// let str = "hello world";
// let res = reverseVowels(str);
// console.log(res);

// // 9.1-masala
// let num = [1, 2, 3, 4, 5];
// function middleArithmetic(arg) {
// 	let sum = 0;
// 	arg.forEach(element => {
// 		sum += element;	
// 	});
// 	return sum / arg.length;
// }
// let res = middleArithmetic(num);
// console.log(res);

// // 9.2-masala
// let num = [1, 2, 3, 4, 5];
// let middleArithmetic = function(arg) {
// 	let sum = 0;
// 	arg.forEach(element => {
// 		sum += element;	
// 	});
// 	return sum / arg.length;
// }
// let res = middleArithmetic(num);
// console.log(res);

// // 9.3-masala
// let num = [1, 2, 3, 4, 5];
// let middleArithmetic = arg =>  {
// 	let sum = 0;
// 	arg.forEach(element => {
// 		sum += element;	
// 	});
// 	return sum / arg.length;
// }
// let res = middleArithmetic(num);
// console.log(res);

// // 10.1-masala
// function removeWord(str, word) {
//     return str.replace(word, '');
// }

// let sentence = "salom dunyo";
// let word = "dunyo";
// let res = removeWord(sentence, word);
// console.log(res);

// // 10.2-masala
// let removeWord = function (str, word) {
//     return str.replace(word, '');
// }

// let sentence = "salom dunyo";
// let word = "dunyo";
// let res = removeWord(sentence, word);
// console.log(res);

// // 10.3-masala
// let removeWord= (str, word) => str.replace(word, '');
// let sentence = "salom dunyo";
// let word = "dunyo";
// let res = removeWord(sentence, word);
// console.log(res);
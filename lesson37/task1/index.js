// function check(string) {
//     let counter1 = 0;
//     let counter2 = 0;
//     const wrongCase =
//       string[0] === "(" && string[string.length - 1] === ")" ? true : false;
//     if (!wrongCase) return false;
//     string.split("").forEach((sign) => {
//       if (sign === "(") counter1++;
//       if (sign === ")") counter2++;
//     });
//     return counter1 === counter2 ? true : false;
//   }
// console.log(check("((()()()()))"));
// console.log(check("((()()))()))"));
// console.log(check("((()()))())("));
// console.log(check(")((()()))())"));

// function arrayDiff(a, b) {
//   return a.reduce((acc, num) => {
//     if (num !== b[0]) acc.push(num)
//     return acc
//   }, []);
// }
// console.log(arrayDiff([1, 2, 4, 2], [2]));

// function descendingOrder(n) {
//   return Number(
//     String(n)
//       .split("")
//       .sort((a, b) => b - a)
//       .join("")
//   );
// }
// descendingOrder(23894);

// function findUniq(arr) {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] !== arr[i+1]) return arr[i+1]
//     }
// }
// findUniq([ 1, 1, 1, 2, 1, 1 ]);

// function solution(digits) {
//   if (digits.length < 5) return;
//   let maxNum = 0;
//   for (let i = 0; i < digits.length; i++) {
//     const substr = digits.slice(i, 6 + i);
//     if (substr.length < 5) break;
//     if (+substr > maxNum) maxNum = +substr;
//   }
//   return maxNum;
// }

// solution("1234567890");

// function maskify(cc) {
//   if (cc.length <= 4) return cc;
//   return cc
//     .split("")
//     .map((num, index) => {
//       if (index < cc.length - 4) return "#";
//       return num;
//     })
//     .join("");
// }

// console.log(maskify("4556364607935616"));
// console.log(maskify("64607935616"));
// console.log(maskify("1"));
// console.log(maskify(""));

// function getCount(str) {
//   var vowelsCount = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] === "a" ||
//       str[i] === "e" ||
//       str[i] === "i" ||
//       str[i] === "o" ||
//       str[i] === "u"
//     ) {
//       vowelsCount++;
//     }
//   }
//   return vowelsCount;
// }
// console.log(getCount('actions'))

// function capital(capitals) {
//   return capitals.map(
//     (data) => `The capital of ${data.state} is ${data.capital}`
//   );
// }

// const state_capitals = [{ state: "Maine", capital: "Augusta" }];
// console.log(capital(state_capitals)[0]);

// var greet = function (name) {
//   let str = "Hello ";
//   for (let i = 0; i < name.length; i++) {
//     if (i === 0) {
//       str += name[i].toUpperCase();
//     } else str += name[i].toLowerCase();
//   }
//   return str + "!";
// };
// console.log(greet("riley"));
// console.log(greet("JACK"));

// function sortReindeer(reindeerNames) {
//   return reindeerNames
//     .map((fullName) => fullName.split(" "))
//     .sort((a, b) => a[1].localeCompare(b[1]))
//     .map((arrayInside) => arrayInside.join(" "));
// }
// const deers = [
//   "Dasher Tonoyan",
//   "Dancer Moore",
//   "Prancer Chua",
//   "Vixen Hall",
//   "Comet Karavani",
//   "Cupid Foroutan",
//   "Donder Jonker",
//   "Blitzen Claus",
// ];
// console.log(sortReindeer(deers));

// function solve(a, b) {
//   let oneStr = "";
//   let twoStr = "";
//   for (let i = 0; i < a.length; i++) {
//     let repeat = false;
//     for (let j = 0; j < b.length; j++) {
//       if (a[i] === b[j]) repeat = true;
//     }
//     if (!repeat) oneStr += a[i];
//   }
//   for (let i = 0; i < b.length; i++) {
//     let repeat = false;
//     for (let j = 0; j < a.length; j++) {
//       if (b[i] === a[j]) repeat = true;
//     }
//     if (!repeat) twoStr += b[i];
//   }
//   return oneStr + twoStr;
// }
// console.log(solve("xyab", "xzca"));

// var orderedCount = function (text) {
//   if (!text.length) return [];
//   const arr = [];
//   for (let i = 0; i < text.length; i++) {
//     let counter = 0;
//     for (let j = 0; j < text.length; j++) {
//       if (text[i] === text[j]) counter++;
//     }
//     arr.push([text[i], counter]);
//   }
//   const unicArr = [...new Set(text)];
//   return unicArr.map((data) => {
//     const newData = arr.find((el) => el[0] === data);
//     return newData;
//   });
// };

// console.log(orderedCount("abracadabra")); //[['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

// function getNiceNames(people) {
//   return people.reduce((acc, person) => {
//     if (person.wasNice) acc.push(person.name);
//     return acc;
//   }, []);
// }

// function getNaughtyNames(people) {
//   return people.reduce((acc, person) => {
//     if (!person.wasNice) acc.push(person.name);
//     return acc;
//   }, []);
// }

// console.log(
//   getNiceNames([
//     { name: "Warrior reading this kata", wasNice: true },
//     { name: "xDranik", wasNice: false },
//     { name: "Santa", wasNice: true },
//   ])
// );
// // => returns [ 'Warrior reading this kata', 'Santa' ]

// console.log(
//   getNaughtyNames([
//     { name: "Warrior reading this kata", wasNice: true },
//     { name: "xDranik", wasNice: false },
//     { name: "Santa", wasNice: true },
//   ])
// );
// // => returns [ 'xDranik' ]

// function gracefulTipping(bill) {
//   let billWithTip = bill * 0.15 + bill;
//   if (billWithTip < 10) {
//     return Math.ceil(billWithTip);
//   } else if (
//     billWithTip >= 10 &&
//     billWithTip <= 99.99 &&
//     billWithTip % 5 !== 0
//   ) {
//     billWithTip = Math.ceil(billWithTip);
//     while (billWithTip % 5 !== 0) {
//       billWithTip++;
//     }
//     return billWithTip;
//   } else if (
//     billWithTip >= 100 &&
//     billWithTip <= 999.999 &&
//     billWithTip % 50 !== 0
//   ) {
//     billWithTip = Math.ceil(billWithTip);
//     while (billWithTip % 50 !== 0) {
//       billWithTip++;
//     }
//     return billWithTip;
//   } else if (
//     billWithTip >= 1000 &&
//     billWithTip <= 9999.99 &&
//     billWithTip % 500 !== 0
//   ) {
//     billWithTip = Math.ceil(billWithTip);
//     while (billWithTip % 500 !== 0) {
//       billWithTip++;
//     }
//     return billWithTip;
//   }
// }

// console.log(gracefulTipping(1));
// console.log(gracefulTipping(7));
// console.log(gracefulTipping(12));
// console.log(gracefulTipping(86));

// function rowSumOddNumbers(n) {
//   const arr = [];
//   let num = n * n - n + 1;
//   arr.push(num);
//   while (arr.length < n) {
//     num += 2;
//     arr.push(num);
//   }
//   return arr.reduce((acc, num) => acc + num);
// }
// console.log(rowSumOddNumbers(1));
// console.log(rowSumOddNumbers(2));
// console.log(rowSumOddNumbers(3));
// console.log(rowSumOddNumbers(4));

// function divisibleByThree(str) {
//   return str.split("").reduce((acc, num) => acc + num) % 3 === 0 ? true : false;
// }
// console.log(divisibleByThree("123"));
// console.log(divisibleByThree("8409"));
// console.log(divisibleByThree("100853"));
// console.log(divisibleByThree("33333333"));
// console.log(divisibleByThree("7"));

// function multiples(m, n) {
//   const arr = [];
//   let number = n;
//   for (let i = 0; i < m; i++) {
//     arr.push(number);
//     number += n;
//   }
//   return arr;
// }
// console.log(multiples(3, 5.0));

// function getSum(a, b) {
//   if (a === b) return a;
//   const maxNum = a > b ? a : b;
//   const minNum = a < b ? a : b;
//   const arr = [maxNum];
//   for (let i = minNum; i < maxNum; i++) {
//     arr.push(i);
//   }
//   return arr.reduce((acc, num) => acc + num);
// }

// console.log(getSum(1, 0)); // 1 + 0 = 1
// console.log(getSum(1, 2)); // 1 + 2 = 3
// console.log(getSum(0, 1)); // 0 + 1 = 1
// console.log(getSum(1, 1)); // 1 Since both are same
// console.log(getSum(-1, 0)); // -1 + 0 = -1
// console.log(getSum(-1, 2)); // -1 + 0 + 1 + 2 = 2

// var splitInParts = function (s, partLength) {
//   let str = [];
//   let index = 0;
//   while (index < s.length) {
//     const tempStr = s.substr(index, partLength);
//     str.push(tempStr);
//     index += partLength;
//   }
//   return str.join(" ");
// };
// console.log(splitInParts("supercalifragilisticexpialidocious", 3));

// function generateIntegers(m, n) {
//   const arr = [];
//   for (let i = m; i <= n; i++) {
//     arr.push(i);
//   }
//   return arr;
// }
// console.log(generateIntegers(2, 5));







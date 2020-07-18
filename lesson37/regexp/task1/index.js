const input = "As I was going to Saint Ives";
const re = /\w{3,}/gi;
console.log(input.match(re));
console.log(input.search(re));

console.log(re.test(input));

// console.log(re.exec(input));
// console.log(re.exec(input));
// console.log(re.exec(input));
// console.log(re.exec(input));
// console.log(re.exec(input));

const output = input.replace(/\w{4,}/gi, "****");
console.log(output);

const html = "<br> [!CDATA[[<br>]]";
const matches = html.match(/<br>/gi);
console.log(matches);

const beer99 =
  "A 99 bottles of beer on the wall " +
  "take 1 down and pass to around -- " +
  "98 bottles of beer on the wall.";
const matches2 = beer99.match(/0|1|2|3|4|5|6|7|8|9/g);
console.log(matches2);
const matches3 = beer99.match(/[0123456789]/g);
console.log(matches3);
const matches4 = beer99.match(/[0-9]/g);
console.log(matches4);
const matches5 = beer99.match(/[\-0-9a-z.]/ig);
console.log(matches5);
const matches6 = beer99.match(/[.a-z0-9\-]/ig);
console.log(matches6);
const matches7 = beer99.match(/[.a-z0-9-]/ig);
console.log(matches7);
const matches8 = beer99.match(/[^\-0-9a-z.]/ig);
console.log(matches8);
const matches9 = beer99.match(/[\-\da-z.]/ig);
console.log(matches9);
const matches10 = beer99.match(/[\-\Da-z.]/ig);
console.log(matches10);
const matches11 = beer99.match(/[\-\d\w.]/ig);
console.log(matches11);
const matches12 = beer99.match(/[\-\D\W.]/ig);
console.log(matches12);
const matches13 = beer99.match(/[\D\-\W.]/ig);
console.log(matches13);
const matches14 = beer99.match(/[\D\W.-]/ig);
console.log(matches14);
const matches15 = beer99.match(/[\DW.-]/ig);
console.log(matches15);
const matches16 = beer99.match(/[\-\s\d\w.]/ig);
console.log(matches16);

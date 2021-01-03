"use strict";
console.log(this)

const stuff = "hight:     9\n" + "medium:     5\n" + "low:       2\n";
const levels1 = stuff.match(/:\s*[0-9]/g);
console.log(levels1);

const messyPhone = " (505) 555-1515";
const neatPhone = messyPhone.replace(/\D/g, "");
console.log(neatPhone);

const field = " something ";
const valid = /\S/.test(field);
console.log(valid);

const beer99 =
  "A 99 bottles of beer on the wall " +
  "take 1 down and pass to around -- " +
  "98 bottles of beer on the wall.";
const m1 = beer99.match(/[0-9][0-9][0-9]|[0-9][0-9]|[0-9]/);
console.log(m1);
const m2 = beer99.match(/[0-9]+/);
console.log(m2);

const input =
  "Address: 333 Main Sr., Anywhere, NY, 55532. Phone: 555-555-2525.";
const m3 = input.match(/\d{5}/);
console.log(m3);

const equation = "(2+3.5)*7";
const m4 = equation.match(/\(\d \+ \d\. \d\) \* \d/);
console.log(m4);

const text = "Visit oreilly.com today!";
const m5 = text.match(/[a-z]+(?:\.com|\.org|\.edu)/i);
console.log(m5);
const m6 = text.match(/\w+(?:\.com|\.org|\.edu)/i);
console.log(m6);

const html =
  "<link rel='stylesheet' href='http://insecure.com/stuff.css'>\n" +
  "<link rel='stylesheet' href='https://securestuff.css'>\n" +
  "<link rel='stylesheet' href='//anything.com/flexible.css'>";
const m7 = html.match(/(?:https?)?\/\/[a-z][a-z0-9-]+[a-z0-9]+/gi);
console.log(m7);

const input2 =
  "Regex pros know the difference between\n" +
  "<i>greedy</i> and <i>lazy</i> matching.";
const rep21 = input2.replace(/<i>(.*)<\/i>/gi, "<strong>$1</strong>");
console.log(rep21);
const rep22 = input2.replace(/<i>(.*?)<\/i>/gi, "<strong>$1</strong>");
console.log(rep22);


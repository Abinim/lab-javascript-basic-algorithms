// Names and input
const hacker1 = `Bibek`;
console.log(`The driver´s name is ${hacker1}`);

const hacker2 = 'rolex';
console.log(`The navigator name is ${hacker2}`);

// conditional
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`;
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}
// loops
let driverNameUppercase = '';
for (let i = 0; i < hacker1.length; i++) {
  driverNameUppercase += hacker1[i].toUpperCase() + ' ';
}
console.log(driverNameUppercase.trim());

let navigatorNameReserve = ``;
for (let i = hacker1.length - 1; i >= 0; i--) {
  navigatorNameReserve += hacker1[i];
}

console.log(navigatorNameReserve);

if (hacker1.localeCompare(hacker2) < 0) {
  console.log('the driver name goes first');
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log('yo, the navigator goes first, definitely.');
} else {
  console.log('what?! you both have the same name?');
}
const longText = `Lorem ipsum dolor sit amet,consectetur adipiscing elit,
 sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
 nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
 reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
  culpa qui officia deserunt mollit anim id est laborum et.`;

const wordCount = longText.split(/\s+/).length;
console.log(`word count: ${wordCount}`);

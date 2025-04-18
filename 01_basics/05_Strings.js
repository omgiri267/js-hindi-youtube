const name = "Om"
const repoCount = 43

//console.log(name + repoCount + " Value");

//console.log(`My name is ${name} & my age is ${repoCount} years`);

const gameName = new String('Om Giri')

// console.log(gameName[3]);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4)
// console.log(newString);

// console.log(gameName.substring(0, 4));

const anotherString = gameName.slice(-5, 4)
//console.log(anotherString);

const newStringOne = "      Om      "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://omgiri.com/om%20giri"
console.log(url.replace('%20', '_'));
console.log(url.includes("oml"));

console.log(gameName.split(' '));








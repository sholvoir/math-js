const mean = require('./mean');
const circumference = require('./circumference');
const areaOfCircle = require('./area-circle');
const volumeSphere = require('./volume-sphere');
const volumeCylinder = require('./volume-cylinder');
const hypotenuse = require('./hypotenuse');
const missSide = require('./miss-side');

//const data = process.argv.i.slice(2).map(arg => Number(arg));
const [, , b, c] = process.argv;

console.log('Result: ', missSide(b, c));
console.log(process.argv0, process.argv);
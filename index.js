const mean = require(mean);
const data = process.argv.i.slice(2).map(arg => Number(arg));
console.log('Mean Absolute Difference: ', mean(data));
const mean = require('mean');

module.exports = (data) => {
    const average = mean(data);
    return mean(data.map(x => Math.abs(x - average)));
}
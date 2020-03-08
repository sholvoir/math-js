const mean = (data: Array<number>) => data.reduce((acc, cur) => acc + cur) / data.length;
const mad = (data: Array<number>) => { const average = mean(data); return mean(data.map(x => Math.abs(x - average))); }
const circumferenceOfCircle = (radius: number) => 2 * Math.PI * radius;
const areaOfCircle = (radius: number) => Math.PI * radius * radius;
const volumeOfSphere = (radius: number) => (4 / 3) * Math.PI * radius * radius * radius;
const volumeOfCylinder = (radius: number, height: number) => Math.PI * radius * radius * height;
const hypotenuse = (a: number, b: number) => Math.sqrt(a * a + b * b);
const missSide = (b: number, c: number) => Math.sqrt(c * c - b * b);
const suerfaceAreaOfRectangularPrism = (a, b, c) => 2 * (a * b + b * c + a * c);

const functions = {
    mean,
    CC: circumferenceOfCircle,
    AC: areaOfCircle,
    VS: volumeOfSphere,
    VC: volumeOfCylinder,
    hypotenuse,
    missSide,
    SARP: suerfaceAreaOfRectangularPrism
}

//const data = process.argv.i.slice(2).map(arg => Number(arg));
const func = process.argv[2];
const argv = process.argv.slice(3);

console.log('Result: ', functions[func](...argv));
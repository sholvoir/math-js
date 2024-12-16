const mean = (...data: Array<number>) => data.reduce((acc, cur) => acc + cur) / data.length;
const mad = (...data: Array<number>) => { const average = mean(...data); return mean(...data.map(x => Math.abs(x - average))); }
const circumferenceOfCircle = (radius: number) => 2 * Math.PI * radius;
const perimeterOfTriangle = (a: number, b: number, c: number) => a + b + c;
const areaOfCircle = (radius: number) => Math.PI * radius * radius;
const volumeOfSphere = (radius: number) => (4 / 3) * Math.PI * radius * radius * radius;
const volumeOfCylinder = (radius: number, height: number) => Math.PI * radius * radius * height;
const hypotenuse = (a: number, b: number) => Math.sqrt(a * a + b * b);
const missSide = (b: number, c: number) => Math.sqrt(c * c - b * b);
const suerfaceAreaOfRectangularPrism = (a: number, b: number, c: number) => 2 * (a * b + b * c + a * c);

const functions = {
    mean,
    mad,
    cc: circumferenceOfCircle,
    p: perimeterOfTriangle,
    ac: areaOfCircle,
    vs: volumeOfSphere,
    vc: volumeOfCylinder,
    h: hypotenuse,
    ms: missSide,
    sarp: suerfaceAreaOfRectangularPrism
}


if (import.meta.main) {
    // @ts-ignore <JSCode>
    console.log('Result: ', functions[Deno.args[0]](...Deno.args.slice(1).map(v => +v)));
}

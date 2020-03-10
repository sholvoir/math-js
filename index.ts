class Point {
    constructor(public x: number, public y: number) {}
    toString() { return `(${this.x}, ${this.y})`; }
}

class Line {
    constructor(public a: number, public b: number) {}
    toString() { return `y = ${this.a}x${this.b === 0 ? '' : this.b > 0 ? ` + ${this.b}` : ` - ${-this.b}`}` }
} 

const mean = (data: Array<number>) => data.reduce((acc, cur) => acc + cur) / data.length;
const mad = (data: Array<number>) => { const average = mean(data); return mean(data.map(x => Math.abs(x - average))); }
const circumferenceOfCircle = (radius: number) => 2 * Math.PI * radius;
const perimeterOfTriangle = (a: number, b: number, c: number) => a + b + c;
const areaOfCircle = (radius: number) => Math.PI * radius * radius;
const volumeOfSphere = (radius: number) => (4 / 3) * Math.PI * radius * radius * radius;
const volumeOfCylinder = (radius: number, height: number) => Math.PI * radius * radius * height;
const hypotenuse = (a: number, b: number) => Math.sqrt(a * a + b * b);
const missSide = (b: number, c: number) => Math.sqrt(c * c - b * b);
const suerfaceAreaOfRectangularPrism = (a, b, c) => 2 * (a * b + b * c + a * c);
const lineFromTwoPoint = ({x: x1, y: y1}: Point, { x: x2, y: y2}: Point) => new Line((y2-y1)/(x2-x1), (x2*y1-x1*y2)/(x2-x1));
const intersectionOfTwoLine = ({a: a1, b: b1}: Line, {a: a2, b: b2}: Line) => new Point((b1-b2)/(a2-a1), (a2*b1-a1*b2)/(a2-a1));

const functions = {
    mean,
    cc: circumferenceOfCircle,
    p: perimeterOfTriangle,
    ac: areaOfCircle,
    vs: volumeOfSphere,
    vc: volumeOfCylinder,
    h: hypotenuse,
    ms: missSide,
    sarp: suerfaceAreaOfRectangularPrism,
    l: (x1, y1, x2, y2) => lineFromTwoPoint(new Point(x1, y1), new Point(x2, y2)).toString(),
    i: (a1, b1, a2, b2) => intersectionOfTwoLine(new Line(a1, b1), new Line(a2, b2)).toString(),
    i2: (xa, ya, xb, yb, xc, yc, xd, yd) => intersectionOfTwoLine(lineFromTwoPoint(new Point(xa, ya), new Point(xb, yb)), lineFromTwoPoint(new Point(xc, yc), new Point(xd, yd))).toString()
}

const func = process.argv[2];
const argv = process.argv.slice(3).map(v => +v);

console.log('Result: ', functions[func](...argv));
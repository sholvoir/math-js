/**
 * 2D Point
 */
class Point2 {
    constructor(public x: number, public y: number) {}
    toString() { return `(${this.x}, ${this.y})`; }
}

/**
 * 3D Point
 */
class Point3 {
    constructor(public x: number, public y: number, public z: number) {}
    toString() { return `(${this.x}, ${this.y}, ${this.z})`; }
}

/**
 * 2D Line is 'ax + by + c = 0'
 */
class Line2 {
    constructor(public A: number, public B: number, public C: number) {}
    toStringObliqueIntercept() {
        let result = '';
        if (this.B == 0) return result;
        result += 'y =';
        if (this.A != 0) {
            const k = -this.A / this.B;
            result += k > 0 ? ` ${k}x` : ` -${-k}x`;
        }
        if (this.C != 0) {
            const b = -this.C / this.B;
            result += b > 0 ? ` + ${b}` : ` - ${-b}`;
        }
    }
    toString() {
        let result = '';
        if (this.A != 0) result += `${this.A}x`;
        if (this.B != 0) {
            if (result) result += ' ';
            result += this.B > 0 ? `+ ${this.B}y` : `- ${-this.B}`;
        }
        if (this.C != 0) {
            if (result) result += ' ';
            result += this.C > 0 ? `+ ${this.C}` : `- ${-this.C}`;
        }
        return result;
    }
    static fromObliqueIntercept(k: number, b: number) {
        return new Line2(k, -1, b);
    }
    static fromTwoPoint(p1: Point2, p2: Point2) {
        
    }
}

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
const lineFromTwoPoint = ({x: x1, y: y1}: Point2, { x: x2, y: y2}: Point2) => new Line2(y2-y1, x1-x2, x1*y2-x2*y1);
const intersectionOfTwoLine = ({A: a1, B: b1, C: c1}: Line2, {A: a2, B: b2, C: c2}: Line2) => new Point2((c1*b2-c2*b1)/(a1*b2-a2*b1), (a1*c2-a2*c1)/(a1*b2-a2*b1));

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
    l: (x1: number, y1: number, x2: number, y2: number) =>
        lineFromTwoPoint(new Point2(x1, y1), new Point2(x2, y2)).toString(),
    i: (a1: number, b1: number, c1: number, a2: number, b2: number, c2: never) =>
        intersectionOfTwoLine(new Line2(a1, b1, c1), new Line2(a2, b2, c2)).toString(),
    i2: (xa: number, ya: number, xb: number, yb: number, xc: number, yc: number, xd: number, yd: number) =>
        intersectionOfTwoLine(lineFromTwoPoint(new Point2(xa, ya), new Point2(xb, yb)), lineFromTwoPoint(new Point2(xc, yc), new Point2(xd, yd))).toString()
}

// @ts-ignore
console.log('Result: ', functions[Deno.args[0]](...Deno.args.slice(1).map(v => +v)));
/**
 * 2D Point is (x, y)
 */
export class Point {
    constructor(public x: number, public y: number) {}
    toString() { return `(${this.x}, ${this.y})`; }
    static intersectionOfTwoLine({A: a1, B: b1, C: c1}: Line, {A: a2, B: b2, C: c2}: Line) {
        return new Point((c1*b2-c2*b1)/(a1*b2-a2*b1), (a1*c2-a2*c1)/(a1*b2-a2*b1));
    }
}

/**
 * 2D Line is 'ax + by + c = 0'
 */
export class Line {
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
        return new Line(k, -1, b);
    }
    static fromTwoPoint({x: x1, y: y1}: Point, { x: x2, y: y2}: Point) {
        return new Line(y2-y1, x1-x2, x2*y1-x1*y2);
    }
}

export const l = (x1: number, y1: number, x2: number, y2: number) =>
    Line.fromTwoPoint(new Point(x1, y1), new Point(x2, y2)).toString();
export const i = (a1: number, b1: number, c1: number, a2: number, b2: number, c2: never) =>
    Point.intersectionOfTwoLine(new Line(a1, b1, c1), new Line(a2, b2, c2)).toString();
export const i2 = (xa: number, ya: number, xb: number, yb: number, xc: number, yc: number, xd: number, yd: number) =>
    Point.intersectionOfTwoLine(Line.fromTwoPoint(new Point(xa, ya), new Point(xb, yb)), Line.fromTwoPoint(new Point(xc, yc), new Point(xd, yd))).toString()
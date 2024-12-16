export class Point {
    constructor(public x: number, public y: number, public z: number) {}
    toString() { return `(${this.x}, ${this.y}, ${this.z})`; }
}
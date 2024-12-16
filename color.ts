export class Color {
    constructor(public r: number, public g: number, public b: number, public t = 0) {}
    #toHex(a: number) { return `0${a.toString(16)}`.slice(-2); }
    toString() { return `#${this.#toHex(this.r)}${this.#toHex(this.g)}${this.#toHex(this.b)}${this.t==0?'':this.#toHex(this.t)}`; }
}

if (import.meta.main)
    console.log(new Color(parseInt(Deno.args[0]), parseInt(Deno.args[1]), parseInt(Deno.args[2]), Deno.args[3]?parseInt(Deno.args[3]):undefined).toString());
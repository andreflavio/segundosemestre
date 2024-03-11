
// exercício 6
/*
class Car {
    private static contador:number = 0;

    constructor(private _marca: string, private _modelo: string) {
        Car.contador++;
     }

    set marca(entrada: string) {
        this._marca = entrada;
    }

    set modelo(entrada: string) {
        this._modelo = entrada;
    }
    get marca() {
        return this._marca;

    }
    get modelo() {
        return this._modelo;

    }
    public static getContador():number {
        return this.contador;
    }
}

console.log("Antes do a:", Car.getContador());
const a = new Car("VW", "Gol");
console.log("Antes do b:", Car.getContador());
const b = new Car("Fiat", "Uno");
console.log("Antes do c:", Car.getContador());
const c = new Car("GM", "Corsa");
console.log("Depois do c", Car.getContador());

*/
//feito pela ia

class Car {
    private static contador: number = 0;

    constructor(private _marca: string, private _modelo: string) {
        Car.contador++;
    }

    set marca(entrada: string) {
        this._marca = entrada;
    }

    set modelo(entrada: string) {
        this._modelo = entrada;
    }

    get marca() {
        return this._marca;
    }

    get modelo() {
        return this._modelo;
    }

    public static getContador(): number {
        return this.contador;
    }
}

console.log("Antes do a:", Car.getContador());
const a = new Car("VW", "Gol");
console.log("Antes do b:", Car.getContador());
const b = new Car("Fiat", "Uno");
console.log("Antes do c:", Car.getContador());
const c = new Car("GM", "Corsa");
console.log("Depois do c:", Car.getContador());

export{};
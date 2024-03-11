
// exercício 4

class Carro {
        constructor(private _marca: string, private _modelo: string){} 

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
}

const carro = new Carro("Fiat", "Uno");
console.log(carro);
carro.marca = "VW";
carro.modelo = "Gol";
console.log(carro.modelo);
console.log(carro.marca);


/* const carro = new Carro("Fiat", "Uno");
console.log(carro);
console.log(carro.modelo);
console.log(carro.marca);
*/

//export { Carro };

export default Carro;
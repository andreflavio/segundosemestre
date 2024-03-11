

// exercício 3
class Carro {
    private _marca: string = "";
    private _modelo: string = "";

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

const carro = new Carro();
carro.marca = "VW";
carro.modelo = "Gol";
console.log(carro);


export{};
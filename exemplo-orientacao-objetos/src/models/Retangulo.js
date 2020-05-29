import Poligono from "./Poligono";

export default class Retangulo extends Poligono{
    #base;
    #altura;

    constructor(arestas){
        super(arestas);
        this.#base = arestas.base;
        this.#altura = arestas.altura;
        Object.freeze(this);
    }

    area(){
        return this.#base * this.#altura;
    }
}
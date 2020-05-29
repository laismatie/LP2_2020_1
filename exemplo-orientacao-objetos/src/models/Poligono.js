export default class Poligono{
 
    arestas;

    constructor(arestas){
        this.arestas = arestas;
    }

    area(){
        console.log('Área do polígono genérico');
        console.log(this.arestas);
    }

}
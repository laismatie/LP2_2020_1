//Exporta (deixa pública) a classe cliente com a forma mais moderna (ES6)
export default class Cliente{
    //cria um objeto (indivíduo/instância) de uma determinada classe
    constructor(nome, endereco, cpf, telefone){
        this.nome = nome;
        this.endereco = endereco;
        this.cpf = cpf;
        this.telefone = telefone;
    }
}

/**
 * Exporta (deixa pública) a classe Cliente
 * na forma antiga (old school) do JS
 * 
 * module.exports = Cliente;
 */
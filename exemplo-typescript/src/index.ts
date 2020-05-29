import Pessoa from './models/Pessoa';

const pessoa = new Pessoa('Laís', 'lais@email.com');

const mensagem = pessoa.boasVindas();
console.log(mensagem);
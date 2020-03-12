import ClienteController from './controller/ClienteController';

let nome = 'Pietra';
let telefone = '(67) 99999-9999';
let endereco = 'Rua Paraná, 485';
let cpf = '01010110101';

/**
 * Instanciar um controlador
 */
let clienteCtrl = new ClienteController();

/**
 * Cria um novo objeto de Cliente
 */
let cliente = clienteCtrl.criarCliente(nome,endereco,cpf,telefone);

console.log(cliente);

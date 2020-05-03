import * as db from './config/db';
import ContatoController from  './controllers/ContatoController';
import Contato from './models/Contato';


const contatoCtrl = new ContatoController();

let recuperarContatos = async () =>{

    db.conectarBD();

    let contatos = await contatoCtrl.recuperarTodos();
    console.log(contatos);

    db.desconectarBD();
}

recuperarContatos();

import * as db from './config/db';
import Compra from './models/Compra';
import CompraController from './controllers/CompraController';

const compraController = new CompraController();

let recuperarCompras = async () =>{

    db.conectarBD();

    let compras = await compraController.recuperarTodos();
    console.log(compras);

    db.desconectarBD();
}

recuperarCompras();

import * as db from './config/db';

let criarNovoContato = async () =>{

    db.conectarBD();

    await db.criarContato();

    db.desconectarBD();
}

criarNovoContato();

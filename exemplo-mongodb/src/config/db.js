import mongoose from 'mongoose';

const URI_BD = 'mongodb://localhost/agenda';

export const conectarBD = () => {
    mongoose
        .connect(URI_BD, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log(`Mongoose conectado em ${URI_BD}`))
        .catch(erro => console.log(erro));
}

export const desconectarBD = () =>{
    mongoose
        .disconnect()
        .then(() => console.log(`Mongoose desconectado em ${URI_BD}`))
        .catch(erro => console.log(erro));
}

export const criarContato = async () =>{
    const esquema = new mongoose.Schema({
        nome: String,
        telefone: String
    });

    const Contato = mongoose.model('Contatos', esquema);
    await Contato.create({nome: 'Hugo', telefone: '99090-9999'});
}


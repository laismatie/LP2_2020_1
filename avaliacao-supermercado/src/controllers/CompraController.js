import Compra from '../models/Compra';

export default class CompraController{
    async salvar (compra){
        const compraSalva = await Compra.create(compra);
        return compraSalva; 
    } 

    async recuperarTodos(){
        const compras = await Compra.find();
        return compras;
    }

    async recuperarPorNome(nomeConsulta){
        const compras = await Compra.find({
            descricao:{
                '$regex': nomeConsulta,
                '$options': 'i'
            }
        });         
        return compras;
    }

    async recuperarPeloId(id){
       const compra = await Compra.findById(id);
       return compra;
    }

    async remover(id){
        const resposta = await Compra.deleteOne({
            _id:id
        });

        return resposta;
    }
}

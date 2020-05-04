import * as db from './config/db';
import ProdutoController from './controllers/ProdutoController';
import Produto from './models/Produto';

const produtoController = new ProdutoController();

let adicionarProduto = async () =>{

    db.conectarBD();

    const novoProduto = {
        descricao: "Café",
        quantidade: 9 
    };

    await produtoController.salvar(novoProduto);

    db.desconectarBD();
}

let recuperarTodosProdutos = async () =>{
    db.conectarBD();

    const produtos = await produtoController.recuperarTodos();
    produtos.forEach(produto => console.log(produto));

    db.desconectarBD();
}

let recuperarPorFiltro = async () =>{
    db.conectarBD();

    const produtos = await produtoController.recuperarPorNome("a");
    produtos.forEach(produto => console.log(produto));

    db.desconectarBD();
}

let recuperarPorId = async () =>{
    db.conectarBD();

    const produto = await produtoController.recuperarPeloId("5eaf7e4283a98b1e0809790f");
    console.log(produto);

    db.desconectarBD();
}

let removerProduto = async () =>{
    db.conectarBD();

    const produto = await produtoController.remover("5eaf8311422c6b2b700e2236");
    console.log(produto);

    db.desconectarBD();
}

let atualizarProduto = async () =>{

    db.conectarBD();

    let produto = await produtoController.recuperarPeloId("5eaf8297ba924609d8ab046d");
    produto.marca = 'Tixan';
    const produtoAtualizado = await produtoController.salvar(produto);
    console.log(produtoAtualizado);

    db.desconectarBD();
}

//adicionarProduto();
//recuperarTodosProdutos();
//recuperarPorFiltro();
//recuperarPorId();
//removerProduto();
//atualizarProduto();
import fs from 'fs'; //le e grava o arquivo File System
import path from 'path';//aponta onde está o arquivo
import xlsToJson from 'convert-excel-to-json';

import Municipio from '../entity/Municipio';
import {ANOS} from '../../constants/Colunas';

export default class ArrecadacaoDAO{

    carregarArrecadacoesDosMunicipios(){
        let municipios = [];

        let dados = this.extrairDadosDaPlanilha('A4:P185');

        dados.Plan1.forEach(elemento =>{
            let nome = elemento.A;

            /**
             * Object.values devolve todos os valores
             * das propriedades existentes dentro de um objeto
             */
            let valores = Object.values(elemento);
            let arrecadacoes = valores.slice(1,valores.length);
            let municipio = new Municipio(nome, arrecadacoes);
            municipios.push(municipio);
        });

        return municipios;
    }

    carregarArrecadacoesPorAno(ano) {
        if (ano in ANOS){
            let coluna = ANOS[ano];
            let range = `${coluna}4:${coluna}185`;

            let arrecadacoes = this.extrairDadosDaPlanilha(range);
            let nomesMunicipios = this.extrairDadosDaPlanilha('A4:A185');
            console.log(arrecadacoes,nomesMunicipios);
        }
    }

    extrairDadosDaPlanilha(range){
         /**
         * Aponto para o arquivo 
         * da planilha de dados,
         * a partir da pasta atual
         * caminho relativo, não absoluto
         */
        let caminhoArquivo = path.resolve(__dirname,'../../data/dados.xls');
         
        let dados = xlsToJson({
            source: fs.readFileSync(caminhoArquivo),
            range //range: range
        });

        return dados;
    }
}
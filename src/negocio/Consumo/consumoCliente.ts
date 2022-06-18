import Cadastro from "../cadastro";
import Cliente from "../../modelo/cliente";
import Servico from "../../modelo/servico";
import Empresa from "../../modelo/empresa";
import Produto from "../../modelo/produto";
import Entrada from "../../io/entrada";
import listagemProduto from "../Produto/listagemProduto";
import ListagemServico from "../Servico/listagemServico";



export default class ServicosCliente extends Cadastro{
    private entrada: Entrada
    public clienteSelecionado?: Cliente
    public empresa: Empresa
    public servicoSelecionado?: Servico
    constructor(empresa: Empresa){
        super()
        this.entrada = new Entrada() 
        this.empresa = empresa
        
    }
    public cadastrar(): void{
        const cpf = this.entrada.receberTexto('Informe CPF do Cliente: ')
        this.clienteSelecionado = this.empresa.getClientes.find(cliente => cliente.getCpf.getValor === cpf)
        let execucao = true;
        while(execucao){
            console.log('        ');
            console.log('Opções de consumo');
            console.log(`1 - Produto`);
            console.log(`2 - Serviço`);
            console.log(`0 - Sair`);
            console.log('        ');
        let opcao = this.entrada.receberNumero('Insira a Opção:  ')
        switch(opcao){
            case 1:
                let nomeProduto = this.entrada.receberTexto('Escreva o Nome do Produto: ');
                let produto = this.empresa.getProdutos.find(p => p.getNome === nomeProduto)
                this.clienteSelecionado?.addProduto(produto)
                break;
            case 2:
                const nomeServico = this.entrada.receberTexto('Informe o Nome do Serviço:  ')
                this.servicoSelecionado = this.empresa.getServicos.find(servico => servico.getNomeServiço === nomeServico)
                console.log(this.servicoSelecionado?.getNomeServiço);
                this.clienteSelecionado?.addServicos(this.servicoSelecionado)
                break;
            case 0:
                execucao = false
                console.log(`Obrigado!`)
                break;
            default:
                console.log(`Digite Uma Opção Válida!`);    
        }
        }
        console.log(`Consumo inserido com Sucesso`);
        
    }
    

}
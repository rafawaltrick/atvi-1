import Cadastro from "./cadastro";
import Cliente from "../modelo/cliente";
import Servico from "../modelo/servico";
import Empresa from "../modelo/empresa";
import Produto from "../modelo/produto";
import Entrada from "../io/entrada";
import listagemProduto from "./listagemProduto";
import ListagemServico from "./listagemServico";



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
    public selecionarCliente(): void{
        const cpf = this.entrada.receberTexto('Informe CPF do Cliente: ')
        this.clienteSelecionado = this.empresa.getClientes.find(cliente => cliente.getCpf.getValor === cpf)
        console.log(this.clienteSelecionado?.nome);
        let listagemProdutos = new ListagemServico(this.empresa.getServicos)
        listagemProdutos.listar()
        const idProduto = this.entrada.receberTexto('Informe o Nome do Serviço:  ')
        this.servicoSelecionado = this.empresa.getServicos.find(servico => servico.getNomeServiço === idProduto)
        console.log(this.servicoSelecionado?.getNomeServiço);
        
    }
    public cadastrar(): void {
        
    }

}
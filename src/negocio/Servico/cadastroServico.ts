import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Cadastro from "../cadastro";

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada:Entrada
    constructor(servico:Array<Servico>){
        super()
        this.servicos = servico
        this.entrada = new Entrada()
    }
    public cadastrar():void{
        console.log(`\n Inicio do cadastro do serviço`)
        let nome = this.entrada.receberTexto(`por favor informe o nome do serviço:`)
        let preco = this.entrada.receberNumero(`por favor informe o preço:`)
        let descricao = this.entrada.receberTexto(`Por favor informe a descrição:`)
        let servico = new Servico(nome, preco, descricao)
        this.servicos.push(servico)
        console.log(`\n Cadastro de serviço concluído`)
    }
}
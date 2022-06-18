import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Editar from "../editar";

export default class EditarServico extends Editar{
    private servicos: Servico[]
    private entrada: Entrada
    constructor(servicos: Servico[]){
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
public editar(): void {
    console.log(`Editar Serviços`);
    let nome = this.entrada.receberTexto(`Digite o Nome do Serviço a ser Editado: `)
    let index = this.servicos.findIndex(s => s.getNomeServiço == nome);
    let trocar = true
    if(!index){
        console.log(`Serviço Não Encontrado`);
        trocar = false;        
    }
    while(trocar){
        console.log(`Digite a Opção Desejada.`);
        console.log(`1 - Nome do Serviço.`);
        console.log(`2 - Preço do Serviço.`);
        console.log(`3 - Descrição do serviço.`);
        console.log(`0 - Sair.`);
        let opcao = this.entrada.receberNumero(`Digite uma das Opções Para Atualizar o Serviço:`);
        switch (opcao){
            case 1:
                let nome = this.entrada.receberTexto(`Digite o Novo Nome do Serviço: `);
                this.servicos[index].nomeServiço = nome
                break;
            case 2:
                let preco = this.entrada.receberNumero(`Digite o Novo Preço do Serviço: `);
                this.servicos[index].precoServiço = preco
                break;
            case 3:
                let descricao = this.entrada.receberTexto(`Digite a Nova Descrição do Serviço: `);
                this.servicos[index].descricaoServiço = descricao
                break;
            case 0:
                trocar = false
                console.log(`Obrigado!`);
                break;
            default:
                console.log(`Digite Uma Opção Válida!`);
        }      
    }
    
}
}
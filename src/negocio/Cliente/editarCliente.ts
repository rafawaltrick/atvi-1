import Entrada from "../../io/entrada"
import Cliente from "../../modelo/cliente"
import Editar from "../editar"

export default class EditarCliente extends Editar {
    private clientes: Cliente[]
    private entrada: Entrada
    constructor(clientes: Cliente[]) {  
        super()
        this.clientes = clientes 
        this.entrada = new Entrada()
    }
public editar(): void {
    console.log(`Editar Dados do Cliente`);
    let cpf = this.entrada.receberTexto(`Digite o CPF do Cliente Que Deseja Editar: `)
    let index = this.clientes.findIndex(e => e.getCpf.getValor == cpf);
    let trocar = true
    while(trocar){
        console.log(`Digite a Opção que Deseja Editar: `);
        console.log(`1 - Nome`);
        console.log(`2 - Nome Social`);
        console.log(`3 - Telefone`);       
        console.log(`0 - Sair.`);
        let opcao = this.entrada.receberNumero('Digite uma das Opções Para Atualizar: ');  
        switch (opcao){
            case 1:
                let nome = this.entrada.receberTexto('Digite o Novo Nome: ');
                this.clientes[index].nome = nome
                break;
            case 2:
                let nomeSocial = this.entrada.receberTexto(`Digite o Novo Nome Social: `);
                this.clientes[index].nomeSocial = nomeSocial
                break;
            case 3:
                let ddd = this.entrada.receberTexto(`Digite o Novo DDD: `);
                let telefone = this.entrada.receberTexto(`Digite o Novo Número: `);
                this.clientes[index].addTelefone(ddd, telefone);
                break;
            case 0:
                trocar = false
                console.log('Saindo');
                break;
            default:
                console.log('Digite uma Opção Válida!');
        }     
        
    }
}
  
    
}
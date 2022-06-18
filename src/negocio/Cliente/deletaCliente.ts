import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Deleta from "../deleta";

export default class DeletaCliente extends Deleta{
    private clientes: Cliente[]
    private entrada: Entrada
    constructor(clientes: Cliente[]){
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public deletar(): void {
        const cpfCliente = this.entrada.receberTexto('Digite o CPF do Cliente: ');
        let index = this.clientes.findIndex(c => c.getCpf.getValor == cpfCliente);
        this.clientes.splice(index);
        
    }
}
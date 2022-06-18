import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class ListagemServicoCliente extends Listagem{
    public clientes: Array<Cliente>;
    private entrada: Entrada
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes;
        this.entrada = new Entrada();
    }
    public listar(): void {
        const cpf = this.entrada.receberTexto('Informe CPF do Cliente: ');
        let cliente = this.clientes.find((c:Cliente)=> c.getCpf.getValor === cpf);
        cliente?.getServicosConsumidos.forEach((servico: Servico)=>{
            console.log(servico.nomeServiço);            
        })
    }
}
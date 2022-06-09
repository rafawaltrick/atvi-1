import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Rg: ` + cliente.getRgs[0].getValor);
            console.log(`telefone: ` + cliente.getTelefones[0].getDdd + cliente.getTelefones[0].getNumero);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}
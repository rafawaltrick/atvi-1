import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class listagemGenero extends Listagem{
    private clientes: Cliente[]
    constructor(cliente: Cliente[]){
        super()
        this.clientes = cliente
    } 
    public listar(): void {
        let feminino: Cliente[] = [];
        let masculino: Cliente[] = [];
        let naoInformado: Cliente[] = [];

        this.clientes.forEach(clientes => {
            if(clientes.genero === "M"){
                masculino.push(clientes)
            }
            if(clientes.genero === "F"){
                feminino.push(clientes)
            }
            if(clientes.genero === "NI"){
                naoInformado.push(clientes)
            }
        })
    }
}
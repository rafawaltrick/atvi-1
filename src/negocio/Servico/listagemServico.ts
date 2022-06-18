import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class ListagemServico extends Listagem {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
    }
    public listar():void{
        console.log(`Lista de serviços:`)
        console.log(`\n`)
        this.servicos.forEach(servico =>{
            console.log(`NomeServiço:`+ servico.nomeServiço);
            console.log(`valorServiço:`+ servico.precoServiço);
            console.log(`descricaoServiço:`+ servico.descricaoServiço);
            console.log(`--------------------------------------------------------------------`);
        });
        console.log(`\n`);
    }
}
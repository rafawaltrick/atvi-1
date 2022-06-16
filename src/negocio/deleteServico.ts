import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Deleta from "./deleta";

export default class DeletaServico extends Deleta{
    private servicos: Servico[]
    private entrada: Entrada
    constructor(servicos: Servico[]){
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public deletar(): void {
        const nomeServico = this.entrada.receberTexto('Digite o Nome do Serviço: ');
        let index = this.servicos.findIndex(s => s.getNomeServiço == nomeServico);
        this.servicos.splice(index);
    }
}
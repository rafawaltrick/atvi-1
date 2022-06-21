import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";

export default class ListarConsumo{
    private clientes: Cliente[];
    private entrada: Entrada
    constructor(clientes: Cliente[]){
        this.clientes = clientes;
        this.entrada = new Entrada();
    }
    public listar10Mais(): void {
        const clientes = this.clientes.sort((a, b)=> {
            const produtosA = a.getProdutosConsumidos.length
            const servicosA = a.getServicosConsumidos.length
            const produtosB = b.getProdutosConsumidos.length
            const servicosB = b.getServicosConsumidos.length
            return (produtosB + servicosB) - (produtosA + servicosA)
        })
        console.log(clientes.slice(0,10))
        
    }

    public listagemGeralConsumo(): void{
        const cliente = this.clientes.reduce((acc,cur)=>{
            cur.getServicosConsumidos.forEach(s => {
                if (acc[s.getNomeServiço]){
                    acc[s.getNomeServiço].qtd++
                }
                else {
                    acc[s.getNomeServiço] = {
                        ...s,
                        qtd:1,
                        tipo: "Serviço"
                    }
                }
            })
            cur.getProdutosConsumidos.forEach(p => {
                if (acc[p.getProdutoID]){
                    acc[p.getProdutoID].qtd++
                }
                else {
                    acc[p.getProdutoID] = {
                        ...p,
                        qtd:1,
                        tipo: "Produto"
                    }
                }
            })
            return acc
        },{})
        const consumidos = Object.keys(cliente).map(k => cliente[k]).sort((a, b)=> b.qtd - a.qtd)
        console.log(consumidos)
    }
    public listagemConsumoGenero(): void{
        const cliente = this.clientes.reduce((acc,cur)=>{
            cur.getServicosConsumidos.forEach(s => {
                if (acc[cur.genero][s.getNomeServiço]){
                    acc[cur.genero][s.getNomeServiço].qtd++
                }
                else {
                    acc[cur.genero][s.getNomeServiço] = {
                        ...s,
                        qtd:1,
                        tipo: "Serviço"
                    }
                }
            })
            cur.getProdutosConsumidos.forEach(p => {
                if (acc[cur.genero][p.getProdutoID]){
                    acc[cur.genero][p.getProdutoID].qtd++
                }
                else {
                    acc[cur.genero][p.getProdutoID] = {
                        ...p,
                        qtd:1,
                        tipo: "Produto"
                    }
                }
            })
            return acc
        },{M:{},F:{},NI:{}})
        let feminino = Object.keys(cliente.F).map(k => cliente.F[k]).sort((a, b)=> b.qtd - a.qtd)
        let masculino = Object.keys(cliente.M).map(k => cliente.M[k]).sort((a, b)=> b.qtd - a.qtd)
        let naoInformado = Object.keys(cliente.NI).map(k => cliente.NI[k]).sort((a, b)=> b.qtd - a.qtd)

        console.log("Feminino: ",feminino)
        console.log("masculino: ",masculino)
        console.log("Não Informado: ",naoInformado)
        
    }

    public listar10Menos(): void {
        const clientes = this.clientes.sort((a, b)=> {
            const produtosA = a.getProdutosConsumidos.length
            const servicosA = a.getServicosConsumidos.length
            const produtosB = b.getProdutosConsumidos.length
            const servicosB = b.getServicosConsumidos.length
            return (produtosA + servicosA) - (produtosB + servicosB)
        })
        console.log(clientes.slice(0,10))
        
    }

    public cincoMaisValor(): void{
        const clientes = this.clientes.map(c => {
            let valorTotal = 0
            c.getProdutosConsumidos.forEach(p => {
                valorTotal += p.getPreco
            })
            c.getServicosConsumidos.forEach(s => {
                valorTotal += s.getPrecoServiço
            })
            return{...c, valorTotal}
        })
        const ordenados = clientes.sort((a, b)=> b.valorTotal - a.valorTotal)
        console.log(ordenados.slice(0,5))
    }
}    
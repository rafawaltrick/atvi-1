import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Deleta from "../deleta";

export default class DeletaProduto extends Deleta{
    private produtos: Produto[]
    private entrada: Entrada
    constructor(produtos: Produto[]){
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public deletar(): void {
        const idProduto = this.entrada.receberNumero(`Digite o ID do Produto: `);
        let index = this.produtos.findIndex(p => p.getProdutoID == idProduto);
        this.produtos.splice(index);
    }
}
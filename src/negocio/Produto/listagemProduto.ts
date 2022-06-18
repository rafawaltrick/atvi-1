import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";
import Produto from "../../modelo/produto";

export default class listagemProduto extends Listagem{
    private produto: Array<Produto>
    constructor(Produtos: Array<Produto>) {
        super()
        this.produto = Produtos
    }
    public listar(): void {
        console.log(`\nLista de todos os produtos:`);
        this.produto.forEach(produto => {
            console.log(`produtoID:` + produto.getProdutoID);
            console.log(`Nome: ` + produto.nome);
            console.log(`Preço: ` + produto.preco);
            console.log(`Descrição: ` + produto.descricao);
            console.log(`Categoria: ` + produto.categoria);
            console.log(`Quantidade: ` + produto.getQuantidade);
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}
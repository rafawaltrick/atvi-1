import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Editar from "../editar";

export default class EditaProduto extends Editar{
    private produtos: Produto[]
    private entrada: Entrada
    constructor(produtos: Produto[]){
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
public editar(): void {
    console.log(`Editar Produtos`);
    let id = this.entrada.receberNumero(`Digite o ID do Produto a Ser Editado: `);
    let index = this.produtos.findIndex(p => p.getProdutoID == id);
    let trocar = true
    while(trocar){
        console.log(`Digite a Opção Desejada:`);
        console.log(`1 - Nome do Produto.`);
        console.log(`2 - Preço do Produto.`);
        console.log(`3 - Descrição do Produto.`);
        console.log(`4 - Categoria do Produto.`);
        console.log(`5 - Quantidade do Produto.`);
        console.log(`0 - Sair.`);
        let opcao = this.entrada.receberNumero(`Digie a Opção Desejada Para Editar o Produto:`);
        switch(opcao){
            case 1:
                let nome = this.entrada.receberTexto(`Digite o Novo Nome do Produto: `);
                this.produtos[index].nome = nome
                break;
            case 2:
                let preco = this.entrada.receberNumero(`Digite o Novo Preço do Produto: `);
                this.produtos[index].preco = preco
                break;
            case 3:
                let descricao = this.entrada.receberTexto(`Digite a Nova Descrição do Produto: `);
                this.produtos[index].descricao = descricao
                break;
            case 4:
                let categoria = this.entrada.receberTexto(`Digite a Nova Categoria do Produto: `);
                this.produtos[index].categoria = categoria
                break;
            case 5:
                let quantidade = this.entrada.receberNumero(`Digite a Nova Quantidade do Produto: `);
                this.produtos[index].quantidade = quantidade
                break;
            case 0:
                trocar = false
                console.log(`Obrigado!`);
                break;
            default:
                console.log(`Digite Uma Opção Válida!`);
        }

    }
}
}
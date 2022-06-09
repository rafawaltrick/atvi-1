import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Cadastro from "./cadastro";
import Entrada from "../io/entrada";


export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void  {
        console.log(`\nInício do cadastro do produto`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `)
        let preco = this.entrada.receberNumero(`Por favor informe o valor do produto: `)
        let produtoid = this.entrada.receberNumero(`Por favor informe o id do produto: `)
        let descricao = this.entrada.receberTexto(`Por favor informe a descrição do produto: `)
        let categoria = this.entrada.receberTexto(`Por favor informe a categoria do produto: `)
        let quantidade = this.entrada.receberNumero(`Por favor informe a quantidade do produto: `)
        let produto1 = new Produto(produtoid,nome ,preco,descricao, categoria, quantidade)
        this.produtos.push(produto1)
        console.log(`\nCadastro concluído :)\n`);
    }


}




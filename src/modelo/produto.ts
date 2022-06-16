export default class Produto {
    public nome!: string
    public preco!:number
    public descricao!:string
    public categoria!:string
    public quantidade!:number
    private ProdutoID!:number
    constructor(ProdutoID:number,nome:string, preco:number, 
        descricao:string, categoria:string, quantidade:number){
        this.ProdutoID = ProdutoID
        this.nome = nome
        this.preco = preco
        this.descricao = descricao
        this.categoria = categoria
        this.quantidade = quantidade
    }
    public get getProdutoID():number{
        return this.ProdutoID
    }
    public get getNome(): string{
        return this.nome
    }
    public get getPreco():number {
        return this.preco
    }
    public get getDescricao():string {
        return this.descricao
    }
    public get getCategoria():string{
        return this.categoria
    }
    public get getQuantidade():number{
        return this.quantidade
    }
}
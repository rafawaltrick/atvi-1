export default class Servico {
    public nomeServiço!: string
    public precoServiço!: number
    public descricaoServiço!:string
constructor(nomeServiço:string,precoServiço:number,
    descriçãoServiço:string){
    this.nomeServiço = nomeServiço
    this.precoServiço = precoServiço
    this.descricaoServiço = descriçãoServiço
    }
    public get getNomeServiço():string{
        return this.nomeServiço
    }
    public get getPrecoServiço():number{
        return this.precoServiço
    }
    public get getDescricaoServiço():string{
        return this.descricaoServiço
    }
}
import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";
import Cadastro from "../cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `);
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `);
        let genero = this.entrada.receberTexto(`Por Favor Informe seu Genero, (M) para Masculino e (F) para Feminino: `);
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let valorRg = this.entrada.receberTexto(`Por favor informe o número do rg: `);
        let dataemissaoRg = this.entrada.receberTexto(`Por favor informe a data de emissão do rg, no padrão dd/mm/yyyy: `);
        let DDD = this.entrada.receberTexto(`Por favor informe o DDD do telefone, seguindo o exemplo (xxx):`);
        let telefone = this.entrada.receberTexto(`Por favor informe o número do telefone, seguindo o exemplo xxxxx-xxxx:`);
        //valores CPF
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        //valores RG
        let partesDataRg = dataemissaoRg.split('/')
        let anoRg = new Number(partesDataRg[2].valueOf()).valueOf()
        let mesRG = new Number(partesDataRg[1].valueOf()).valueOf()
        let diaRG = new Number(partesDataRg[0].valueOf()).valueOf()
    

        let telefone1 = new Telefone(DDD, telefone)
        let RgdataEmissao = new Date(anoRg, mesRG, diaRG)
        let dataEmissao = new Date(ano, mes, dia)
        let rg = new RG (valorRg, RgdataEmissao)
        let cpf = new CPF(valor, dataEmissao);
        let cliente = new Cliente(nome, nomeSocial, cpf, genero);

        cliente.getTelefones.push(telefone1);
        cliente.getRgs.push(rg)
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
}
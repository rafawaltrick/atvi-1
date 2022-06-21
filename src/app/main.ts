import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa"
import Servico from "../modelo/servico";
import CadastroCliente from "../negocio/Cliente/cadastroCliente";
import CadastroProduto from "../negocio/Produto/cadastroProduto";
import CadastroServico from "../negocio/Servico/cadastroServico";
import ListagemClientes from "../negocio/Cliente/listagemClientes";
import listagemProduto from "../negocio/Produto/listagemProduto";
import ListagemServico from "../negocio/Servico/listagemServico";
import ListagemServicoCliente from "../negocio/Consumo/listarServicoCliente";
import ConsumoCliente from "../negocio/Consumo/consumoCliente";
import DeletaCliente from "../negocio/Cliente/deletaCliente";
import DeletaServico from "../negocio/Servico/deleteServico";
import EditarCliente from "../negocio/Cliente/editarCliente";
import EditarServico from "../negocio/Servico/editarServico";
import EditaProduto from "../negocio/Produto/editaProduto";
import Produto from "../modelo/produto";
import listagemGenero from "../negocio/Listagem/listarGenero";
import ListarConsumo from "../negocio/Consumo/listarConsumo";



console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

let cliente = new Cliente("Rafael", "Rafa", new CPF("0", new Date()), "M")
let cliente1 = new Cliente("Vanessa", "Van", new CPF("1", new Date()), "F")
let cliente3 = new Cliente("José", "Zé", new CPF("2", new Date()), "M")
let cliente2 = new Cliente("Maria", "Mari", new CPF("3", new Date()), "F")
let cliente4 = new Cliente("Rodrigo", "Digão", new CPF("4", new Date()), "M")
let cliente5 = new Cliente("Janaína", "Jana", new CPF("5", new Date()), "F")
let cliente6 = new Cliente("Paulo", "Paulinho", new CPF("6", new Date()), "M")
let cliente7 = new Cliente("Michele", "Mi", new CPF("7", new Date()), "F")
let cliente8 = new Cliente("Lucas", "Lucão", new CPF("8", new Date()), "M")
let cliente9 = new Cliente("Monica", "Moni", new CPF("9", new Date()), "F")
let cliente10 = new Cliente("Raniel", "Raniboi", new CPF("10", new Date()), "M")
let cliente11 = new Cliente("Natália", "Besa", new CPF("11", new Date()), "F")
let cliente12 = new Cliente("Nicolas", "Nike", new CPF("12", new Date()), "M")
let cliente13 = new Cliente("Fabíola", "Biula", new CPF("13", new Date()), "F")
let cliente14 = new Cliente("Leonardo", "Léo", new CPF("14", new Date()), "M")
let cliente15 = new Cliente("Patrícia", "Pati", new CPF("15", new Date()), "F")
let cliente16 = new Cliente("Luiz", "Lula", new CPF("16", new Date()), "M")
let cliente17 = new Cliente("Marcela", "Marta", new CPF("17", new Date()), "F")
let cliente18 = new Cliente("Tadeu", "Tatu", new CPF("18", new Date()), "M")
let cliente19 = new Cliente("Juliane", "Juzinha", new CPF("19", new Date()), "F")
let cliente20 = new Cliente("Gustavo", "Guto", new CPF("20", new Date()), "M")
let cliente21 = new Cliente("Flávia", "Vita", new CPF("21", new Date()), "F")
let cliente22 = new Cliente("Marcos", "Marquinho", new CPF("22", new Date()), "M")
let cliente23 = new Cliente("Tatiana", "Tati", new CPF("23", new Date()), "F")
let cliente24 = new Cliente("Alberto", "Beto", new CPF("24", new Date()), "M")
let cliente25 = new Cliente("Pricila", "Pri", new CPF("25", new Date()), "F")
let cliente26 = new Cliente("Roberto", "Berto", new CPF("26", new Date()), "M")
let cliente27 = new Cliente("Maristéla", "Mara", new CPF("27", new Date()), "F")
let cliente28 = new Cliente("Marcelo", "Celo", new CPF("28", new Date()), "M")
let cliente29 = new Cliente("Keli", "Li", new CPF("29", new Date()), "F")
let cliente30 = new Cliente("Felipe", "Fe", new CPF("30", new Date()), "NI")
let servico = new Servico("Hidratação", 1, "Descrição do Serviço")
let servico2 = new Servico("Depilação", 2, "Descrição do Serviço")
let produto = new Produto(0, "Esmalte", 31, "Esmalte Para Unhas", "Estética", 13)
let produto1 = new Produto(1, "Hidratante de Cabelo", 32, "Hidratar os Cabelos", "Higiene", 23)
let produto2 = new Produto(2, "Tintura", 33, "Tinta para Cabelo", "Estética", 33)
let produto3 = new Produto(3, "Aplique", 33, "Aplique de Cabelos", "Beleza", 43)
let produto4 = new Produto(4, "Creme Hidratante", 33, "Hidratante Corporal", "Saúde", 53)
let produto5 = new Produto(5, "Creme Clareador", 33, "Clareamento de Pelos", "Estética", 63)
let produto6 = new Produto(6, "Tatuagem", 33, "Tatuagem de Sombrancelha", "Beleza", 73)
let produto7 = new Produto(7, "Cera", 33, "Cera Para Depilação", "Estética", 83)
let produto8 = new Produto(8, "Acetona", 33, "Acetona Para Tirar Esmalte", "Limpeza", 93)
let produto9 = new Produto(9, "Creme Para Cutícula", 33, "Creme Para Tirar Cutícula", "Beleza", 15)
let produto10 = new Produto(10, "Lixa", 33, "Lixa de Unha", "Estética", 20)
let produto11 = new Produto(11, "Creme Bronzeador", 33, "Creme de Bronzeamento", "Beleza", 34)
let produto12 = new Produto(12, "Colágeno", 33, "Kit Colágeno", "Estética", 36)
let produto13 = new Produto(13, "Hidratação Completa", 33, "Kit Hidratção Completa", "Estética", 28)
let produto14 = new Produto(14, "Kit Pintura de Unha", 33, "Esmalte, Acetona e Brilho", "Estética", 42)
let produto15 = new Produto(15, "Kit Unha", 33, "Unhas De Silicone", "Estética", 21)
let produto16 = new Produto(16, "Baton", 33, "Baton Várias Cores", "Estética", 12)
let produto17 = new Produto(17, "Kit Maquiagem", 33, "Maquiagem Completa", "Estética", 10)
let produto18 = new Produto(18, "Creme Celulita", 33, "Creme Anti Celulite", "Beleza", 14)
let produto19 = new Produto(19, "Esfoliante", 33, "Creme Esfoliante Facial", "Saúde", 8)
cliente.addProduto(produto12)
cliente.addServicos(servico)
cliente10.addProduto(produto)
cliente10.addProduto(produto1)
cliente10.addServicos(servico2)
cliente10.addServicos(servico)
cliente1.addServicos(servico2)
cliente30.addProduto(produto15)
    empresa.getClientes.push(cliente)
    empresa.getClientes.push(cliente1)
    empresa.getClientes.push(cliente2)
    empresa.getClientes.push(cliente3)
    empresa.getClientes.push(cliente4)
    empresa.getClientes.push(cliente5)
    empresa.getClientes.push(cliente6)
    empresa.getClientes.push(cliente7)
    empresa.getClientes.push(cliente8)
    empresa.getClientes.push(cliente9)
    empresa.getClientes.push(cliente10)
    empresa.getClientes.push(cliente11)
    empresa.getClientes.push(cliente12)
    empresa.getClientes.push(cliente13)
    empresa.getClientes.push(cliente14)
    empresa.getClientes.push(cliente15)
    empresa.getClientes.push(cliente16)
    empresa.getClientes.push(cliente17)
    empresa.getClientes.push(cliente18)
    empresa.getClientes.push(cliente19)
    empresa.getClientes.push(cliente20)
    empresa.getClientes.push(cliente21)
    empresa.getClientes.push(cliente22)
    empresa.getClientes.push(cliente23)
    empresa.getClientes.push(cliente24)
    empresa.getClientes.push(cliente25)
    empresa.getClientes.push(cliente26)
    empresa.getClientes.push(cliente27)
    empresa.getClientes.push(cliente28)
    empresa.getClientes.push(cliente29)
    empresa.getClientes.push(cliente30)
    empresa.getServicos.push(servico)
    empresa.getServicos.push(servico2)
    empresa.getProdutos.push(produto)
    empresa.getProdutos.push(produto1)
    empresa.getProdutos.push(produto2)
    empresa.getProdutos.push(produto3)
    empresa.getProdutos.push(produto4)
    empresa.getProdutos.push(produto5)
    empresa.getProdutos.push(produto6)
    empresa.getProdutos.push(produto7)
    empresa.getProdutos.push(produto8)
    empresa.getProdutos.push(produto9)
    empresa.getProdutos.push(produto10)
    empresa.getProdutos.push(produto11)
    empresa.getProdutos.push(produto12)
    empresa.getProdutos.push(produto13)
    empresa.getProdutos.push(produto14)
    empresa.getProdutos.push(produto15)
    empresa.getProdutos.push(produto16)
    empresa.getProdutos.push(produto17)
    empresa.getProdutos.push(produto18)
    empresa.getProdutos.push(produto19)

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - cadastrar produtos`);
    console.log(`4 - Listar todos os Produtos:`);
    console.log(`5 - cadastrar serviços:`);
    console.log(`6 - Listar todos os serviços:`);
    console.log(`7 - Serviços Contratados: `);
    console.log(`8 - Listar Serviços do Cliente: `);
    console.log(`9 - Excluir Cliente: `);
    console.log(`10 - Excluir Serviço: `); 
    console.log(`11 - Editar Dados do Cliente: `);
    console.log(`12 - Editar Serviços: `);  
    console.log(`13 - Editar Produtos: `);  
    console.log(`14 - Listar Genero: `);
    console.log(`15 - Listar os 10 Clientes Que Mais Consumiram: `)  
    console.log(`16 - Lista Geral de Maior Consumo: `) 
    console.log(`17 - Lista de Consumo Por Gênero: `)
    console.log(`18 - Listar os 10 Clientes Que Menos Consumiram: `)
    console.log(`19 - Listar os 5 Clientes que Mais Gastaram: `)
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)
    
    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let Produto = new CadastroProduto(empresa.getProdutos)
            Produto.cadastrar()
            break;
        case 4:
            let listagemProdutos = new listagemProduto(empresa.getProdutos)
            listagemProdutos.listar()
            break;
        case 5:
            let servico = new CadastroServico(empresa.getServicos)
            servico.cadastrar()
            break;
        case 6:
            let listagemServico = new ListagemServico(empresa.getServicos)
            listagemServico.listar()
            break;
        case 7:
            let consumoCliente = new ConsumoCliente(empresa)
            consumoCliente.cadastrar();
            break;
        case 8:
            let listarServicoCliente = new ListagemServicoCliente(empresa.getClientes)
            listarServicoCliente.listar();
            break;
        case 9:
            let deletaCliente = new DeletaCliente(empresa.getClientes)
            deletaCliente.deletar();
            break;
        case 10:
            let deletaServico = new DeletaServico(empresa.getServicos)
            deletaServico.deletar();
            break;
        case 11:
            let editarCliente = new EditarCliente(empresa.getClientes)
            editarCliente.editar();
            break;
        case 12: 
            let editarServico = new EditarServico(empresa.getServicos)
            editarServico.editar();
            break;
        case 13:
            let editaProduto = new EditaProduto(empresa.getProdutos)
            editaProduto.editar();
            break;
        case 14:
            let listarGenero = new listagemGenero(empresa.getClientes)
            listarGenero.listar();
            break;
        case 15:
            let listarConsumo = new ListarConsumo(empresa.getClientes)
            listarConsumo.listar10Mais();
            break;
        case 16:
            let listarMaiorConsumo = new ListarConsumo(empresa.getClientes)
            listarMaiorConsumo.listagemGeralConsumo();
            break;
        case 17:
            let listagemConsumoGenero = new ListarConsumo(empresa.getClientes)
            listagemConsumoGenero.listagemConsumoGenero();
            break;
        case 18:
            let listarMenorConsumo = new ListarConsumo(empresa.getClientes)
            listarMenorConsumo.listar10Menos();
            break;
        case 19:
            let listar5ClientesValor = new ListarConsumo(empresa.getClientes)
            listar5ClientesValor.cincoMaisValor();
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}
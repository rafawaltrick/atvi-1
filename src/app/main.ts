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



console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

let cliente = new Cliente("Rafael", "Nome Social", new CPF("1", new Date()), "M")
let cliente1 = new Cliente("Vanessa", "Nome Social", new CPF("2", new Date()), "F")
let servico = new Servico("Hidratação", 1, "Descrição do Serviço")
let servico2 = new Servico("Depilação", 2, "Descrição do Serviço")
let produto = new Produto(1, "Esmalte", 32, "Descrição do Produto", "Categoria", 13)
    empresa.getClientes.push(cliente)
    empresa.getClientes.push(cliente1)
    empresa.getServicos.push(servico)
    empresa.getServicos.push(servico2)
    empresa.getProdutos.push(produto)

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
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}
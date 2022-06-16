import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa"
import Servico from "../modelo/servico";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import ListagemClientes from "../negocio/listagemClientes";
import listagemProduto from "../negocio/listagemProduto";
import ListagemServico from "../negocio/listagemServico";
import ListagemServicoCliente from "../negocio/listarServicoCliente";
import ConsumoCliente from "../negocio/consumoCliente";
import DeletaCliente from "../negocio/deletaCliente";
import DeletaServico from "../negocio/deleteServico";
import EditarCliente from "../negocio/editarCliente";
import EditarServico from "../negocio/editarServico";
import EditaProduto from "../negocio/editaProduto";
import Produto from "../modelo/produto";



console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

let cliente = new Cliente("Rafael", "Nome Social", new CPF("1", new Date()))
let servico = new Servico("Hidratação", 1, "Descrição do Serviço")
let servico2 = new Servico("Depilação", 2, "Descrição do Serviço")
let produto = new Produto(1, "Esmalte", 32, "Descrição do Produto", "Categoria", 13)
    empresa.getClientes.push(cliente)
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
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}
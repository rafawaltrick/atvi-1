"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var produto_1 = __importDefault(require("../modelo/produto"));
var cadastro_1 = __importDefault(require("./cadastro"));
var entrada_1 = __importDefault(require("../io/entrada"));
var CadastroProduto = /** @class */ (function (_super) {
    __extends(CadastroProduto, _super);
    function CadastroProduto(produtos) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastroProduto.prototype.cadastrar = function () {
        console.log("\nIn\u00EDcio do cadastro do produto");
        var nome = this.entrada.receberTexto("Por favor informe o nome do produto: ");
        var preco = this.entrada.receberNumero("Por favor informe o valor do produto: ");
        var produtoid = this.entrada.receberNumero("Por favor informe o id do produto: ");
        var descricao = this.entrada.receberTexto("Por favor informe a descri\u00E7\u00E3o do produto: ");
        var categoria = this.entrada.receberTexto("Por favor informe a categoria do produto: ");
        var quantidade = this.entrada.receberNumero("Por favor informe a quantidade do produto: ");
        var produto1 = new produto_1.default(produtoid, nome, preco, descricao, categoria, quantidade);
        this.produtos.push(produto1);
        console.log("\nCadastro conclu\u00EDdo :)\n");
    };
    return CadastroProduto;
}(cadastro_1.default));
exports.default = CadastroProduto;

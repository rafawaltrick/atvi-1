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
var listagem_1 = __importDefault(require("./listagem"));
var listagemProduto = /** @class */ (function (_super) {
    __extends(listagemProduto, _super);
    function listagemProduto(Produtos) {
        var _this = _super.call(this) || this;
        _this.produto = Produtos;
        return _this;
    }
    listagemProduto.prototype.listar = function () {
        console.log("\nLista de todos os produtos:");
        this.produto.forEach(function (produto) {
            console.log("produtoID:" + produto.getProdutoID);
            console.log("Nome: " + produto.nome);
            console.log("Pre\u00E7o: " + produto.preco);
            console.log("Descri\u00E7\u00E3o: " + produto.descricao);
            console.log("Categoria: " + produto.categoria);
            console.log("Quantidade: " + produto.getQuantidade);
            console.log("--------------------------------------");
        });
        console.log("\n");
    };
    return listagemProduto;
}(listagem_1.default));
exports.default = listagemProduto;

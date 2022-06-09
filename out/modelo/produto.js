"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Produto = /** @class */ (function () {
    function Produto(ProdutoID, nome, preco, descricao, categoria, quantidade) {
        this.ProdutoID = ProdutoID;
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.categoria = categoria;
        this.quantidade = quantidade;
    }
    Object.defineProperty(Produto.prototype, "getProdutoID", {
        get: function () {
            return this.ProdutoID;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getNome", {
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getPreco", {
        get: function () {
            return this.preco;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getDescricao", {
        get: function () {
            return this.descricao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getCategoria", {
        get: function () {
            return this.categoria;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getQuantidade", {
        get: function () {
            return this.quantidade;
        },
        enumerable: false,
        configurable: true
    });
    return Produto;
}());
exports.default = Produto;

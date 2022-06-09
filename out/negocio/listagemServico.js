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
var ListagemServico = /** @class */ (function (_super) {
    __extends(ListagemServico, _super);
    function ListagemServico(servicos) {
        var _this = _super.call(this) || this;
        _this.servicos = servicos;
        return _this;
    }
    ListagemServico.prototype.listar = function () {
        console.log("Lista de servi\u00E7os:");
        console.log("\n");
        this.servicos.forEach(function (servico) {
            console.log("NomeServi\u00E7o:" + servico.nomeServiço);
            console.log("valorServi\u00E7o:" + servico.precoServiço);
            console.log("descricaoServi\u00E7o:" + servico.descricaoServiço);
            console.log("--------------------------------------------------------------------");
        });
        console.log("\n");
    };
    return ListagemServico;
}(listagem_1.default));
exports.default = ListagemServico;

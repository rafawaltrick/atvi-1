"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Servico = /** @class */ (function () {
    function Servico(nomeServiço, precoServiço, descriçãoServiço) {
        this.nomeServiço = nomeServiço;
        this.precoServiço = precoServiço;
        this.descricaoServiço = descriçãoServiço;
    }
    Object.defineProperty(Servico.prototype, "getNomeServi\u00E7o", {
        get: function () {
            return this.nomeServiço;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Servico.prototype, "getPrecoServi\u00E7o", {
        get: function () {
            return this.precoServiço;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Servico.prototype, "getDescricaoServi\u00E7o", {
        get: function () {
            return this.descricaoServiço;
        },
        enumerable: false,
        configurable: true
    });
    return Servico;
}());
exports.default = Servico;

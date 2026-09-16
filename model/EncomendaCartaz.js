import { Encomenda } from "./Encomenda.js";

export class EncomendaCartaz extends Encomenda {
    #tamanhoCartaz;

    constructor(descricao, quantidade, tamanhoCartaz) {
        super(descricao, quantidade)
        this.#tamanhoCartaz = tamanhoCartaz
    }

    get tamanhoCartaz() {
        return this.#tamanhoCartaz
    }
}
import { Encomenda } from "./Encomenda.js";

export class EncomendaCartaz extends Encomenda {
    #tamanhoCartaz;

    constructor(descricao, quantidade, tamanhoCartaz) {
        super(descricao, quantidade)
        this.#tamanhoCartaz = tamanhoCartaz
    }

    get getTamanhoCartaz() {
        return this.#tamanhoCartaz
    }

    produzir() {
        console.log(`
            Descrição: ${this.descricao}
            Quantidade: ${this.getQuantidade}
            Tamanho: ${this.getTamanhoCartaz}
            `)
    }
}
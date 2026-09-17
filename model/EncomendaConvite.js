import { Encomenda } from "./Encomenda.js";

export class EncomendaConvite extends Encomenda {
    #nomeEvento

    constructor(descricao, quantidade, nomeEvento) {
        super(descricao, quantidade) 
            this.#nomeEvento = nomeEvento
    }

    get nomeEvento() {
        return this.#nomeEvento
    }

produzir() {
        console.log(`Descrição: ${this.descricao} | Quantidade: ${this.getQuantidade} | Tamanho: ${this.#nomeEvento}`)
    }
}
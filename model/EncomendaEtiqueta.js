import { Encomenda } from "./Encomenda.js";

export class EncomendaEtiqueta extends Encomenda {
    #nomeProduto

    constructor(descricao, quantidade, nomeProduto) {
        super(descricao, quantidade)
        this.#nomeProduto = nomeProduto
    }

    get getNomeProduto() {
        return this.#nomeProduto
    }

    produzir() {
        console.log(`
            Descrição: ${this.descricao}
            Quantidade: ${this.getQuantidade}
            Produto: ${this.getNomeProduto}
            `)
    }
}
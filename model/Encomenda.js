export class Encomenda {
    descricao;
    #quantidade;

    constructor(descricao, quantidade) {
        this.descricao = descricao
        this.#quantidade = quantidade
    }

    get getQuantidade() {
        return this.#quantidade
    }

    produzir() {
        throw new Error('O método produzir() deve ser implementado pelas classes filhas.');
    }

    adicionarUnidades(unidades) {
        if(unidades > 0) {
            this.#quantidade += unidades
            return true

        } else {
            return false
        }
    }
}
import { Encomenda } from "./Encomenda.js";

export class EncomendaConvite extends Encomenda {

    constructor(descricao, quantidade, nomeEvento) {
        super(descricao, quantidade) 
            this.nomeEvento = nomeEvento
    }

    get nomeEvento() {
        return this.nomeEvento
    }
}
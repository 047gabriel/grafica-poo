import { EncomendaCartaz } from "./model/EncomendaCartaz.js";
import { EncomendaConvite } from "./model/EncomendaConvite.js";

const cartaz = new EncomendaCartaz('Petrsokigrgvesrvg', 0 , '100x300');

// console.log(cartaz.descricao ,cartaz.getQuantidade, cartaz.tamanhoCartaz)

const resultado = cartaz.adicionarUnidades(-1)

// console.log(resultado)

const convite = new EncomendaConvite('Festa', 10, 'Aniversário')

console.log(convite.descricao, convite.getQuantidade, convite.nomeEvento)

import { EncomendaCartaz } from "./model/EncomendaCartaz.js";

const cartaz = new EncomendaCartaz('Petrsokigrgvesrvg', 0 , '100x300');

console.log(cartaz.descricao ,cartaz.getQuantidade, cartaz.tamanhoCartaz)



const resultado = cartaz.adicionarUnidades(-1)
console.log(resultado)

if(!resultado) {
    
}

console.log(cartaz.getQuantidade)
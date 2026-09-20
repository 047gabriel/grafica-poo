// import { Encomenda } from "./model/Encomenda.js";

/*Importe as três classes filhas no arquivo app.js e execute os seguintes testes:
1. Crie pelo menos um objeto de cada classe filha com new.
2. Chame adicionarUnidades() com um valor válido em um dos objetos e mostre o retorno e a nova quantidade.
3. Chame adicionarUnidades() com 0 no mesmo objeto e mostre que a quantidade permaneceu igual.
4. Coloque os três objetos em um único array chamado encomendas.
5. Utilize um for tradicional para percorrer o array e executar produzir() em cada objeto.*/


import { EncomendaCartaz } from "./model/EncomendaCartaz.js";
import { EncomendaConvite } from "./model/EncomendaConvite.js";
import { EncomendaEtiqueta} from "./model/EncomendaEtiqueta.js";

// 1 -
console.log(`
    QUESTÃO 1/5
    `)

const cartazSabao = new EncomendaCartaz('Vende-se sabão caseiro', 100, '50x50');
const conviteCasamento = new EncomendaConvite('Casamento', 300, '10x20');
const etiquetaProduto = new EncomendaEtiqueta('Promoção Inverno', 50, 'Moletom');

console.log(cartazSabao)

cartazSabao.produzir()
conviteCasamento.produzir()
etiquetaProduto.produzir()

console.log('===================================')

// 2 -
console.log(`
    QUESTÃO 2/5
    `)

cartazSabao.adicionarUnidades(55)
console.log(cartazSabao.getQuantidade)
console.log(cartazSabao.adicionarUnidades(10))
console.log(cartazSabao.adicionarUnidades(-1))

console.log('===================================')

// 3 -
console.log(`
    QUESTÃO 3/5
    `)

conviteCasamento.adicionarUnidades(0)
console.log(conviteCasamento.getQuantidade)

console.log('===================================')

// 4 -
console.log(`
    QUESTÃO 4/5
    `)

let encomendas = [cartazSabao, conviteCasamento, etiquetaProduto];

console.log('===================================')

console.log(`
    QUESTÃO 5/5
    `)

// for(let i = 0; i < encomendas.length; i++) {
//     encomendas[i].produzir()
// }

for(const encomenda of encomendas) {
    encomenda.produzir()
}

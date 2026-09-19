// import { Encomenda } from "./model/Encomenda.js";
import { EncomendaCartaz } from "./model/EncomendaCartaz.js";
import { EncomendaConvite } from "./model/EncomendaConvite.js";
import { EncomendaEtiqueta} from "./model/EncomendaEtiqueta.js";

const cartazSabao = new EncomendaCartaz('Vende-se sabão caseiro', 100, '50x50');
const conviteCasamento = new EncomendaConvite('Casamento', 300, '10x20');
const etiquetaProduto = new EncomendaEtiqueta('Moletom', 50, 'P ao GG');

console.log(cartazSabao)
cartazSabao.produzir()
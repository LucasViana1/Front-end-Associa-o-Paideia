//classe de listagem dos inscritos
import { ConfigClass } from '../classes/ConfigClass'

let caminho = `${ConfigClass.getUrlApi().toString()}/inscritos/`;

export default class InscritosService{
    constructor(){}
    //O FETCH É UM METODO UTILIZADO PARA CONSUMIR RECURSOS DE APIs EXTERNAS, NESSE CASO O BACKEND DA APLICAÇÃO!
    static getInscritos(){
        return fetch(caminho).then(response => {
            //converte e retorna a resposta em json 
            return response.json();
        })
    }

}
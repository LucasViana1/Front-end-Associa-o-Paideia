<template>
    <b-container>
        <h1>GABARITO DO(A) {{listagem.dados[0].nome}}</h1>
        <!--nº modelo, nº pergunta, materia, alternativa certa, qual selecionou, contabilidade de acertos-->

        <div class="h6"><b>MODELO: <i style="color: red">{{listagem.dados[0].modelo}}</i></b></div> <br>
        <table class="text-center table table-responsive-sm table-sm table-bordered table-striped">
            <thead>
                <tr>
                    <th class="cabecalho">Nº PERGUNTA</th>
                    <th class="cabecalho">MATÉRIA</th>
                    <th class="cabecalho">CORRETA</th>
                    <th class="cabecalho">SELECIONOU</th>
                    <th class="cabecalho">ACERTOU?</th>
                <th class="cabecalho">HORA ENVIO</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(item,index) in listagem.dados" :key="index">
                    <td class="align-middle"><b>{{item.pergunta}}</b></td>
                    <td class="align-middle">{{item.materia}}</td>
                    <td class="align-middle">{{item.correta}}</td>
                    <td class="align-middle">{{item.selecionado}}</td>
                    <td>
                        <center>
                        <div v-if="item.acertou == 's'">
                            <b-img width="38" height="38" :src="acertouIcon"></b-img>
                        </div>
                        <div v-else>
                            <b-img width="38" height="38" :src="errouIcon"></b-img>
                        </div>
                        </center>
                    </td>
                    <td class="align-middle">{{data(item.createdAt)}}</td>
                </tr>
            </tbody>
        </table>
        <br>
        <h5 style="color: #199609"><u>Resumo:</u></h5>
        <br>
        <table class="table table-sm col-sm-6 text-center">
            <tr>
                <th>ÁREA DO CONHECIMENTO</th>
                <th>QUANTIDADE DE ACERTOS</th>
            </tr>
            <tr>
                <td>Matemática</td>
                <td>{{this.mat}} de 4</td>       
            </tr>
            <tr>
                <td>Química</td>
                <td>{{this.qui}} de 4</td>       
            </tr>
            <tr>
                <td>Física</td>
                <td>{{this.fis}} de 4</td>       
            </tr>
            <tr>
                <td>Biologia</td>
                <td>{{this.bio}} de 4</td>       
            </tr>
            <tr>
                <td>Geografia</td>
                <td>{{this.geo}} de 4</td>       
            </tr>
            <tr>
                <td>História</td>
                <td>{{this.his}} de 4</td>       
            </tr>
            <tr>
                <td>Gramática</td>
                <td>{{this.gra}} de 2</td>       
            </tr>
            <tr>
                <td>Literatura</td>
                <td>{{this.lit}} de 2</td>       
            </tr>
            <tr>
                <td>Inglês</td>
                <td>{{this.ing}} de 2</td>       
            </tr>
            <tr style="background-color: #f09cdb">
                <td><b>TOTAL</b></td>
                <td><b>{{this.total}} de 30</b></td>       
            </tr>
        </table>

        <!--{{listagem}}-->
    </b-container>
</template>

<script>
import axios from 'axios'
import config from '../../../config'

export default {
    data () {
        return {
            errouIcon: require('@/assets/simulado/errado.png'),
            acertouIcon: require('@/assets/simulado/certo.png'),
            listagem: {},
            lista: {},
            idCandidato: window.localStorage.getItem('idDetalhes'),
            mat: 0,
            qui: 0,
            fis: 0,
            bio: 0,
            geo: 0,
            his: 0,
            gra: 0,
            lit: 0,
            ing: 0,
            total: 0
        }
    },
    mounted(){
        //info completa
        let linkGabaritoCompleto = config.server()+'gabaritocompleto/'+this.idCandidato
        axios.get(linkGabaritoCompleto).then((response) =>{
            
            this.listagem = response.data; 
        })
        .catch((error) => {
            console.log(error);
        });

        //contar acertos
        let linkGabaritoSimples = config.server()+'gabaritosimples/'+this.idCandidato
        axios.get(linkGabaritoSimples).then((response) =>{
            
            this.lista = response.data;  
            this.lista.dados.forEach(item => {
                console.log("retorno: "+item.materia)
                //if(item.materia === 'Gramática') console.log("reconheceu !!")
                //copular contadores
                switch(item.materia){
                    case 'Matemática': 
                        if(item.acertou == 's') this.mat = this.mat + 1
                        break
                    case 'Química': 
                        if(item.acertou == 's') this.qui = this.qui + 1
                        break
                    case 'Física': 
                        if(item.acertou == 's') this.fis = this.fis + 1
                        break
                    case 'Biologia': 
                        if(item.acertou == 's') this.bio = this.bio + 1
                        break
                    case 'Geografia': 
                        if(item.acertou == 's') this.geo = this.geo + 1
                        break
                    case 'História': 
                        if(item.acertou == 's') this.his = this.his + 1
                        break
                    case 'Gramática': 
                        if(item.acertou == 's') this.gra = this.gra + 1
                        break
                    case 'Literatura': 
                        if(item.acertou == 's') this.lit = this.lit + 1
                        break
                    case 'Inglês': 
                        if(item.acertou == 's') this.ing++
                        break
                    default:
                        console.log("diciplina não identificada!")
                }
            }); 

            this.total = this.mat+this.qui+this.fis+this.bio+this.geo+this.his+this.gra+this.lit+this.ing

            console.log("respostas simulado: "+this.lista);

        })
    }, 
    methods:{
        data(d){
            let removeDiaMilesimos = d.substring(11, 19)
            let hora = removeDiaMilesimos.substring(0,2)
            hora = parseInt(hora)
            //hora = hora - 3
            let semHora = removeDiaMilesimos.substring(2,8)
            let resp = hora + semHora

            return resp
        }
    }
}
</script>
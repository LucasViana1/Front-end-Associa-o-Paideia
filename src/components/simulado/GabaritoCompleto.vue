<template>
    <b-container>
        <h1>GABARITO COMPLETO</h1>
<!--{{this.lista.dados}}-->           
        <b-card no-body class="mt-1">
            <b-tabs card >
                <!--<b-tab no-body title="Picture 2">
                    <center><b-img :src="listagem.dados[0].arquivo" fluid></b-img></center>
                </b-tab>-->
                <div v-for="(item,index) in gabaritos" :key="index">
                    <b-tab no-body :title="item.pergunta+' - '+item.materia" v-if="item.modelo == listagem.dados[0].modelo">
                        <div>
                            <div class="p-2"><u>{{item.pergunta}} - {{item.materia}}</u></div>
                            <div class="p-2" v-html="item.enunciado"></div>
                            <b-img :src="item.img" fluid></b-img>
                            <hr>
                            
                            <div class="p-2" v-html="'<b>a) </b>'+item.resp_a"></div>
                            <hr>
                            <div class="p-2" v-html="'<b>b) </b>'+item.resp_b"></div>
                            <hr>
                            <div class="p-2" v-html="'<b>c) </b>'+item.resp_c"></div>
                            <hr>
                            <div class="p-2" v-html="'<b>d) </b>'+item.resp_d"></div>
                            <hr>
                            <div class="p-2" v-html="'<b>e) </b>'+item.resp_e"></div>
                            <hr>
                            <div class="p-2">
                                <center>
                                    <b>
                                        <b-col cols="5"><b-alert style="font-size: 110%" :show="true" variant="success" class="mt-1 col-10">Resposta correta: {{item.correta}}</b-alert></b-col>
                                    </b>
                                </center>
                            </div>
                        </div>
                    </b-tab>
                </div>
            </b-tabs>
        </b-card>
        <br>

        <h3><u><center>SEU PROGRESSO:</center></u></h3>
        <br>

        <table class="text-center table table-responsive-sm table-sm table-bordered table-striped m-auto col-sm-6">
            <thead>
                <tr>
                    <th class="cabecalho">Nº PERGUNTA</th>
                    <th class="cabecalho">MATÉRIA</th>
                    <!--<th class="cabecalho">CORRETA</th>--><!--REMOVER-->
                    <th class="cabecalho">SELECIONOU</th>
                    <th class="cabecalho">ACERTOU?</th>
                    <!--<th class="cabecalho">HORA ENVIO</th>--><!--REMOVER-->
                </tr>
            </thead>

            <tbody>
                <tr v-for="(item,index) in listagem.dados" :key="index">
                    <td class="align-middle"><b>{{item.pergunta}}</b></td>
                    <td class="align-middle">{{item.materia}}</td>
                    <!--<td class="align-middle">{{item.correta}}</td>-->
                    <td class="align-middle" style="font-size:115%;"><b>{{item.selecionado}}</b></td>
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
                    <!--<td class="align-middle">{{data(item.createdAt)}}</td>-->
                </tr>
            </tbody>
        </table>

    </b-container>
    
</template>

<script>
import axios from 'axios'
import config from '../../../config'

export default {
    data(){
        return{
            errouIcon: require('@/assets/simulado/errado.png'),
            acertouIcon: require('@/assets/simulado/certo.png'),
            listagem: {},
            lista: {},
            restAluno: {},
            gabaritos: {},
            idUser: window.localStorage.getItem('id'),
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
        let linkGabaritoCompleto = config.server()+'gabaritocompleto/'+this.idUser
        axios.get(linkGabaritoCompleto).then((response) =>{
            
            this.listagem = response.data; 
        })
        .catch((error) => {
            console.log(error);
        });

        //contar acertos
        let linkGabaritoSimples = config.server()+'gabaritosimples/'+this.idUser
        axios.get(linkGabaritoSimples).then((response) =>{
            this.lista = response.data;  
            console.log("TESTE " + this.lista)
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

        axios.get(config.server()+'gabaritos').then((response) =>{
            
            this.gabaritos = response.data; 
            //console.log(this.gabaritos)
        })
        .catch((error) => {
            console.log(error);
        });
    }, 
}
</script>

<style>
thead{
    font-size: 85%;
}
</style>
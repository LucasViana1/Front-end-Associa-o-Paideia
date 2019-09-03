<template>
    <b-container>
        <h1>Simulado</h1>

        <b-col v-if="!bloco">
            <p>Explicação sobre funcionamento do simulado</p>
            <b-button variant="success" @click.prevent="liberaPerguntas()">Começar</b-button>
        </b-col>
        {{listagem.dados}}
        <b-col v-if="bloco">
            
            <br>
            <table class="table table-bordered table-hover bordas container-fluid" style="">
                <thead class="">
                    <tr class="row mx-1">
                        <th class="col-2 bordas text-center">Questão {{listagem.dados[0].pergunta}}</th>
                        <td class="col-10 bordas">
                            <b-card no-body class="mt-3">
                                <b-tabs card >
                                    <b-tab no-body :title="listagem.dados[0].materia">
                                    <!-- <center><b-img :src="listagem.dados[0].arquivo" fluid></b-img></center>-->
                                    <div>
                                        {{listagem.dados[0].enunciado}}
                                        ENUNCIADO COMPLETO + IMG REFERENCIADA (SE EXISTIR)
                                        <b-img :src="listagem.dados[0].img" fluid></b-img>
                                    </div>
                                    </b-tab>
                                </b-tabs>
                            </b-card>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <!--pergunta A-->
                    <tr class="row mx-1">
                        <td class="col-2 align-middle text-center">
                            <b-form-radio :disabled="!botConfirmaAvanca" v-model="dados.correta" value="a"></b-form-radio>
                        </td>
                        <td class="col-10">
                            <b-form-textarea plaintext size="sm" :value="'a) '+listagem.dados[0].resp_a"></b-form-textarea>
                        </td>
                    </tr>
                    <!--pergunta B-->
                    <tr class="row mx-1">
                        <td class="col-2 align-middle text-center">
                            <b-form-radio :disabled="!botConfirmaAvanca" v-model="dados.correta" value="b"></b-form-radio>
                        </td>
                        <td class="col-10">
                            <b-form-textarea plaintext size="sm" :value="'b) '+listagem.dados[0].resp_b"></b-form-textarea>
                        </td>
                    </tr>
                    <!--pergunta C-->
                    <tr class="row mx-1">
                        <td class="col-2 align-middle text-center">
                            <b-form-radio :disabled="!botConfirmaAvanca" v-model="dados.correta" value="c"></b-form-radio>
                        </td>
                        <td class="col-10">
                            <b-form-textarea plaintext size="sm" :value="'c) '+listagem.dados[0].resp_c"></b-form-textarea>
                        </td>
                    </tr>
                    <!--pergunta D-->
                    <tr class="row mx-1">
                        <td class="col-2 align-middle text-center">
                            <b-form-radio :disabled="!botConfirmaAvanca" v-model="dados.correta" value="d"></b-form-radio>
                        </td>
                        <td class="col-10">
                            <b-form-textarea plaintext size="sm" :value="'d) '+listagem.dados[0].resp_d"></b-form-textarea>
                        </td>
                    </tr>
                    <!--pergunta E-->
                    <tr class="row mx-1">
                        <td class="col-2 align-middle text-center">
                            <b-form-radio :disabled="!botConfirmaAvanca" v-model="dados.correta" value="e"></b-form-radio>
                        </td>
                        <td class="col-10">
                            <b-form-textarea plaintext size="sm" :value="'e) '+listagem.dados[0].resp_e"></b-form-textarea>
                        </td>
                    </tr>
                </tbody>         
            </table>

            
            
            <b-alert :show="certo" variant="success" class="mt-1">Você Acertou!</b-alert>
            <b-alert :show="errado" variant="danger" class="mt-1">Você Errou!</b-alert>

            <b-col v-if="botConfirmaAvanca" class="text-center">
                <b-button class="mt-3" variant="primary" disabled v-if="this.dados.correta == null">Confirmar</b-button>
                <b-button class="mt-3" variant="primary" @click.prevent="confirmaQuestao()" v-else>Confirmar</b-button>
            </b-col>

            <b-col v-if="!botConfirmaAvanca" class="text-center">
                <b-button class="mt-3" variant="primary" disabled v-if="this.dados.correta == null">Próxima Pergunta</b-button>
                <b-button class="mt-3" variant="primary" @click.prevent="proximaPergunta()" v-else>Próxima Pergunta</b-button>
            </b-col>
                    
        </b-col>
    </b-container>
</template>

<script>
import axios from 'axios'
import config from '../../../config'

export default {
    data(){
        return{
            bloco: false,//VOLTAR PARA TRUE P/ PRODUCAO
            dados: {},
            listagem: {},
            idUser: window.localStorage.getItem('id'),
            certo: false,
            errado: false,
            botConfirmaAvanca: true
            //DUAS VARIAVEIS, UMA PARA ALERTA CASO ACERTE E OUTRO CASO ERRE

            /*inicialTempo: '',
            inicialHora: '',
            inicialMinuto: '',
            inicialSegundo: '',
            cronometro: ''*/
        }
    },
    methods:{
        confirmaQuestao(){
            //inserir a resposta do aluno no banco, e como retorno da requisição informar se ele acertou ou errou 
            axios.post(config.server()+'simulado', {
                idUser: this.idUser,
                modelo: this.listagem.dados[0].modelo,
                pergunta: this.listagem.dados[0].pergunta,
                selecionado: this.dados.correta,               

            })
            .then((response) =>{
                console.log(""+response.data);
                //INDICAR AQUI QUAL ALERTA EXIBIR
                if(response.data == 's'){
                    this.certo = true
                }
                else{
                    this.errado = true
                }
            })
            .catch((error) => {
                console.log(error);
            });
            this.botConfirmaAvanca = false
        },
        liberaPerguntas(){
            //alert('ok')
            this.bloco = true;
            let linkSimulaServerQ1 = config.server()+'simuladoq1/'+'1'
            axios.get(linkSimulaServerQ1).then((response) =>{            
                console.log(response.data);
                this.listagem = response.data;    
                //this.listagem = response.data;         
            })
            .catch((error) => {
                console.log(error);
            });
        },
        proximaPergunta(){
            window.location.reload()
        },
        //modelo:
        tempo(){
            const data = new Date()
            let horas = data.getHours()
            let minutos = data.getMinutes()
            let segundos = data.getSeconds()
            this.inicialTempo = horas+":"+minutos+":"+segundos
            this.inicialHora = horas
            this.inicialMinuto = minutos
            this.inicialSegundo = segundos
           // return horas+":"+minutos+":"+segundos
           return this.inicialTempo
        },
    },
    mounted() {
        //TRECHO COMENTADO PARA TESTE
        let linkSimulaServer = config.server()+'simulado/'+this.idUser
        let linkGabariServer = config.server()+'gabarito/'//talvez parametro é nº modelo e nº pergunta
        //let linkSimulaServer = config.server()+'simulado/1'
        axios.get(linkSimulaServer).then((response) =>{
            
            console.log(response.data);
            this.listagem = response.data;    
            //this.listagem = response.data;         
        })
        .catch((error) => {
            console.log(error);
        });
        if(this.listagem == ''){
            this.bloco = false
        }
        else{
            this.bloco = true
        }

        window.scrollTo(0, 0);
    }
}
</script>

<style>
.bordas{
    border-color: black; 
    border-width: 2px; 
    border-style:groove;
}
</style>
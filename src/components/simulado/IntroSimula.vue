<template>
    <b-container>
        <h1>Simulado</h1>

        <b-col v-if="bloco">
            <p>Explicação sobre funcionamento do simulado</p>
            <b-button variant="success" @click.prevent="liberaPerguntas()">Começar</b-button>
        </b-col>
        
        <b-col v-if="!bloco">
            
                    <table class="table table-bordered table-hover bordas container-fluid" style="">
                        <thead class="">
                            <tr class="row mx-1">
                                <th class="col-2 bordas text-center">Questão X</th>
                                <td class="col-10 bordas">Enunciado</td>
                            </tr>
                        </thead>
                        <tbody>
                            <!--pergunta A-->
                            <tr class="row mx-1">
                                <td class="col-2 align-middle text-center">
                                    <b-form-radio v-model="dados.correta" value="a"></b-form-radio>
                                </td>
                                <td class="col-10">
                                    <b-form-textarea plaintext size="sm" value="a) Resposta A"></b-form-textarea>
                                </td>
                            </tr>
                            <!--pergunta B-->
                            <tr class="row mx-1">
                                <td class="col-2 align-middle text-center">
                                    <b-form-radio v-model="dados.correta" value="b"></b-form-radio>
                                </td>
                                <td class="col-10">
                                    <b-form-textarea plaintext size="sm" value="b) Resposta B"></b-form-textarea>
                                </td>
                            </tr>
                            <!--pergunta C-->
                            <tr class="row mx-1">
                                <td class="col-2 align-middle text-center">
                                    <b-form-radio v-model="dados.correta" value="c"></b-form-radio>
                                </td>
                                <td class="col-10">
                                    <b-form-textarea plaintext size="sm" value="c) Resposta C"></b-form-textarea>
                                </td>
                            </tr>
                            <!--pergunta D-->
                            <tr class="row mx-1">
                                <td class="col-2 align-middle text-center">
                                    <b-form-radio v-model="dados.correta" value="d"></b-form-radio>
                                </td>
                                <td class="col-10">
                                    <b-form-textarea plaintext size="sm" value="d) Resposta D"></b-form-textarea>
                                </td>
                            </tr>
                            <!--pergunta E-->
                            <tr class="row mx-1">
                                <td class="col-2 align-middle text-center">
                                    <b-form-radio v-model="dados.correta" value="e"></b-form-radio>
                                </td>
                                <td class="col-10">
                                    <b-form-textarea plaintext size="sm" value="e) Resposta E"></b-form-textarea>
                                </td>
                            </tr>
                        </tbody>
                                
                    </table>
                    
                    <div class="text-center">
                        <b-button class="mt-3" variant="success" disabled v-if="this.dados.correta == null">Próxima Pergunta</b-button>
                        <b-button class="mt-3" variant="success" @click.prevent="proximaPergunta()" v-else>Próxima Pergunta</b-button>
                    </div>
                    
        </b-col>
    </b-container>
</template>

<script>
export default {
    data(){
        return{
            bloco: false,//VOLTAR PARA TRUE P/ PRODUCAO
            dados: {},
            /*inicialTempo: '',
            inicialHora: '',
            inicialMinuto: '',
            inicialSegundo: '',
            cronometro: ''*/
         
        }
    },
    methods:{
        liberaPerguntas(){
            this.bloco = false;
        },
        proximaPergunta(){

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
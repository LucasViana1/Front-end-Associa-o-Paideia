<template>
    <!--oncontextmenu: click botao direita sobre elemento-->
    <b-container oncontextmenu="return false" ondragstart="return false" onselectstart="return false"><!--impede copia dos textos-->
        <h1>Simulado</h1>

        <!--normas e procedimentos simulado-->
        <b-col v-if="!bloco">
            <b><center>NORMAS E PROCEDIMENTOS:</center></b>

            <b-col id="termo">
                <ol>
                    <li>
                        <div style="font-weight: initial;">
                            O simulado é composto por questões objetivas (Testes) com alternativa (A,B,C,D,E),  das quais somente uma atende às condições do enunciado.
                        </div>
                    </li>
                    <li>
                        <div style="font-weight: initial;">
                            Responda a todas as questões. Para o cômputo da nota serão considerados apenas os acertos.
                        </div>
                    </li>
                    <li>
                        <div style="font-weight: initial;">
                            As questões objetivas (Testes) versarão sobre o conteúdo abordado em sala de aula. As áreas do conhecimento relacionadas são: Matemática, Química, Física, Biologia, Geografia, História, Gramática (Português), Literatura, Inglês.
                        </div>
                    </li>
                    <li>
                        <div style="font-weight: initial;">
                            O simulado é parte de um Processo de Autoavaliação. É vedada a utilização de livros, impressos, apontamentos, aparelhos eletrônicos para consulta online ou quaisquer outros meios que possam ser usados como fonte de pesquisa para a realização do simulado.
                        </div>
                    </li>
                    <li>
                        <div style="font-weight: initial;">
                            O simulado terá a duração de 2 (duas) horas. ATENÇÃO: A realização do simulado não admite interrupção. Uma vez iniciado o simulado é acionado, automaticamente, o cronometro que contabiliza o tempo de execução já pré-estabelecido. Ao final do tempo programado para a resolução do simulado ele será bloqueado e não haverá mais possibilidade de respondê-lo. 
                        </div>
                    </li>
                    <li>
                        <div style="font-weight: initial;">
                            O simulado online não admite que o usuário faça uso da função “retroceder” (voltar a uma questão anterior). Caso o usuário tente fazer uso desta função, voltando a uma questão anterior, será bloqueada a tela do simulado.
                        </div>
                    </li>
                    <li>
                        <div style="font-weight: initial;">
                            As questões aparecerão em uma sequência pré-estabelecidas e serão liberadas uma a uma conforme a sua resolução.
                        </div>
                    </li>
                    <li>
                        <div style="font-weight: initial;">
                            Recomendamos que na resolução dos exercícios deste primeiro simulado sejam gastos em média 5 minutos por questão. 
                        </div>
                    </li>
                    <li>
                        <div style="font-weight: initial;">
                            Ao final do simulado será exibido um relatório simplificado do desempenho do usuário informando a quantidade de acertos por disciplina. Neste relatório serão consideradas apenas as questões efetivamente respondidas
                        </div>
                    </li>
                    <li>
                        <div style="font-weight: initial;">
                            O gabarito estará disponível no site da Associação Paideia no dia 10 de setembro de 2019.
                        </div>
                    </li>
                </ol>     
            </b-col>
            <p>Caso ainda tenha alguma dúvida referente ao simulado, entre em contato conosco: <em>contato@associacaopaideia.org.br</em></p>

            <!--<b-button variant="success" @click.prevent="liberaPerguntas()">Começar</b-button>-->
        </b-col>
        <!--{{listagem.dados}}-->
        <b-col v-if="bloco">
            <!--info tempo-->
            <div>Você iniciou o simulado as {{this.iniTempo}}</div>
            <div>O simulado deve ser concluído antes das <b>{{this.fimTempo}}</b></div> 
            <br>
            <table class="table table-bordered table-hover bordas container-fluid" style="">
                <thead class="">
                    <tr class="row mx-1">
                        <th class="col-2 bordas text-center">Questão {{listagem.dados[0].pergunta}}</th>
                        <td class="col-10 bordas">
                            <b-card no-body class="mt-3">
                                <b-tabs card >
                                    <b-tab no-body :title="listagem.dados[0].materia">
                                    <!--<center><b-img :src="listagem.dados[0].arquivo" fluid></b-img></center>-->
                                    <div>
                                        {{listagem.dados[0].enunciado}}
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
                        <td class="col-2 align-middle text-center m-auto tamanho_quadro">
                            <b-row>
                                <div class="float-left col-6">a)</div>
                                <b-form-radio class="col-2" :disabled="!botConfirmaAvanca" v-model="dados.correta" value="a"></b-form-radio>
                            </b-row>              
                        </td>
                        <td class="col-10">
                            <!--<b-form-textarea plaintext size="sm" :value="'a) '+listagem.dados[0].resp_a"></b-form-textarea>-->
                            <b-card size="sm">
                                {{listagem.dados[0].resp_a}}
                            </b-card>
                        </td>
                    </tr>
                    <!--pergunta B-->
                    <tr class="row mx-1">
                        <td class="col-2 align-middle text-center m-auto tamanho_quadro">
                            <b-row>
                                <div class="float-left col-6">b)</div>
                                <b-form-radio class="col-2" :disabled="!botConfirmaAvanca" v-model="dados.correta" value="b"></b-form-radio>
                            </b-row>
                        </td>
                        <td class="col-10">
                            <!--<b-form-textarea plaintext size="sm" :value="'b) '+listagem.dados[0].resp_b"></b-form-textarea>-->
                            <b-card size="sm">
                                {{listagem.dados[0].resp_b}}
                            </b-card>
                        </td>
                    </tr>
                    <!--pergunta C-->
                    <tr class="row mx-1">
                        <td class="col-2 align-middle text-center m-auto tamanho_quadro">
                            <b-row>
                                <div class="float-left col-6">c)</div>
                                <b-form-radio class="col-2" :disabled="!botConfirmaAvanca" v-model="dados.correta" value="c"></b-form-radio>
                            </b-row>
                        </td>
                        <td class="col-10">
                           <!-- <b-form-textarea plaintext size="sm" :value="'c) '+listagem.dados[0].resp_c"></b-form-textarea>-->
                           <b-card size="sm">
                                {{listagem.dados[0].resp_c}}
                            </b-card>
                        </td>
                    </tr>
                    <!--pergunta D-->
                    <tr class="row mx-1">
                        <td class="col-2 align-middle text-center m-auto tamanho_quadro">
                            <b-row>
                                <div class="float-left col-6">d)</div>
                                <b-form-radio class="col-2" :disabled="!botConfirmaAvanca" v-model="dados.correta" value="d"></b-form-radio>
                            </b-row>                            
                        </td>
                        <td class="col-10">
                            <!--<b-form-textarea plaintext size="sm" :value="'d) '+listagem.dados[0].resp_d"></b-form-textarea>-->
                            <b-card size="sm">
                                {{listagem.dados[0].resp_d}}
                            </b-card>
                        </td>
                    </tr>
                    <!--pergunta E-->
                    <tr class="row mx-1">
                        <td class="col-2 align-middle text-center m-auto tamanho_quadro">
                            <b-row>
                                <div class="float-left col-6">e)</div>
                                <b-form-radio class="col-2" :disabled="!botConfirmaAvanca" v-model="dados.correta" value="e"></b-form-radio>
                            </b-row>
                        </td>
                        <td class="col-10">
                            <!--<b-form-textarea plaintext size="sm" :value="'e) '+listagem.dados[0].resp_e"></b-form-textarea>-->
                            <b-card size="sm">
                                {{listagem.dados[0].resp_e}}
                            </b-card>
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

        <!--<b-col v-for="index in 10" :key="index">
            <b-form-textarea plaintext v-show="true" :value="tempo()"></b-form-textarea>
        </b-col>-->
<!--{{this.numModelo[0].fim}}-->
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
            tempo: {},
            idUser: window.localStorage.getItem('id'),
            certo: false,
            errado: false,
            botConfirmaAvanca: true,
            iniTempo: '',
            fimTempo: '',
            numModelo: {},

            //TALVEZ REMOVER ABAIXO:
            inicialTempo: '',
            inicialHora: '',
            inicialMinuto: '',
            inicialSegundo: '',
            cronometro: '',
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
            
            //define sequencialmente o nº do modelo da prova
            axios.get(config.server()+'modelo')
            .then((response) =>{
                this.numModelo = response.data
                //window.localStorage.setItem('modelo',this.numModelo[0].fim)      
            })
            .catch((error) => {
                console.log(error);
            });

            //let linkSimulaServerQ1 = config.server()+'simuladoq1/'+'1'//DEIXAR DINAMICO O NUMERO DO MODELO
            let linkSimulaServerQ1 = config.server()+'simuladoq1/'+this.numModelo[0].fim
            //let linkSimulaServerQ1 = config.server()+'simuladoq1/'+window.localStorage.getItem('modelo')
            //window.localStorage.removeItem('modelo')
            //let linkSimulaTempo = config.server()+'alunosimulado/'+this.idUser
            axios.get(linkSimulaServerQ1).then((response) =>{            
                console.log(response.data);
                this.listagem = response.data;    
                //this.listagem = response.data;         
            })
            .catch((error) => {
                console.log(error);
            });
            //registrar hora de inicio e calcular data limite
            let data = new Date()
            this.iniTempo = data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds()
            this.fimTempo = (data.getHours()+2) + ':' + data.getMinutes() + ':' + data.getSeconds()
            axios.post(config.server()+'alunosimulado', {
                idUser: this.idUser,
                horaInicio: data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds(),
                horaFimMax: (data.getHours()+2) + ':' + data.getMinutes() + ':' + data.getSeconds(),
                //ALTERAR PARAMETROS ACIMA              

            })
            .then((response) =>{
                console.log(""+response.data); 

            })
            .catch((error) => {
                console.log(error);
            });

        },
        proximaPergunta(){
            window.location.reload()
        },
        //modelos:
        tempo(){
            //setInterval("conta();",1000);
            setInterval("alert('asd')",5000);    
        },
        conta(){
            let data = new Date()
            let horas = data.getHours()
            let minutos = data.getMinutes()
            let segundos = data.getSeconds()
            this.inicialTempo = horas+":"+minutos+":"+segundos
            this.inicialHora = horas
            this.inicialMinuto = minutos
            this.inicialSegundo = segundos
           // return horas+":"+minutos+":"+segundos
           return this.inicialTempo 
        }
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
        let linkSimulaTempo = config.server()+'alunosimulado/'+this.idUser
        axios.get(linkSimulaTempo).then((response) =>{            
            console.log("tempo retornado do banco: "+response.data);
            this.tempo = response.data;
            this.iniTempo = this.tempo.dados[0].horaInicio
            this.fimTempo = this.tempo.dados[0].horaFimMax
            //alert("ok")    
            //this.listagem = response.data;         
        }).catch((error) => {
            console.log(error);
        });

        window.scrollTo(0, 0);
    }
}
</script>

<style lang="scss">
@import '../../style.scss';


#termo{
  background-color: $cinzaMedio;
  border-radius: 10px;
  margin-top: 21px;
}
ol li{
  font-weight: bold;
  margin-top: 14px;
}
ol{
  padding-top: 7px;
  padding-bottom: 14px;
}

.bordas{
    border-color: black; 
    border-width: 2px; 
    border-style:groove;
}
/*AJUSTAR CLASSE ABAIXO PARA MOBILE*/
.tamanho_quadro{
    padding: 3.5% !important;
}
</style>
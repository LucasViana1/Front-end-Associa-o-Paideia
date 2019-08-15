<template>
    <b-container>
        <b-form v-on:submit.prevent="enviarDadosPessoais">
            <!--dados pessoais-->
            <b-col sm="12">
                <center>
                    <h2>DADOS PESSOAIS</h2>
                </center>                  
            </b-col>
            <b-row class="pessoalForm">

                <b-col sm="12">
                    <center>
                        <b-alert show variant="danger"><b>ATENÇÃO! </b>O CARTÃO CIDADÃO DEVE ESTAR EM DIA, DO CONTRÁRIO A INSCRIÇÃO SERÁ CANCELADA!</b-alert>
                    </center>
                </b-col>
                <b-col sm="6">
                    <b-form-group label="Nome:" class="labelCampo" label-for="">
                        <b-form-input v-model="dados.nome_completo" type="text" required placeholder="Nome completo"></b-form-input>
                    </b-form-group>
                </b-col>
                <!-- <b-form-text id="input-live-help">Your full name.</b-form-text>-->
                
                <b-col sm="4">
                    <b-form-group label="Data Nascimento:" class="labelCampo">
                        <b-form-input v-model="dados.data" type="text" required v-mask="'##/##/####'" placeholder="dd/mm/aaaa">
                        </b-form-input>
                    </b-form-group>
                </b-col>

                <b-col sm="4">
                    <b-form-group label="Cidade Nascimento:" class="labelCampo" label-for="">
                        <b-form-input v-model="dados.cidade" type="text" required placeholder=""></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col sm="4">
                    <!--select para estado-->
                    <b-form-group label="Estado:" class="labelCampo" label-for="">
                        <b-form-select v-model="dados.estado" :options="optionsUF" required></b-form-select>
                    </b-form-group>
                </b-col>
                
                <b-col sm="3">
                    <b-form-group label="Telefone 1:" class="labelCampo" label-for="">
                        <b-form-input v-model="dados.tel1" type="text" required v-mask="'(##)#####-####'" 
                        placeholder="DDD+número fixo ou celular"></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col sm="3">
                    <b-form-group label="Telefone 2:" class="labelCampo" label-for="">
                        <b-form-input v-model="dados.tel2" type="text" required v-mask="'(##)#####-####'" 
                        placeholder="DDD+número fixo ou celular"></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col sm="4">
                    <b-form-group label="CPF:" class="labelCampo" label-for="">
                        <b-form-input v-model="dados.cpf" type="text" required v-mask="'###.###.###-##'" placeholder="000.000.000-00"></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col sm="4">
                    <b-form-group label="RG:" class="labelCampo" label-for="">
                        <b-form-input v-model="dados.rg" type="text" required v-mask="'##.###.###-#'" placeholder="00.000.000-0"></b-form-input>
                        <b-form-text>Caso o dígito do seu RG termine em "x", coloque "0" no lugar.</b-form-text>
                    </b-form-group>
                </b-col>

                <b-col sm="4">
                    <b-form-group label="Cartão Cidadão:" class="labelCampo" label-for="">
                        <b-form-input v-model="dados.cidadao" type="text" required v-mask="'###########'" placeholder=""></b-form-input>
                        <b-form-text>O cartão não pode estar vencido, se estiver, toda inscrição será invalidada.</b-form-text>
                    </b-form-group>
                </b-col>
            </b-row>
            <center>
                <b-button class="pessoalForm mt-2" type="submit" variant="primary">Salvar Dados Pessoais</b-button>
            </center>
            
        </b-form>
    </b-container>
</template>

<script>
import axios from 'axios';
import config from '../../../config'
//import {TheMask} from 'vue-the-mask';

export default {
    name: 'DadosPessoais',
    //components: {TheMask},
    data() {
        return {
            optionsUF: [
                { value: 'SP', text: 'SP' },
                { value: 'AC', text: 'AC' },
                { value: 'AL', text: 'AL' },
                { value: 'AP', text: 'AP' },
                { value: 'AM', text: 'AM' },
                { value: 'BA', text: 'BA' },
                { value: 'CE', text: 'CE' },
                { value: 'DF', text: 'DF' },
                { value: 'ES', text: 'ES' },
                { value: 'GO', text: 'GO' },
                { value: 'MA', text: 'MA' },
                { value: 'MT', text: 'MT' },
                { value: 'MS', text: 'MS' },
                { value: 'MG', text: 'MG' },
                { value: 'PA', text: 'PA' },
                { value: 'PB', text: 'PB' },
                { value: 'PR', text: 'PR' },
                { value: 'PE', text: 'PE' },
                { value: 'PI', text: 'PI' },
                { value: 'RJ', text: 'RJ' },
                { value: 'RN', text: 'RN' },
                { value: 'RS', text: 'RS' },
                { value: 'RO', text: 'RO' },
                { value: 'RR', text: 'RR' },
                { value: 'SC', text: 'SC' },
                { value: 'SE', text: 'SE' },
                { value: 'TO', text: 'TO'},
            ],
            //etapa: 1,
            dados: {},
            //habilita: true,
            aceitar: false,
            idUser: window.localStorage.getItem('id')
        }
    },
    methods: {
        enviarDadosPessoais(){
            var idUser = window.localStorage.getItem('id'); 
            //alert("funcionou")
            axios.post(config.server()+'insereDadosPessoais', {
                idUser: idUser,
                nome_completo: this.dados.nome_completo,
                data_nasc: this.dados.data,
                cidade_nasc: this.dados.cidade,
                estado_nasc: this.dados.estado,
                tel1: this.dados.tel1,
                tel2: this.dados.tel2,
                cpf: this.dados.cpf,
                rg: this.dados.rg,
                cidadao: this.dados.cidadao
            })
            .then((response) =>{
                //console.log(response);
                
            })
            .catch((error) => {
                console.log(error);
            });
           // window.location.href = config.website()+'inscricao/arquivos'
            window.location.href = '#/inscricao/arquivos'
            //alert("registro inserido com sucesso!")
            //DIRECIONAR O USUARIO PARA AS ETAPAS DE INSCRIÇÃO
            //TRATAMENTO DE ERRO IMPEDINDO CADASTRO DE DOIS EMAILS
        }
    }, 
    mounted(){
        if(this.idUser == null){
          window.location.href = '/'
        }
    }
}
</script>

<style lang="scss">
@import '../../style.scss';

.labelCampo{
    font-size: 107%;
    color: $verdeEscuro;
    font-weight: bold;
}

.pessoalForm{
    margin-left: 58px;
}
@media (max-width: 767px){
    #pessoalForm{
        margin-left: auto;
    }
  }
</style>

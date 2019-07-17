<template>
    <b-container>
        <b-form v-on:submit.prevent="enviarDadosPessoais">
            <!--dados pessoais-->
            <b-row>
                <b-col sm="12">
                    <h3>DADOS PESSOAIS</h3>
                </b-col>

                <!--<b-col sm="6">
                    <b-form-group label="Nome:" label-for="">
                        <b-form-input v-model="dados.nome" type="text" required placeholder="Nome completo"></b-form-input>
                    </b-form-group>
                </b-col>-->
                <!-- <b-form-text id="input-live-help">Your full name.</b-form-text>-->
                
                <b-col sm="4">
                    <b-form-group label="Data Nascimento:">
                        <b-form-input v-model="dados.data" type="date" required placeholder=""></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col sm="4">
                    <b-form-group label="Cidade Nascimento:" label-for="">
                        <b-form-input v-model="dados.cidade" type="text" required placeholder=""></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col sm="4">
                    <!--select para estado-->
                    <b-form-group label="Estado:" label-for="">
                        <b-form-select v-model="dados.estado" :options="optionsUF"></b-form-select>
                    </b-form-group>
                </b-col>
                
                <b-col sm="3">
                    <b-form-group label="Telefone 1:" label-for="">
                        <b-form-input v-model="dados.tel1" type="text" required v-mask="'(##)#####-####'" 
                        placeholder="DDD + número fixo ou celular"></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col sm="3">
                    <b-form-group label="Telefone 2:" label-for="">
                        <b-form-input v-model="dados.tel2" type="text" required v-mask="'(##)#####-####'" 
                        placeholder="DDD + número fixo ou celular"></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col sm="4">
                    <b-form-group label="CPF:" label-for="">
                        <b-form-input v-model="dados.cpf" type="text" required v-mask="'###.###.###-##'" placeholder=""></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col sm="4">
                    <b-form-group label="RG:" label-for="">
                        <b-form-input v-model="dados.rg" type="text" required v-mask="'##.###.###-#'" placeholder=""></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col sm="4">
                    <b-form-group label="Cartão Cidadão:" label-for="">
                        <b-form-input v-model="dados.cidadao" type="text" required v-mask="'###########'" placeholder=""></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-button type="submit" variant="primary">Enviar dados pessoais</b-button>
        </b-form>
    </b-container>
</template>

<script>
import axios from 'axios';
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
            aceitar: false
        }
    },
    methods: {
        enviarDadosPessoais(){
            var idUser = window.localStorage.getItem('id'); 
            //alert("funcionou")
            axios.post('http://localhost:3000/insereDadosPessoais', {
                idUser: idUser,
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
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
            alert("registro inserido com sucesso!")
            //DIRECIONAR O USUARIO PARA AS ETAPAS DE INSCRIÇÃO
            //TRATAMENTO DE ERRO IMPEDINDO CADASTRO DE DOIS EMAILS
        }
    }
}
</script>

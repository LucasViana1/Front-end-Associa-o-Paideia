<template>
    <b-container>
        <h1>CADASTRO AO SISTEMA</h1> 

        <!--Periodo de pré-inscrição (alterar texto para pós inscrição):-->
        <b-col v-if="!ver">
            <p class="text-center"><b>O período de inscrições iniciarão no dia 19/08/2019 a partir das 10:00 horas.</b></p>
            <p class="text-center"><b>Antes de se inscrever, leia o edital <a href="https://backend.associacaopaideia.org.br/edital">AQUI</a></b></p>
        </b-col>

        <!--Periodo de inscrição:-->
        <b-col v-if="ver">
            <center>
                O cadastro ao sistema deve ser realizado para prosseguir com a inscrição. <br>
                Após realizar o cadastro, você receberá um e-mail com o código de confirmação, e após validar o código no site, poderá acessar sua conta para fazer a inscrição.<br>
                <br>
                <b>ATENÇÃO! Esse cadastro não garante sua vaga ao projeto!</b>
            </center>
            <br>
            <b-row align-h="center">
                <b-col sm="6" align-v="center">
                    <center><b-alert show variant="danger">Cadastro válido somente durante o periodo de inscrição!</b-alert></center><br>
                    <b-form v-on:submit.prevent="addUser">

                        <b-form-group id="input-group-1" label="Nome:" label-for="input-1">
                            <b-form-input id="input-1" v-model="user.nome" type="text" required placeholder="Digite seu nome"></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-2" label="Sobrenome (completo):" label-for="input-1">
                            <b-form-input id="input-1" v-model="user.sobrenome" type="text" required placeholder="Digite seu sobrenome"></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-3" label="E-mail (pessoal e de uso diário):" label-for="input-1">
                            <b-form-input id="input-1" v-model="user.email" type="email" required placeholder="Digite seu e-mail"></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-4" label="Senha:" label-for="input-2">
                            <b-form-input id="input-2" v-model="user.senha" type="password" required placeholder="Digite sua senha"></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-4" label="Confirme sua senha:" label-for="input-2">
                            <b-form-input id="input-2" v-model="user.confirmaSenha" type="password" required placeholder="Digite sua senha"></b-form-input>
                        </b-form-group>

                        <center>
                            <b-button type="submit" variant="primary">Cadastrar</b-button>
                        </center>

                        <b-alert dismissible :show="senhaDiferente" variant="danger" class="mt-2">A senha está divergente!</b-alert>
                        <b-alert dismissible :show="cadastroDuplicado != ''" variant="danger" class="mt-2">
                            E-mail já está cadastrado! Recupere sua senha clicando <a href="#/recuperacao">AQUI</a>
                        </b-alert>

                    </b-form>
                </b-col> 
            </b-row>
        </b-col>
        
    </b-container>
</template>

<script>
import axios from 'axios';
import config from '../../config'

export default {
    name: 'Cadastro',
    data() {
        return {
            user: {},
            ver: true,
            senhaDiferente: false,
            cadastroDuplicado: ''
        }
    },
    methods: {
        //this.listarDados();
        addUser(){
            //alert("funcionou")
            if(this.user.senha != this.user.confirmaSenha){
                this.senhaDiferente = true
            }
            else{
                axios.post(config.server()+'cadastraUser', {
                    nome: this.user.nome,
                    sobrenome: this.user.sobrenome,
                    email: this.user.email,
                    senha: this.user.senha
                })
                .then((response) =>{
                    //CONTINUAR NESSE TRECHO, FAZER COM QUE NOVOS CADASTROS SEJAM RECONHECIDOS NO FRONT
                    console.log(response);
                    this.cadastroDuplicado = response.data

                    console.log("resposta.data: "+this.cadastroDuplicado)

                    //IF E ELSE ABAIXO DANDO ERRO (CONTINUAR APARTIR DAQ):
                    if(this.cadastroDuplicado == 'cadastro duplicado!'){
                        alert("E-mail já possui cadastro")
                    }
                    else{
                        alert("Cadastro realizado com sucesso!")
                        window.location.href = '#/login'
                    }
                    
                })
                .catch((error) => {
                    console.log(error);
                });
            
            }
            
        }
        
    }
}
</script>

<style lang="scss">
@import "../style.scss";

label{
  color: black;
  font-size: 120%;
}

</style>
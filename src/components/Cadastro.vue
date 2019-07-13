<template>
    <b-container>
        <h1>CADASTRO AO SISTEMA</h1> 
        <center>
            O cadastro ao sistema deve ser feito para poder realizar a inscrição no projeto. <br>
            Após realizar o cadastro, você receberá um e-mail de confirmação, e poderá acessar sua conta no site para realizar a inscrição<br>
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

                    <b-form-group id="input-group-2" label="Sobrenome:" label-for="input-1">
                        <b-form-input id="input-1" v-model="user.sobrenome" type="text" required placeholder="Digite seu sobrenome"></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-3" label="Email:" label-for="input-1">
                        <b-form-input id="input-1" v-model="user.email" type="email" required placeholder="Digite seu email"></b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-4" label="Senha:" label-for="input-2">
                        <b-form-input id="input-2" v-model="user.senha" required placeholder="Digite sua senha"></b-form-input>
                    </b-form-group>

                    <b-button type="submit" variant="primary">Cadastrar</b-button>

                </b-form>
            </b-col> 
    </b-row>
    </b-container>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Cadastro',
    data() {
        return {
            user: {}
        }
    },
    methods: {
        //this.listarDados();
        addUser(){
            //alert("funcionou")
            axios.post('http://localhost:3000/cadastraUser', {
                nome: this.user.nome,
                sobrenome: this.user.sobrenome,
                email: this.user.email,
                senha: this.user.senha
                //body: this.email
            })
            .then((response) =>{
                console.log(response);
                
            // this.listagem = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
            alert("cadastro realizado com sucesso!")
            //DIRECIONAR O USUARIO PARA AS ETAPAS DE INSCRIÇÃO
            //TRATAMENTO DE ERRO IMPEDINDO CADASTRO DE DOIS EMAILS
        }
        
    }
}
</script>

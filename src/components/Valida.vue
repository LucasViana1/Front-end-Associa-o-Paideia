<template>
    <b-container>
        <h1>VALIDAR E-MAIL</h1>
        <center>
            Informe o código de autenticação enviado ao seu e-mail no momento em que realizou o cadastro.
        </center>
        <br>
        <b-row align-h="center">
            <b-col sm="6" align-v="center">
                <b-form v-on:submit.prevent="validaUser">

                <b-form-group id="input-group-1" label="Código de acesso:" label-for="input-1">
                    <b-form-input id="input-1" v-model="user.codigo" type="text" required placeholder="Digite o código de 5 dígitos enviado por e-mail"></b-form-input>
                </b-form-group>

                <center><b-button type="submit" variant="primary">Validar</b-button></center>

                </b-form>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import axios from 'axios';
import config from '../../config'

export default {
    name: 'Valida',
    data() {
        return{
            idUser: window.localStorage.getItem('id'),
            nome: window.localStorage.getItem('nome'),
            user: {},
            retorno: {}
        }
    },
    methods: {
        validaUser(){
            axios.post(config.server()+'valida', {
                idUser: this.idUser,
                codigo: this.user.codigo,
            })
            .then((response) =>{
                console.log("RESPOSTA DO SERVIDOR: " + response.data);
                //alert(response.data.email)
                this.retorno = response.data;//recebendo json do servidor como retorno da solicitação
                var retornoString = JSON.parse(JSON.stringify(response.data))//converte json para string         
                //alert(retornoString[0].nome)
                //console.log(retornoString[0].nome)
                if(this.retorno == 'Código incorreto!'){
                    alert('Código incorreto!')
                }
                else{
                    //guardar na sessao nome e nivel de acesso
                    window.localStorage.setItem('id', retornoString[0].id)
                    window.localStorage.setItem('nome', retornoString[0].nome)
                    window.localStorage.setItem('nivel', retornoString[0].adm)
                    window.localStorage.setItem('email', retornoString[0].email)
                    var id = window.localStorage.getItem('id'); 
                    var nome = window.localStorage.getItem('nome'); 
                    var nivel = window.localStorage.getItem('nivel'); 
                    var email = window.localStorage.getItem('email'); 
                    //window.localStorage.removeItem('nivel');
                    /*alert(id)
                    alert(nome)
                    alert(nivel)
                    alert(email)*/
                    window.location.href = '/'
                }
            })
            .catch((error) => {
            console.log(error);
            });
        }
    }
}
</script>

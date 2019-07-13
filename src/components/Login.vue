<template>
  <b-container>
    <h1>ACESSE SUA CONTA</h1>
    <center>
      Não possui uma conta? Realize o cadastro clicando <a href="/cadastro">AQUI</a> 
    </center>
    <br>
    <b-row align-h="center">
      <b-col sm="6" align-v="center">
        <center><b-alert show variant="danger">Cadastro válido somente durante o periodo de inscrição!</b-alert></center><br>
        <b-form v-on:submit.prevent="loginUser">

          <b-form-group id="input-group-1" label="Email:" label-for="input-1">
              <b-form-input id="input-1" v-model="user.email" type="email" required placeholder="Digite seu email"></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Senha:" label-for="input-2">
              <b-form-input id="input-2" v-model="user.senha" required placeholder="Digite sua senha"></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Entrar</b-button>

        </b-form>
      </b-col> 
    </b-row>
    {{retorno}}
  </b-container>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Login',
    data() {
      return {
        user: {},
        retorno: {}
      }
    },
    methods: {
      //this.listarDados();
      loginUser(){
        //alert("funcionou")
        axios.post('http://localhost:3000/login', {
          email: this.user.email,
          senha: this.user.senha
        })
        .then((response) =>{
          console.log("RESPOSTA DO SERVIDOR: " + response.data);
          //alert(response.data.email)
          this.retorno = response.data;//recebendo json do servidor como retorno da solicitação
          var retornoString = JSON.parse(JSON.stringify(response.data))//converte json para string         
          //alert(retornoString[0].nome)
          //console.log(retornoString[0].nome)
          if(this.retorno == 'E-mail ou senha inválidos!'){
            alert('sem registros')
          }
          else{
            //guardar na sessao nome e nivel de acesso
            window.localStorage.setItem('nome', retornoString[0].nome)
            window.localStorage.setItem('nivel', retornoString[0].adm)
            var nome = window.localStorage.getItem('nome'); 
            var nivel = window.localStorage.getItem('nivel'); 
            //window.localStorage.removeItem('nivel');
            alert(nome)
            alert(nivel)
          }
        })
        .catch((error) => {
          console.log(error);
        });
        
      }
        
    }
}
</script>

<style lang="scss">
@import "../style.scss";
label{
  color: $verdeEscuro;
  font-weight: bold;
  font-size: 120%;
}
</style>


<template>
    <b-container>
        <h1>RECUPERAÇÃO DE SENHA</h1>
        <b-row align-h="center">
            <b-col sm="6" align-v="center">
                <b-form v-on:submit.prevent="recuperaSenha">

                <b-form-group id="input-group-1" class="rotulo" label="Para recuperar sua senha digite o e-mail registrado." label-for="input-1">
                    <b-form-input v-model="email" type="email" placeholder="Digite seu email"></b-form-input>
                </b-form-group>

                <center>
                    <b-button type="submit" v-show="!enviado" class="mt-2" variant="primary">Enviar</b-button>
                </center>
                <br>
                
                <b-alert dismissible :show="enviado" variant="success"> 
                    E-mail enviado. Caso o mesmo não apareça em sua caixa de entrada, verifique o endereço digitado e tente novamente.
                </b-alert>

                </b-form>
            </b-col> 
        </b-row>
    </b-container>
</template>

<script>
import axios from 'axios';
import config from '../../config'

export default {
    name: 'RecuperaSenha',
    data() {
      return {
        email: '',
        enviado: false
      }
    },
    methods: {
      recuperaSenha(){
        axios.post(config.server()+'recuperaSenha', {
          email: this.email
        })
        .then((response) =>{
          console.log("RESPOSTA DO SERVIDOR: " + response.data);
        })
        .catch((error) => {
          console.log(error);
        });
        this.enviado = true;
      }
        
    }
}
</script>

<style lang="scss">

</style>


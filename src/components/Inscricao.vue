<template>
<!--TALVEZ REMOVER ESSE COMPONENTE!!!!!-->
  <b-container>
    <h1><center>INSCRIÇÃO</center></h1>
    <center v-show="ver">
      Aqui é liberado o formulário de inscrição, como ainda não estamos no período de inscrições, o formulário ainda não foi liberado
    </center>
    <center v-show="!ver">
      Antes de realizar a inscrição, faça seu cadastro clicando <a href="/cadastro">AQUI</a>
      <br>
      Já fez o cadastro? 
    </center>
    INSERIR FORMULARIO!!!
      
      <!--<a href="http://localhost:3000/formulario" target="_blank">Faça sua inscrição agora!</a>-->
  </b-container>
</template>

<script>

export default {
   name: 'Inscricao',
    data() {
      return {
        //alterna entre o periodo de realizar inscrição e periodo de não realizar inscrição
        ver: false
      }
    },
    methods: {
      
    }
  }
</script>
<style lang="scss">
/*@import '../style.scss';
  h1{
    color: $red;
  }*/
</style>

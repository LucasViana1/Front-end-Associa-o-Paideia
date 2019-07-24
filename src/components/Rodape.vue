<template>
  <b-container  class="footer">
      <b-row align-v='center'>
        <b-col cols="8" align-v='center'>
            Copyright © Associação Paideia - Todos os direitos reservados
        </b-col>
        <b-col align-h='end'>
            <a href="https://www.facebook.com/focuscursinho/" target="_blank"><b-img right src="http://2015.igem.org/wiki/images/e/ed/Harvard2015Facebookwhite.png" width="38" height="38" style="display: block;" border="0" /></a>
        </b-col>
      </b-row>
  </b-container>
  <!--<b-container id="rodape">
    <b-row>
      <b-col cols="9" id="copyright" align-v='center'>
        Copyright 2019. Associação Paideia - Todos os direitos reservados.
      </b-col>
      <b-col id="face">
        <b-img :src="face" width="44px" height="44px"></b-img>
      </b-col>
    </b-row>
  </b-container>-->
</template>

<script>
export default {
  name: 'Rodape',
  data(){
    return{
      face: require('../assets/face.png')
    }
  }
}
</script>
<style lang="scss">
@import "../style.scss";
  
  .footer {
    background-color: $verdeClaro;
    color: #fff;
    border: 1px solid #dedede;
    border-radius: 4px;
    box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.055);
    display: block;
    overflow: hidden;
    bottom: 0;
    width: 100%;
    padding: 15px;
    margin-top: 50px;
}
  /*#rodape{
    background-color: $verdeClaro;
    margin-top: 40px;
    height: 60px;
  }
  #copyright{
    color: white;
    padding: 16px;
  }
  #face{
    padding-top: 8px;
  }
  @media (max-width: 720px){
    #rodape{
       height: 93px;
    }
  }*/
</style>

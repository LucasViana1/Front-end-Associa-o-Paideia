<template>
  <b-container id="rodape">
    <b-row>
      <b-col cols="9" id="copyright">
        Copyright 2019. Associação Paideia - Todos os direitos reservados.
      </b-col>
      <b-col id="face">
        <b-img :src="face" width="44px" height="44px"></b-img>
      </b-col>
    </b-row>
  </b-container>
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
  #rodape{
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
  }
</style>

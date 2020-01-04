<template>
    <b-container class="mt-4 border" id="painel">
      <b-col cols="12" class="mt-2">
        <center><h2>Processo Seletivo 2020</h2></center>
      </b-col>
      <b-row align-h="center">
        <b-col sm="4" class="mt-5">
          <center>
            <!--<a :href="infodoc" target="_blank">-->
              <a :href="urlInfo" target="_blank">            
              <b-col cols="12">
                <b-img :src="infoIcon"></b-img>
              </b-col>
              <b-col cols="12" class="mt-2">
                INFORMAÇÕES BÁSICAS
              </b-col>   
            </a>
          </center>
        </b-col>
        <b-col sm="4" class="mt-5">
          <center>
            <a :href="urlEdital" target="_blank">  
              <b-col cols="12">
                <b-img :src="editalIcon"></b-img>
              </b-col>
              <b-col cols="12" class="mt-2">
                MANUAL DO CANDIDATO
              </b-col>   
            </a>
          </center>
        </b-col>
        <b-col sm="4" class="mt-5">
          <center>
            <a :href="urlRequerimento" target="_blank">  
              <b-col cols="12">
                <b-img :src="requerimentoIcon"></b-img>
              </b-col>
              <b-col cols="12" class="mt-2">
                REQUERIMENTO
              </b-col>   
            </a>
          </center>
        </b-col>
        <b-col cols="12" class="mt-5 mb-2">
          <center>
            <a :href="urlFaq" target="_blank">  
              <b-col cols="12">
                <b-img :src="perguntasIcon"></b-img>
              </b-col>
              <b-col cols="12" class="mt-2">
                PERGUNTAS FREQUENTES
              </b-col>   
            </a>
          </center>
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
  import {fs} from 'fs';
  import config from '../../../config'
  /*fs.readdir("informacoes.pdf", function(err, files){
   console.log(files);
 });*/

  export default {
  name:'Documentos',
  data() {
    return{
      urlRequerimento: config.server()+'requerimento',
      urlFaq: '#/faq',
      urlEdital: config.server()+'edital',
      urlInfo: config.server()+'informacoes',

      infoIcon: require('@/assets/informacoes/info_basica.png'),
      editalIcon: require('@/assets/informacoes/edital.png'),
      requerimentoIcon: require('@/assets/informacoes/requerimento.png'),
      perguntasIcon: require('@/assets/informacoes/perguntas_frequentes.png'),
      //infodoc: require("./informacoes.pdf")
      //infodoc: "/static/informacoes.pdf"
    }
  }
}
</script>
<style lang="scss">
@import '../../style.scss';
  #painel{
    background-color: $cinzaClaro;
  }
</style>

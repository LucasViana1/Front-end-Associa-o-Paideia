<template>
  <b-container class="mt-4">
    <center>
      <h1>DEPOIMENTOS</h1>
    </center>
    <b-row align-h="center">
      <b-col sm="10" align-v="center">      
        <b-row>
          <b-col sm="6" class="mt-2 pt-3">
          <p>
            Não há palavras suficientes para descrever a imensa gratidão que tenho pelo Cursinho Focus e por cada um dos professores que nos ensinou, e tenho certeza que continuam ensinando, com muita sabedoria...
          </p>
          <b-container class="nome text-right">
            Patricia Evelin
          </b-container>
        </b-col>
        <b-col sm="6" class="mt-2 mb-3 pt-3" id="coluna">
          <p>
            Aos professores, queridos professores, meu muito obrigada. Muito obrigada pelo interesse em formar pessoas muito mais que formar alunos. Muito obrigada por todas as vezes que nos escutaram... 
          </p>
          <b-container class="nome text-right">
            Caroline Cândido Veroneze
          </b-container>
        </b-col>
        <b-col sm="12" class="mt-2 text-center">
          <a href="/depoimentos"><b-button id="botao">Ver mais depoimentos</b-button></a>
        </b-col>
        </b-row>
        
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    name: 'Depoimentos'
  }
</script>
<style lang="scss">
  @import '../../style.scss';
  .nome{
    font-size: 110%;
    font-weight: bold;
  }
  p{
    text-align: justify;
  }
  #coluna{
    border-left: 6px solid $rosa;
  }
  @media (max-width: 767px){
    #coluna{
      border-left: none;
      border-top: 5px solid $rosa;    
    }
  }
  #botao{
    background-color: $rosa;
  }
  #botao:hover{
    opacity: 0.9;
  }
</style>

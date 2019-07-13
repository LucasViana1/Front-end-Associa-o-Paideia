<template>
  <div id="app">
    <b-container>
      <Cabecalho/>
      <div>
        <router-view></router-view>
      </div>
      <Rodape/>
    </b-container>
  </div>
</template>

<script>
//para que o vue enxergue os componentes, eles devem ser exportados
import Cabecalho from './components/Cabecalho.vue'
import Rodape from './components/Rodape.vue'
/*import Sobre from './components/Sobre.vue'
import Inicio from './components/Inicio.vue'
import Noticias from './components/Noticias.vue'
import Contato from './components/Contato.vue'
import Faq from './components/Faq.vue'
import Inscricao from './components/Inscricao.vue'
import Login from './components/Login.vue'*/

export default {
  name: 'app',
  //"components" deve listar os componentes definidos
  components: {
    //HelloWorld
    Cabecalho,
    Rodape
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>

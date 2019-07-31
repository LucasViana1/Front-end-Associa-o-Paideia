<template>  
  <b-container>
    <b-img :src="logo" fluid></b-img><!--logo-->
    <b-navbar toggleable="lg" type="dark"  id="cabecalho">
      <b-navbar-brand href="/">Início</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#/sobre">Sobre</b-nav-item>
          <b-nav-item href="#/noticias">Notícias</b-nav-item>
          <b-nav-item href="#/contato">Contato</b-nav-item>
          <b-nav-item href="#/faq">Perguntas Frequentes</b-nav-item>
          <!--<b-nav-item href="/inscricao">Inscrição</b-nav-item>TALVEZ REMOVER-->
          <b-nav-item href="#/inscricao" v-if="adm != null">Inscrições 2º semestre 2019</b-nav-item><!--Apenas candidato e ADM-->
          <b-nav-item href="#/inscritos" v-if="adm == 1">Administrador</b-nav-item><!--Apenas ADM-->
          <b-nav-item href="#/cadastro" v-if="adm == null">Cadastre-se</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#/login" v-if="adm == null">Acesse sua conta</b-nav-item>
          <b-nav-item-dropdown v-else :text="'Olá, ' +  nome +'!'" right>
              <b-dropdown-item>
                    <b-button style="width: 100%" class='text-white' type="button" variant="primary" @click.prevent="logout">Sair</b-button>
                </b-dropdown-item> 
            </b-nav-item-dropdown>
          <!--<b-nav-item href="/" v-else>Olá {{nome}}, deseja sair?</b-nav-item>-->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<script>

export default {
  name: 'Cabecalho',//nome do componente
  //"props" permite passar o valor do componente pai ao componente filho, são "somente para leitura"
  props: {
    //msg: String
  },
  data () {
    return {
      logo: require('@/assets/logo/logo_paideia.png'),//importa o logo
      nome: window.localStorage.getItem('nome'),
      nivel: null,
      adm: window.localStorage.getItem('nivel')
      //sair: window.localStorage.removeItem('nivel')
    }
  },
  methods: {
    logout() {
      window.localStorage.removeItem('nome')
      window.localStorage.removeItem('nivel')
      window.localStorage.removeItem('id')
      window.localStorage.removeItem('email')
      location.reload();//RECARREGA A PAGINA
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style <style lang="scss">
@import "../style.scss";

#cabecalho{
  background-color: $verdeClaro;
}
</style>

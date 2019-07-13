<template>
  <b-container>
    <h1><center>INSCRITOS</center></h1>
    <br>
    <div v-for="item in listagem">
        <p>{{item.id}}</p>
        <p>{{item.nome}}</p>
        <p>{{item.email}}</p>
        <p>{{item.senha}}</p>
        <p>{{item.ativo}}</p>
        <p>{{item.espera}}</p>
    </div>
  </b-container>
</template>

<script>

export default {
  name: 'Inscritos',
  data (){
      return{
          //"listagem" recebe array com dados dos inscritos
          listagem: null
      }
  },
  methods: {
      //pega os dados do servidor para listalos
      listarDados(){
          this.$inscritosService.getInscritos().then(response => {
              if(response.erro){
                  console.log("Ocorreu um erro");
              } else{
                  //"map" recebe os itens e monta um array
                  this.listagem = response.dados.map(function(objeto){
                      return {
                          id: objeto.id,
                          nome: objeto.nome,
                          email: objeto.email,
                          senha: objeto.senha,
                          ativo: objeto.ativo,
                          espera: objeto.espera
                      }
                  }, this.$server);
              }
          }).catch(response => {
              console.log("Ocorreu um erro");
          });
      }
  },
  //realiza a montagem dos dados definidos
  mounted() {
      this.listarDados();
  }
}
</script>
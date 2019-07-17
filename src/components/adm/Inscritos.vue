<template>
  <b-container>
    <h1><center>BEM VINDO(A) {{nomeUser}}</center></h1>
    <br>
    <!--<div v-for="item in listagem">
        <p>{{item.id}}</p>
        <p>{{item.nome}}</p>
        <p>{{item.email}}</p>
        <p>{{item.senha}}</p>
        <p>{{item.ativo}}</p>
        <p>{{item.espera}}</p>
    </div>-->
    <!--<p>{{ listagem.dados[0].id }}</p>-->
    <ul>
        <li v-for="item in listagem.dados" :key="item">
            {{ item }}
        </li>
    </ul>

    <table class="table table-striped table-dark">
        <thead>
            <tr>
                <th>Nº</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>CPF</th>
                <th>Cartão Cidadão</th>
                <th>Status</th>
                <th>Detalhes</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="item in listagem.dados" :key="item">
                <td>{{cont++}}</td>
                <td>{{ item.nome }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.cpf }}</td>
                <td>{{ item.cidadao }}</td>
                <td>ok/espera/recusado</td>
                <td>
                    <a href="http://"></a>
                    link detalhes
                </td>
            </tr>
        </tbody>
    </table>
    
  </b-container>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Inscritos',
    data (){
        return{
            listagem: {},
            adm: window.localStorage.getItem('nivel'),
            nomeUser: window.localStorage.getItem('nome'),
            cont: -199 //pq começa do 200?
        }
    },
    methods: {
        //pega os dados do servidor para listalos METODO DESCONTINUADO ABAIXO
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
        //this.listarDados();
        axios.get('http://localhost:3000/inscritos')
        .then((response) =>{
            if(this.adm != 1){
                window.location.href = "/"
            }
            else{
                console.log(response.data);
                this.listagem = response.data;   
            }          
    })
    .catch((error) => {
        console.log(error);
    });
    },

}
</script>
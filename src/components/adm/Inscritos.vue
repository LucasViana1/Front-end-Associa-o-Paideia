<template>
  <b-container>
    <h1><center>BEM VINDO(A) {{nomeUser}}</center></h1>
    <br>

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
            <tr v-for="(item,index) in listagem.dados" :key="item">
                <td>{{index+1}}</td>
                <td>{{ item.nome }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.cpf }}</td>
                <td>{{ item.cidadao }}</td>
                <td>
                    <div v-if="item.espera == 1">Em Espera</div>
                    <div v-if="item.espera == 0">Lista Regular</div>
                    <!--BLACK LIST: INSCRITO CANCELADO PELO ADM-->
                </td>
                <td>
                    <!--<a :href="link+item.id">
                        link detalhes                   
                    </a>-->
                    <!--<b-button v-on:click="detalhes(item.id)">-->
                        <a v-on:click="detalhes(item.id)" :href="link">
                            detalhes
                        </a>                    
                    <!--</b-button>-->
                    <!--<p :onclick="detalhes(item.id)">detalhes</p>-->
                </td>
            </tr>
        </tbody>
    </table>
    
  </b-container>
</template>

<script>
import axios from 'axios';
import config from '../../../config'

export default {
    name: 'Inscritos',
    data (){
        return{
            listagem: {},
            adm: window.localStorage.getItem('nivel'),
            nomeUser: window.localStorage.getItem('nome'),
            cont: 0, //pq começa do 200?
            link: '#/detalhes/'
        }
    },
    methods: {
        detalhes(id){
            //alert(id)
           console.log(id)
           window.localStorage.setItem('idDetalhes', id)
        },
    
    },
    //realiza a montagem dos dados definidos
    mounted() {
        //this.listarDados();
        axios.get(config.server()+'inscritos')
        .then((response) =>{
            if(this.adm != 1){
                window.location.href = "/"
            }
            else{
                //console.log(response.data);
                this.listagem = response.data;   
            }          
    })
    .catch((error) => {
       // console.log(error);
    });
    },

}
</script>
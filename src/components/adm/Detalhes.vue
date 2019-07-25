<template>
    <b-container>
        <h1>{{listagem.dados[0].nome_completo}}</h1>

        <br>
        <b-row>
            <b-col sm="6">
                <ul style="list-style-type: none;">
                    <li><b>E-mail:</b> {{listagem.dados[0].email}}</li>
                    <li><b>Cidade:</b> {{listagem.dados[0].cidade_nasc}} - {{listagem.dados[0].estado_nasc}}</li>
                    <li><b>Telefone 1:</b> {{listagem.dados[0].tel1}}</li>
                    <li><b>Telefone 2:</b> {{listagem.dados[0].tel2}}</li>
                    <li><b>CPF:</b> {{listagem.dados[0].cpf}}</li>
                    <li><b>RG:</b> {{listagem.dados[0].rg}}</li>
                    <li><b>Cartão Cidadão:</b> {{listagem.dados[0].cidadao}}</li>
                    <!--IMPLEMENTAR AÇÃO DO BOTÃO ABAIXO-->
                    <li><a v-on:click="detalhes(item.id)" :href="link" class="btn btn-primary mt-3 ml-4">
                        DADOS COMPLETOS</a> </li>
                </ul>
            </b-col>

            <!--AJUSTAR MARGIN NESSE TRECHO-->
            <b-col class="desktop-img-col">
                <b-img :src="listagem.dados[0].arquivo" fluid class="desktop-img"></b-img>
            </b-col>
        </b-row>
        

        <b-card no-body class="mt-3">
            <b-tabs card >
                <!--<b-tab no-body title="Picture 2">
                    <center><b-img :src="listagem.dados[0].arquivo" fluid></b-img></center>
                </b-tab>-->
                <div v-for="imagem in listagem.dados" :key="imagem">
                    <b-tab no-body :title="imagem.tipo" v-if="imagem.tipo != 'FOTO'">
                        <center>
                            <b-img :src="imagem.arquivo" fluid></b-img>
                        </center>
                    </b-tab>
                </div>
            </b-tabs>
        </b-card>

        <!--<img :src="listagem.dados[1].arquivo" alt="">-->

        <!--<div id="imgTest">AQUI {{listagem.dados[1].arquivo}}</div>-->

        <!--{{listagem.dados[0].id}}-->
    
    </b-container>
</template>


<script>
import axios from 'axios';
import config from '../../../config'

export default {
    name: 'Inscritos',
    data (){
        return{
            idCandidato: window.localStorage.getItem('idDetalhes'),
            listagem: {},
            adm: window.localStorage.getItem('nivel'),
            nomeUser: window.localStorage.getItem('nome'),
            cont: -199, //pq começa do 200?
            link: '#/detalhes/'
        }
    },
    methods: {
        encodeImageFileAsURL(srcData) {
      
          /*var filesSelected = document.getElementById("inputFileToLoad").files;
          if (filesSelected.length > 0) {
            var fileToLoad = filesSelected[0];
      
            var fileReader = new FileReader();
      
            fileReader.onload = function(fileLoadedEvent) {
              var srcData = fileLoadedEvent.target.result; // <--- data: base64
      
            alert(srcData);*/
            //document.getElementById("base64").innerHTML = srcData;
              var newImage = document.createElement('img');
              newImage.src = srcData;
      
              document.getElementById("imgTest").innerHTML = newImage.outerHTML;
              alert("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
              console.log("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
              //var base64 = document.getElementById("imgTest").innerHTML;
              //document.getElementById("base64").innerHTML = base64;
            }
            //fileReader.readAsDataURL(fileToLoad);
          
        
    },
    mounted() {
        const linkDadosCandidato = config.server()+'detalhes/'+this.idCandidato;
        axios.get(linkDadosCandidato)
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

<style lang="scss">

li b{
    font-size: 110%;
}
.desktop-img-col{
    margin: 0 10px 15px 0;
}
.desktop-img{
    height: 230px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

@media (max-width: 770px) {
    .desktop-img-col{
        display: none;
    }
    .mobile-img{
        display: block;
    }
}
</style>

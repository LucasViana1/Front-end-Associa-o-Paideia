<template>
    <b-container>
        
         <b-form v-on:submit.prevent="enviarArquivos">
            <!--dados pessoais-->
            <b-row>
                <b-col sm="12">
                    <h3>ARQUIVOS</h3>
                </b-col>

                <b-col>
                    <b-form-file class="mt-3" plain v-on:change="encodeImageFileAsURL('rgCandidato', 1)" id="rgCandidato"></b-form-file>
               </b-col>

               <b-col>
                    <b-form-file class="mt-3" plain v-on:change="encodeImageFileAsURL('cpfCandidato', 2)" id="cpfCandidato"></b-form-file>
               </b-col>

              <!-- <b-col>
                    <b-form-file class="mt-3" plain @change="encodeImageFileAsURL" id="inputFileToLoad2"></b-form-file>
               </b-col>-->
             

            </b-row>
            <br><br><br>
            <b-button type="submit" variant="primary">Enviar arquivos</b-button>
        </b-form>
            
    </b-container>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Arquivos',
    data() {
        return {
            dados: {},
            rgFile: null,
            rgFile64: null
        }
    },
      methods: {
        encodeImageFileAsURL(elemento, cont){
            var filesSelected = document.getElementById(elemento).files;
            if (filesSelected.length > 0) {
            var fileToLoad = filesSelected[0];
      
            var fileReader = new FileReader();
      
            fileReader.onload = function(fileLoadedEvent) {
                var srcData = fileLoadedEvent.target.result; // <--- data: base64

                /*window.localStorage.setItem('rg', srcData)
                alert(window.localStorage.getItem('rg'))*/

                switch (cont) {
                    case 1:
                        window.localStorage.setItem('rgCandidato', srcData)
                        break;
                
                    case 2:
                        window.localStorage.setItem('cpfCandidato', srcData)
                        break;

                    case 3:
                        window.localStorage.setItem('historico', srcData)
                        break;

                    case 4:
                        window.localStorage.setItem('bolsa', srcData)
                        break;

                    case 5:
                        window.localStorage.setItem('eja', srcData)
                        break;

                    case 6:
                        window.localStorage.setItem('medico', srcData)
                        break;

                    case 7:
                        window.localStorage.setItem('endereco', srcData)
                        break;

                    case 8:
                        window.localStorage.setItem('foto', srcData)
                        break;

                    case 9:
                        window.localStorage.setItem('cidadao', srcData)
                        break;

                    case 10:
                        window.localStorage.setItem('ensinoMedio', srcData)
                        break;

                    case 11:
                        window.localStorage.setItem('rgResponsavel', srcData)
                        break;

                    case 12:
                        window.localStorage.setItem('cpfResponsavel', srcData)
                        break;
                    default:
                        break;
                }

                //alert(srcData);
                //this.rgFile64 = srcData;
                //alert(this.rgFile64);
                //document.getElementById("base64").innerHTML = srcData;
            }
            fileReader.readAsDataURL(fileToLoad);
          }
        },
        enviarArquivos(){
            var idUser = window.localStorage.getItem('id'); 
            //var rg64 = window.localStorage.getItem('rg');
            axios.post('http://localhost:3000/insereDadosArquivos', {
                idUser: idUser,
                //tipo: 'RG',
                rgCandidato: window.localStorage.getItem('rgCandidato'),
                cpfCandidato: window.localStorage.getItem('cpfCandidato')
            })
            .then((response) =>{
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
            alert("registro inserido com sucesso!")
            //DIRECIONAR O USUARIO PARA AS ETAPAS DE INSCRIÇÃO
            //TRATAMENTO DE ERRO IMPEDINDO CADASTRO DE DOIS EMAILS
        }
    }
}
</script>

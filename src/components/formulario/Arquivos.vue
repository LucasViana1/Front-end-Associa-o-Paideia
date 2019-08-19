<template>
    <b-container>
        
         <b-form v-on:submit.prevent="enviarArquivos">
            <!--dados pessoais-->
            <b-row align-h="center">
                <b-col sm="12">
                    <center>
                        <h2>ARQUIVOS (DOCUMENTOS)</h2>
                    </center>  
                </b-col>

                <b-col sm="12" class="text-center">
                    <b-alert show variant="warning">
                        IMPORTANTE! Verifique a qualidade da imagem que você está enviando e garanta que estarão claras para visualização, 
                        para que não haja problemas na verificação de sua documentação.<br><hr>
                        Os arquivos deverão estar nos seguintes formatos: .jpg e/ou .png.
                    </b-alert>
                </b-col>

                <b-col sm="12" class="text-center">
                    <b-form-group class="">
                        <div class="opcaoSelecao">VOCÊ É MENOR DE IDADE?</div>
                        <b-form-radio v-model="menor" value="sim">Sim</b-form-radio>
                        <b-form-radio v-model="menor" value="nao">Não</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col sm="5">
                    <b-form-group label="RG:" class="labelCampo" label-for="">
                        <b-form-file class="mt-3 form-control-sm" style="color: black;" plain v-on:change="encodeImageFileAsURL('rgCandidato', 1)" id="rgCandidato" required></b-form-file>
                    </b-form-group>
                </b-col>

               <b-col sm="5">
                    <b-form-group label="CPF:" class="labelCampo" label-for="">
                        <b-form-file class="mt-3 form-control-sm" style="color: black;" plain v-on:change="encodeImageFileAsURL('cpfCandidato', 2)" id="cpfCandidato" required></b-form-file>
                    </b-form-group>
               </b-col>

                <b-col sm="11">
                    <div class="separa"></div>
                </b-col>

               <b-col sm="5">
                    <b-form-group label="Histórico Escolar:" class="labelCampo" label-for="">
                        <b-form-file class="mt-3 form-control-sm" style="color: black;" plain v-on:change="encodeImageFileAsURL('historico', 3)" id="historico" required></b-form-file>
                    </b-form-group>
               </b-col>

                <b-col sm="5">
                    <b-form-group label="Cartão cidadão:" class="labelCampo" label-for="">
                        <b-form-file class="mt-3 form-control-sm" style="color: black;" plain v-on:change="encodeImageFileAsURL('cidadao', 9)" id="cidadao" required></b-form-file>
                    </b-form-group>
               </b-col>

               <b-col sm="11">
                    <div class="separa"></div>
                </b-col>

                <b-col sm="5">
                    <b-form-group label="Comprovante de endereço:" class="labelCampo" label-for="">
                        <b-form-file class="mt-3 form-control-sm" style="color: black;" plain v-on:change="encodeImageFileAsURL('endereco', 7)" id="endereco" required></b-form-file>
                    </b-form-group>
               </b-col>

               <b-col sm="5">
                    <b-form-group label="Atestado médico:" class="labelCampo" label-for="">
                        <b-form-file class="mt-3 form-control-sm" style="color: black;" plain v-on:change="encodeImageFileAsURL('medico', 6)" id="medico"></b-form-file>
                    </b-form-group>
               </b-col>

               <b-col sm="11">
                    <div class="separa"></div>
                </b-col>

               <b-col sm="5">
                    <b-form-group label="Comprovante 3º período EJA:" class="labelCampo" label-for="">
                        <b-form-file class="mt-3 form-control-sm" style="color: black;" plain v-on:change="encodeImageFileAsURL('eja', 5)" id="eja"></b-form-file>
                    </b-form-group>
               </b-col>

               <b-col sm="5">
                    <b-form-group label="Foto:" class="labelCampo" label-for="">
                        <b-form-file class="mt-3 form-control-sm" style="color: black;" plain v-on:change="encodeImageFileAsURL('foto', 8)" id="foto" required></b-form-file>
                    </b-form-group>
               </b-col>

                <b-col sm="11">
                    <div class="separa"></div>
                </b-col>

               <b-col sm="5">
                    <b-form-group label="Comprovante de bolsa (caso bolsista):" class="labelCampo" label-for="">
                        <b-form-file class="mt-3 form-control-sm" style="color: black;" plain v-on:change="encodeImageFileAsURL('bolsa', 4)" id="bolsa"></b-form-file>
                    </b-form-group>
               </b-col>

               <b-col sm="5">
                    <b-form-group label="Comprovante de matrícula ou conclusão do ensino médio:" class="labelCampo" label-for="">
                        <b-form-file class="mt-3 form-control-sm" style="color: black;" plain v-on:change="encodeImageFileAsURL('ensinoMedio', 10)" id="ensinoMedio"></b-form-file>
                    </b-form-group>
               </b-col>

               <b-col sm="11">
                    <div class="separa"></div>
                </b-col>

               <b-col sm="5" v-if="menor == 'sim'">
                    <b-form-group label="RG (Responsável):" class="labelCampo" label-for="">
                        <b-form-file class="mt-3 form-control-sm" required style="color: black;" plain v-on:change="encodeImageFileAsURL('rgResponsavel', 11)" id="rgResponsavel"></b-form-file>
                        <b-form-text>Campo obrigatório para menores de idade!</b-form-text>
                    </b-form-group>
               </b-col>

               <b-col sm="5" v-if="menor == 'sim'">
                    <b-form-group label="CPF (Responsável):" class="labelCampo" label-for="">
                        <b-form-file class="mt-3 form-control-sm" required style="color: black;" plain v-on:change="encodeImageFileAsURL('cpfResponsavel', 12)" id="cpfResponsavel"></b-form-file>
                        <b-form-text>Campo obrigatório para menores de idade!</b-form-text>
                    </b-form-group>
               </b-col>

              <!-- <b-col>
                    <b-form-file class="mt-3" plain @change="encodeImageFileAsURL" id="inputFileToLoad2"></b-form-file>
               </b-col>-->
             

            </b-row>
            <br>
            <!--<div id="base64"></div>-->
            <center>
                <b-button type="submit" class="ml-sm-4" variant="primary">Enviar arquivos</b-button>
            </center>
            
        </b-form>
            
    </b-container>
</template>

<script>
import axios from 'axios';
import config from '../../../config'

export default {
    name: 'Arquivos',
    data() {
        return {
            dados: {},
            menor: '',
            rgFile: null,
            rgFile64: null,
            idUser: window.localStorage.getItem('id'),
            arquivosJaEnviados: window.localStorage.getItem('arquivosJaEnviados')
        }
    },
      methods: {
        encodeImageFileAsURL(elemento, cont){
            //alert(this.arquivosJaEnviados)
            var filesSelected = document.getElementById(elemento).files;
            if (filesSelected.length > 0) {
            var fileToLoad = filesSelected[0];
      
            var fileReader = new FileReader();
            
            /*REMOVE LOCALSTORAGE SETADOS
            window.localStorage.removeItem('rgCandidato')
            window.localStorage.removeItem('cpfCandidato')
            window.localStorage.removeItem('historico')
            window.localStorage.removeItem('bolsa')
            window.localStorage.removeItem('eja')
            window.localStorage.removeItem('medico')
            window.localStorage.removeItem('endereco')
            window.localStorage.removeItem('foto')
            window.localStorage.removeItem('cidadao')
            window.localStorage.removeItem('ensinoMedio')
            window.localStorage.removeItem('rgResponsavel')
            window.localStorage.removeItem('cpfResponsavel')*/
      
            fileReader.onload = function(fileLoadedEvent) {
                var srcData = fileLoadedEvent.target.result; // <--- data: base64

                //window.localStorage.setItem('rg', srcData)
                /*alert(window.localStorage.getItem('rg'))*/

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
                //document.getElementById("base64").innerHTML = window.localStorage.getItem('rg');
            }
            fileReader.readAsDataURL(fileToLoad);
          }
        },
        enviarArquivos(){
            var idUser = window.localStorage.getItem('id'); 
            
            if(this.menor == ''){
                alert('INFORME SE VOCÊ É MENOR DE IDADE!')
            }
            else{
                axios.post(config.server()+'insereDadosArquivos', {
                    idUser: idUser,
                    rgCandidato: window.localStorage.getItem('rgCandidato'),
                    cpfCandidato: window.localStorage.getItem('cpfCandidato'),
                    historico: window.localStorage.getItem('historico'),
                    bolsa: window.localStorage.getItem('bolsa'),
                    eja: window.localStorage.getItem('eja'),
                    medico: window.localStorage.getItem('medico'),
                    endereco: window.localStorage.getItem('endereco'),
                    foto: window.localStorage.getItem('foto'),
                    cidadao: window.localStorage.getItem('cidadao'),
                    ensinoMedio: window.localStorage.getItem('ensinoMedio'),
                    rgResponsavel: window.localStorage.getItem('rgResponsavel'),
                    cpfResponsavel: window.localStorage.getItem('cpfResponsavel'),
                })
                .then((response) =>{
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
                window.localStorage.setItem('arquivosJaEnviados', 1)
                window.location.href = '#/inscricao/estudos'
            }
            
        }
    },
    mounted(){
        if(this.idUser == null){
            window.location.href = '/'
        }
        if(this.arquivosJaEnviados == 1){
            window.location.href = '#/inscricao/estudos'
        }
        window.scrollTo(0, 0);
    }
}
</script>

<style lang="scss">
@import '../../style.scss';

.labelCampo{
    font-size: 109%;
    color: $verdeEscuro;
    font-weight: bold;
    margin-top: 13px;
}
.separa{
    border-top: 1px $rosa solid;
}
/*
.pessoalForm{
    margin-left: 58px;
}
@media (max-width: 767px){
    #pessoalForm{
        margin-left: auto;
    }
}*/
</style>

<template>
    <b-container>
        <h1>TOTAL DE ACERTOS</h1>
        <table class="text-center table table-responsive-sm table-sm table-bordered table-striped">
            <thead>
                <tr>
                    <th class="cabecalho">ÁREAS DO CONHECIMENTO</th>
                    <th class="cabecalho">ACERTOS</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>Matemática</td>
                    <td>{{this.mat}} de 4</td>       
                </tr>
                <tr>
                    <td>Química</td>
                    <td>{{this.qui}} de 4</td>       
                </tr>
                <tr>
                    <td>Física</td>
                    <td>{{this.fis}} de 4</td>       
                </tr>
                <tr>
                    <td>Biologia</td>
                    <td>{{this.bio}} de 4</td>       
                </tr>
                <tr>
                    <td>Geografia</td>
                    <td>{{this.geo}} de 4</td>       
                </tr>
                <tr>
                    <td>História</td>
                    <td>{{this.his}} de 4</td>       
                </tr>
                <tr>
                    <td>Gramática</td>
                    <td>{{this.gra}} de 2</td>       
                </tr>
                <tr>
                    <td>Literatura</td>
                    <td>{{this.lit}} de 2</td>       
                </tr>
                <tr>
                    <td>Inglês</td>
                    <td>{{this.ing}} de 2</td>       
                </tr>
            </tbody>
        </table>
        
        <div>TOTAL: {{this.total}} de 30</div>
        <br>
        <center>
            <div>
                <h4>EM BREVE SERÁ LIBERADO O GABARITO COMPLETO!</h4>
            </div>
        </center>
    </b-container>
</template>

<script>
import axios from 'axios'
import config from '../../../config'

export default {
    data() {
        return{
            idUser: window.localStorage.getItem('id') || window.localStorage.getItem('idDetalhes'),
            lista: {},
            mat: 0,
            qui: 0,
            fis: 0,
            bio: 0,
            geo: 0,
            his: 0,
            gra: 0,
            lit: 0,
            ing: 0,
            total: 0
        }
    },
    mounted(){
        let linkGabaritoSimples = config.server()+'gabaritosimples/'+this.idUser
        axios.get(linkGabaritoSimples).then((response) =>{
            
            this.lista = response.data;  
            this.lista.dados.forEach(item => {
                console.log("retorno: "+item.materia)
                //if(item.materia === 'Gramática') console.log("reconheceu !!")
                //copular contadores
                switch(item.materia){
                    case 'Matemática': 
                        if(item.acertou == 's') this.mat = this.mat + 1
                        break
                    case 'Química': 
                        if(item.acertou == 's') this.qui = this.qui + 1
                        break
                    case 'Física': 
                        if(item.acertou == 's') this.fis = this.fis + 1
                        break
                    case 'Biologia': 
                        if(item.acertou == 's') this.bio = this.bio + 1
                        break
                    case 'Geografia': 
                        if(item.acertou == 's') this.geo = this.geo + 1
                        break
                    case 'História': 
                        if(item.acertou == 's') this.his = this.his + 1
                        break
                    case 'Gramática': 
                        if(item.acertou == 's') this.gra = this.gra + 1
                        break
                    case 'Literatura': 
                        if(item.acertou == 's') this.lit = this.lit + 1
                        break
                    case 'Inglês': 
                        if(item.acertou == 's') this.ing++
                        break
                    default:
                        console.log("diciplina não identificada!")
                }
            }); 

            this.total = this.mat+this.qui+this.fis+this.bio+this.geo+this.his+this.gra+this.lit+this.ing

            console.log("respostas simulado: "+this.lista);

        })
        .catch((error) => {
            console.log(error);
        });
    }
}
</script>
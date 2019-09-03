<template>
    <b-container>
        <h1>Cadastro Simulado</h1>

        <b-form v-on:submit.prevent="enviarPergunta" align-v='center'>
            <div class="">Questão {{listagem.dados[0].qtdPerguntas + 1}}</div>
            <b-form-select v-model="dados.materia" :options="optionsMateria" required></b-form-select>
            <div>Possui imagem? Se sim coloque o link no campo abaixo:</div>
            <b-form-input v-model="dados.linkImg" type="text" placeholder="link da imagem"></b-form-input>
            <b-form-group label="Enunciado">
                <b-form-textarea v-model="dados.enunciado" type="text" rows="10" required placeholder="Escreva a pergunta aqui."></b-form-textarea>
            </b-form-group>
            <table class="table">
                <tr>
                    <th scope="row" class="align-middle">a)</th>
                    <td>
                        <b-form-textarea v-model="dados.resp_a" type="text" rows="3" required placeholder="Escreva a resposta A aqui."></b-form-textarea>
                    </td>
                    <td class="align-middle">
                        <b-form-radio v-model="dados.correta" value="a">Correta</b-form-radio>
                    </td>
                </tr>

                <tr>
                    <th scope="row" class="align-middle">b)</th>
                    <td>
                        <b-form-textarea v-model="dados.resp_b" type="text" rows="3" required placeholder="Escreva a resposta B aqui."></b-form-textarea>
                    </td>
                    <td class="align-middle">
                        <b-form-radio v-model="dados.correta" value="b">Correta</b-form-radio>
                    </td>
                </tr>

                <tr>
                    <th scope="row" class="align-middle">c)</th>
                    <td>
                        <b-form-textarea v-model="dados.resp_c" type="text" rows="3" required placeholder="Escreva a resposta C aqui."></b-form-textarea>
                    </td>
                    <td class="align-middle">
                        <b-form-radio v-model="dados.correta" value="c">Correta</b-form-radio>
                    </td>
                </tr>

                <tr>
                    <th scope="row" class="align-middle">d)</th>
                    <td>
                        <b-form-textarea v-model="dados.resp_d" type="text" rows="3" required placeholder="Escreva a resposta D aqui."></b-form-textarea>
                    </td>
                    <td class="align-middle">
                        <b-form-radio v-model="dados.correta" value="d">Correta</b-form-radio>
                    </td>
                </tr>

                <tr>
                    <th scope="row" class="align-middle">e)</th>
                    <td>
                        <b-form-textarea v-model="dados.resp_e" type="text" rows="3" required placeholder="Escreva a resposta E aqui."></b-form-textarea>
                    </td>
                    <td class="align-middle">
                        <b-form-radio v-model="dados.correta" value="e">Correta</b-form-radio>
                    </td>
                </tr>
            </table>
            

            <b-button class="mt-2" type="submit" variant="primary">Salvar</b-button>
        </b-form>

    </b-container>
</template>

<script>
import axios from 'axios'
import config from '../../../config'

export default {
    name: 'CadastroSimulado',
    data (){
        return{
            dados: {},
            listagem: {},
            optionsMateria: [
                { value: 'Matemática', text: 'Matemática' },
                { value: 'Portugues', text: 'Portugues' },
                { value: 'História', text: 'História' },
                { value: 'Geografia', text: 'Geografia' },
            ],
        }
    },
    methods: {
        enviarPergunta(){
            axios.post(config.server()+'cadastraSimulado', {
                pergunta: this.listagem.dados[0].qtdPerguntas + 1,
                materia: this.dados.materia,
                enunciado: this.dados.enunciado,
                resp_a: this.dados.resp_a,
                resp_b: this.dados.resp_b,
                resp_c: this.dados.resp_c,
                resp_d: this.dados.resp_d,
                resp_e: this.dados.resp_e,
                correta: this.dados.correta,
                img: this.dados.linkImg

            }).then((response) =>{
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
            window.scrollTo(0, 0);
            window.location.reload()
        }
    },
    mounted() {
        axios.get(config.server()+'cadastraSimulado')
        .then((response) =>{
            /*if(this.adm != 1){
                window.location.href = "/"
            }
            else{*/
                //console.log(response.data);
                this.listagem = response.data;   
            //}          
        })
    }
}
</script>
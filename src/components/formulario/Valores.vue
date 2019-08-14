<template>
    <b-container>
        <b-form v-on:submit.prevent="enviarValores">
            <!--formação e estudos-->
            <b-row>
                <b-col sm="12">
                    <center>
                        <h2>VALORES</h2>
                    </center>     
                </b-col>

                <b-col sm="6">
                    <b-form-group label="43) Você se considera racista?">
                        <b-form-radio v-model="dados.racista" name="" value="Sim">
                           Sim.</b-form-radio>
                        <b-form-radio v-model="dados.racista" name="" value="Não">
                           Não.</b-form-radio>
                    </b-form-group>
                </b-col>

                <!--MODELO A SEGUIR SERÁ ALTERADO NAS QUESTOES QUE PERMITE MAIS DE UMA RESPOSTA-->
                <b-col sm="6">
                    <b-form-group label="44) Você conhece alguém racista? (Pode ser escolhido mais de uma opção)">
                        <b-form-checkbox  v-model="dados.parente" value="1" unchecked-value="0">
                            Parentes.
                        </b-form-checkbox>
                        <b-form-checkbox  v-model="dados.amigo" value="1" unchecked-value="0">
                            Amigos (as) ou colegas de escola e/ou de trabalho.
                        </b-form-checkbox>
                        <b-form-checkbox  v-model="dados.vizinho" value="1" unchecked-value="0">
                            Vizinhos (as) e/ou conhecidos.
                        </b-form-checkbox>
                        <b-form-checkbox  v-model="dados.prof" value="1" unchecked-value="0">
                            Professores (as) ou funcionários (as) da escola.
                        </b-form-checkbox>
                        <b-form-checkbox  v-model="dados.pessoa" value="1" unchecked-value="0">
                            Pessoas em geral (nas ruas, nos ambientes públicos etc.).
                        </b-form-checkbox>
                    </b-form-group>
                </b-col>

                <b-col sm="6">
                    <b-form-group label="45) Você já sofreu algum tipo de discriminação? (Pode ser escolhido mais de uma opção)">
                        <b-form-checkbox  v-model="dados.sofreu_econo" value="1" unchecked-value="0">
                            Discriminação econômica.
                        </b-form-checkbox>
                        <b-form-checkbox  v-model="dados.sofreu_etnica" value="1" unchecked-value="0">
                            Discriminação étnica, racial ou de cor.
                        </b-form-checkbox>
                        <b-form-checkbox  v-model="dados.sofreu_genero" value="1" unchecked-value="0">
                            Discriminação de gênero.
                        </b-form-checkbox>
                        <b-form-checkbox  v-model="dados.sofreu_lgbt" value="1" unchecked-value="0">
                             Por ser ou ter sido identificado como LGBTQIA+ (lésbica, gay, bissexual, travesti e transexual, queer, intersexual, assexual e outrxs).
                        </b-form-checkbox>
                        <b-form-checkbox  v-model="dados.sofreu_religiao" value="1" unchecked-value="0">
                            Por causa de sua religião.
                        </b-form-checkbox>
                        <b-form-checkbox  v-model="dados.sofreu_sem_religiao" value="1" unchecked-value="0">
                             Por não ter religião.
                        </b-form-checkbox>
                        <b-form-checkbox  v-model="dados.sofreu_origem" value="1" unchecked-value="0">
                            Por causa do local de seu nascimento (em outra cidade, no interior, em outra região, no exterior etc.).
                        </b-form-checkbox>
                        <b-form-checkbox  v-model="dados.sofreu_idade" value="1" unchecked-value="0">
                            Por causa da sua idade.
                        </b-form-checkbox>
                        <b-form-checkbox  v-model="dados.sofreu_deficiencia" value="1" unchecked-value="0">
                            Por ser pessoa com deficiência física ou mental.
                        </b-form-checkbox>
                        <b-form-checkbox  v-model="dados.sofreu_aparencia" value="1" unchecked-value="0">
                            Por causa de sua aparência física (gordo/a, magro/a, alto/ a, baixo/a etc.).
                        </b-form-checkbox>
                        <b-form-checkbox  v-model="dados.sofreu_moradia" value="1" unchecked-value="0">
                            Por causa do lugar de sua moradia.
                        </b-form-checkbox>
                    </b-form-group>
                </b-col>

                <b-col sm="6">
                    <b-form-group label="46) Você já presenciou algum tipo de discriminação? (Pode ser escolhido mais de uma opção)">
                        <b-form-checkbox  v-model="dados.pre_econo" value="1" unchecked-value="0">
                            Discriminação econômica.
                        </b-form-checkbox>
                        <b-form-checkbox  v-model="dados.pre_etnica" value="1" unchecked-value="0">
                            Discriminação étnica, racial ou de cor.
                        </b-form-checkbox>
                        <b-form-checkbox  v-model="dados.pre_mulher" value="1" unchecked-value="0">
                            Discriminação contra mulheres.
                        </b-form-checkbox>
                        <b-form-checkbox  v-model="dados.pre_lgbt" value="1" unchecked-value="0">
                             Por ser ou ter sido identificado como LGBTQIA+ (lésbica, gay, bissexual, travesti e transexual, queer, intersexual, assexual e outrxs).
                        </b-form-checkbox>
                        <b-form-checkbox  v-model="dados.pre_religiosa" value="1" unchecked-value="0">
                           Discriminação religiosa.
                        </b-form-checkbox>
                        <b-form-checkbox  v-model="dados.pre_origem" value="1" unchecked-value="0">
                             Por causa do local de seu nascimento (em outra cidade, etc)
                        </b-form-checkbox>
                        <b-form-checkbox  v-model="dados.pre_sem_religiao" value="1" unchecked-value="0">
                            Por não ter religião
                        </b-form-checkbox>
                        <b-form-checkbox  v-model="dados.pre_jovens" value="1" unchecked-value="0">
                             Discriminação contra jovens menores de 18 anos.
                        </b-form-checkbox>
                        <b-form-checkbox  v-model="dados.pre_idosos" value="1" unchecked-value="0">
                            Discriminação contra pessoas idosas.
                        </b-form-checkbox>
                        <b-form-checkbox  v-model="dados.pre_deficiencia" value="1" unchecked-value="0">
                            Discriminação contra pessoas com deficiência.
                        </b-form-checkbox>
                        <b-form-checkbox  v-model="dados.pre_fisica" value="1" unchecked-value="0">
                            Por causa da aparência física.
                        </b-form-checkbox>
                        <b-form-checkbox  v-model="dados.pre_moradia" value="1" unchecked-value="0">
                            Por causa do lugar de moradia.
                        </b-form-checkbox>
                    </b-form-group>
                </b-col>

            </b-row>
            <center>
                <b-button class="mt-3" type="submit" variant="primary">Enviar valores</b-button>
            </center>
        </b-form>
    </b-container>
</template>

<script>
import axios from 'axios';
import config from '../../../config'

export default {
name: 'Valores',
data() {
    return {
        dados: {}
    }
},
methods: {
    enviarValores(){
        var idUser = window.localStorage.getItem('id'); 
        var email = window.localStorage.getItem('email'); 
        var nome = window.localStorage.getItem('nome'); 
       
        if(this.dados.racista == null){
            alert('A PERGUNTA 43 É OBRIGATÓRIA!')
        }
        else{
            axios.post(config.server()+'insereDadosValores', {//ALTERAR LINK DE INSERÇÃO
                //email: this.email,
                //nome: this.nome,
                idUser: idUser,
                racista: this.dados.racista,
                parente: this.dados.parente,
                amigo: this.dados.amigo,
                vizinho: this.dados.vizinho,
                prof: this.dados.prof,
                pessoa: this.dados.pessoa,

                sofreu_econo: this.dados.sofreu_econo,
                sofreu_etnica: this.dados.sofreu_etnica,
                sofreu_genero: this.dados.sofreu_genero,
                sofreu_lgbt: this.dados.sofreu_lgbt,
                sofreu_religiao: this.dados.sofreu_religiao,

                sofreu_sem_religiao: this.dados.sofreu_sem_religiao,
                sofreu_origem: this.dados.sofreu_origem,
                sofreu_idade: this.dados.sofreu_idade,
                sofreu_deficiencia: this.dados.sofreu_deficiencia,
                sofreu_aparencia: this.dados.sofreu_aparencia,
                sofreu_moradia: this.dados.sofreu_moradia,

                pre_econo: this.dados.pre_econo,
                pre_etnica: this.dados.pre_etnica,
                pre_mulher: this.dados.pre_mulher,
                pre_lgbt: this.dados.pre_lgbt,

                pre_religiosa: this.dados.pre_religiosa,
                pre_origem: this.dados.pre_origem,
                pre_sem_religiao: this.dados.pre_sem_religiao,
                pre_jovens: this.dados.pre_jovens,
                pre_idosos: this.dados.pre_idosos,
                pre_deficiencia: this.dados.pre_deficiencia,
                pre_fisica: this.dados.pre_fisica,
                pre_moradia: this.dados.pre_moradia,
    
            })
            .then((response) =>{
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
            //window.location.href = config.website()+'inscricao/conclui'
            window.location.href = '#/inscricao/conclui'
            //alert("registro inserido com sucesso!")
        }
        
        
    }
}
}
</script>

<style lang="scss">
@import '../../style.scss';

/*label{
    color: black;
    font-weight: initial;
    font-size: 105%;
}
legend{
    color: $verdeEscuro;
    font-weight: bold;
}
.opcaoSelecao{
    color: black;
    font-weight: initial;
    margin-bottom: 8px;
    font-size: 105%;
}
*/
/*.labelCampo{
    font-size: 109%;
    color: $verdeEscuro;
    font-weight: bold;
    margin-top: 13px;
}
.separa{
    border-top: 1px $rosa solid;
}*/

</style>
<template>
    <b-container>
        <b-form v-on:submit.prevent="enviarValores">
            <!--formação e estudos-->
            <b-row>
                <b-col sm="12">
                    <h3>VALORES</h3>
                </b-col>

                <b-col sm="">
                    <b-form-group label="44) Você se considera racista?">
                        <b-form-radio v-model="dados.racista" name="" value="Sim">
                           Sim.</b-form-radio>
                        <b-form-radio v-model="dados.racista" name="" value="Não">
                           Não.</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col sm="">
                    <b-form-group label="45) Você conhece alguém racista? (Pode ser escolhido mais de uma opção)">
                        <b-form-radio v-model="dados.parente" name="" value="1">
                           Parentes.</b-form-radio>
                        <b-form-radio v-model="dados.amigo" name="" value="1">
                           Amigos (as) ou colegas de escola e/ou de trabalho.</b-form-radio>
                        <b-form-radio v-model="dados.vizinho" name="" value="1">
                           Vizinhos (as) e/ou conhecidos.</b-form-radio>
                        <b-form-radio v-model="dados.prof" name="" value="1">
                            Professores (as) ou funcionários (as) da escola.</b-form-radio>
                        <b-form-radio v-model="dados.pessoa" name="" value="1">
                          Pessoas em geral (nas ruas, nos ambientes públicos etc.).</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col sm="">
                    <b-form-group label="46) Você já sofreu algum tipo de discriminação? (Pode ser escolhido mais de uma opção)">
                        <b-form-radio v-model="dados.sofreu_econo" name="" value="1">
                           Discriminação econômica.</b-form-radio>
                        <b-form-radio v-model="dados.sofreu_etnica" name="" value="1">
                           Discriminação étnica, racial ou de cor.</b-form-radio>
                        <b-form-radio v-model="dados.sofreu_genero" name="" value="1">
                           Discriminação de gênero.</b-form-radio>
                        <b-form-radio v-model="dados.sofreu_lgbt" name="" value="1">
                            Por ser ou ter sido identificado como LGBTQ+ (lésbica, gay, bissexual, travesti e transexual, intersexual).</b-form-radio>
                        <b-form-radio v-model="dados.sofreu_religiao" name="" value="1">
                          Por causa de sua religião.</b-form-radio>
                        <b-form-radio v-model="dados.sofreu_sem_religiao" name="" value="1">
                           Por não ter religião.</b-form-radio>
                        <b-form-radio v-model="dados.sofreu_origem" name="" value="1">
                           Por causa do local de seu nascimento (em outra cidade, no interior, em outra região, no exterior etc.).</b-form-radio>
                        <b-form-radio v-model="dados.sofreu_idade" name="" value="1">
                           Por causa da sua idade.</b-form-radio>
                        <b-form-radio v-model="dados.sofreu_deficiencia" name="" value="1">
                           Por ser pessoa com deficiência física ou mental.</b-form-radio>
                        <b-form-radio v-model="dados.sofreu_aparencia" name="" value="1">
                           Por causa de sua aparência física (gordo/a, magro/a, alto/ a, baixo/a etc.).</b-form-radio>
                        <b-form-radio v-model="dados.sofreu_moradia" name="" value="1">
                           Por causa do lugar de sua moradia.</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col sm="">
                    <b-form-group label="47) Você já presenciou algum tipo de discriminação? (Pode ser escolhido mais de uma opção)">
                        <b-form-radio v-model="dados.pre_econo" name="" value="1">
                           Discriminação econômica.</b-form-radio>
                        <b-form-radio v-model="dados.pre_etnica" name="" value="1">
                           Discriminação étnica, racial ou de cor.</b-form-radio>
                        <b-form-radio v-model="dados.pre_mulher" name="" value="1">
                           Discriminação contra mulheres.</b-form-radio>
                        <b-form-radio v-model="dados.pre_lgbt" name="" value="1">
                            Por ser ou ter sido identificado como LGBTQ+ (lésbica, gay, bissexual, travesti e transexual, intersexual).</b-form-radio>
                        <b-form-radio v-model="dados.pre_religiosa" name="" value="1">
                          Discriminação religiosa.</b-form-radio>
                        <b-form-radio v-model="dados.pre_origem" name="" value="1">
                          Por causa do local de seu nascimento (em outra cidade, etc).</b-form-radio>
                        <b-form-radio v-model="dados.pre_sem_religiao" name="" value="1">
                          Por não ter religião.</b-form-radio>
                        <b-form-radio v-model="dados.pre_jovens" name="" value="1">
                          Discriminação contra jovens menores de 18 anos.</b-form-radio>
                        <b-form-radio v-model="dados.pre_idosos" name="" value="1">
                          Discriminação contra pessoas idosas.</b-form-radio>
                        <b-form-radio v-model="dados.pre_deficiencia" name="" value="1">
                          Discriminação contra pessoas com deficiência.</b-form-radio>
                        <b-form-radio v-model="dados.pre_fisica" name="" value="1">
                          Por causa da aparência física.</b-form-radio>
                        <b-form-radio v-model="dados.pre_moradia" name="" value="1">
                          Por causa do lugar de moradia.</b-form-radio>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-button type="submit" variant="primary">Enviar valores</b-button>
        </b-form>
    </b-container>
</template>

<script>
import axios from 'axios';

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
        //alert("funcionou")
        axios.post('http://localhost:3000/insereDadosValores', {//ALTERAR LINK DE INSERÇÃO
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
        alert("registro inserido com sucesso!")
        
    }
}
}
</script>

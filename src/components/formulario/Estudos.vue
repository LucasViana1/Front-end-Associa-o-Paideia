<template>
    <b-container>
        <b-form v-on:submit.prevent="enviarEstudosFormacao">
            <!--formação e estudos-->
            <b-row>
                <b-col sm="12">
                    <h3>FORMAÇÃO E ESTUDOS</h3>
                </b-col>

                <b-col>
                    <b-form-group label="1) Como fez seus estudos de ensino fundamental (1º ao 9º ano)?">
                        <b-form-radio v-model="dados.ensino_fundamental" name="" value="Integralmente em escola pública">
                            Integralmente em escola pública.</b-form-radio>
                        <b-form-radio v-model="dados.ensino_fundamental" name="" value="Integralmente em escola particular">
                            Integralmente em escola particular.</b-form-radio>
                        <b-form-radio v-model="dados.ensino_fundamental" name="" value="Maior parte em escola pública">
                            Maior parte em escola pública.</b-form-radio>
                        <b-form-radio v-model="dados.ensino_fundamental" name="" value="Em escolas comunitárias ou outro">
                            Em escolas comunitárias ou outro.</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col>
                    <b-form-group label="2) Concluiu o ENSINO FUNDAMENTAL (1º ao 9º ano) em:">
                        <b-form-radio v-model="dados.conclusao_fundamental" name="" value="Curso regular">
                            Curso regular.</b-form-radio>
                        <b-form-radio v-model="dados.conclusao_fundamental" name="" value="Curso supletivo">
                            Curso supletivo</b-form-radio>
                    </b-form-group>
                </b-col>
                
                <b-col>
                    <b-form-group label="3) Como fez seus estudos de ensino médio (1º ao 3º ano)?">
                        <b-form-radio v-model="dados.ensino_medio" name="" value="Integralmente em escola pública">
                           Integralmente em escola pública.</b-form-radio>
                        <b-form-radio v-model="dados.ensino_medio" name="" value="Integralmente em escola particular">
                            Integralmente em escola particular.</b-form-radio>
                        <b-form-radio v-model="dados.ensino_medio" name="" value="Maior parte em escola pública">
                            Maior parte em escola pública.</b-form-radio>
                        <b-form-radio v-model="dados.ensino_medio" name="" value="Maior parte em escola particular">
                            Maior parte em escola particular.</b-form-radio>
                        <b-form-radio v-model="dados.ensino_medio" name="" value="Em escolas comunitárias ou outro">
                            Em escolas comunitárias ou outro.</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col>
                    <b-form-group label="4) Concluiu o ENSINO MÉDIO (antigo 2º grau) em:">
                        <b-form-radio v-model="dados.conclusao_medio" name="" value="Curso regular">
                            Curso regular.</b-form-radio>
                        <b-form-radio v-model="dados.conclusao_medio" name="" value="Curso supletivo">
                            Curso supletivo</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col>
                    <b-form-group label="5) Em que turno você fez o ENSINO MÉDIO?">
                        <b-form-radio v-model="dados.turno_medio" name="" value="Todo diurno">
                           Todo diurno.</b-form-radio>
                        <b-form-radio v-model="dados.turno_medio" name="" value="Todo noturno">
                            Todo noturno.</b-form-radio>
                        <b-form-radio v-model="dados.turno_medio" name="" value="Maior parte diurno.">
                            Maior parte diurno.</b-form-radio>
                        <b-form-radio v-model="dados.turno_medio" name="" value="Maior parte noturno">
                            Maior parte noturno.</b-form-radio>
                        <b-form-radio v-model="dados.turno_medio" name="" value="Outro">
                            Outro.</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col>
                    <b-form-group label="6) Em que ano concluiu o ENSINO MÉDIO (3º GRAU)?">
                        <b-form-radio v-model="dados.ano_medio" name="" value="2017">
                           2017.</b-form-radio>
                        <b-form-radio v-model="dados.ano_medio" name="" value="2016">
                            2016.</b-form-radio>
                        <b-form-radio v-model="dados.ano_medio" name="" value="2015">
                            2015.</b-form-radio>
                        <b-form-radio v-model="dados.ano_medio" name="" value="2014">
                            2014.</b-form-radio>
                        <b-form-radio v-model="dados.ano_medio" name="" value="Outro">
                            Outro.</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col>
                    <b-form-group label="7) Você já realizou algum CURSO TÉCNICO?">
                        <b-form-radio v-model="dados.tecnico" name="" value="Sim">
                            Sim.</b-form-radio>
                        <b-form-radio v-model="dados.tecnico" name="" value="Não">
                            Não.</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col>
                    <b-form-group label="8) Você já frequentou algum cursinho preparatório para o vestibular?">
                        <b-form-radio v-model="dados.fez_cursinho" name="" value="Sim, por menos de um semestre">
                           Sim, por menos de um semestre.</b-form-radio>
                        <b-form-radio v-model="dados.fez_cursinho" name="" value="Sim, por um semestre">
                            Sim, por um semestre.</b-form-radio>
                        <b-form-radio v-model="dados.fez_cursinho" name="" value="Sim, por um ano">
                            Sim, por um ano.</b-form-radio>
                        <b-form-radio v-model="dados.fez_cursinho" name="" value="Sim, por mais de um ano">
                            Sim, por mais de um ano.</b-form-radio>
                        <b-form-radio v-model="dados.fez_cursinho" name="" value="Não">
                            Não.</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col>
                    <b-form-group label="9) Que tipo cursinho preparatório para o vestibular você realizou?">
                        <b-form-radio v-model="dados.tipo_cursinho" name="" value="Cursinho comunitário (mantido por ONGs)">
                           Cursinho comunitário (mantido por ONGs).</b-form-radio>
                        <b-form-radio v-model="dados.tipo_cursinho" name="" value="Cursinho alternativo (mantido por prefeituras)">
                            Cursinho alternativo (mantido por prefeituras).</b-form-radio>
                        <b-form-radio v-model="dados.tipo_cursinho" name="" value="Cursinho particular (que requer mensalidade)">
                            Cursinho particular (que requer mensalidade).</b-form-radio>
                        <b-form-radio v-model="dados.tipo_cursinho" name="" value="Outro">
                            Outro.</b-form-radio>
                        <b-form-radio v-model="dados.tipo_cursinho" name="" value="Nunca participei de um cursinho preparatório">
                            Nunca participei de um cursinho preparatório.</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col>
                    <b-form-group label="10) Caso tenha feito cursinho PARTICULAR:">
                        <b-form-radio v-model="dados.cursinho_particular" name="" value="25%">
                           Com bolsa de 25%.</b-form-radio>
                        <b-form-radio v-model="dados.cursinho_particular" name="" value="50%">
                            Com bolsa de 50%.</b-form-radio>
                        <b-form-radio v-model="dados.cursinho_particular" name="" value="75%">
                            Com bolsa de 75%.</b-form-radio>
                        <b-form-radio v-model="dados.cursinho_particular" name="" value="100%">
                            Com bolsa de 100%.</b-form-radio>
                        <b-form-radio v-model="dados.cursinho_particular" name="" value="integral">
                            Paguei valor integral.</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col>
                    <b-form-group label="11) Quantas vezes você já prestou concurso vestibular?">
                        <b-form-radio v-model="dados.fez_vestibular" name="" value="Nenhuma">
                           Nenhuma.</b-form-radio>
                        <b-form-radio v-model="dados.fez_vestibular" name="" value="Uma vez">
                            Uma vez.</b-form-radio>
                        <b-form-radio v-model="dados.fez_vestibular" name="" value="Duas vezes">
                            Duas vezes.</b-form-radio>
                        <b-form-radio v-model="dados.fez_vestibular" name="" value="Três vezes">
                            Três vezes.</b-form-radio>
                        <b-form-radio v-model="dados.fez_vestibular" name="" value="Quatro vezes ou mais">
                            Quatro vezes ou mais.</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col>
                    <b-form-group label="12) Você já iniciou algum curso superior?">
                        <b-form-radio v-model="dados.superior" name="" value="Sim, mas não conclui">
                           Sim, mas não conclui.</b-form-radio>
                        <b-form-radio v-model="dados.superior" name="" value="Sim, estou cursando">
                            Sim, estou cursando.</b-form-radio>
                        <b-form-radio v-model="dados.superior" name="" value="Sim, mas já conclui">
                            Sim, mas já conclui.</b-form-radio>
                        <b-form-radio v-model="dados.superior" name="" value="Não iniciei nenhum curso superior">
                            Não iniciei nenhum curso superior.</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col sm="">
                    <b-form-group label="13) Área desejada (Ciências Humanas, Biológicas ou Exatas):">
                        <b-form-input v-model="dados.area_desejo" type="text" required placeholder=""></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col sm="">
                    <b-form-group label="14) PRIMEIRA OPÇÃO (Curso e Universidade):">
                        <b-form-input v-model="dados.curso_univ1" type="text" required placeholder=""></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col sm="">
                    <b-form-group label="15) SEGUNDA OPÇÃO (Curso e Universidade):">
                        <b-form-input v-model="dados.curso_univ2" type="text" required placeholder=""></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col sm="">
                    <b-form-group label="16) TERCEIRA OPÇÃO (Curso e Universidade):">
                        <b-form-input v-model="dados.curso_univ3" type="text" required placeholder=""></b-form-input>
                    </b-form-group>
                </b-col>

                <b-col sm="">
                    <b-form-group label="17) Você tem interesse em quais vestibulares abaixo? (Pode ser escolhido mais de uma opção)">
                        
                        <b-form-radio v-model="dados.fuvest" name="" value="1">
                           FUVEST – Universidade de São Paulo, USP.</b-form-radio>
                        <b-form-radio v-model="dados.comvest" name="" value="1">
                           COMVEST – Universidade Estadual de Campinas, UNICAMP.</b-form-radio>
                        <b-form-radio v-model="dados.vunesp" name="" value="1">
                            VUNESP – Universidade Estadual de São Paulo, UNESP.</b-form-radio>
                        <b-form-radio v-model="dados.enem" name="" value="1">
                            ENEM – Exame Nacional do Ensino Médio, FEDERAIS.</b-form-radio>
                        <b-form-radio v-model="dados.fatec" name="" value="1">
                            Centro Paula Souza - Faculdade de Tecnologia de Jundiaí, FATEC.</b-form-radio>
                    
                    </b-form-group>
                </b-col>
            </b-row>
            <b-button type="submit" variant="primary">Enviar estudos e formação</b-button>
        </b-form>
    </b-container>
</template>

<script>
import axios from 'axios';
//CRIAR LIGAÇÃO COM AXIOS.POST
//CRIAR TABELA PARA RECEBER DADOS
//DEFINIR ROTA DE INSERÇÃO NO BANCO DE DADOS NO BACKEND
//REALIZAR TESTES DE AUTENTICIDADE E GARANTIA DOS DADOS INSERIDOS E EVENTUAIS TRATAMENTOS DE ERROS

export default {
    name: 'Estudos',
    data() {
        return {
            //selected: [], // Must be an array reference!
           
            dados: {}
        }
    },
    methods: {
        enviarEstudosFormacao(){
            var idUser = window.localStorage.getItem('id'); 
            //alert("funcionou")
            axios.post('http://localhost:3000/insereDadosEstudos', {
                idUser: idUser,
                ensino_fundamental: this.dados.ensino_fundamental,
                conclusao_fundamental: this.dados.conclusao_fundamental,
                ensino_medio: this.dados.ensino_medio,
                conclusao_medio: this.dados.conclusao_medio,
                turno_medio: this.dados.turno_medio,
                ano_medio: this.dados.ano_medio,
                tecnico: this.dados.tecnico,
                fez_cursinho: this.dados.fez_cursinho,
                tipo_cursinho: this.dados.tipo_cursinho,
                cursinho_particular: this.dados.cursinho_particular,
                fez_vestibular: this.dados.fez_vestibular,
                superior: this.dados.superior,
                area_desejo: this.dados.area_desejo,
                curso_univ1: this.dados.curso_univ1,
                curso_univ2: this.dados.curso_univ2,
                curso_univ3: this.dados.curso_univ3,
               
                fuvest: this.dados.fuvest,
                comvest: this.dados.comvest,
                vunesp: this.dados.vunesp,
                enem: this.dados.enem,
                fatec: this.dados.fatec
 
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

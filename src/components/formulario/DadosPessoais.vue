<template>
    <b-container>
        <b-form v-on:submit.prevent="enviarDadosPessoais">
            <!--dados pessoais-->
            <b-col>
                <h3>DADOS PESSOAIS</h3>
                <b-form-group label="Nome:" label-for="">
                    <b-form-input v-model="dados.nome" type="text" required placeholder="Nome completo"></b-form-input>
                </b-form-group>

                <b-form-group label="Data Nascimento:">
                    <b-form-input v-model="dados.nome" type="date" required placeholder=""></b-form-input>
                </b-form-group>

                <b-form-group label="Cidade Nascimento:" label-for="">
                    <b-form-input v-model="dados.nome" type="text" required placeholder="Nome completo"></b-form-input>
                </b-form-group>

                <!--select para estado-->
                <b-form-select v-model="selected" :options="optionsUF"></b-form-select>

                <b-form-group label="Nome:" label-for="">
                    <b-form-input v-model="dados.nome" type="text" required placeholder="Nome completo"></b-form-input>
                </b-form-group>

                <b-form-group label="Nome:" label-for="">
                    <b-form-input v-model="dados.nome" type="text" required placeholder="Nome completo"></b-form-input>
                </b-form-group>

                <b-form-group label="Nome:" label-for="">
                    <b-form-input v-model="dados.nome" type="text" required placeholder="Nome completo"></b-form-input>
                </b-form-group>

                <b-form-group label="Nome:" label-for="">
                    <b-form-input v-model="dados.nome" type="text" required placeholder="Nome completo"></b-form-input>
                </b-form-group>

                <b-form-group label="Nome:" label-for="">
                    <b-form-input v-model="dados.nome" type="text" required placeholder="Nome completo"></b-form-input>
                </b-form-group>

            </b-col>
            
            <b-button type="submit" variant="primary">Enviar</b-button>
        </b-form>
    </b-container>
</template>

<script>
    export default {
        name: 'DadosPessoais',
        data() {
            return {
                selected: 'SP',
                optionsUF: [
                    { value: 'SP', text: 'SP' },
                    { value: 'AC', text: 'AC' },
                    { value: 'AL', text: 'AL' },
                    { value: 'AP', text: 'AP' },
                    { value: 'AM', text: 'AM' },
                    { value: 'BA', text: 'BA' },
                    { value: 'CE', text: 'CE' },
                    { value: 'DF', text: 'DF' },
                    { value: 'ES', text: 'ES' },
                    { value: 'GO', text: 'GO' },
                    { value: 'MA', text: 'MA' },
                    { value: 'MT', text: 'MT' },
                    { value: 'MS', text: 'MS' },
                    { value: 'MG', text: 'MG' },
                    { value: 'PA', text: 'PA' },
                    { value: 'PB', text: 'PB' },
                    { value: 'PR', text: 'PR' },
                    { value: 'PE', text: 'PE' },
                    { value: 'PI', text: 'PI' },
                    { value: 'RJ', text: 'RJ' },
                    { value: 'RN', text: 'RN' },
                    { value: 'RS', text: 'RS' },
                    { value: 'RO', text: 'RO' },
                    { value: 'RR', text: 'RR' },
                    { value: 'SC', text: 'SC' },
                    { value: 'SE', text: 'SE' },
                    { value: 'TO', text: 'TO'},
                ],
                //etapa: 1,
                dados: {},
                //habilita: true,
                aceitar: false
            }
        },
        methods: {
            enviarDadosPessoais(){}
        }
    }
</script>

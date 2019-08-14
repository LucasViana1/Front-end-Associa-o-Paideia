<template>
    <b-container>
        <b-form v-on:submit.prevent="enviarSocioeconomico">
            <!--socioeconomico-->
            <b-row>
                <b-col sm="12">
                    <center>
                        <h2>SOCIOECONÔMICO</h2>
                    </center>
                </b-col>

                <b-col sm=12 class="campo-obrigatorio mb-3">
                    <u><i>* Campo Obrigatório</i></u>
                </b-col>

                <b-col sm="4">
                    <b-form-group label="18) Quantas pessoas moram com você? (incluindo filhos, irmãos, parentes e amigos)*">
                        <b-form-radio v-model="dados.qtd_pessoas" name="" value="Moro sozinho">
                           Moro sozinho.</b-form-radio>
                        <b-form-radio v-model="dados.qtd_pessoas" name="" value="Dois a três">
                            Dois a três.</b-form-radio>
                        <b-form-radio v-model="dados.qtd_pessoas" name="" value="Quatro a sete">
                            Quatro a sete.</b-form-radio>
                        <b-form-radio v-model="dados.qtd_pessoas" name="" value="Oito a dez">
                            Oito a dez.</b-form-radio>
                        <b-form-radio v-model="dados.qtd_pessoas" name="" value="Mais de dez">
                            Mais de dez.</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col sm="4">
                    <b-form-group label="19) Quantos (as) filhos (as) você tem?*">
                        <b-form-radio v-model="dados.qtd_filhos" name="" value="1">
                           Um (a).</b-form-radio>
                        <b-form-radio v-model="dados.qtd_filhos" name="" value="2">
                            Dois (duas).</b-form-radio>
                        <b-form-radio v-model="dados.qtd_filhos" name="" value="3">
                            Três.</b-form-radio>
                        <b-form-radio v-model="dados.qtd_filhos" name="" value="4 ou mais">
                            Quatro ou mais.</b-form-radio>
                        <b-form-radio v-model="dados.qtd_filhos" name="" value="0">
                            Não tenho filhos (as).</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col sm="4">
                    <b-form-group label="20) A casa onde você mora é?*">
                        <b-form-radio v-model="dados.casa" name="" value="Própria">
                           Própria.</b-form-radio>
                        <b-form-radio v-model="dados.casa" name="" value="Alugada">
                            Alugada.</b-form-radio>
                        <b-form-radio v-model="dados.casa" name="" value="Cedida">
                            Cedida.</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col sm="3">
                    <b-form-group label="21) Sua casa está localizada em?*">
                        <b-form-radio v-model="dados.local_casa" name="" value="Zona rural">
                           Zona rural.</b-form-radio>
                        <b-form-radio v-model="dados.local_casa" name="" value="Zona urbana">
                            Zona urbana.</b-form-radio>
                        <b-form-radio v-model="dados.local_casa" name="" value="Comunidade indígena">
                            Comunidade indígena.</b-form-radio>
                        <b-form-radio v-model="dados.local_casa" name="" value="Comunidade quilombola">
                            Comunidade quilombola.</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col sm="3">
                    <b-form-group label="22) Como você se deslocaria até o Focus Cursinho?*">
                        <b-form-radio v-model="dados.transporte" name="" value="Transporte público">
                           Transporte público.</b-form-radio>
                        <b-form-radio v-model="dados.transporte" name="" value="Carro próprio">
                            Carro próprio.</b-form-radio>
                        <b-form-radio v-model="dados.transporte" name="" value="Dependo da ajuda de vizinhos, parentes ou amigos">
                            Dependo da ajuda de vizinhos, parentes ou amigos.</b-form-radio>
                        <b-form-radio v-model="dados.transporte" name="" value="A pé">
                            A pé.</b-form-radio>
                        <b-form-radio v-model="dados.transporte" name="" value="Outro">
                            Outro.</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col sm="3">
                    <b-form-group label="23) Qual é o nível de escolaridade do seu pai?*">
                        <b-form-radio v-model="dados.escol_pai" name="" value="Da 1ª à 4ª série do Ensino Fundamental (antigo primário)">
                           Da 1ª à 4ª série do Ensino Fundamental (antigo primário).</b-form-radio>
                        <b-form-radio v-model="dados.escol_pai" name="" value="Da 5ª à 8ª série do Ensino Fundamental (antigo ginásio)">
                            Da 5ª à 8ª série do Ensino Fundamental (antigo ginásio).</b-form-radio>
                        <b-form-radio v-model="dados.escol_pai" name="" value="Ensino Médio (antigo 2º grau)">
                           Ensino Médio (antigo 2º grau).</b-form-radio>
                        <b-form-radio v-model="dados.escol_pai" name="" value="Ensino Superior Incompleto">
                            Ensino Superior Incompleto.</b-form-radio>
                        <b-form-radio v-model="dados.escol_pai" name="" value="Ensino Superior Completo">
                            Ensino Superior Completo.</b-form-radio>
                        <b-form-radio v-model="dados.escol_pai" name="" value="Especialização">
                            Especialização.</b-form-radio>
                        <b-form-radio v-model="dados.escol_pai" name="" value="Não estudou">
                            Não estudou.</b-form-radio>
                        <b-form-radio v-model="dados.escol_pai" name="" value="Não sei">
                            Não sei.</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col sm="3">
                    <b-form-group label="24) Qual é o nível de escolaridade da sua mãe?*">
                        <b-form-radio v-model="dados.escol_mae" name="" value="Da 1ª à 4ª série do Ensino Fundamental (antigo primário)">
                           Da 1ª à 4ª série do Ensino Fundamental (antigo primário).</b-form-radio>
                        <b-form-radio v-model="dados.escol_mae" name="" value="Da 5ª à 8ª série do Ensino Fundamental (antigo ginásio)">
                            Da 5ª à 8ª série do Ensino Fundamental (antigo ginásio).</b-form-radio>
                        <b-form-radio v-model="dados.escol_mae" name="" value="Ensino Médio (antigo 2º grau)">
                           Ensino Médio (antigo 2º grau).</b-form-radio>
                        <b-form-radio v-model="dados.escol_mae" name="" value="Ensino Superior Incompleto">
                            Ensino Superior Incompleto.</b-form-radio>
                            <b-form-radio v-model="dados.escol_mae" name="" value="Ensino Superior Completo">
                            Ensino Superior Completo.</b-form-radio>
                        <b-form-radio v-model="dados.escol_mae" name="" value="Especialização">
                            Especialização.</b-form-radio>
                        <b-form-radio v-model="dados.escol_mae" name="" value="Não estudou">
                            Não estudou.</b-form-radio>
                        <b-form-radio v-model="dados.escol_mae" name="" value="Não sei">
                            Não sei.</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col sm="4">
                    <b-form-group label="25) Em que seu pai trabalha ou trabalhou, na maior parte da vida?*">
                        <b-form-radio v-model="dados.trab_pai" name="" value="Na agricultura, no campo, em fazenda ou na pesca.">
                           Na agricultura, no campo, em fazenda ou na pesca.</b-form-radio>
                        <b-form-radio v-model="dados.trab_pai" name="" value="Na indústria">
                           Na indústria.</b-form-radio>
                        <b-form-radio v-model="dados.trab_pai" name="" value="Na construção civil">
                            Na construção civil.</b-form-radio>
                        <b-form-radio v-model="dados.trab_pai" name="" value="No comércio, banco, transporte, hotelaria ou outros serviços">
                            No comércio, banco, transporte, hotelaria ou outros serviços.</b-form-radio>
                        <b-form-radio v-model="dados.trab_pai" name="" value="Funcionário público do governo federal, estadual ou municipal">
                            Funcionário público do governo federal, estadual ou municipal.</b-form-radio>
                        <b-form-radio v-model="dados.trab_pai" name="" value="Profissional liberal, professor ou técnico de nível superior">
                            Profissional liberal, professor ou técnico de nível superior.</b-form-radio>
                        <b-form-radio v-model="dados.trab_pai" name="" value="Trabalhador fora de casa em atividades informais 
                        (pintor, eletricista, encanador, feirante, ambulante, guardador de carros, catador de lixo etc.)">
                            Trabalhador fora de casa em atividades informais (pintor, eletricista, encanador, feirante, ambulante, 
                            guardador de carros, catador de lixo etc.).</b-form-radio>
                        <b-form-radio v-model="dados.trab_pai" name="" value="Trabalha em sua casa em serviços (alfaiataria, cozinha, 
                        aulas particulares, artesanato, carpintaria, marcenaria etc)">
                            Trabalha em sua casa em serviços (alfaiataria, cozinha, aulas particulares, artesanato, carpintaria, 
                            marcenaria etc).</b-form-radio>
                        <b-form-radio v-model="dados.trab_pai" name="" value="Trabalhador doméstico em casa de outras pessoas (faxineiro, 
                        cozinheiro, mordomo, motorista particular, jardineiro, vigia, acompanhante de idosos/as etc.)">
                            Trabalhador doméstico em casa de outras pessoas (faxineiro, cozinheiro, mordomo, motorista particular, 
                            jardineiro, vigia, acompanhante de idosos/as etc.).</b-form-radio>
                        <b-form-radio v-model="dados.trab_pai" name="" value="No lar (sem remuneração)">
                            No lar (sem remuneração).</b-form-radio>
                        <b-form-radio v-model="dados.trab_pai" name="" value="Não trabalha">
                            Não trabalha.</b-form-radio>
                        <b-form-radio v-model="dados.trab_pai" name="" value="Não sei">
                            Não sei.</b-form-radio>
                        <b-form-radio v-model="dados.trab_pai" name="" value="Outro">
                            Outro.</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col sm="4">
                    <b-form-group label="26) Em que sua mãe trabalha ou trabalhou, na maior parte da vida?*">
                        <b-form-radio v-model="dados.trab_mae" name="" value="Na agricultura, no campo, em fazenda ou na pesca.">
                           Na agricultura, no campo, em fazenda ou na pesca.</b-form-radio>
                        <b-form-radio v-model="dados.trab_mae" name="" value="Na indústria">
                           Na indústria.</b-form-radio>
                        <b-form-radio v-model="dados.trab_mae" name="" value="Na construção civil">
                            Na construção civil.</b-form-radio>
                        <b-form-radio v-model="dados.trab_mae" name="" value="No comércio, banco, transporte, hotelaria ou outros serviços">
                            No comércio, banco, transporte, hotelaria ou outros serviços.</b-form-radio>
                        <b-form-radio v-model="dados.trab_mae" name="" value="Como funcionária do governo federal, estadual ou municipal">
                            Como funcionária do governo federal, estadual ou municipal</b-form-radio>
                        <b-form-radio v-model="dados.trab_mae" name="" value="Profissional liberal, professora ou técnica de nível superior">
                            Profissional liberal, professora ou técnica de nível superior.</b-form-radio>
                        <b-form-radio v-model="dados.trab_mae" name="" value="Trabalhadora fora de casa em atividades informais 
                        (feirante, ambulante, guardadora de carros, catadora de lixo etc.)">
                            Trabalhadora fora de casa em atividades informais (feirante, ambulante, guardadora de carros, catadora 
                            de lixo etc.)</b-form-radio>
                        <b-form-radio v-model="dados.trab_mae" name="" value="Trabalha em sua casa em serviços (costura, aulas particulares, cozinha, artesanato etc)">
                            Trabalha em sua casa em serviços (costura, aulas particulares, cozinha, artesanato etc)</b-form-radio>
                        <b-form-radio v-model="dados.trab_mae" name="" value="Como trabalhadora doméstica em casa de outras 
                        pessoas (cozinheira, arrumadeira, governanta, babá, lavadeira, faxineira, acompanhante de idosos/as etc.)">
                            Como trabalhadora doméstica em casa de outras pessoas (cozinheira, arrumadeira, governanta, babá, 
                            lavadeira, faxineira, acompanhante de idosos/as etc.)</b-form-radio>
                        <b-form-radio v-model="dados.trab_mae" name="" value="No lar (sem remuneração)">
                            No lar (sem remuneração).</b-form-radio>
                        <b-form-radio v-model="dados.trab_mae" name="" value="Não trabalha">
                            Não trabalha.</b-form-radio>
                        <b-form-radio v-model="dados.trab_mae" name="" value="Não sei">
                            Não sei.</b-form-radio>
                        <b-form-radio v-model="dados.trab_mae" name="" value="Outro">
                            Outro.</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col sm="4">
                    <b-form-group label="27) Em que você trabalha atualmente?*">
                        <b-form-radio v-model="dados.trab_candidato" name="" value="Na agricultura, no campo, em fazenda ou na pesca.">
                           Na agricultura, no campo, em fazenda ou na pesca.</b-form-radio>
                        <b-form-radio v-model="dados.trab_candidato" name="" value="Na indústria">
                           Na indústria.</b-form-radio>
                        <b-form-radio v-model="dados.trab_candidato" name="" value="Na construção civil">
                            Na construção civil.</b-form-radio>
                        <b-form-radio v-model="dados.trab_candidato" name="" value="No comércio, banco, transporte, hotelaria ou outros serviços">
                            No comércio, banco, transporte, hotelaria ou outros serviços.</b-form-radio>
                        <b-form-radio v-model="dados.trab_candidato" name="" value="Funcionário público do governo federal, estadual ou municipal">
                            Funcionário (a) público do governo federal, estadual ou municipal.</b-form-radio>
                        <b-form-radio v-model="dados.trab_candidato" name="" value="Profissional liberal, professor ou técnico de nível superior">
                            Profissional liberal, professor (a) ou técnico (a) de nível superior.</b-form-radio>
                        <b-form-radio v-model="dados.trab_candidato" name="" value="Trabalhador fora de casa em atividades 
                        informais (pintor, eletricista, encanador, feirante, ambulante, guardador de carros, catador de lixo etc.)">
                            Trabalhador fora de casa em atividades informais (pintor, eletricista, encanador, feirante, ambulante, 
                            guardador de carros, catador de lixo etc.).</b-form-radio>
                        <b-form-radio v-model="dados.trab_candidato" name="" value="Trabalha em sua casa em serviços (alfaiataria, 
                        cozinha, aulas particulares, artesanato, carpintaria, marcenaria etc)">
                            Trabalha em sua casa em serviços (alfaiataria, cozinha, aulas particulares, artesanato, carpintaria, 
                            marcenaria etc).</b-form-radio>
                        <b-form-radio v-model="dados.trab_candidato" name="" value="Trabalhador doméstico em casa de outras pessoas 
                        (faxineiro, cozinheiro, mordomo, motorista particular, jardineiro, vigia, acompanhante de idosos/as etc.)">
                            Trabalhador doméstico em casa de outras pessoas (faxineiro, cozinheiro, mordomo, motorista particular, 
                            jardineiro, vigia, acompanhante de idosos/as etc.).</b-form-radio>
                        <b-form-radio v-model="dados.trab_candidato" name="" value="No lar (sem remuneração)">
                            No lar (sem remuneração).</b-form-radio>
                        <b-form-radio v-model="dados.trab_candidato" name="" value="Não trabalho">
                            Não trabalho.</b-form-radio>
                        <b-form-radio v-model="dados.trab_candidato" name="" value="Outro">
                            Outro.</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col sm="6">
                    <b-form-group label="28) Quantas pessoas contribuem para a obtenção dessa renda familiar?*">
                        <b-form-radio v-model="dados.pessoas_renda" name="" value="1">
                           Uma.</b-form-radio>
                        <b-form-radio v-model="dados.pessoas_renda" name="" value="2">
                            Duas</b-form-radio>
                        <b-form-radio v-model="dados.pessoas_renda" name="" value="3">
                            Três</b-form-radio>
                        <b-form-radio v-model="dados.pessoas_renda" name="" value="4">
                            Quatro.</b-form-radio>
                        <b-form-radio v-model="dados.pessoas_renda" name="" value="5 ou mais">
                            Cinco ou mais.</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col sm="6">
                    <b-form-group label="29) Somando a sua renda com a renda das pessoas que moram com você, quanto é,aproximadamente, a renda familiar mensal?*">
                        <b-form-radio v-model="dados.renda_total" name="" value="Nenhuma renda">
                           Nenhuma renda.</b-form-radio>
                        <b-form-radio v-model="dados.renda_total" name="" value="Até 1 salário mínimo (até R$ 954,00)">
                            Até 1 salário mínimo (até R$ 998,00).</b-form-radio>
                        <b-form-radio v-model="dados.renda_total" name="" value="De 1 a 3 salários mínimos (de R$ 954,00 até R$ 2.862,00)">
                            De 1 a 3 salários mínimos (de R$ 998,00 até R$ 2.994,00).</b-form-radio>
                        <b-form-radio v-model="dados.renda_total" name="" value="De 3 a 6 salários mínimos (de R$ 2.862,01 até R$ 5.724,00)">
                            De 3 a 6 salários mínimos (de R$ 2.994,01 até R$ 5.988,00).</b-form-radio>
                        <b-form-radio v-model="dados.renda_total" name="" value="De 6 a 9 salários mínimos (de R$ 5.724,01 até R$ 8.586,00)">
                           De 6 a 9 salários mínimos (de R$ 5.988,01 até R$ 8.982,00).</b-form-radio>
                        <b-form-radio v-model="dados.renda_total" name="" value="De 9 a 12 salários mínimos (de R$ 8.586,01 até R$ 11.448,00)">
                            De 9 a 12 salários mínimos (de R$ 8.982,01 até R$ 11.976,00).</b-form-radio>
                        <b-form-radio v-model="dados.renda_total" name="" value="De 12 a 15 salários mínimos (de R$ 11.448,01 até R$ 14.310,00)">
                            De 12 a 15 salários mínimos (de R$ 11.976,01 até R$ 14.970,00).</b-form-radio>
                        <b-form-radio v-model="dados.renda_total" name="" value="Mais de 15 salários mínimos (mais de R$ 14.310,01)">
                            Mais de 15 salários mínimos (mais de R$ 14.970,01).</b-form-radio>

                    </b-form-group>
                </b-col>

                <!--CONTINUAR DAQ-->
                <b-form-group sm="12" label="30) Quais e quantos dos itens abaixo há em sua casa?*" label-for=""></b-form-group>
                <b-col sm="12">
                    <b-row>
                        <b-form-group class="col-sm-4" >
                            <div class="opcaoSelecao"><b>a)</b> TV:</div>
                            <b-form-radio v-model="dados.tv" value="1">1</b-form-radio>
                            <b-form-radio v-model="dados.tv" value="2">2</b-form-radio>
                            <b-form-radio v-model="dados.tv" value="3 ou mais">3 ou mais</b-form-radio>
                            <b-form-radio v-model="dados.tv" value="Não possuo">Não possuo</b-form-radio>
                        </b-form-group>
                        
                        <b-form-group class="col-sm-4">
                            <div class="opcaoSelecao"><b>b)</b> Computador/Notebook:</div>
                            <b-form-radio v-model="dados.pc" value="1">1</b-form-radio>
                            <b-form-radio v-model="dados.pc" value="2">2</b-form-radio>
                            <b-form-radio v-model="dados.pc" value="3 ou mais">3 ou mais</b-form-radio>
                            <b-form-radio v-model="dados.pc" value="Não possuo">Não possuo</b-form-radio>
                        </b-form-group>

                        <b-form-group class="col-sm-4">
                            <div class="opcaoSelecao"><b>c)</b> Geladeira:</div>
                            <b-form-radio v-model="dados.geladeira" value="1">1</b-form-radio>
                            <b-form-radio v-model="dados.geladeira" value="2">2</b-form-radio>
                            <b-form-radio v-model="dados.geladeira" value="3 ou mais">3 ou mais</b-form-radio>
                            <b-form-radio v-model="dados.geladeira" value="Não possuo">Não possuo</b-form-radio>
                        </b-form-group>

                        <!--<b-form-group class="col-sm-4">
                            <div class="opcaoSelecao"><b>d)</b> Acesso a Internet:</div>
                            <b-form-radio v-model="dados.acesso_internet" value="1">1</b-form-radio>
                            <b-form-radio v-model="dados.acesso_internet" value="2">2</b-form-radio>
                            <b-form-radio v-model="dados.acesso_internet" value="3 ou mais">3 ou mais</b-form-radio>
                            <b-form-radio v-model="dados.acesso_internet" value="Não possuo">Não possuo</b-form-radio>
                        </b-form-group>-->

                        <b-form-group class="col-sm-4">
                            <div class="opcaoSelecao"><b>d)</b>Videocassete e/ou DVD:</div>
                            <b-form-radio v-model="dados.dvd" value="1">1</b-form-radio>
                            <b-form-radio v-model="dados.dvd" value="2">2</b-form-radio>
                            <b-form-radio v-model="dados.dvd" value="3 ou mais">3 ou mais</b-form-radio>
                            <b-form-radio v-model="dados.dvd" value="Não possuo">Não possuo</b-form-radio>
                        </b-form-group>

                        <b-form-group class="col-sm-4">
                            <div class="opcaoSelecao"><b>e)</b> Automóvel:</div>
                            <b-form-radio v-model="dados.automovel" value="1">1</b-form-radio>
                            <b-form-radio v-model="dados.automovel" value="2">2</b-form-radio>
                            <b-form-radio v-model="dados.automovel" value="3 ou mais">3 ou mais</b-form-radio>
                            <b-form-radio v-model="dados.automovel" value="Não possuo">Não possuo</b-form-radio>
                        </b-form-group>

                        <b-form-group  class="col-sm-4">
                            <div class="opcaoSelecao"><b>f)</b> Telefone Fixo:</div>
                            <b-form-radio v-model="dados.tel_fixo" value="1">1</b-form-radio>
                            <b-form-radio v-model="dados.tel_fixo" value="2">2</b-form-radio>
                            <b-form-radio v-model="dados.tel_fixo" value="3 ou mais">3 ou mais</b-form-radio>
                            <b-form-radio v-model="dados.tel_fixo" value="Não possuo">Não possuo</b-form-radio>
                        </b-form-group>

                        <b-form-group class="col-sm-4">
                            <div class="opcaoSelecao"><b>g)</b>TV por Assinatura:</div>
                            <b-form-radio v-model="dados.tv_ass" value="1">1</b-form-radio>
                            <b-form-radio v-model="dados.tv_ass" value="2">2</b-form-radio>
                            <b-form-radio v-model="dados.tv_ass" value="3 ou mais">3 ou mais</b-form-radio>
                            <b-form-radio v-model="dados.tv_ass" value="Não possuo">Não possuo</b-form-radio>
                        </b-form-group>

                        <b-form-group class="col-sm-4">
                            <div class="opcaoSelecao"><b>h)</b> Rádio:</div>
                            <b-form-radio v-model="dados.radio" value="1">1</b-form-radio>
                            <b-form-radio v-model="dados.radio" value="2">2</b-form-radio>
                            <b-form-radio v-model="dados.radio" value="3 ou mais">3 ou mais</b-form-radio>
                            <b-form-radio v-model="dados.radio" value="Não possuo">Não possuo</b-form-radio>
                        </b-form-group>

                        <b-form-group class="col-sm-4">
                            <div class="opcaoSelecao"><b>i)</b> Máquina de lavar roupa:</div>
                            <b-form-radio v-model="dados.lava_roupa" value="1">1</b-form-radio>
                            <b-form-radio v-model="dados.lava_roupa" value="2">2</b-form-radio>
                            <b-form-radio v-model="dados.lava_roupa" value="3 ou mais">3 ou mais</b-form-radio>
                            <b-form-radio v-model="dados.lava_roupa" value="Não possuo">Não possuo</b-form-radio>
                        </b-form-group>

                        <b-form-group class="col-sm-4">
                            <div class="opcaoSelecao"><b>j)</b> Celular:</div>
                            <b-form-radio v-model="dados.celular" value="1">1</b-form-radio>
                            <b-form-radio v-model="dados.celular" value="2">2</b-form-radio>
                            <b-form-radio v-model="dados.celular" value="3 ou mais">3 ou mais</b-form-radio>
                            <b-form-radio v-model="dados.celular" value="Não possuo">Não possuo</b-form-radio>
                        </b-form-group>

                        <b-form-group class="col-sm-4">
                            <div class="opcaoSelecao"><b>k)</b> Máquina Lavar Louça:</div>
                            <b-form-radio v-model="dados.lava_louca" value="1">1</b-form-radio>
                            <b-form-radio v-model="dados.lava_louca" value="2">2</b-form-radio>
                            <b-form-radio v-model="dados.lava_louca" value="3 ou mais">3 ou mais</b-form-radio>
                            <b-form-radio v-model="dados.lava_louca" value="Não possuo">Não possuo</b-form-radio>
                        </b-form-group>
                    </b-row>  
                </b-col>

                <b-col sm="12 mt-4">
                    <b-form-group label="31) Você trabalha ou já trabalhou? Se selecionou 'Não', continue a partir da questão 36*">
                        <b-form-radio v-model="dados.trab_atual" name="" value="Sim">
                           Sim.</b-form-radio>
                        <b-form-radio v-model="dados.trab_atual" name="" value="Não">
                           Não.</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col v-show="this.dados.trab_atual != 'Não'" cols="12"> 
                    <b-form-group label="32) Indique o grau de importância de cada um dos motivos abaixo na sua decisão de trabalhar:" label-for=""></b-form-group>
                    <b-col sm="12">
                        <b-row>
                            <b-form-group class="col-sm-6">
                                <div class="opcaoSelecao"><b>a)</b> Ajudar nas despesas com a casa:</div>
                                <b-form-radio v-model="dados.trab_despesas" value="0 (nenhuma importância)">0 (nenhuma importância)</b-form-radio>
                                <b-form-radio v-model="dados.trab_despesas" value="1">1</b-form-radio>
                                <b-form-radio v-model="dados.trab_despesas" value="2">2</b-form-radio>
                                <b-form-radio v-model="dados.trab_despesas" value="3">3</b-form-radio>
                                <b-form-radio v-model="dados.trab_despesas" value="4">4</b-form-radio>
                                <b-form-radio v-model="dados.trab_despesas" value="5 (maior importância)">5 (maior importância)</b-form-radio>
                            </b-form-group>
                            
                            <b-form-group class="col-sm-6">
                                <div class="opcaoSelecao"><b>b)</b> Adquirir experiência:</div>
                                <b-form-radio v-model="dados.trab_experi" value="0 (nenhuma importância)">0 (nenhuma importância)</b-form-radio>
                                <b-form-radio v-model="dados.trab_experi" value="1">1</b-form-radio>
                                <b-form-radio v-model="dados.trab_experi" value="2">2</b-form-radio>
                                <b-form-radio v-model="dados.trab_experi" value="3">3</b-form-radio>
                                <b-form-radio v-model="dados.trab_experi" value="4">4</b-form-radio>
                                <b-form-radio v-model="dados.trab_experi" value="5 (maior importância)">5 (maior importância)</b-form-radio>
                            </b-form-group>
                            
                            <b-form-group class="col-sm-6">
                                <div class="opcaoSelecao"><b>c)</b> Custear/ pagar meus estudos:</div>
                                <b-form-radio v-model="dados.trab_p_estudos" value="0 (nenhuma importância)">0 (nenhuma importância)</b-form-radio>
                                <b-form-radio v-model="dados.trab_p_estudos" value="1">1</b-form-radio>
                                <b-form-radio v-model="dados.trab_p_estudos" value="2">2</b-form-radio>
                                <b-form-radio v-model="dados.trab_p_estudos" value="3">3</b-form-radio>
                                <b-form-radio v-model="dados.trab_p_estudos" value="4">4</b-form-radio>
                                <b-form-radio v-model="dados.trab_p_estudos" value="5 (maior importância)">5 (maior importância)</b-form-radio>
                            </b-form-group>
                            
                            <b-form-group class="col-sm-6">
                                <div class="opcaoSelecao"><b>d)</b> Sustentar minha família (esposo/a, filhos/as etc.):</div>
                                <b-form-radio v-model="dados.trab_sustento" value="0 (nenhuma importância)">0 (nenhuma importância)</b-form-radio>
                                <b-form-radio v-model="dados.trab_sustento" value="1">1</b-form-radio>
                                <b-form-radio v-model="dados.trab_sustento" value="2">2</b-form-radio>
                                <b-form-radio v-model="dados.trab_sustento" value="3">3</b-form-radio>
                                <b-form-radio v-model="dados.trab_sustento" value="4">4</b-form-radio>
                                <b-form-radio v-model="dados.trab_sustento" value="5 (maior importância)">5 (maior importância)</b-form-radio>
                            </b-form-group>
                            
                            <b-form-group class="col-sm-6">
                                <div class="opcaoSelecao"><b>e)</b> Ser independente (ganhar meu próprio dinheiro):</div>
                                <b-form-radio v-model="dados.trab_independente" value="0 (nenhuma importância)">0 (nenhuma importância)</b-form-radio>
                                <b-form-radio v-model="dados.trab_independente" value="1">1</b-form-radio>
                                <b-form-radio v-model="dados.trab_independente" value="2">2</b-form-radio>
                                <b-form-radio v-model="dados.trab_independente" value="3">3</b-form-radio>
                                <b-form-radio v-model="dados.trab_independente" value="4">4</b-form-radio>
                                <b-form-radio v-model="dados.trab_independente" value="5 (maior importância)">5 (maior importância)</b-form-radio>
                            </b-form-group>
                        </b-row>
                    </b-col>

                    <b-row>
                        <b-col sm="4">
                            <b-form-group label="33) Quantas horas semanais você trabalha?">
                                <b-form-radio v-model="dados.trab_horas" name="" value="Sem jornada fixa, até 10 horas semanais">
                                Sem jornada fixa, até 10 horas semanais.</b-form-radio>
                                <b-form-radio v-model="dados.trab_horas" name="" value="De 11 a 20 horas semanais">
                                    De 11 a 20 horas semanais.</b-form-radio>
                                <b-form-radio v-model="dados.trab_horas" name="" value="De 21 a 30 horas semanais">
                                    De 21 a 30 horas semanais.</b-form-radio>
                                <b-form-radio v-model="dados.trab_horas" name="" value="De 31 a 40 horas semanais">
                                    De 31 a 40 horas semanais.</b-form-radio>
                                <b-form-radio v-model="dados.trab_horas" name="" value="Mais de 40 horas semanais">
                                    Mais de 40 horas semanais.</b-form-radio>
                            </b-form-group>
                        </b-col>

                        <b-col sm="4">
                            <b-form-group label="34) Como você avalia ter estudado e trabalhado durante seus estudos?">
                                <b-form-radio v-model="dados.estuda_e_trab" name="" value="Atrapalhou meus estudos">
                                Atrapalhou meus estudos.</b-form-radio>
                                <b-form-radio v-model="dados.estuda_e_trab" name="" value="Possibilitou meus estudos">
                                    Possibilitou meus estudos</b-form-radio>
                                <b-form-radio v-model="dados.estuda_e_trab" name="" value="Possibilitou meu crescimento pessoal">
                                    Possibilitou meu crescimento pessoal</b-form-radio>
                                <b-form-radio v-model="dados.estuda_e_trab" name="" value="Não atrapalhou meus estudos">
                                    Não atrapalhou meus estudos.</b-form-radio>
                            </b-form-group>
                        </b-col>

                        <b-col sm="4">
                            <b-form-group label="35) Qual principal motivo faria você voltar a estudar ou continuar estudando?">
                                <b-form-radio v-model="dados.motivo_estudar" name="" value="Conseguir um emprego">
                                Conseguir um emprego.</b-form-radio>
                                <b-form-radio v-model="dados.motivo_estudar" name="" value="Progredir no emprego atual">
                                    Progredir no emprego atual</b-form-radio>
                                <b-form-radio v-model="dados.motivo_estudar" name="" value="Conseguir um emprego melhor">
                                    Conseguir um emprego melhor</b-form-radio>
                                <b-form-radio v-model="dados.motivo_estudar" name="" value="Adquirir mais conhecimento, ficar atualizado">
                                    Adquirir mais conhecimento, ficar atualizado.</b-form-radio>
                                <b-form-radio v-model="dados.motivo_estudar" name="" value="Atender à expectativa de meus familiares sobre meus estudos">
                                    Atender à expectativa de meus familiares sobre meus estudos.</b-form-radio>
                                <b-form-radio v-model="dados.motivo_estudar" name="" value="Não pretendo voltar a estudar">
                                    Não pretendo voltar a estudar.</b-form-radio>
                            </b-form-group>
                        </b-col>
                    </b-row>
                </b-col>

                <b-col sm="4">
                    <b-form-group label="36) Você cursa ou já cursou a Educação de Jovens e Adultos – EJA?*">
                        <b-form-radio v-model="dados.eja" name="" value="Sim">
                           Sim.</b-form-radio>
                        <b-form-radio v-model="dados.eja" name="" value="Não">
                            Não</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col sm="4">
                    <b-form-group label="37) Como é ou era o curso de EJA que você frequenta ou frequentou?*">
                        <b-form-radio v-model="dados.eja_tipo" name="" value="Curso presencial em escola pública">
                           Curso presencial em escola pública.</b-form-radio>
                        <b-form-radio v-model="dados.eja_tipo" name="" value="Curso presencial em escola privada">
                           Curso presencial em escola privada</b-form-radio>
                        <b-form-radio v-model="dados.eja_tipo" name="" value="Curso presencial na empresa em que trabalha, instituição filantrópica ou religiosa">
                            Curso presencial na empresa em que trabalha, instituição filantrópica ou religiosa</b-form-radio>
                        <b-form-radio v-model="dados.eja_tipo" name="" value="Curso a distância (via rádio, televisão, internet, correio, com apostilas)">
                            Curso a distância (via rádio, televisão, internet, correio, com apostilas).</b-form-radio>
                        <b-form-radio v-model="dados.eja_tipo" name="" value="Curso semi-presencial em escola pública">
                            Curso semi-presencial em escola pública.</b-form-radio>
                        <b-form-radio v-model="dados.eja_tipo" name="" value="Curso semi-presencial em escola privada">
                            Curso semi-presencial em escola privada.</b-form-radio>
                        <b-form-radio v-model="dados.eja_tipo" name="" value="Não fiz essa modalidade de curso">
                            Não fiz essa modalidade de curso.</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col sm="4">
                    <b-form-group label="38) Possui internet na sua casa?*">
                        <b-form-radio v-model="dados.tem_internet" name="" value="Sim">
                           Sim.</b-form-radio>
                        <b-form-radio v-model="dados.tem_internet" name="" value="Não">
                            Não.</b-form-radio>
                    </b-form-group>
                </b-col>

<!--
                <b-col sm="4">
                    <b-form-group label="39) Possui computador na sua casa?*">
                        <b-form-radio v-model="dados.tem_computador" name="" value="Não possuo computador">
                           Não possuo computador.</b-form-radio>
                        <b-form-radio v-model="dados.tem_computador" name="" value="Possuo apenas um sem acesso à internet">
                            Possuo apenas um sem acesso à internet</b-form-radio>
                        <b-form-radio v-model="dados.tem_computador" name="" value="Possuo apenas um com acesso à internet">
                           Possuo apenas um com acesso à internet</b-form-radio>
                        <b-form-radio v-model="dados.tem_computador" name="" value="Possuo mais de um sem acesso à internet">
                            Possuo mais de um sem acesso à internet.</b-form-radio>
                        <b-form-radio v-model="dados.tem_computador" name="" value="Possuo mais de um com acesso à internet">
                            Possuo mais de um com acesso à internet.</b-form-radio>
                    </b-form-group>
                </b-col>
-->
                <b-col sm="4">
                    <b-form-group label="39) Como acessa a internet?*">
                        <b-form-radio v-model="dados.acesso_internet" name="" value="Não tenho acesso">
                           Não tenho acesso.</b-form-radio>
                        <b-form-radio v-model="dados.acesso_internet" name="" value="Tenho acesso pelo meu celular móvel, apenas">
                            Tenho acesso pelo meu celular móvel, apenas</b-form-radio>
                        <b-form-radio v-model="dados.acesso_internet" name="" value="Tenho acesso pelo meu celular móvel e computador de mesa, apenas">
                            Tenho acesso pelo meu celular móvel e computador de mesa, apenas</b-form-radio>
                        <b-form-radio v-model="dados.acesso_internet" name="" value="Tenho acesso pelo meu computador de mesa, apenas">
                            Tenho acesso pelo meu computador de mesa, apenas.</b-form-radio>
                        <b-form-radio v-model="dados.acesso_internet" name="" value="Tenho acesso pelo meu celular móvel, computador de mesa, tablet e notebook">
                            Tenho acesso pelo meu celular móvel, computador de mesa, tablet e notebook.</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col sm="4">
                    <b-form-group label="40) Assinale abaixo a(s) atividade(s) ou o(s) curso(s) que você realiza ou realizou.">
                        <b-form-checkbox  v-model="dados.curso_lingua" value="1" unchecked-value="0">
                            Curso de língua estrangeira.
                        </b-form-checkbox>
                        <b-form-checkbox  v-model="dados.curso_info" value="1" unchecked-value="0">
                            Curso de computação ou Informática.
                        </b-form-checkbox>
                        <b-form-checkbox  v-model="dados.curso_prepara" value="1" unchecked-value="0">
                            Curso preparatório para o vestibular (cursinho).
                        </b-form-checkbox>
                        <b-form-checkbox  v-model="dados.curso_tecnico" value="1" unchecked-value="0">
                            Curso técnico.
                        </b-form-checkbox>
                        <b-form-checkbox  v-model="dados.curso_outro" value="1" unchecked-value="0">
                           Outros.
                        </b-form-checkbox>
                    </b-form-group>
                </b-col>

                
                <b-col sm="12">
                    <b-row>
                        <b-form-group class="col-12" label="41) Com qual frequência você lê:*"></b-form-group>
                        <b-form-group class="col-sm-6">
                            <div class="opcaoSelecao"><b>a)</b> Jornais:</div>
                            <b-form-radio v-model="dados.jornal" value="Frequentemente">Frequentemente</b-form-radio>
                            <b-form-radio v-model="dados.jornal" value="Às vezes">Às vezes</b-form-radio>
                            <b-form-radio v-model="dados.jornal" value="Nunca">Nunca</b-form-radio>
                        </b-form-group>
                        
                        <b-form-group class="col-sm-6">
                            <div class="opcaoSelecao"><b>b)</b> Sites e matérias na Internet:</div>
                            <b-form-radio v-model="dados.sites" value="Frequentemente">Frequentemente</b-form-radio>
                            <b-form-radio v-model="dados.sites" value="Às vezes">Às vezes</b-form-radio>
                            <b-form-radio v-model="dados.sites" value="Nunca">Nunca</b-form-radio>
                        </b-form-group>
                        
                        <b-form-group class="col-sm-6">
                            <div class="opcaoSelecao"><b>c)</b> Dicionários, enciclopédias e manuais:</div>
                            <b-form-radio v-model="dados.manuais" value="Frequentemente">Frequentemente</b-form-radio>
                            <b-form-radio v-model="dados.manuais" value="Às vezes">Às vezes</b-form-radio>
                            <b-form-radio v-model="dados.manuais" value="Nunca">Nunca</b-form-radio>
                        </b-form-group>
                        
                        <b-form-group class="col-sm-6">
                            <div class="opcaoSelecao"><b>d)</b> Livros de ficção (romances, contos, poesias etc.):</div>
                            <b-form-radio v-model="dados.ficcao" value="Frequentemente">Frequentemente</b-form-radio>
                            <b-form-radio v-model="dados.ficcao" value="Às vezes">Às vezes</b-form-radio>
                            <b-form-radio v-model="dados.ficcao" value="Nunca">Nunca</b-form-radio>
                        </b-form-group>
                        
                        <b-form-group class="col-sm-6">
                            <div class="opcaoSelecao"><b>e)</b> Revistas sobre saúde (Boa Saúde, Saúde, Vida Simples etc.):</div>
                            <b-form-radio v-model="dados.saude" value="Frequentemente">Frequentemente</b-form-radio>
                            <b-form-radio v-model="dados.saude" value="Às vezes">Às vezes</b-form-radio>
                            <b-form-radio v-model="dados.saude" value="Nunca">Nunca</b-form-radio>
                        </b-form-group>
                        
                        <b-form-group class="col-sm-6">
                            <div class="opcaoSelecao"><b>f)</b> Revistas sobre religião (Sophia, Missões, Gospel, Orixás, Delfos etc.):</div>
                            <b-form-radio v-model="dados.religiao" value="Frequentemente">Frequentemente</b-form-radio>
                            <b-form-radio v-model="dados.religiao" value="Às vezes">Às vezes</b-form-radio>
                            <b-form-radio v-model="dados.religiao" value="Nunca">Nunca</b-form-radio>
                        </b-form-group>
                        
                        <b-form-group class="col-sm-6">
                            <div class="opcaoSelecao"><b>g)</b> Revistas de humor, quadrinhos ou jogos (Casseta e Planeta, Turma da Mônica, PC Gamer etc.):</div>
                            <b-form-radio v-model="dados.humor" value="Frequentemente">Frequentemente</b-form-radio>
                            <b-form-radio v-model="dados.humor" value="Às vezes">Às vezes</b-form-radio>
                            <b-form-radio v-model="dados.humor" value="Nunca">Nunca</b-form-radio>
                        </b-form-group>
                        
                        <b-form-group class="col-sm-6">
                            <div class="opcaoSelecao"><b>h)</b> Revistas de informação geral (Carta Capital, Veja, Istoé, Época, Exame, Caros Amigos, Piauí, Forum etc.):</div>
                            <b-form-radio v-model="dados.info_geral" value="Frequentemente">Frequentemente</b-form-radio>
                            <b-form-radio v-model="dados.info_geral" value="Às vezes">Às vezes</b-form-radio>
                            <b-form-radio v-model="dados.info_geral" value="Nunca">Nunca</b-form-radio>
                        </b-form-group>
                        
                        <b-form-group class="col-sm-6">
                            <div class="opcaoSelecao"><b>i)</b> Livros de não-ficção e biografias (reportagens, livros científicos, filosóficos, históricos, documentários etc.):</div>
                            <b-form-radio v-model="dados.nao_ficcao" value="Frequentemente">Frequentemente</b-form-radio>
                            <b-form-radio v-model="dados.nao_ficcao" value="Às vezes">Às vezes</b-form-radio>
                            <b-form-radio v-model="dados.nao_ficcao" value="Nunca">Nunca</b-form-radio>
                        </b-form-group>
                        
                        <b-form-group class="col-sm-6">
                            <div class="opcaoSelecao"><b>j)</b> Revistas sobre comportamento, moda, estilo e decoração (Cláudia, Marie Claire, Pais e Filhos, Casa e Jardim, Bons Fluídos etc.):</div>
                            <b-form-radio v-model="dados.estilo" value="Frequentemente">Frequentemente</b-form-radio>
                            <b-form-radio v-model="dados.estilo" value="Às vezes">Às vezes</b-form-radio>
                            <b-form-radio v-model="dados.estilo" value="Nunca">Nunca</b-form-radio>
                        </b-form-group>
                        
                        <b-form-group class="col-sm-6">
                            <div class="opcaoSelecao"><b>k)</b> Revistas sobre educação e estudos (Educação, Guia do Estudante, Almanaque Abril, Sociologia, Língua Portuguesa, Speak Up etc.):</div>
                            <b-form-radio v-model="dados.educa" value="Frequentemente">Frequentemente</b-form-radio>
                            <b-form-radio v-model="dados.educa" value="Às vezes">Às vezes</b-form-radio>
                            <b-form-radio v-model="dados.educa" value="Nunca">Nunca</b-form-radio>
                        </b-form-group>
                        
                        <b-form-group class="col-sm-6">
                            <div class="opcaoSelecao"><b>l)</b> Revistas para adolescentes ou sobre TV, cinema, música, celebridades (Viração, TPM, Set, Rolling Stones, Capricho, Contigo, Caras, etc.):</div>
                            <b-form-radio v-model="dados.adolecente" value="Frequentemente">Frequentemente</b-form-radio>
                            <b-form-radio v-model="dados.adolecente" value="Às vezes">Às vezes</b-form-radio>
                            <b-form-radio v-model="dados.adolecente" value="Nunca">Nunca</b-form-radio>
                        </b-form-group>
                        
                        <b-form-group class="col-sm-6">
                            <div class="opcaoSelecao"><b>m)</b> Revistas sobre automóveis, esportes e lazer (Quatro Rodas, Duas Rodas, Placar, Pesca e Cia., Náutica, Revista do Vôlei, Viagem e Turismo, Terra etc.):</div>
                            <b-form-radio v-model="dados.lazer" value="Frequentemente">Frequentemente</b-form-radio>
                            <b-form-radio v-model="dados.lazer" value="Às vezes">Às vezes</b-form-radio>
                            <b-form-radio v-model="dados.lazer" value="Nunca">Nunca</b-form-radio>
                        </b-form-group>
                        
                        <b-form-group class="col-sm-6">
                            <div class="opcaoSelecao"><b>n)</b> Revistas de divulgação científica, tecnológica, filosófica ou artística (Ciência Hoje, Geo, Galileu, Mente e Cérebro, Linux Magazine, PC Magazine, Filosofia, Cult, História Viva, Entrelivros etc.):</div>
                            <b-form-radio v-model="dados.cientifica" value="Frequentemente">Frequentemente</b-form-radio>
                            <b-form-radio v-model="dados.cientifica" value="Às vezes">Às vezes</b-form-radio>
                            <b-form-radio v-model="dados.cientifica" value="Nunca">Nunca</b-form-radio>
                        </b-form-group>
                    </b-row>
                </b-col>

                <b-form-group class="mt-2" label="42) Faça uma avaliação da escola em que você realiza ou realizou o Ensino Médio.*" label-for=""></b-form-group>
                <b-col sm="12">
                    <b-row>
                        <b-form-group class="col-sm-4">
                            <div class="opcaoSelecao"><b>a)</b> Trabalho de grupo:</div>
                            <b-form-radio v-model="dados.aval_grupo" value="Excelente">Excelente</b-form-radio>
                            <b-form-radio v-model="dados.aval_grupo" value="Bom">Bom</b-form-radio>
                            <b-form-radio v-model="dados.aval_grupo" value="Regular">Regular</b-form-radio>
                            <b-form-radio v-model="dados.aval_grupo" value="Insuficiente">Insuficiente</b-form-radio>
                        </b-form-group>

                        <b-form-group class="col-sm-4">
                            <div class="opcaoSelecao"><b>b)</b> Práticas de esporte:</div>
                            <b-form-radio v-model="dados.aval_esporte" value="Excelente">Excelente</b-form-radio>
                            <b-form-radio v-model="dados.aval_esporte" value="Bom">Bom</b-form-radio>
                            <b-form-radio v-model="dados.aval_esporte" value="Regular">Regular</b-form-radio>
                            <b-form-radio v-model="dados.aval_esporte" value="Insuficiente">Insuficiente</b-form-radio>
                        </b-form-group>

                        <b-form-group class="col-sm-4">
                            <div class="opcaoSelecao"><b>c)</b> A biblioteca da escola:</div>
                            <b-form-radio v-model="dados.aval_biblioteca" value="Excelente">Excelente</b-form-radio>
                            <b-form-radio v-model="dados.aval_biblioteca" value="Bom">Bom</b-form-radio>
                            <b-form-radio v-model="dados.aval_biblioteca" value="Regular">Regular</b-form-radio>
                            <b-form-radio v-model="dados.aval_biblioteca" value="Insuficiente">Insuficiente</b-form-radio>
                        </b-form-group>

                        <b-form-group class="col-sm-4">
                            <div class="opcaoSelecao"><b>d)</b> A localização da escola:</div>
                            <b-form-radio v-model="dados.aval_local" value="Excelente">Excelente</b-form-radio>
                            <b-form-radio v-model="dados.aval_local" value="Bom">Bom</b-form-radio>
                            <b-form-radio v-model="dados.aval_local" value="Regular">Regular</b-form-radio>
                            <b-form-radio v-model="dados.aval_local" value="Insuficiente">Insuficiente</b-form-radio>
                        </b-form-group>

                        <b-form-group class="col-sm-4">
                            <div class="opcaoSelecao"><b>e)</b> O respeito à diversidade:</div>
                            <b-form-radio v-model="dados.aval_respeito" value="Excelente">Excelente</b-form-radio>
                            <b-form-radio v-model="dados.aval_respeito" value="Bom">Bom</b-form-radio>
                            <b-form-radio v-model="dados.aval_respeito" value="Regular">Regular</b-form-radio>
                            <b-form-radio v-model="dados.aval_respeito" value="Insuficiente">Insuficiente</b-form-radio>
                        </b-form-group>

                        <b-form-group class="col-sm-4">
                            <div class="opcaoSelecao"><b>f)</b> As condições dos laboratórios:</div>
                            <b-form-radio v-model="dados.aval_laboratorio" value="Excelente">Excelente</b-form-radio>
                            <b-form-radio v-model="dados.aval_laboratorio" value="Bom">Bom</b-form-radio>
                            <b-form-radio v-model="dados.aval_laboratorio" value="Regular">Regular</b-form-radio>
                            <b-form-radio v-model="dados.aval_laboratorio" value="Insuficiente">Insuficiente</b-form-radio>
                        </b-form-group>

                        <b-form-group class="col-sm-4">
                            <div class="opcaoSelecao"><b>g)</b> As condições das salas de aula:</div>
                            <b-form-radio v-model="dados.aval_sala" value="Excelente">Excelente</b-form-radio>
                            <b-form-radio v-model="dados.aval_sala" value="Bom">Bom</b-form-radio>
                            <b-form-radio v-model="dados.aval_sala" value="Regular">Regular</b-form-radio>
                            <b-form-radio v-model="dados.aval_sala" value="Insuficiente">Insuficiente</b-form-radio>
                        </b-form-group>

                        <b-form-group class="col-sm-4">
                            <div class="opcaoSelecao"><b>h)</b> O ensino de língua estrangeira:</div>
                            <b-form-radio v-model="dados.aval_lingua" value="Excelente">Excelente</b-form-radio>
                            <b-form-radio v-model="dados.aval_lingua" value="Bom">Bom</b-form-radio>
                            <b-form-radio v-model="dados.aval_lingua" value="Regular">Regular</b-form-radio>
                            <b-form-radio v-model="dados.aval_lingua" value="Insuficiente">Insuficiente</b-form-radio>
                        </b-form-group>

                        <b-form-group class="col-sm-4">
                            <div class="opcaoSelecao"><b>i)</b> O interesse dos (as) estudantes:</div>
                            <b-form-radio v-model="dados.aval_interesse" value="Excelente">Excelente</b-form-radio>
                            <b-form-radio v-model="dados.aval_interesse" value="Bom">Bom</b-form-radio>
                            <b-form-radio v-model="dados.aval_interesse" value="Regular">Regular</b-form-radio>
                            <b-form-radio v-model="dados.aval_interesse" value="Insuficiente">Insuficiente</b-form-radio>
                        </b-form-group>

                        <b-form-group class="col-sm-4">
                            <div class="opcaoSelecao"><b>j)</b> A atenção às questões ambientais:</div>
                            <b-form-radio v-model="dados.aval_ambiental" value="Excelente">Excelente</b-form-radio>
                            <b-form-radio v-model="dados.aval_ambiental" value="Bom">Bom</b-form-radio>
                            <b-form-radio v-model="dados.aval_ambiental" value="Regular">Regular</b-form-radio>
                            <b-form-radio v-model="dados.aval_ambiental" value="Insuficiente">Insuficiente</b-form-radio>
                        </b-form-group>

                        <b-form-group class="col-sm-4">
                            <div class="opcaoSelecao"><b>k)</b> A organização dos horários de aulas:</div>
                            <b-form-radio v-model="dados.aval_horario" value="Excelente">Excelente</b-form-radio>
                            <b-form-radio v-model="dados.aval_horario" value="Bom">Bom</b-form-radio>
                            <b-form-radio v-model="dados.aval_horario" value="Regular">Regular</b-form-radio>
                            <b-form-radio v-model="dados.aval_horario" value="Insuficiente">Insuficiente</b-form-radio>
                        </b-form-group>

                        <b-form-group class="col-sm-4">
                            <div class="opcaoSelecao"><b>l)</b> Segurança (iluminação, policiamento, etc.):</div>
                            <b-form-radio v-model="dados.aval_segurancao" value="Excelente">Excelente</b-form-radio>
                            <b-form-radio v-model="dados.aval_segurancao" value="Bom">Bom</b-form-radio>
                            <b-form-radio v-model="dados.aval_segurancao" value="Regular">Regular</b-form-radio>
                            <b-form-radio v-model="dados.aval_segurancao" value="Insuficiente">Insuficiente</b-form-radio>
                        </b-form-group>

                        <b-form-group class="col-sm-4">
                            <div class="opcaoSelecao"><b>m)</b> Acesso a computadores e outros recursos de Informática:</div>
                            <b-form-radio v-model="dados.aval_informatica" value="Excelente">Excelente</b-form-radio>
                            <b-form-radio v-model="dados.aval_informatica" value="Bom">Bom</b-form-radio>
                            <b-form-radio v-model="dados.aval_informatica" value="Regular">Regular</b-form-radio>
                            <b-form-radio v-model="dados.aval_informatica" value="Insuficiente">Insuficiente</b-form-radio>
                        </b-form-group>

                        <b-form-group class="col-sm-4">
                            <div class="opcaoSelecao"><b>n)</b> A atenção e o respeito dos (as) funcionários(as) e dos(as) professores(as):</div>
                            <b-form-radio v-model="dados.aval_atencao" value="Excelente">Excelente</b-form-radio>
                            <b-form-radio v-model="dados.aval_atencao" value="Bom">Bom</b-form-radio>
                            <b-form-radio v-model="dados.aval_atencao" value="Regular">Regular</b-form-radio>
                            <b-form-radio v-model="dados.aval_atencao" value="Insuficiente">Insuficiente</b-form-radio>
                        </b-form-group>

                        <b-form-group class="col-sm-4">
                            <div class="opcaoSelecao"><b>o)</b> O conhecimento que os (as) professores (as) têm das matérias e a maneira de transmiti-lo:</div>
                            <b-form-radio v-model="dados.aval_conhecimento_prof" value="Excelente">Excelente</b-form-radio>
                            <b-form-radio v-model="dados.aval_conhecimento_prof" value="Bom">Bom</b-form-radio>
                            <b-form-radio v-model="dados.aval_conhecimento_prof" value="Regular">Regular</b-form-radio>
                            <b-form-radio v-model="dados.aval_conhecimento_prof" value="Insuficiente">Insuficiente</b-form-radio>
                        </b-form-group>

                        <b-form-group class="col-sm-4">
                            <div class="opcaoSelecao"><b>p)</b> A dedicação dos (as) professores (as) para preparar aulas e atender aos (às) estudantes:</div>
                            <b-form-radio v-model="dados.aval_dedica_prof" value="Excelente">Excelente</b-form-radio>
                            <b-form-radio v-model="dados.aval_dedica_prof" value="Bom">Bom</b-form-radio>
                            <b-form-radio v-model="dados.aval_dedica_prof" value="Regular">Regular</b-form-radio>
                            <b-form-radio v-model="dados.aval_dedica_prof" value="Insuficiente">Insuficiente</b-form-radio>
                        </b-form-group>

                        <b-form-group class="col-sm-4">
                            <div class="opcaoSelecao"><b>q)</b> As iniciativas da escola para realizar excursões, passeios culturais, estudos do meio ambiente:</div>
                            <b-form-radio v-model="dados.aval_passeios" value="Excelente">Excelente</b-form-radio>
                            <b-form-radio v-model="dados.aval_passeios" value="Bom">Bom</b-form-radio>
                            <b-form-radio v-model="dados.aval_passeios" value="Regular">Regular</b-form-radio>
                            <b-form-radio v-model="dados.aval_passeios" value="Insuficiente">Insuficiente</b-form-radio>
                        </b-form-group>

                        <b-form-group class="col-sm-4">
                            <div class="opcaoSelecao"><b>r)</b> A acessibilidade física e os recursos e os materiais para estudantes com deficiência (rampas, corrimãos, lupas etc.):</div>
                            <b-form-radio v-model="dados.aval_acessibilidade" value="Excelente">Excelente</b-form-radio>
                            <b-form-radio v-model="dados.aval_acessibilidade" value="Bom">Bom</b-form-radio>
                            <b-form-radio v-model="dados.aval_acessibilidade" value="Regular">Regular</b-form-radio>
                            <b-form-radio v-model="dados.aval_acessibilidade" value="Insuficiente">Insuficiente</b-form-radio>
                        </b-form-group>
                    </b-row>
                </b-col>

            </b-row>
            <center>
                <b-button class="mt-3" type="submit" variant="primary">Enviar socioeconomico</b-button>
            </center>
            
        </b-form>
        
    </b-container>
</template>

<script>
import axios from 'axios';
import config from '../../../config'

export default {
    name: 'Socioeconomico',
    data() {
        return {
            //remover "options" abaixo
            optionsItens: [
                { value: '1', text: '1' },
                { value: '2', text: '2' },
                { value: '3 ou mais', text: '3 ou mais' },
                { value: 'Não possuo', text: 'Não possuo' },
            ],
            optionsImportancia:  [
                { value: '0', text: '0 (Nenhuma importância)' },
                { value: '1', text: '1' },
                { value: '2', text: '2' },
                { value: '3', text: '3' },
                { value: '4', text: '4' },
                { value: '5', text: '5 (Maior importância)' }
            ],
            optionsLer:  [
                { value: 'Frequentemente', text: 'Frequentemente' },
                { value: 'Às vezes', text: 'Às vezes' },
                { value: 'Nunca', text: 'Nunca' }
            ],
            optionsAvalia:  [
                { value: 'Insuficiente a regular', text: 'Insuficiente a regular' },
                { value: 'Regular a bom', text: 'Regular a bom' },
                { value: 'Bom a excelente', text: 'Bom a excelente' }
            ],
            //curso: [], // Must be an array reference!
            dados: {}
        }
    },
    methods: {
        enviarSocioeconomico(){
            var idUser = window.localStorage.getItem('id'); 
            //alert("funcionou")
            if(this.dados.qtd_pessoas == null ||
            this.dados.qtd_filhos == null ||
            this.dados.casa == null ||
            this.dados.local_casa == null ||
            this.dados.transporte == null ||
            this.dados.escol_pai == null ||
            this.dados.escol_mae == null ||
            this.dados.trab_pai == null ||
            this.dados.trab_mae == null ||
            this.dados.trab_candidato == null ||
            this.dados.pessoas_renda == null ||
            this.dados.renda_total == null ||
            this.dados.tv == null ||
            this.dados.pc == null ||
            this.dados.geladeira == null ||
            this.dados.dvd == null ||
            this.dados.automovel == null ||
            this.dados.tel_fixo == null ||
            this.dados.tv_ass == null ||
            this.dados.radio == null ||
            this.dados.lava_roupa == null ||
            this.dados.celular == null ||
            this.dados.lava_louca == null ||
            this.dados.trab_atual == null ||
            this.dados.eja == null ||
            this.dados.eja_tipo == null ||
            this.dados.tem_internet == null ||
            this.dados.acesso_internet == null ||
            this.dados.jornal == null ||
            this.dados.sites == null ||
            this.dados.manuais == null ||
            this.dados.ficcao == null ||
            this.dados.saude == null ||
            this.dados.religiao == null ||
            this.dados.humor == null ||
            this.dados.info_geral == null ||
            this.dados.nao_ficcao == null ||
            this.dados.estilo == null ||
            this.dados.educa == null ||
            this.dados.adolecente == null ||
            this.dados.lazer == null ||
            this.dados.cientifica == null ||
            this.dados.aval_grupo == null ||
            this.dados.aval_esporte == null ||
            this.dados.aval_biblioteca == null ||
            this.dados.aval_local == null ||
            this.dados.aval_respeito == null ||
            this.dados.aval_laboratorio == null ||
            this.dados.aval_sala == null ||
            this.dados.aval_lingua == null ||
            this.dados.aval_interesse == null ||
            this.dados.aval_ambiental == null ||
            this.dados.aval_horario == null ||
            this.dados.aval_segurancao == null ||
            this.dados.aval_informatica == null ||
            this.dados.aval_atencao == null ||
            this.dados.aval_conhecimento_prof == null ||
            this.dados.aval_dedica_prof == null ||
            this.dados.aval_passeios == null ||
            this.dados.aval_acessibilidade == null
            ){
                alert('PREENCHA TODOS OS CAMPOS OBRIGATÓRIOS!')
            }
            else{
            axios.post(config.server()+'insereDadosSocioeconomicos', {
                idUser: idUser,
                qtd_pessoas: this.dados.qtd_pessoas,
                qtd_filhos: this.dados.qtd_filhos,
                casa: this.dados.casa,
                local_casa: this.dados.local_casa,
                transporte: this.dados.transporte,
                escol_pai: this.dados.escol_pai,                                
                escol_mae: this.dados.escol_mae,
                trab_pai: this.dados.trab_pai,                
                trab_mae: this.dados.trab_mae,
                trab_candidato: this.dados.trab_candidato,
                pessoas_renda: this.dados.pessoas_renda,
                renda_total: this.dados.renda_total,
                
                tv: this.dados.tv,
                dvd: this.dados.dvd,
                radio: this.dados.radio,
                pc: this.dados.pc,
                automovel: this.dados.automovel, 
                lava_roupa: this.dados.lava_roupa,
                geladeira: this.dados.geladeira,
                tel_fixo: this.dados.tel_fixo,
                celular: this.dados.celular,
                acesso_internet: this.dados.acesso_internet,                                  
                tv_ass: this.dados.tv_ass,
                lava_louca: this.dados.lava_louca,

                trab_atual: this.dados.trab_atual,
                trab_despesas: this.dados.trab_despesas,                                
                trab_sustento: this.dados.trab_sustento,
                trab_independente: this.dados.trab_independente,                
                trab_experi: this.dados.trab_experi,
                trab_p_estudos: this.dados.trab_p_estudos,

                trab_horas: this.dados.trab_horas,
                estuda_e_trab: this.dados.estuda_e_trab,
                motivo_estudar: this.dados.motivo_estudar,
                eja: this.dados.eja,
                eja_tipo: this.dados.eja_tipo,
                tem_internet: this.dados.tem_internet,                                
                //tem_computador: this.dados.tem_computador,
                acesso_internet: this.dados.acesso_internet, 
        
                curso_lingua: this.dados.curso_lingua,
                curso_info: this.dados.curso_info,
                curso_prepara: this.dados.curso_prepara,
                curso_tecnico: this.dados.curso_tecnico,
                curso_outro: this.dados.curso_outro,

                jornal: this.dados.jornal,
                sites: this.dados.sites,
                manuais: this.dados.manuais,                                
                ficcao: this.dados.ficcao,
                saude: this.dados.saude,                
                religiao: this.dados.religiao,
                humor: this.dados.humor,
                info_geral: this.dados.info_geral,
                nao_ficcao: this.dados.nao_ficcao,
                estilo: this.dados.estilo,
                educa: this.dados.educa,
                adolecente: this.dados.adolecente,
                lazer: this.dados.lazer,                                
                cientifica: this.dados.cientifica,

                aval_grupo: this.dados.aval_grupo,                
                aval_esporte: this.dados.aval_esporte,
                aval_biblioteca: this.dados.aval_biblioteca,
                aval_local: this.dados.aval_local,
                aval_respeito: this.dados.aval_respeito,
                aval_laboratorio: this.dados.aval_laboratorio,
                aval_sala: this.dados.aval_sala,
                aval_lingua: this.dados.aval_lingua,
                aval_interesse: this.dados.aval_interesse,                                
                aval_ambiental: this.dados.aval_ambiental,
                aval_horario: this.dados.aval_horario,                
                aval_segurancao: this.dados.aval_segurancao,
                aval_informatica: this.dados.aval_informatica,
                aval_atencao: this.dados.aval_atencao,
               
                aval_conhecimento_prof: this.dados.aval_conhecimento_prof,
                aval_dedica_prof: this.dados.aval_dedica_prof,
                aval_passeios: this.dados.aval_passeios,
                aval_acessibilidade: this.dados.aval_acessibilidade,
               

            })
            .then((response) =>{
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
            //window.location.href = config.website()+'inscricao/valores'
            window.location.href = '#/inscricao/valores'
            //alert("registro inserido com sucesso!")
            //DIRECIONAR O USUARIO PARA AS ETAPAS DE INSCRIÇÃO
            //TRATAMENTO DE ERRO IMPEDINDO CADASTRO DE DOIS EMAILS
            }
        }
    }
}
</script>

<style lang="scss">
@import '../../style.scss';

label{
    color: black;
    font-weight: initial;
    font-size: 105%;
}
legend{
    color: $verdeEscuro;
    font-weight: bold;
}
.opcaoSelecao{
    color: $verdeDark;
    font-weight: initial;
    margin-bottom: 8px;
    font-size: 105%;
}
.campo-obrigatorio{
    color: $verdeEscuro;
    font-weight: bold;
    font-size: 90%;
}
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
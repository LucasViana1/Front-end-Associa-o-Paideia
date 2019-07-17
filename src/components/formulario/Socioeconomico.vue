<template>
    <b-container>
        <b-form v-on:submit.prevent="enviarSocioeconomico">
            <!--socioeconomico-->
            <b-row>
                <b-col sm="12">
                    <h3>SOCIOECONÔMICO</h3>
                </b-col>

                <b-col sm="4">
                    <b-form-group label="18) Quantas pessoas moram com você? (incluindo filhos, irmãos, parentes e amigos)">
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
                    <b-form-group label="19) Quantos (as) filhos (as) você tem?">
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
                    <b-form-group label="20) A casa onde você mora é?">
                        <b-form-radio v-model="dados.casa" name="" value="Própria">
                           Própria.</b-form-radio>
                        <b-form-radio v-model="dados.casa" name="" value="Alugada">
                            Alugada.</b-form-radio>
                        <b-form-radio v-model="dados.casa" name="" value="Cedida">
                            Cedida.</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col sm="3">
                    <b-form-group label="21) Sua casa está localizada em?">
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
                    <b-form-group label="22) Como você se deslocaria até o Focus Cursinho?">
                        <b-form-radio v-model="dados.transporte" name="" value="Transporte público">
                           Transporte público.</b-form-radio>
                        <b-form-radio v-model="dados.transporte" name="" value="Carro próprio">
                            Carro próprio.</b-form-radio>
                        <b-form-radio v-model="dados.transporte" name="" value="Dependo da ajuda de vizinhos, parentes ou amigos">
                            Dependo da ajuda de vizinhos, parentes ou amigos.</b-form-radio>
                        <b-form-radio v-model="dados.transporte" name="" value="A pé">
                            A pé.</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col sm="3">
                    <b-form-group label="23) Qual é o nível de escolaridade do seu pai?">
                        <b-form-radio v-model="dados.escol_pai" name="" value="Da 1ª à 4ª série do Ensino Fundamental (antigo primário)">
                           Da 1ª à 4ª série do Ensino Fundamental (antigo primário).</b-form-radio>
                        <b-form-radio v-model="dados.escol_pai" name="" value="Da 5ª à 8ª série do Ensino Fundamental (antigo ginásio)">
                            Da 5ª à 8ª série do Ensino Fundamental (antigo ginásio).</b-form-radio>
                        <b-form-radio v-model="dados.escol_pai" name="" value="Ensino Médio (antigo 2º grau)">
                           Ensino Médio (antigo 2º grau).</b-form-radio>
                        <b-form-radio v-model="dados.escol_pai" name="" value="Ensino Superior">
                            Ensino Superior.</b-form-radio>
                        <b-form-radio v-model="dados.escol_pai" name="" value="Especialização">
                            Especialização.</b-form-radio>
                        <b-form-radio v-model="dados.escol_pai" name="" value="Não estudou">
                            Não estudou.</b-form-radio>
                        <b-form-radio v-model="dados.escol_pai" name="" value="Não sei">
                            Não sei.</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col sm="3">
                    <b-form-group label="24) Qual é o nível de escolaridade do sua mãe?">
                        <b-form-radio v-model="dados.escol_mae" name="" value="Da 1ª à 4ª série do Ensino Fundamental (antigo primário)">
                           Da 1ª à 4ª série do Ensino Fundamental (antigo primário).</b-form-radio>
                        <b-form-radio v-model="dados.escol_mae" name="" value="Da 5ª à 8ª série do Ensino Fundamental (antigo ginásio)">
                            Da 5ª à 8ª série do Ensino Fundamental (antigo ginásio).</b-form-radio>
                        <b-form-radio v-model="dados.escol_mae" name="" value="Ensino Médio (antigo 2º grau)">
                           Ensino Médio (antigo 2º grau).</b-form-radio>
                        <b-form-radio v-model="dados.escol_mae" name="" value="Ensino Superior">
                            Ensino Superior.</b-form-radio>
                        <b-form-radio v-model="dados.escol_mae" name="" value="Especialização">
                            Especialização.</b-form-radio>
                        <b-form-radio v-model="dados.escol_mae" name="" value="Não estudou">
                            Não estudou.</b-form-radio>
                        <b-form-radio v-model="dados.escol_mae" name="" value="Não sei">
                            Não sei.</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col sm="4">
                    <b-form-group label="25) Em que seu pai trabalha ou trabalhou, na maior parte da vida?">
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
                    <b-form-group label="26) Em que sua mãe trabalha ou trabalhou, na maior parte da vida?">
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
                    <b-form-group label="27) Em que você trabalha atualmente?">
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
                    <b-form-group label="28) Quantas pessoas contribuem para a obtenção dessa renda familiar?">
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
                    <b-form-group label="29) Somando a sua renda com a renda das pessoas que moram com você, quanto é,aproximadamente, a renda familiar mensal?">
                        <b-form-radio v-model="dados.renda_total" name="" value="Nenhuma renda">
                           Nenhuma renda.</b-form-radio>
                        <b-form-radio v-model="dados.renda_total" name="" value="Até 1 salário mínimo (até R$ 954,00)">
                            Até 1 salário mínimo (até R$ 954,00).</b-form-radio>
                        <b-form-radio v-model="dados.renda_total" name="" value="De 1 a 3 salários mínimos (de R$ 954,00 até R$ 2.862,00)">
                            De 1 a 3 salários mínimos (de R$ 954,00 até R$ 2.862,00).</b-form-radio>
                        <b-form-radio v-model="dados.renda_total" name="" value="De 3 a 6 salários mínimos (de R$ 2.862,01 até R$ 5.724,00)">
                            De 3 a 6 salários mínimos (de R$ 2.862,01 até R$ 5.724,00).</b-form-radio>
                        <b-form-radio v-model="dados.renda_total" name="" value="De 6 a 9 salários mínimos (de R$ 5.724,01 até R$ 8.586,00)">
                           De 6 a 9 salários mínimos (de R$ 5.724,01 até R$ 8.586,00).</b-form-radio>
                        <b-form-radio v-model="dados.renda_total" name="" value="De 9 a 12 salários mínimos (de R$ 8.586,01 até R$ 11.448,00)">
                            De 9 a 12 salários mínimos (de R$ 8.586,01 até R$ 11.448,00).</b-form-radio>
                        <b-form-radio v-model="dados.renda_total" name="" value="De 12 a 15 salários mínimos (de R$ 11.448,01 até R$ 14.310,00)">
                            De 12 a 15 salários mínimos (de R$ 11.448,01 até R$ 14.310,00).</b-form-radio>
                        <b-form-radio v-model="dados.renda_total" name="" value="Mais de 15 salários mínimos (mais de R$ 14.310,01)">
                            Mais de 15 salários mínimos (mais de R$ 14.310,01).</b-form-radio>

                    </b-form-group>
                </b-col>
                <!--CONTINUAR DAQ-->
                <b-form-group sm="12" label="30) Quais e quantos dos itens abaixo há em sua casa?" label-for=""></b-form-group>
                <b-col sm="12">
                    <center>
                    <b-row>
                        <b-form-group sm="4" label="TV" class="ml-3">
                            <b-form-select v-model="dados.tv" :options="optionsItens"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="4" label="Computador/Notebook" class="ml-3">
                            <b-form-select v-model="dados.pc" :options="optionsItens"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="4" label="Geladeira" class="ml-3">
                            <b-form-select v-model="dados.geladeira" :options="optionsItens"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="4" label="Acesso a Internet" class="ml-3">
                            <b-form-select v-model="dados.acesso_internet" :options="optionsItens"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="4" label="Videocassete e/ou DVD." class="ml-3">
                            <b-form-select v-model="dados.dvd" :options="optionsItens"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="4" label="Automóvel" class="ml-3">
                            <b-form-select v-model="dados.automovel" :options="optionsItens"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="4" label="Telefone Fixo" class="ml-3">
                            <b-form-select v-model="dados.tel_fixo" :options="optionsItens"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="4" label="TV por Assinatura" class="ml-3">
                            <b-form-select v-model="dados.tv_ass" :options="optionsItens"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="4" label="Rádio" class="ml-3">
                            <b-form-select v-model="dados.radio" :options="optionsItens"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="4" label="Máquina de lavar roupa" class="ml-3">
                            <b-form-select v-model="dados.lava_roupa" :options="optionsItens"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="4" label="Celular" class="ml-3">
                            <b-form-select v-model="dados.celular" :options="optionsItens"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="4" label="Máquina Lavar Louça" class="ml-3">
                            <b-form-select v-model="dados.lava_louca" :options="optionsItens"></b-form-select>
                        </b-form-group>
                    </b-row>
                    </center>
                    
                </b-col>

                <b-col sm="12">
                    <b-form-group label="31) Você trabalha ou já trabalhou?">
                        <b-form-radio v-model="dados.trab_atual" name="" value="Sim">
                           Sim.</b-form-radio>
                        <b-form-radio v-model="dados.trab_atual" name="" value="Não">
                            Não.</b-form-radio>
                    </b-form-group>
                </b-col>

                 <b-form-group label="32) Indique o grau de importância de cada um dos motivos abaixo na sua decisão de trabalhar:" label-for=""></b-form-group>
                <b-col sm="12">
                    <center>
                    <b-row>
                        <b-form-group sm="4" label="Ajudar nas despesas com a casa" class="ml-3">
                            <b-form-select v-model="dados.trab_despesas" :options="optionsImportancia"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="4" label="Adquirir experiência" class="ml-3">
                            <b-form-select v-model="dados.trab_experi" :options="optionsImportancia"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="4" label="Custear/ pagar meus estudos" class="ml-3">
                            <b-form-select v-model="dados.trab_p_estudos" :options="optionsImportancia"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="4" label="Sustentar minha família (esposo/a, filhos/as etc.)" class="ml-3">
                            <b-form-select v-model="dados.trab_sustento" :options="optionsImportancia"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="4" label="Ser independente (ganhar meu próprio dinheiro)" class="ml-3">
                            <b-form-select v-model="dados.trab_independente" :options="optionsImportancia"></b-form-select>
                        </b-form-group>
                    </b-row>
                    </center>
                </b-col>

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

                <b-col sm="4">
                    <b-form-group label="36) Você cursa ou já cursou a Educação de Jovens e Adultos – EJA?">
                        <b-form-radio v-model="dados.eja" name="" value="Sim">
                           Sim.</b-form-radio>
                        <b-form-radio v-model="dados.eja" name="" value="Não">
                            Não</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col sm="4">
                    <b-form-group label="37) Como é ou era o curso de EJA que você frequenta ou frequentou?">
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
                    <b-form-group label="38) Possui internet na sua casa?">
                        <b-form-radio v-model="dados.tem_internet" name="" value="Sim">
                           Sim.</b-form-radio>
                        <b-form-radio v-model="dados.tem_internet" name="" value="Não">
                            Não.</b-form-radio>
                    </b-form-group>
                </b-col>

                <b-col sm="4">
                    <b-form-group label="39) Possui computador na sua casa?">
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

                <b-col sm="4">
                    <b-form-group label="40) Como acessa a internet?">
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
                    <b-form-group label="41) Assinale, no quadro abaixo, a(s) atividade(s) ou o(s) curso(s) que você realiza ou realizou.">
                        <b-form-radio v-model="dados.curso_lingua" name="" value="1">
                           Curso de língua estrangeira.</b-form-radio>
                        <b-form-radio v-model="dados.curso_info" name="" value="1">
                            Curso de computação ou Informática</b-form-radio>
                        <b-form-radio v-model="dados.curso_prepara" name="" value="1">
                            Curso preparatório para o vestibular (cursinho)</b-form-radio>
                        <b-form-radio v-model="dados.curso_tecnico" name="" value="1">
                            Curso técnico.</b-form-radio>
                        <b-form-radio v-model="dados.curso_outro" name="" value="1">
                           Outros.</b-form-radio>
                    </b-form-group>
                </b-col>

                <!--AJUSTAR ESSE TRECHO-->
                <b-form-group label="42) Com qual frequência você lê:" label-for=""></b-form-group>
                <b-col sm="12">
                    <center>
                    <b-row>
                        <b-form-group sm="5" label="Jornais" class="ml-3">
                            <b-form-select v-model="dados.jornal" :options="optionsLer"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="5" label="Sites e matérias na Internet." class="ml-3">
                            <b-form-select v-model="dados.sites" :options="optionsLer"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="5" label="Dicionários, enciclopédias e manuais." class="ml-3">
                            <b-form-select v-model="dados.manuais" :options="optionsLer"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="5" label="Livros de ficção (romances, contos, poesias etc.)." class="ml-3">
                            <b-form-select v-model="dados.ficcao" :options="optionsLer"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="5" label="Revistas sobre saúde (Boa Saúde, Saúde, Vida Simples etc.)." class="ml-3">
                            <b-form-select v-model="dados.saude" :options="optionsLer"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="5" label="Revistas sobre religião (Sophia, Missões, Gospel, Orixás, Delfos etc.)." class="ml-3">
                            <b-form-select v-model="dados.religiao" :options="optionsLer"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="5" label="Revistas de humor, quadrinhos ou jogos (Casseta e Planeta, Turma da Mônica, PC Gamer etc.)." class="ml-3">
                            <b-form-select v-model="dados.humor" :options="optionsLer"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="5" label="Revistas de informação geral (Carta Capital, Veja, Istoé, Época, Exame, Caros Amigos, Piauí, Forum etc.)" class="ml-3">
                            <b-form-select v-model="dados.info_geral" :options="optionsLer"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="5" label="Livros de não-ficção e biografias (reportagens, livros científicos, filosóficos, históricos, documentários etc.)." class="ml-3">
                            <b-form-select v-model="dados.nao_ficcao" :options="optionsLer"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="5" label="Revistas sobre comportamento, moda, estilo e decoração (Cláudia, Marie Claire, Pais e Filhos, Casa e Jardim, Bons Fluídos etc.)." class="ml-3">
                            <b-form-select v-model="dados.estilo" :options="optionsLer"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="5" label="Revistas sobre educação e estudos (Educação, Guia do Estudante, Almanaque Abril, Sociologia, Língua Portuguesa, Speak Up etc.)." class="ml-3">
                            <b-form-select v-model="dados.educa" :options="optionsLer"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="5" label="Revistas para adolescentes ou sobre TV, cinema, música, celebridades (Viração, TPM, Set, Rolling Stones, Capricho, Contigo, Caras, etc.)." class="ml-3">
                            <b-form-select v-model="dados.adolecente" :options="optionsLer"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="5" label="Revistas sobre automóveis, esportes e lazer (Quatro Rodas, Duas Rodas, Placar, Pesca e Cia., Náutica, Revista do Vôlei, Viagem e Turismo, Terra etc.)." class="ml-3">
                            <b-form-select v-model="dados.lazer" :options="optionsLer"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="5" label="Revistas de divulgação científica, tecnológica, filosófica ou artística (Ciência Hoje, Geo, Galileu, Mente e Cérebro, Linux Magazine, PC Magazine, Filosofia, Cult, História Viva, Entrelivros etc.)." class="ml-3">
                            <b-form-select v-model="dados.cientifica" :options="optionsLer"></b-form-select>
                        </b-form-group>
                    </b-row>
                    </center> 
                </b-col>

                <!--AJUSTAR ESSE TRECHO-->
                <b-form-group label="43) Faça uma avaliação da escola em que você realiza ou realizou o Ensino Médio." label-for=""></b-form-group>
                <b-col sm="12">
                    <center>
                    <b-row>
                        <b-form-group sm="5" label="Trabalho de grupo." label-for="">
                            <b-form-select v-model="dados.aval_grupo" :options="optionsAvalia"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="5" label="Práticas de esporte." label-for="">
                            <b-form-select v-model="dados.aval_esporte" :options="optionsAvalia"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="5" label="A biblioteca da escola." label-for="">
                            <b-form-select v-model="dados.aval_biblioteca" :options="optionsAvalia"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="5" label="A localização da escola." label-for="">
                            <b-form-select v-model="dados.aval_local" :options="optionsAvalia"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="5" label="O respeito à diversidade." label-for="">
                            <b-form-select v-model="dados.aval_respeito" :options="optionsAvalia"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="5" label="As condições dos laboratórios." label-for="">
                            <b-form-select v-model="dados.aval_laboratorio" :options="optionsAvalia"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="5" label="As condições das salas de aula." label-for="">
                            <b-form-select v-model="dados.aval_sala" :options="optionsAvalia"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="5" label="O ensino de língua estrangeira." label-for="">
                            <b-form-select v-model="dados.aval_lingua" :options="optionsAvalia"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="5" label="O interesse dos (as) estudantes." label-for="">
                            <b-form-select v-model="dados.aval_interesse" :options="optionsAvalia"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="5" label="A atenção às questões ambientais." label-for="">
                            <b-form-select v-model="dados.aval_ambiental" :options="optionsAvalia"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="5" label="A organização dos horários de aulas." label-for="">
                            <b-form-select v-model="dados.aval_horario" :options="optionsAvalia"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="5" label="Segurança (iluminação, policiamento etc.)" label-for="">
                            <b-form-select v-model="dados.aval_segurancao" :options="optionsAvalia"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="5" label="Acesso a computadores e outros recursos de Informática." label-for="">
                            <b-form-select v-model="dados.aval_informatica" :options="optionsAvalia"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="5" label="A atenção e o respeito dos (as) funcionários(as) e dos(as) professores(as)." label-for="">
                            <b-form-select v-model="dados.aval_atencao" :options="optionsAvalia"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="5" label="O conhecimento que os (as) professores (as) têm das matérias e a maneira de transmiti-lo." label-for="">
                            <b-form-select v-model="dados.aval_conhecimento_prof" :options="optionsAvalia"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="5" label="A dedicação dos (as) professores (as) para preparar aulas e atender aos (às) estudantes." label-for="">
                            <b-form-select v-model="dados.aval_dedica_prof" :options="optionsAvalia"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="5" label="As iniciativas da escola para realizar excursões, passeios culturais, estudos do meio ambiente." label-for="">
                            <b-form-select v-model="dados.aval_passeios" :options="optionsAvalia"></b-form-select>
                        </b-form-group>
                        <b-form-group sm="5" label="A acessibilidade física e os recursos e os materiais para estudantes com deficiência (rampas, corrimãos, lupas etc.)." label-for="">
                            <b-form-select v-model="dados.aval_acessibilidade" :options="optionsAvalia"></b-form-select>
                        </b-form-group>
                    </b-row>
                    </center>
                    
                </b-col>

            </b-row>
            <b-button type="submit" variant="primary">Enviar socioeconomico</b-button>
        </b-form>
        
    </b-container>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Socioeconomico',
    data() {
        return {
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
            axios.post('http://localhost:3000/insereDadosSocioeconomicos', {
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
                tem_computador: this.dados.tem_computador,
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
            alert("registro inserido com sucesso!")
            //DIRECIONAR O USUARIO PARA AS ETAPAS DE INSCRIÇÃO
            //TRATAMENTO DE ERRO IMPEDINDO CADASTRO DE DOIS EMAILS
        }
    }
}
</script>

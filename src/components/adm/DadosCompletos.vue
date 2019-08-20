<template>

    <b-container>
        <h1>DADOS COMPLETOS</h1>
        
       <!--dados pessoais-->
        <table class="text-center table table-responsive-sm table-sm table-bordered table-striped">
            <thead>
                <tr>
                    <th class="cabecalho">DADOS PESSOAIS</th>
                    <th class="cabecalho">INFORMAÇÃO INSCRITO</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td class="pergunta">Nome Completo</td>
                    <td>{{listagem.dados[0].nome_completo}}</td>       
                </tr>
                <tr>
                    <td class="pergunta">Data Nascimento</td>
                    <td>{{listagem.dados[0].data_nasc}}</td>       
                </tr>
                <tr>
                    <td class="pergunta">Cidade Nascimento</td>
                    <td>{{listagem.dados[0].cidade_nasc}} - {{listagem.dados[0].estado_nasc}}</td>       
                </tr>
                <tr>
                    <td class="pergunta">Telefone 1</td>
                    <td>{{listagem.dados[0].tel1}}</td>       
                </tr>
                <tr>
                    <td class="pergunta">Telefone 2</td>
                    <td>{{listagem.dados[0].tel2}}</td>       
                </tr>
                <tr>
                    <td class="pergunta">CPF</td>
                    <td>{{listagem.dados[0].cpf}}</td>       
                </tr>
                <tr>
                    <td class="pergunta">RG</td>
                    <td>{{listagem.dados[0].rg}}</td>       
                </tr>
                <tr>
                    <td class="pergunta">Cartão Cidadão</td>
                    <td>{{listagem.dados[0].cidadao}}</td>       
                </tr>
            </tbody>
        </table>

        <!--estudos/formação-->
        <table class="text-center table table-responsive-sm table-sm table-bordered table-striped">
            <thead>
                <tr>
                    <th class="cabecalho">Nº</th>
                    <th class="cabecalho">ESTUDOS/FORMAÇÃO</th>
                    <th class="cabecalho">RESPOSTAS</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td class="pergunta">1</td>
                    <td class="pergunta">Como fez seus estudos de ensino fundamental (1º ao 9º ano)?</td>
                    <td>{{listagem.dados[0].ensino_fundamental}}</td>       
                </tr>

                <tr>
                    <td class="pergunta">2</td>
                    <td class="pergunta">Concluiu o ENSINO FUNDAMENTAL (1º ao 9º ano) em:</td>
                    <td>{{listagem.dados[0].conclusao_fundamental}}</td>       
                </tr>

                <tr>
                    <td class="pergunta">3</td>
                    <td class="pergunta">Como fez seus estudos de ensino médio (1º ao 3º ano)?</td>
                    <td>{{listagem.dados[0].ensino_medio}}</td>       
                </tr>

                <tr>
                    <td class="pergunta">4</td>
                    <td class="pergunta">Concluiu o ENSINO MÉDIO (antigo 2º grau) em:</td>
                    <td>{{listagem.dados[0].conclusao_medio}}</td>       
                </tr>

                <tr>
                    <td class="pergunta">5</td>
                    <td class="pergunta">Em que turno você fez o ENSINO MÉDIO?</td>
                    <td>{{listagem.dados[0].turno_medio}}</td>       
                </tr>

                <tr>
                    <td class="pergunta">6</td>
                    <td class="pergunta">Em que ano concluiu o ENSINO MÉDIO (3º GRAU)?</td>
                    <td>{{listagem.dados[0].ano_medio}}</td>       
                </tr>

                <tr>
                    <td class="pergunta">7</td>
                    <td class="pergunta">Você já realizou algum CURSO TÉCNICO?</td>
                    <td>{{listagem.dados[0].tecnico}}</td>       
                </tr>

                <tr>
                    <td class="pergunta">8</td>
                    <td class="pergunta">Você já frequentou algum cursinho preparatório para o vestibular?</td>
                    <td>{{listagem.dados[0].fez_cursinho}}</td>       
                </tr>

                <tr>
                    <td class="pergunta">9</td>
                    <td class="pergunta">Que tipo cursinho preparatório para o vestibular você realizou?</td>
                    <td>{{listagem.dados[0].tipo_cursinho}}</td>       
                </tr>

                <tr>
                    <td class="pergunta">10</td>
                    <td class="pergunta">Caso tenha feito cursinho PARTICULAR</td>
                    <td>{{listagem.dados[0].cursinho_particular}}</td>       
                </tr>

                <tr>
                    <td class="pergunta">11</td>
                    <td class="pergunta">Quantas vezes você já prestou concurso vestibular?</td>
                    <td>{{listagem.dados[0].fez_vestibular}}</td>       
                </tr>

                <tr>
                    <td class="pergunta">12</td>
                    <td class="pergunta">Você já iniciou algum curso superior?</td>
                    <td>{{listagem.dados[0].superior}}</td>       
                </tr>

                <tr>
                    <td class="pergunta">13</td>
                    <td class="pergunta">Área desejada (Ciências Humanas, Biológicas ou Exatas):</td>
                    <td>{{listagem.dados[0].area_desejo}}</td>       
                </tr>

                <tr>
                    <td class="pergunta">14</td>
                    <td class="pergunta">PRIMEIRA OPÇÃO (Curso e Universidade)</td>
                    <td>{{listagem.dados[0].curso_univ1}}</td>       
                </tr>

                <tr>
                    <td class="pergunta">15</td>
                    <td class="pergunta">SEGUNDA OPÇÃO (Curso e Universidade)</td>
                    <td>{{listagem.dados[0].curso_univ2}}</td>       
                </tr>

                <tr>
                    <td class="pergunta">16</td>
                    <td class="pergunta">TERCEIRA OPÇÃO (Curso e Universidade)</td>
                    <td>{{listagem.dados[0].curso_univ3}}</td>       
                </tr>

                <tr>
                    <td class="pergunta">17</td>
                    <td class="pergunta">Vestibulares de interesse</td>
                    <td>
                        <b-col v-if="listagem.dados[0].fuvest == 1"> FUVEST </b-col> 
                        <b-col v-if="listagem.dados[0].comvest == 1"> COMVEST </b-col>    
                        <b-col v-if="listagem.dados[0].vunesp == 1"> VUNESP </b-col>    
                        <b-col v-if="listagem.dados[0].enem == 1"> ENEM </b-col>  
                        <b-col v-if="listagem.dados[0].fatec == 1"> FATEC</b-col>  
                    </td>       
                </tr>
                
            </tbody>
        </table>

        <!--socioeconomico-->
        <table class="text-center table table-responsive-sm table-sm table-bordered table-striped">
            <thead>
                <tr>
                    <th class="cabecalho">Nº</th>
                    <th class="cabecalho">SOCIOECONÔMICO</th>
                    <th class="cabecalho">RESPOSTAS</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td class="pergunta">18</td>
                    <td class="pergunta">Quantas pessoas moram com você? (incluindo filhos, irmãos, parentes e amigos)</td>
                    <td>{{listagem.dados[0].qtd_pessoas}}</td>       
                </tr>

                <tr>
                    <td class="pergunta">19</td>
                    <td class="pergunta">Quantos (as) filhos (as) você tem?</td>
                    <td>{{listagem.dados[0].qtd_filhos}}</td>       
                </tr>

                <tr>
                    <td class="pergunta">20</td>
                    <td class="pergunta">A casa onde você mora é?</td>
                    <td>{{listagem.dados[0].casa}}</td>       
                </tr>

                <tr>
                    <td class="pergunta">21</td>
                    <td class="pergunta">Sua casa está localizada em?</td>
                    <td>{{listagem.dados[0].local_casa}}</td>       
                </tr>

                <tr>
                    <td class="pergunta">22</td>
                    <td class="pergunta">Como você se deslocaria até o Focus Cursinho?</td>
                    <td>{{listagem.dados[0].transporte}}</td>       
                </tr>

                <tr>
                    <td class="pergunta">23</td>
                    <td class="pergunta">Qual é o nível de escolaridade do seu pai?</td>
                    <td>{{listagem.dados[0].escol_pai}}</td>       
                </tr>

                <tr>
                    <td class="pergunta">24</td>
                    <td class="pergunta">Qual é o nível de escolaridade da sua mãe?</td>
                    <td>{{listagem.dados[0].escol_mae}}</td>       
                </tr>

                <tr>
                    <td class="pergunta">25</td>
                    <td class="pergunta">Em que seu pai trabalha ou trabalhou, na maior parte da vida?</td>
                    <td>{{listagem.dados[0].trab_pai}}</td>       
                </tr>

                <tr>
                    <td class="pergunta">26</td>
                    <td class="pergunta">Em que sua mãe trabalha ou trabalhou, na maior parte da vida?</td>
                    <td>{{listagem.dados[0].trab_mae}}</td>       
                </tr>

                <tr>
                    <td class="pergunta">27</td>
                    <td class="pergunta">Em que você trabalha atualmente?</td>
                    <td>{{listagem.dados[0].trab_candidato}}</td>       
                </tr>

                <tr>
                    <td class="pergunta">28</td>
                    <td class="pergunta">Quantas pessoas contribuem para a obtenção dessa renda familiar?</td>
                    <td>{{listagem.dados[0].pessoas_renda}}</td>       
                </tr>

                <tr>
                    <td class="pergunta">29</td>
                    <td class="pergunta">Somando a sua renda com a renda das pessoas que moram com você, quanto é,aproximadamente, a renda familiar mensal?</td>
                    <td>{{listagem.dados[0].renda_total}}</td>       
                </tr>

                <tr>
                    <td class="pergunta align-middle">30</td>
                    <td class="pergunta align-middle">Quais e quantos dos itens ao lado há em sua casa?</td>
                    <td>
                        <table class="col-12">
                            <th class="sub_cabecalho">Item</th>
                            <th class="sub_cabecalho">Quantidade</th>
                            <tr>
                                <td>a) TV:</td>
                                <td>{{listagem.dados[0].tv}}</td>
                            </tr>  
                            <tr>
                                <td>b) Computador/Notebook:</td>
                                <td>{{listagem.dados[0].pc}}</td>
                            </tr>  
                            <tr>
                                <td>c) Geladeira:</td>
                                <td>{{listagem.dados[0].geladeira}}</td>
                            </tr>
                            <!--<tr>
                                <td>d) Acesso a Internet:</td>
                                <td>{{listagem.dados[0].}}</td>
                            </tr>-->
                            <tr>
                                <td>d) Videocassete e/ou DVD:</td>
                                <td>{{listagem.dados[0].dvd}}</td>
                            </tr>
                            <tr>
                                <td>e) Automóvel:</td>
                                <td>{{listagem.dados[0].automovel}}</td>
                            </tr>
                            <tr>
                                <td>f) Telefone Fixo:</td>
                                <td>{{listagem.dados[0].tel_fixo}}</td>
                            </tr>
                            <tr>
                                <td>g) TV por Assinatura:</td>
                                <td>{{listagem.dados[0].tv_ass}}</td>
                            </tr>
                            <tr>
                                <td>h) Rádio:</td>
                                <td>{{listagem.dados[0].radio}}</td>
                            </tr>
                            <tr>
                                <td>i) Máquina de lavar roupa:</td>
                                <td>{{listagem.dados[0].lava_roupa}}</td>
                            </tr>
                            <tr>
                                <td>j) Celular:</td>
                                <td>{{listagem.dados[0].celular}}</td>
                            </tr>
                            <tr>
                                <td>k) Máquina Lavar Louça:</td>
                                <td>{{listagem.dados[0].lava_louca}}</td>
                            </tr>  
                        </table>    
                    </td>       
                </tr>

                <tr>
                    <td class="pergunta">31</td>
                    <td class="pergunta">Você trabalha ou já trabalhou?</td>
                    <td>{{listagem.dados[0].trab_atual}}</td>       
                </tr>

                <tr>
                    <td class="pergunta align-middle">32</td>
                    <td class="pergunta align-middle">Indique o grau de importância de cada um dos motivos ao lado na sua decisão de trabalhar:</td>
                    <td>
                        <table >
                            <th class="sub_cabecalho">Motivo</th>
                            <th class="sub_cabecalho">Grau</th>
                            <tr>
                                <td>a) Ajudar nas despesas com a casa:</td>
                                <td>{{listagem.dados[0].trab_despesas}}</td>
                            </tr>  
                            <tr>
                                <td>b) Adquirir experiência:</td>
                                <td>{{listagem.dados[0].trab_experi}}</td>
                            </tr>  
                            <tr>
                                <td>c) Custear/ pagar meus estudos:</td>
                                <td>{{listagem.dados[0].trab_despesas}}</td>
                            </tr> 
                            <tr>
                                <td>d) Sustentar minha família (esposo/a, filhos/as etc.):</td>
                                <td>{{listagem.dados[0].trab_sustento}}</td>
                            </tr> 
                            <tr>
                                <td>e) Ser independente (ganhar meu próprio dinheiro):</td>
                                <td>{{listagem.dados[0].trab_independente}}</td>
                            </tr> 
                        </table>    
                    </td>       
                </tr>

                <tr>
                    <td class="pergunta">33</td>
                    <td class="pergunta">Quantas horas semanais você trabalha?</td>
                    <td>{{listagem.dados[0].trab_horas}}</td>       
                </tr>

                <tr>
                    <td class="pergunta">34</td>
                    <td class="pergunta">Como você avalia ter estudado e trabalhado durante seus estudos?</td>
                    <td>{{listagem.dados[0].estuda_e_trab}}</td>       
                </tr>

                <tr>
                    <td class="pergunta">35</td>
                    <td class="pergunta">Qual principal motivo faria você voltar a estudar ou continuar estudando?</td>
                    <td>{{listagem.dados[0].motivo_estudar}}</td>       
                </tr>

                <tr>
                    <td class="pergunta">36</td>
                    <td class="pergunta">Você cursa ou já cursou a Educação de Jovens e Adultos – EJA?</td>
                    <td>{{listagem.dados[0].eja}}</td>       
                </tr>

                <tr>
                    <td class="pergunta">37</td>
                    <td class="pergunta">Como é ou era o curso de EJA que você frequenta ou frequentou?</td>
                    <td>{{listagem.dados[0].eja_tipo}}</td>       
                </tr>

                <tr>
                    <td class="pergunta">38</td>
                    <td class="pergunta">Possui internet na sua casa?</td>
                    <td>{{listagem.dados[0].tem_internet}}</td>       
                </tr>

                <tr>
                    <td class="pergunta">39</td>
                    <td class="pergunta">Como acessa a internet?</td>
                    <td>{{listagem.dados[0].acesso_internet}}</td>       
                </tr>

                <tr>
                    <td class="pergunta">40</td>
                    <td class="pergunta">Cursos que realiza ou já realizou</td>
                    <td>
                        <b-col v-if="listagem.dados[0].curso_lingua == 1">Curso de língua estrangeira.</b-col>   
                        <b-col v-if="listagem.dados[0].curso_info == 1">Curso de computação ou Informática.</b-col>   
                        <b-col v-if="listagem.dados[0].curso_prepara == 1">Curso preparatório para o vestibular (cursinho).</b-col>   
                        <b-col v-if="listagem.dados[0].curso_tecnico == 1">Curso técnico.</b-col>   
                        <b-col v-if="listagem.dados[0].curso_outro == 1">Outros. </b-col>   
                    </td>       
                </tr>

                <tr>
                    <td class="pergunta align-middle">41</td>
                    <td class="pergunta align-middle">Com qual frequência você lê:</td>
                    <td>
                        <table >
                            <th class="sub_cabecalho">Leitura</th>
                            <th class="sub_cabecalho">Frequência </th>
                            <tr>
                                <td>a) Jornais:</td>
                                <td>{{listagem.dados[0].jornal}}</td>
                            </tr>  
                            <tr>
                                <td>b) Sites e matérias na Internet:</td>
                                <td>{{listagem.dados[0].sites}}</td>
                            </tr>  
                            <tr>
                                <td>c) Dicionários, enciclopédias e manuais:</td>
                                <td>{{listagem.dados[0].manuais}}</td>
                            </tr>  
                            <tr>
                                <td>d) Livros de ficção:
                                    <b-dropdown size="sm" split text="" variant="outline-secundary">
                                        <b-dropdown-item-button>(romances, contos, poesias etc.)</b-dropdown-item-button>
                                    </b-dropdown>
                                </td>
                                <td>{{listagem.dados[0].ficcao}}</td>
                            </tr>  
                            <tr>
                                <td>e) Revistas sobre saúde:
                                    <b-dropdown size="sm" split text="" variant="outline-secundary"  >
                                        <b-dropdown-item-button>(Boa Saúde, Saúde, Vida Simples etc.)</b-dropdown-item-button>
                                    </b-dropdown>
                                </td>
                                <td>{{listagem.dados[0].saude}}</td>
                            </tr>  
                            <tr>
                                <td>f) Revistas sobre religião:
                                    <b-dropdown size="sm" split text="" variant="outline-secundary"  >
                                        <b-dropdown-item-button>(Sophia, Missões, Gospel, Orixás, Delfos etc.)</b-dropdown-item-button>
                                    </b-dropdown>
                                </td>
                                <td>{{listagem.dados[0].religiao}}</td>
                            </tr>  
                            <tr>
                                <td>g) Revistas de humor, quadrinhos ou jogos:
                                    <b-dropdown size="sm" split text="" variant="outline-secundary"  >
                                        <b-dropdown-item-button>(Casseta e Planeta, Turma da Mônica, PC Gamer etc.)</b-dropdown-item-button>
                                    </b-dropdown>
                                </td>
                                <td>{{listagem.dados[0].humor}}</td>
                            </tr>  
                            <tr>
                                <td>h) Revistas de informação geral:
                                    <b-dropdown size="sm" split text="" variant="outline-secundary"  >
                                        <b-dropdown-item-button>(Carta Capital, Veja, Istoé, Época, Exame, Caros Amigos, Piauí, Forum etc.)</b-dropdown-item-button>
                                    </b-dropdown>
                                </td>
                                <td>{{listagem.dados[0].info_geral}}</td>
                            </tr>  
                            <tr>
                                <td>i) Livros de não-ficção e biografias:
                                    <b-dropdown size="sm" split text="" variant="outline-secundary"  >
                                        <b-dropdown-item-button>(reportagens, livros científicos, filosóficos, históricos, documentários etc.)</b-dropdown-item-button>
                                    </b-dropdown>
                                </td>
                                <td>{{listagem.dados[0].nao_ficcao}}</td>
                            </tr>  
                            <tr>
                                <td>j) Revistas sobre comportamento, moda, estilo e decoração:
                                    <b-dropdown size="sm" split text="" variant="outline-secundary"  >
                                        <b-dropdown-item-button>(Cláudia, Marie Claire, Pais e Filhos, Casa e Jardim, Bons Fluídos etc.)</b-dropdown-item-button>
                                    </b-dropdown>
                                </td>
                                <td>{{listagem.dados[0].estilo}}</td>
                            </tr>  
                            <tr>
                                <td>k) Revistas sobre educação e estudos:
                                    <b-dropdown size="sm" split text="" variant="outline-secundary"  >
                                        <b-dropdown-item-button>(Educação, Guia do Estudante, Almanaque Abril, Sociologia, Língua Portuguesa, Speak Up etc.)</b-dropdown-item-button>
                                    </b-dropdown>
                                </td>
                                <td>{{listagem.dados[0].educa}}</td>
                            </tr>  
                            <tr>
                                <td>l) Revistas para adolescentes ou sobre TV, cinema, música, celebridades:
                                    <b-dropdown size="sm" split text="" variant="outline-secundary"  >
                                        <b-dropdown-item-button>(Viração, TPM, Set, Rolling Stones, Capricho, Contigo, Caras, etc.)</b-dropdown-item-button>
                                    </b-dropdown>
                                </td>
                                <td>{{listagem.dados[0].adolecente}}</td>
                            </tr>  
                            <tr>
                                <td>m) Revistas sobre automóveis, esportes e lazer:
                                    <b-dropdown size="sm" split text="" variant="outline-secundary"  >
                                        <b-dropdown-item-button>(Quatro Rodas, Duas Rodas, Placar, Pesca e Cia., Náutica, Revista do Vôlei, Viagem e Turismo, Terra etc.)</b-dropdown-item-button>
                                    </b-dropdown>
                                </td>
                                <td>{{listagem.dados[0].lazer}}</td>
                            </tr>  
                            <tr>
                                <td>n) Revistas de divulgação científica, tecnológica, filosófica ou artística:
                                    <b-dropdown size="sm" split text="" variant="outline-secundary"  >
                                        <b-dropdown-item-button>(Ciência Hoje, Geo, Galileu, Mente e Cérebro, Linux Magazine, PC Magazine, Filosofia, Cult, História Viva, Entrelivros etc.)</b-dropdown-item-button>
                                    </b-dropdown>
                                </td>
                                <td>{{listagem.dados[0].cientifica}}</td>
                            </tr>  
                            
                        </table>  
                    </td>       
                </tr>

                <tr>
                    <td class="pergunta align-middle">42</td>
                    <td class="pergunta align-middle">Faça uma avaliação da escola em que você realiza ou realizou o Ensino Médio.</td>
                    <td>
                        <table >
                            <th class="sub_cabecalho">Atividades</th>
                            <th class="sub_cabecalho">Frequência</th>
                            <tr>
                                <td>a) Trabalho de grupo:</td>
                                <td>{{listagem.dados[0].aval_grupo}}</td>
                            </tr>  
                            <tr>
                                <td>b) Práticas de esporte:</td>
                                <td>{{listagem.dados[0].aval_esporte}}</td>
                            </tr> 
                            <tr>
                                <td>c) A biblioteca da escola:</td>
                                <td>{{listagem.dados[0].aval_biblioteca}}</td>
                            </tr> 
                            <tr>
                                <td>d) A localização da escola:</td>
                                <td>{{listagem.dados[0].aval_local}}</td>
                            </tr> 
                            <tr>
                                <td>e) O respeito à diversidade:</td>
                                <td>{{listagem.dados[0].aval_respeito}}</td>
                            </tr> 
                            <tr>
                                <td>f) As condições dos laboratórios:</td>
                                <td>{{listagem.dados[0].aval_laboratorio}}</td>
                            </tr> 
                            <tr>
                                <td>g) As condições das salas de aula:</td>
                                <td>{{listagem.dados[0].aval_sala}}</td>
                            </tr> 
                            <tr>
                                <td>h) O ensino de língua estrangeira:</td>
                                <td>{{listagem.dados[0].aval_lingua}}</td>
                            </tr> 
                            <tr>
                                <td>i) O interesse dos (as) estudantes:</td>
                                <td>{{listagem.dados[0].aval_interesse}}</td>
                            </tr> 
                            <tr>
                                <td>j) A atenção às questões ambientais:</td>
                                <td>{{listagem.dados[0].aval_ambiental}}</td>
                            </tr> 
                            <tr>
                                <td>k) A organização dos horários de aulas:</td>
                                <td>{{listagem.dados[0].aval_horario}}</td>
                            </tr> 
                            <tr>
                                <td>l) Segurança (iluminação, policiamento, etc.):</td>
                                <td>{{listagem.dados[0].aval_segurancao}}</td>
                            </tr> 
                            <tr>
                                <td>m) Acesso a computadores e outros recursos de Informática:</td>
                                <td>{{listagem.dados[0].aval_informatica}}</td>
                            </tr> 
                            <tr>
                                <td>n) A atenção e o respeito dos (as) funcionários(as) e dos(as) professores(as):</td>
                                <td>{{listagem.dados[0].aval_atencao}}</td>
                            </tr> 
                            <tr>
                                <td>o) O conhecimento que os (as) professores (as) têm das matérias e a maneira de transmiti-lo:</td>
                                <td>{{listagem.dados[0].aval_conhecimento_prof}}</td>
                            </tr> 
                            <tr>
                                <td>p) A dedicação dos (as) professores (as) para preparar aulas e atender aos (às) estudantes:</td>
                                <td>{{listagem.dados[0].aval_dedica_prof}}</td>
                            </tr> 
                            <tr>
                                <td>q) As iniciativas da escola para realizar excursões, passeios culturais, estudos do meio ambiente:</td>
                                <td>{{listagem.dados[0].aval_passeios}}</td>
                            </tr> 
                            <tr>
                                <td>r) A acessibilidade física e os recursos e os materiais para estudantes com deficiência (rampas, corrimãos, lupas etc.):</td>
                                <td>{{listagem.dados[0].aval_acessibilidade}}</td>
                            </tr> 
                            
                        </table> 
                    </td>       
                </tr>
            </tbody>
        </table>

        <!--valores-->
        <table class="text-center table table-responsive-sm table-sm table-bordered table-striped">
            <thead>
                <tr>
                    <th class="cabecalho">Nº</th>
                    <th class="cabecalho">VALORES</th>
                    <th class="cabecalho">RESPOSTAS</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td class="pergunta">43</td>
                    <td class="pergunta">Você se considera racista?</td>
                    <td>{{listagem.dados[0].racista}}</td>       
                </tr>

                <tr>
                    <td class="pergunta">44</td>
                    <td class="pergunta">Você conhece alguém racista?</td>
                    <td>
                        <label v-if="listagem.dados[0].parente == 1">Parentes, </label>    
                        <label v-if="listagem.dados[0].amigo == 1">amigos (as) ou colegas de escola e/ou de trabalho, </label>   
                        <label v-if="listagem.dados[0].vizinho == 1">vizinhos (as) e/ou conhecidos, </label>    
                        <label v-if="listagem.dados[0].prof == 1">professores (as) ou funcionários (as) da escola, </label>  
                        <label v-if="listagem.dados[0].pessoa == 1">pessoas em geral (nas ruas, nos ambientes públicos etc.)</label>    
                    </td>       
                </tr>

                <tr>
                    <td class="pergunta">45</td>
                    <td class="pergunta">Você já sofreu algum tipo de discriminação?</td>
                    <td>
                        <label v-if="listagem.dados[0].sofreu_econo == 1">Discriminação econômica, </label>
                        <label v-if="listagem.dados[0].sofreu_etnica == 1">Discriminação étnica, racial ou de cor, </label>
                        <label v-if="listagem.dados[0].sofreu_genero == 1">Discriminação de gênero, </label>
                        <label v-if="listagem.dados[0].sofreu_lgbt == 1">Por ser ou ter sido identificado como LGBTQIA+ (lésbica, gay, bissexual, travesti e transexual, queer, intersexual, assexual e outrxs), </label>
                        <label v-if="listagem.dados[0].sofreu_religiao == 1">Por causa de sua religião, </label>
                        <label v-if="listagem.dados[0].sofreu_sem_religiao == 1">Por não ter religião, </label>
                        <label v-if="listagem.dados[0].sofreu_origem == 1">Por causa do local de seu nascimento (em outra cidade, no interior, em outra região, no exterior etc.), </label>
                        <label v-if="listagem.dados[0].sofreu_idade == 1">Por causa da sua idade, </label>
                        <label v-if="listagem.dados[0].sofreu_deficiencia == 1">Por ser pessoa com deficiência física ou mental, </label>
                        <label v-if="listagem.dados[0].sofreu_aparencia == 1">Por causa de sua aparência física (gordo/a, magro/a, alto/ a, baixo/a etc.), </label>
                        <label v-if="listagem.dados[0].sofreu_moradia == 1">Por causa do lugar de sua moradia, </label>    
                    </td>       
                </tr>

                <tr>
                    <td class="pergunta">46</td>
                    <td class="pergunta">Você já presenciou algum tipo de discriminação?</td>
                    <td>
                        <label v-if="listagem.dados[0].pre_econo == 1">Discriminação econômica, </label>
                        <label v-if="listagem.dados[0].pre_etnica == 1">Discriminação étnica, racial ou de cor, </label>
                        <label v-if="listagem.dados[0].pre_mulher == 1">Discriminação contra mulheres, </label>
                        <label v-if="listagem.dados[0].pre_lgbt == 1">Por ser ou ter sido identificado como LGBTQIA+ (lésbica, gay, bissexual, travesti e transexual, queer, intersexual, assexual e outrxs), </label>
                        <label v-if="listagem.dados[0].pre_religiosa == 1">Discriminação religiosa, </label>
                        <label v-if="listagem.dados[0].pre_sem_religiao == 1">Por não ter religião, </label>
                        <label v-if="listagem.dados[0].pre_origem == 1">Por causa do local de seu nascimento (em outra cidade, no interior, em outra região, no exterior etc.), </label> 
                        <label v-if="listagem.dados[0].pre_jovens == 1">Discriminação contra jovens menores de 18 anos, </label>
                        <label v-if="listagem.dados[0].pre_deficiencia == 1">Discriminação contra pessoas com deficiência, </label>
                        <label v-if="listagem.dados[0].pre_fisica == 1">Por causa da aparência física, </label>
                        <label v-if="listagem.dados[0].pre_idosos == 1">Discriminação contra pessoas idosas, </label>   
                        <label v-if="listagem.dados[0].pre_moradia == 1">Por causa do lugar de moradia, </label>   
                    </td>       
                </tr>
                
            </tbody>
        </table>

        <!--{{this.idCandidato}}
        <br>
        {{this.listagem}}-->
    </b-container>
    
</template>

<script>
import axios from 'axios'
import config from '../../../config'

export default {
    name: 'DadosCompletos',
    data() {
        return{
            idCandidato: window.localStorage.getItem('idDetalhes'),
            listagem: {},
            adm: window.localStorage.getItem('nivel'),
        }
    },
    mounted() {
        const linkDadosCandidatoCompleto = config.server()+'completo/'+this.idCandidato;
        axios.get(linkDadosCandidatoCompleto)
        .then((response) =>{
            if(this.adm != 1){
                //window.location.href = "/"
                //TALVEZ REMOVER ESSA CHECAGEM
            }
            else{
                console.log(response.data);
                this.listagem = response.data;   
            }   
            //this.listagem = response.data;         
        })
        .catch((error) => {
            console.log(error);
        });
    },
}
</script>

<style lang="scss">

.cabecalho{
    font-size: 120%;
    background-color: #DD9BC7;
}
.pergunta{
    font-weight: bold;
}
.sub_cabecalho{
    color: rgb(95, 94, 94);
}

</style>

import Vue from 'vue';
import Router from 'vue-router';

import Inicio from '@/components/principal/Inicio.vue'
import Sobre from '@/components/Sobre.vue'
import Noticias from '@/components/Noticias.vue'
import Contato from '@/components/Contato.vue'
import Faq from '@/components/Faq.vue'
import Inscricao from '@/components/formulario/Inscricao.vue'
import Login from '@/components/Login.vue'
import Inscritos from '@/components/adm/Inscritos.vue'
import Cadastro from '@/components/Cadastro.vue'
import Detalhes from '@/components/adm/Detalhes.vue'
import DadosCompletos from '@/components/adm/DadosCompletos.vue'
import CadastroSimulado from '@/components/adm/CadastroSimulado.vue'
import IntroSimula from '@/components/simulado/IntroSimula.vue'
import GabaritoSimples from '@/components/simulado/GabaritoSimples.vue'

import TodosDepoimentos from '@/components/principal/TodosDepoimentos.vue'

import DadosPessoais from '@/components/formulario/DadosPessoais.vue'
import Arquivos from '@/components/formulario/Arquivos.vue'
import Estudos from '@/components/formulario/Estudos.vue'
import Socioeconomico from '@/components/formulario/Socioeconomico.vue'
import Valores from '@/components/formulario/Valores.vue'
import ConcluiInscricao from '@/components/formulario/ConcluiInscricao.vue'

import Valida from '@/components/Valida.vue'
import RecuperaSenha from '@/components/RecuperaSenha.vue'
import NaoEncontrado from '@/components/NaoEncontrado.vue'


Vue.use(Router);

export default new Router({
    //suppressTransitionError: true,
    mode: 'hash',//TALVEZ ALTERAR PARA HASHMODE (#) EM PRODUÇÃO
    routes: [
        {
          name: 'Inicio',
          path: '/',
          component: Inicio
        },
        {
          name: 'Sobre',
          path: '/sobre',
          component: Sobre
        },
        {
          name: 'Noticias',
          path: '/noticias',
          component: Noticias
        },
        {
          name: 'Contato',
          path: '/contato',
          component: Contato
        },
        {
          name: 'Faq',
          path: '/faq',
          component: Faq
        },
        {
          name: 'Inscricao',
          path: '/inscricao',
          component: Inscricao
        },
        {
          name: 'Login',
          path: '/login',
          component: Login
        },
        {
          name: 'TodosDepoimentos',
          path: '/depoimentos',
          component: TodosDepoimentos
        },
        {
          name: 'Inscritos',
          path: '/inscritos',
          component: Inscritos
        }, 
        {
          name: 'Cadastro',
          path: '/cadastro',
          component: Cadastro
        }, 
        {
          name: 'Detalhes',
          path: '/detalhes',
          component: Detalhes
        }, 
        {
          name: 'Arquivos',
          path: '/inscricao/arquivos',
          component: Arquivos
        }, 
        {
          name: 'DadosPessoais',
          path: '/inscricao/pessoal',
          component: DadosPessoais
        }, 
        {
          name: 'Estudos',
          path: '/inscricao/estudos',
          component: Estudos
        }, 
        {
          name: 'Socioeconomico',
          path: '/inscricao/socioeconomico',
          component: Socioeconomico
        }, 
        {
          name: 'Valores',
          path: '/inscricao/valores',
          component: Valores
        }, 
        {
          name: 'ConcluiInscricao',
          path: '/inscricao/conclui',
          component: ConcluiInscricao
        }, 
        {
          name: 'Valida',
          path: '/valida',
          component: Valida
        }, 
        {
          name: 'RecuperaSenha',
          path: '/recuperacao',
          component: RecuperaSenha
        }, 
        {
          name: 'DadosCompletos',
          path: '/completo',
          component: DadosCompletos
        },
        {
          name: 'PaginaNaoEncontrada',
          path: '*',
          component: NaoEncontrado,
        },
        {
          name: 'CadastroSimulado',
          path: '/cadastraSimulado',
          component: CadastroSimulado,
        },
        {
          name: 'IntroSimula',
          path: '/simulado',
          component: IntroSimula,
        },
        {
          name: 'GabaritoSimples',
          path: '/gabaritosimples',
          component: GabaritoSimples,
        }       


        
        
        

        
      ]   
});

import Vue from 'vue';
import Router from 'vue-router';

import Inicio from '@/components/principal/Inicio.vue'
import Sobre from '@/components/Sobre.vue'
import Noticias from '@/components/Noticias.vue'
import Contato from '@/components/Contato.vue'
import Faq from '@/components/Faq.vue'
import Inscricao from '@/components/Inscricao.vue'
import Login from '@/components/Login.vue'
import Inscritos from '@/components/adm/Inscritos.vue'
import Cadastro from '@/components/Cadastro.vue'

import TodosDepoimentos from '@/components/principal/TodosDepoimentos.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',//TALVEZ ALTERAR PARA HASHMODE (#) EM PRODUÇÃO
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
        }
      ]   
});

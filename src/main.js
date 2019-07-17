//arquivo responsavel por carregar as lib para build
import Vue from 'vue'
import App from './App.vue'
/*import VueRouter  from 'vue-router'*/
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

import InscritosService from './service/InscritosService'
import {ConfigClass} from './classes/ConfigClass'
let server = `${ConfigClass.getUrlApi().toString()}`;//caminho do servidor
//cria prototipos de variaveis, separando entre demais plugins (é uma boa pratica para esse projeto):
Vue.prototype.$inscritosService = InscritosService;
Vue.prototype.$server = server;

//add pasta de rotas (router)
/*import Inicio from './components/Inicio.vue'
import Sobre from './components/Sobre.vue'*/

//"use" informa que o vue irá trabalhar com a biblioteca passada como parametro
Vue.use(BootstrapVue)
/*Vue.use(VueRouter)//talvez add na pasta de rota*/

import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)


Vue.config.productionTip = false
//array de objetos representando cada rota (config de rotas)
/*const routes = [
  {
    name: 'Inicio',
    path: '/inicio',//ou apenas barra (/)
    component: Inicio
  },
  {
    name: 'Sobre',
    path: '/sobre',
    component: Sobre
  }
]
//instanciando objeto do VueRouter
const router = new VueRouter({mode: 'history', routes}); 
*/
new Vue({
  render: h => h(App),
  router//faz com que o vue tenho conhecimento das rotas
}).$mount('#app')

import Vue from 'vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { BIcon, BIconArrowUp, BIconArrowDown } from 'bootstrap-vue'

import router from '@/router/index';
import './assets/global.css';


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component('BIcon', BIcon)
Vue.component('BIconArrowUp', BIconArrowUp)
Vue.component('BIconArrowDown', BIconArrowDown)

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');

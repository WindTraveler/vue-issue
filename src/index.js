import './index.css';
import Vue from 'vue/dist/vue.esm.js';
import App from './App.vue';

new Vue({
    render: h => h(App)
}).$mount('#app');

console.log('done');
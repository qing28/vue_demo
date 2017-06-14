import Vue from 'vue';
import vueResource from 'vue-resource';
import VueRouter from 'vue-router';
import routes from './router.js';


Vue.config.silent = true;

Vue.use(vueResource);
Vue.use(VueRouter);

const router = new VueRouter({ routes , mode :'history' }); //es6 解构 

new Vue({
	el:'#app',
	router, //es6 解构 
	template:`<router-view></router-view>`
})
// Vue.component('my-component', {
//   template: '<div class="pageBg"></div>'
// })
// new Vue({
// 	components:{ Entry },
// 	template:`<Entry/>`
// }).$mount('#app')
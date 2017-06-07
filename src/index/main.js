import Vue from 'vue';
import vueResource from 'vue-resource';
import Entry from './main.vue';
Vue.config.silent = true
Vue.use(vueResource);

new Vue({
	components:{ Entry },
	template:`<Entry/>`
}).$mount('#app')
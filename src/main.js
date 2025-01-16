import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import * as VueGoogleMaps from 'vue2-google-maps';

import 'bootstrap/dist/js/bootstrap.js';
import 'jquery/dist/jquery.js';

// 套用GoogleMap到每個元件
Vue.use(VueGoogleMaps, {
	load: {
		key: 'AIzaSyBn0dr1SW-9z1NO7NVEA3qQafg9Wwxcj-k',
		libraries: 'places',
	},
	installComponents: true,
});

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');

import Vue from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
	faChevronCircleLeft,
	faChevronCircleRight,
	faPause,
	faPlay
} from '@fortawesome/free-solid-svg-icons';

library.add(faChevronCircleLeft, faChevronCircleRight, faPlay, faPause);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
	render: function (h) {
		return h(App);
	}
}).$mount('#app');

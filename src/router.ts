import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './components/Inicio/Inicio.vue';
import Login from './components/Login/Login.vue';
import Principal from './components/Principal/Principal.vue';
import Home from './components/Home.vue';
import Patron from './components/Patron.vue'

Vue.use(Router);

export default new Router({
	routes: [
		{ path: '/categoria', name: 'Inicio', component: Home },
		{ path: '/patron', name: 'Patron', component: Patron },
		// { path: '/Login', name: 'Login', component: Login },
		// { path: '/Principal', name: 'Principal', component: Principal  },
		// { path: '/Home', name: 'Home', component: Home  },
	],
});


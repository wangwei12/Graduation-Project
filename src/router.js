import Vue from 'vue'
import Router from 'vue-router'
// import home from './views/home'
import article from './views/article'
import theme from './views/theme'
import homes from './views/homes';
import second from './views/second';

Vue.use(Router);

const router = new Router( {
	mode: 'hash',
	routes: [
		{
			path: '/',
			component: homes,
			name: 'homes'
		},
		{
			path: '/article',
			component: article,
			name: 'article'
		},
		{
			path: '/theme',
			component: theme,
			name: 'theme'
		},
		{
			path: '*',
			redirect: '/'
		},
		{
			path:'/second',
			component: {
				second: second
			}
		}
	]
} )
export default router

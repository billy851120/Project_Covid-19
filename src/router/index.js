import Vue from 'vue';
import VueRouter from 'vue-router';
import WebNav from '../views/WebNav.vue';
import RapidTest from '../components/skill/RapidTest.vue';
import uploadFile from '../components/skill/uploadFile.vue';
import TodoList from '../components/skill/TodoList.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'WebNav',
		component: WebNav,
	},
	{
		path: '/RapidTest',
		name: 'RapidTest',
		component: RapidTest,
	},
	{
		path: '/uploadFile',
		name: 'uploadFile',
		component: uploadFile,
	},
	{
		path: '/TodoList',
		name: 'TodoList',
		component: TodoList,
	},
	{
		path: '',
		redirect: '/',
	},
];

const router = new VueRouter({
	mode: 'hash',
	// base: process.env.BASE_URL,
	routes,
});

export default router;

// import Router from 'vue-router';

const Entry = r => require.ensure([],() => r( require ('./pages/main.vue')),'entry');
const More = r => require.ensure([],() => r( require ('./pages/more.vue')),'more');

const router = [
	{
		path:'/pages/index/*',component: Entry
	},{
		path:'/more',component: More
	}
]
export default router;
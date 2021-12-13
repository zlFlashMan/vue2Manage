import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
// const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
// const addShop = r => require.ensure([], () => r(require('@/page/addShop')), 'addShop');
// const addGoods = r => require.ensure([], () => r(require('@/page/addGoods')), 'addGoods');
// const userList = r => require.ensure([], () => r(require('@/page/userList')), 'userList');
// const shopList = r => require.ensure([], () => r(require('@/page/shopList')), 'shopList');
// const foodList = r => require.ensure([], () => r(require('@/page/foodList')), 'foodList');
// const orderList = r => require.ensure([], () => r(require('@/page/orderList')), 'orderList');
// const adminList = r => require.ensure([], () => r(require('@/page/adminList')), 'adminList');
// const visitor = r => require.ensure([], () => r(require('@/page/visitor')), 'visitor');
// const newMember = r => require.ensure([], () => r(require('@/page/newMember')), 'newMember');
// const uploadImg = r => require.ensure([], () => r(require('@/page/uploadImg')), 'uploadImg');
// const vueEdit = r => require.ensure([], () => r(require('@/page/vueEdit')), 'vueEdit');
// const adminSet = r => require.ensure([], () => r(require('@/page/adminSet')), 'adminSet');
// const sendMessage = r => require.ensure([], () => r(require('@/page/sendMessage')), 'sendMessage');
// const explain = r => require.ensure([], () => r(require('@/page/explain')), 'explain');
// 答题管理
const answerManage = r => require.ensure([], () => r(require('@/page/answerManage')), 'answerManage');
// 图文管理
const graphicManage = r => require.ensure([], () => r(require('@/page/graphicManage')), 'graphicManage');
// 在线留言管理
const messageManage = r => require.ensure([], () => r(require('@/page/messageManage')), 'messageManage');
// 学校管理
const schoolManage = r => require.ensure([], () => r(require('@/page/schoolManage')), 'schoolManage');

const routes = [
	{
		path: '/',
		component: login
	},
	{
		path: '/manage',
		component: manage,
		name: '',
		children: [{
			path: '/answerManage',
			component: answerManage,
			meta: ['答题管理'],
		},
		{
			path: '/graphicManage',
			component: graphicManage,
			meta: ['图文管理'],
		},
		{
			path: '/messageManage',
			component: messageManage,
			meta: ['在线留言管理'],
		},
		{
			path: '/schoolManage',
			component: schoolManage,
			meta: ['学校管理'],
		},]
	}
]

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})

import Vue from 'vue'
import Router from 'vue-router'
// import { watch } from 'fs';

const Cart = resolve => require(['../Cart.vue'], resolve)
const Me = resolve => require(['../Me.vue'], resolve)
const Bookdetails = resolve => require(['../Bookdetails.vue'], resolve)
const Categories = resolve => require(['../Categories.vue'], resolve)
const Home = resolve => require(['../Home.vue'], resolve)
const Watch = resolve => require(['../watch.vue'], resolve)
const watchId = resolve => require(['../components/watchId.vue'], resolve)
// let Cart = (resolve)=>{
//     return require.ensure([],()=>{
//         resolve(require('../Cart.vue'))
//     })
// }
// let Workbench = ( resolve ) => {
//     return import ( '@/views/backend/workbench' )
// }
// 1、require是有webpack社区提供方案，import为es6官方提供；
//   2、使用1、require方式可以将多个模块js组合分割打包，
//      require下面方法ensure第一个参数是依赖，如果不需要请写[]（空数组）
//      而import只能将每个模块独立打包成一个js文件；
//      也就是说，如果现在有三个导航A、B、C，你现在用require可以将A单独分割出来做懒加载，进入a模块只请求A，
//      B和C你可以组合在一起进行分割，进入B和C将加载共同一个文件；
// const Home = () => import('../Home.vue')
const Main = resolve => require(['../Main.vue'], resolve)

Vue.use(Router)
// Vue.use(VueResource)
export default new Router({
    linkActiveClass: 'active',
    mode: 'history',
    base: __dirname,
    routes: [
        {
            name: 'Main',
            path: '/main',
            component: Main,
            alias: '/',
            // alias: '/',//默认显示
            children: [
                {
                    name: 'Home',
                    path: 'home',
                    component: Home,
                },
                {
                    name: 'Categories',
                    path: 'categories',
                    component: Categories
                },
                {
                    name: 'Cart',
                    path: 'cart',
                    component: Cart
                },
                {
                    name: 'Me',
                    path: '/me',
                    component: Me
                },
                {
                    name: 'watch',
                    path: 'watch',
                    component: Watch,
                }, 
                {
                    name: 'wacthId',
                    path: 'watchId',
                    component: Watch
                }
            ]
        },
        {
            name: 'Bookdetails',
            path: '/books/:id',
            component: Bookdetails
        }
        
    ]
})

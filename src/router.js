/* 
    将路由和 vm实例 分开
*/


import VueRouter from 'vue-router'


//导入组件
import Home from './components/tabber/HomeContainer.vue'
import member from './components/tabber/memberContainer.vue'
import shopcar from './components/tabber/shopcarContainer.vue'
import search from './components/tabber/searchContainer.vue'


//3.创建路由对象
var router = new VueRouter({
    //配置路由规则
    routes: [
        {path:'/',redirect: '/home'},
        {path: '/home',component: Home},
        {path: '/member',component: member},
        {path: '/shopcar',component: shopcar},
        {path: '/search',component: search},
    ],
    linkActiveClass:'mui-active' //覆盖默认路由高亮的类，默认的类为 router-link-active
})

//把 路由对象 暴露出去
export default router

// 入口文件

//导入 vue 包 （功能不全的那个）
import Vue from 'vue'


//1.1导入 vue-router 包
import VueRouter from 'vue-router'
//1.2手动安装路由
Vue.use(VueRouter)
//1.3导入 router.js
import router from './router.js'

/* //2.1导入vue-resource
import VueResource from 'vue-resource'
//2.2安装vue-resource
Vue.use(VueResource) */

//按需导入 Mint-UI 中的组件
import { Header, Swipe, SwipeItem } from 'mint-ui'
//头部组件
Vue.component(Header.name, Header)
//轮播图
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


//导入 MUI 的样式  (Tabber栏)
import './lib/mui/css/mui.min.css'
//导入 MUI 的扩展样式
import './lib/mui/css/icons-extra.css'


//导入 App 组件
import app from './app.vue'


//创建 Vm 实例
var vm = new Vue({
    el: '#app',
    data:{},
    render: c => c(app),
    router,  //挂载路由对象到VM实例
});
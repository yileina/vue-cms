// 入口文件

//导入 vue 包 （功能不全的那个）
import Vue from 'vue'



//按需导入 Mint-UI 中的组件
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)



//导入 MUI 的样式
import './lib/mui/css/mui.min.css'


//导入 App 组件
import app from './app.vue'


//创建 Vm 实例
var vm = new Vue({
    el: '#app',
    data:{},
    render: c => c(app),
});
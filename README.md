# 这是基于 Vue 技术 的商城项目

## 制作首页APP组件
1. 完成 Header 区域，使用的是 Mint-UI 中的Header组件
2. 制作底部的 Tabber 区域，使用的是 MUI 的 Tabber.html
 + 在制作 购物车 小图标的时候，操作会相对多一些
 + 先把 扩展图标的 css 样式，拷贝到项目中
 + 拷贝 扩展字体库 ttf 文件，到项目中
 + 为购物车 小图标，添加如下样式 "mui-icon mui-icon-extra mui-icon-extra-cart"
3. 要在 中间区域 放置一个 router-view 来展示路由匹配到的组件

## 改造 tabber 的 a 标签为 router-link ，href属性为to属性

## 设置路由高亮的类 （在路由对象中添加一个 linkActiveClass: 'mui-active'）

## 点击 tabber 中的路由链接，展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
1. 获取数据，如何获取---vue-resource
2. 使用 vue-resource 的 this.$http.get 获取数据
3. 获取到的数据，要保存到 data 身上
4. 使用 v-for 循环 渲染 每一个 item 项，注意要设置:key属性

## 六宫格 设置 通过MUI grid-default
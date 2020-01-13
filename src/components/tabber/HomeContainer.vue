<template>
    <div>
        <!-- 轮播图 区域    还需手动设置高度-->
        <mt-swipe :auto="4000">
            <!-- <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
                <img :src="item.img" alt="">
            </mt-swipe-item> -->
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>

        <!-- 六宫格区域 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		 </ul> 
    </div>
</template>

<script>
//导入 min-ui 包
// import { Toast } from 'mint-ui';


export default {
    data() {
        return {
            lunbotuList: [],   //保存轮播图数据的数组
        }
    },
    methods: {
        /* getLunbotu() { //获取轮播图数据的方法
            this.$http.get('http://vue.studyit.io/api/getlunbo').then(result=>{
                //result.body 获取数据
                if (result.body.status === 0) {
                    //成功了
                    this.lunbotuList = result.body.message         
                } else {
                    //失败了
                    Toast('加载数据失败....');
                }
            })
        } */
    }
}
</script>  

<style lang="scss" scoped>
//轮播图区域
.mint-swipe {
    height: 200px;
    .mint-swipe-item {
        &:nth-of-type(1) {
            background-color: red;
        }
        &:nth-of-type(2) {
            background-color: blue;
        }
        &:nth-of-type(3) {
            background-color: green;
        }
        img {
            width: 100%;
            height: 100%;
        }
    }
}

//六宫格区域
.mui-grid-view.mui-grid-9 {
    background-color: white;
    img {
        width: 60px;
        height: 60px;
    }
}
.mui-grid-view.mui-grid-9 .mui-media {
        border: 0;
}
</style>
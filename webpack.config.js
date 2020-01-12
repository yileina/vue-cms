const path = require('path');

//vue-loader在15之后需要在webpack.config.js中当插件引入
const VueLoaderPlugin = require('vue-loader/lib/plugin')


//启动热更新的第二步
const webpack = require('webpack');

//导出刚才安装的 html-webpack-plugin 插件，作用是在内存中生成  HTML 页面
//只要是插件，就一定要放到 plugins 中去
const htmlWebpackPlugin = require('html-webpack-plugin');

//这个配置文件其实就是一个js文件，通过node 中的模块操作，向外暴露了一个配置对象
module.exports = {
    //指定  入口 和  出口
    entry: path.join(__dirname,"./src/main.js"),  //入口  表示需要打包的那个文件
    output: {  //输出文件的配置
        
        //指定 打包好的文件 输出到的目录
        path: path.join(__dirname,"./dist"),
        
        //  指定 输出的文件的名称
        filename: 'bundle.js'
    },
    devServer: { //这是配置 dev-server 命令参数的第二种形式，相对来说麻烦一些
        //"dev": "webpack-dev-server --open --port 3000 --contentBase src --hot"
        open: true,    //自动打开浏览器
        port: 3000,    //设置启动时候的运行端口号
        contentBase: 'src',  //指定托管的根目录
        hot: true   //启动热更新 的第一步
    },

    //只要带 s 就必然是个数组
    plugins: [   //配置插件的节点
        new webpack.HotModuleReplacementPlugin(),   //new 一个热更新的 模块对象  这时启动热更新的第三步
        
        new htmlWebpackPlugin({//创建一个插件对象

            //指定 模版页面 ，将来会根据这个页面的路径在内存中 生成 HTML 页面的插件
            template: path.join(__dirname,"./src/index.html"),
            filename: 'index.html' //指定在内存中生成的页面的名称
        }),

        new VueLoaderPlugin(),//
    ],
    
    module: { //用于 配置 所有第三方模块 加载器
        rules: [  //所有 第三方的 匹配规则，在loader后面可以传参
            // 配置处理 .css文件 的第三方 loader 规则，从右到左调用
            {test: /\.css$/, use:['style-loader','css-loader']},  
            
            // 配置处理 .less文件 的第三方 loader 规则，
            //由于less文件解析后就是css文件，还需引入 style-loader 和 css-loader
            {test: /\.less$/,use:['style-loader','css-loader','less-loader']},
            
            // 配置处理 .scss文件 的第三方 loader 规则，
            //由于scss文件解析后就是css文件，还需引入 style-loader 和 css-loader
            {test: /\.scss$/,use:['style-loader','css-loader','sass-loader']},

             /* 配置处理 url 地址 中的 图片 的第三方 loader 规则，注意：limit参数给定的值是图片的大小，单位是字节
              如果我们引用的图片，小于或等于给定的limit值，则不会被转为 base64 格式的字符串,如果大于limit给定的值
              ，则会被转化为 base64 格式的字符串；第二个参数name 的值 [name]表示图片原来的名称，.[ext]表示图片原来的扩展名
              , [hash:8]表示如果两张图片的名称相同时，由于每张图片的hash值不同，指定前8位就会显示不同图片*/
            {test: /\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=7000&name=[hash:8]-[name].[ext]'},

            /* 配置处理 url 地址 中的 字体图标 的第三方 loader 规则， */
            {test: /\.(ttf|eot|svg|woff|woff2|otf)$/,use:'url-loader'},

            /* 配置处理 ES6+高级语法 的js文件 ，其中excliude:/node_modules/ 表示排除node_modules目录下的js文件*/
            { test:/\.js$/, use: 'babel-loader', exclude:/node_modules/ },

            /* 配置处理 vue 文件的laoder */
            {test:/\.vue$/,use:'vue-loader'},
        ]
    },

    resolve: {
        alias: {  //修改 Vue 被导入时候的包的路径
            // "vue$": "vue/dist/vue.js"
        }
    }
}



//当我们在 控制台，直接输入 webpack 命令执行的时候，webpack做了以下几步:
//1. 首先，webpack 发现我们并没有通过命令的形式给它 指定入口和出口
//2. webpack 就回去找根目录下的 "webpack.config.js"配置文件
//3.当找到后，webpack 就会解析这个文件，当解析完后，就会得到 配置文件 中导出的配置对象
//4.当 webpack 拿到了 配置对象后，就拿到了 配置对象中 指定的 入口 和 出口 , 然后打包构建
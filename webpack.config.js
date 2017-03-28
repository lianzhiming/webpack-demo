var htmlWebpackPlugin=require('html-webpack-plugin');//自动载入js插件
var path=require('path');
module.exports={
    //entry:'./src/script/main.js',
    //entry:['./src/script/main.js','./src/script/a.js'],
    entry:{//入口
        main:'./src/script/main.js',
        a:'./src/script/a.js'
    },
    output:{
        path:path.join(__dirname, './dist'),
        //filename:'[name].js'
        //filename:'[name]-[hash].js'
        filename:'js/[name]-[chunkhash].js',
        publicPath:'http://cdn.com/'//设置js路径以http://cdn.com/开头
    },
    plugins:[
        new htmlWebpackPlugin({
            //filename:'index-[hash].html',//生成的html文件名
            filename:'index.html',//生成的html文件名
            template:'index.html',
            //inject:'head',//设置生成的js在body中还是在head中
            inject:false,//设置生成的js在body中还是在head中
            title:'webpack is good',//设置html的title
            date:new Date(),
            minify:{//对html进行压缩
                removeComments:true,//删除注释
                collapseWhitespace:true//删除空格
            }
        })
    ]
}
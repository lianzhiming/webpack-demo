//��ҳ��Ӧ��
/*
var htmlWebpackPlugin=require('html-webpack-plugin');//�Զ�����js���
var path=require('path');
module.exports={
    //entry:'./src/script/main.js',
    //entry:['./src/script/main.js','./src/script/a.js'],
    entry:{//���
        main:'./src/script/main.js',
        a:'./src/script/a.js'
    },
    output:{
        path:path.join(__dirname, './dist'),
        //filename:'[name].js'
        //filename:'[name]-[hash].js'
        filename:'js/[name]-[chunkhash].js',
        publicPath:'http://cdn.com/'//����js·����http://cdn.com/��ͷ
    },
    plugins:[
        new htmlWebpackPlugin({
            //filename:'index-[hash].html',//���ɵ�html�ļ���
            filename:'index.html',//���ɵ�html�ļ���
            template:'index.html',
            //inject:'head',//�������ɵ�js��body�л�����head��
            inject:false,//�������ɵ�js��body�л�����head��
            title:'webpack is good',//����html��title
            date:new Date(),
            minify:{//��html����ѹ��
                removeComments:true,//ɾ��ע��
                collapseWhitespace:true//ɾ���ո�
            }
        })
    ]
}
*/

//��ҳ��Ӧ��
var htmlWebpackPlugin=require('html-webpack-plugin');//�Զ�����js���
var path=require('path');
module.exports={
    entry:{//���
        main:'./src/script/main.js',
        a:'./src/script/a.js',
        b:'./src/script/b.js',
        c:'./src/script/c.js'
    },
    output:{
        path:path.join(__dirname, './dist'),
        filename:'js/[name]-[chunkhash].js',
        publicPath:'http://cdn.com/'//����js·����http://cdn.com/��ͷ
    },
    plugins:[
        new htmlWebpackPlugin({
            filename:'a.html',//���ɵ�html�ļ���
            template:'index.html',
            inject:false,//�������ɵ�js��body�л�����head��
            title:'this is a.html',//����html��title
            //chunks:['main','a']//����main��a
            excludeChunks:['b','c']
        }),
        new htmlWebpackPlugin({
            filename:'b.html',//���ɵ�html�ļ���
            template:'index.html',
            inject:false,//�������ɵ�js��body�л�����head��
            title:'this is b.html',//����html��title
            //chunks:['b']
            excludeChunks:['a','c']
        }),
        new htmlWebpackPlugin({
            filename:'c.html',//���ɵ�html�ļ���
            template:'index.html',
            inject:false,//�������ɵ�js��body�л�����head��
            title:'this is c.html',//����html��title
            //chunks:['c']
            excludeChunks:['a','b']
        })
    ]
}
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
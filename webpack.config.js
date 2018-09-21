const path = require('path')
const htmlPlugin = require('html-webpack-plugin')

const htmlWP = new htmlPlugin({
    template : path.join(__dirname , './src/index.html'),
    filename : 'index.html'
})
module.exports = {

    mode : 'development',

    plugins : [
        htmlWP
    ],

    module : {
        rules : [
            {
                test : /\.js$/,
                use : 'babel-loader',
                exclude : /node_modules/
            }
        ]
    }

}
const HtmlWebpackPlugin = require("html-webpack-plugin");
const getEntry = require("./webpackConfig/getEntry");
const getFilePath = require("./webpackConfig/getFilepath");
const htmlconfig =require("./webpackConfig/htmlconfig");

const entry = getEntry("./src");
const htmlarr=[];//注入html模板
getFilePath("./src").map(pathname => {
	htmlarr.push(new HtmlWebpackPlugin(htmlconfig[pathname]));
});

module.exports = (env, argv) => ({
    entry: entry
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js' 
    }
    ....//其他配置
    devServer: {
	port: 3100,
	open: true,
    },
    plugins: [
        ...htmlarr
    ]
})


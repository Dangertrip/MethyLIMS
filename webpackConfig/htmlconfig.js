/**
 * @project 页面html配置
 * @author:leinov
 * @date: 2018-10-09
 */

module.exports={
    index:{
        title: "index",
		filename:"index.html",
		template: "./src/template.html",  
        chunks:["index/index"],
    },
    about:{
		title: "about",//网站标题
		filename:"about.html",	
        template: "./src/template.html", 
		chunks:["about/about"]
    }
};

作者：binding
链接：https://juejin.im/post/5bc41ae0f265da0af161674e
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

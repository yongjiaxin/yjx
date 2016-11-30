// 引入模板
var indexTpl=require("../tpls/index.string");

import index from "../util/common";

/*
var myScroll=new Iscroll("#scroller",{
	click:true
})*/

index.render(indexTpl);


 /*   
// 定义视图
SPA.defineView("index",{
	html:indexTpl,
	plugins:["delegated"],
	modules:[{
       name:"content",  // 子视图的名称，用于引用的句柄
       defaultTag:"home",
       views:["home","search","my"], // 定义子视图集
       container:".m-wrapper"   // 将子视图中的内容渲染到主视图的哪个容器
	}],
	bindEvents:{
		// 视图显示出来之前执行的回调函数
		beforeShow:function(){
            // console.log("before");
		},
		// 视图显示出来之后执行的回调函数
		show:function(){
			//console.log(Swiper);
		}
	},
	bindActions:{
        "switch.tabs":function(e,data){
            this.modules.content.launch(data.tag);
        },
        "switch.my":function(){
        	SPA.open("my",{
        		
        		  ani:{
        		  	name:"dialog",
        		  	width:280,
        		  	height:200
        		  }
        		
        	});
        }
	}
})
*/












































/*SPA.defineView("index",{
	// 定义HTML
	html:indexTpl,
	// 引入delegated插件，用于定义tap事件
	plugins:["delegated"],
	// 定义子视图  主页 
	modules:[{
       name:"content",  // 子视图的名称，用于引用的句柄
       defaultTag:"home",
       views:["home","search","my"], // 定义子视图集
       container:".m-wrapper"   // 将子视图中的内容渲染到主视图的哪个容器
	}],
	// 绑定视图事件
	bindEvents:{
		// 视图显示出来之前执行的回调函数
		beforeShow:function(){
            // console.log("before");
		},
		// 视图显示出来之后执行的回调函数
		show:function(){
			//console.log(Swiper);
		}
	},
	// 绑定元素事件
	bindActions:{
        "switch.tabs":function(e,data){
            this.modules.content.launch(data.tag);
        },
        "goto.my":function(){
         SPA.open("my");
        },
        "goto.search":function(){
             SPA.open("search");
         }
	}
})*/
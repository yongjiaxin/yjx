var homeTpl=require("../tpls/home.string");

import home from "../util/com";
home.render(homeTpl);

var util = require("../util/util");

var Vue=require("../libs/vue");
var vueResource=require("../libs/vue-resource");
//启用vue
Vue.use(vueResource);
new Vue({
	el:"#m_home",
	data:{
		msg:"hello vue",
        liveData:[]
	},
	methods:{
		dataFormat:function(data){
            var tempArr=[];
            for(var i=0,len=Math.ceil(data.length/2);i<len;i++){
                tempArr[i]=[];
                tempArr[i].push(data[i*2]);
                tempArr[i].push(data[i*2+1]);
            }
            return tempArr;
        }
	},
	created:function(){
		var that=this;

		var homeSwiper=new Swiper('#home_container',{
    				 loop:false,
                     onSlideChangeStart:function(swiper){
                        var index = swiper.activeIndex;
                        var $tags = $("#title li");
                        util.setFocus($tags.eq(index));
                    }
		     });

	    var contentSwiper=new Swiper('#content_container',{
			        loop:false,
            onSlideChangeStart:function(swiper){
                var index = swiper.activeIndex;
                var $tags = $(".navs span");
                util.setFocus($tags.eq(index));
             }
        });

		this.$http.get("/mock/livelist.json")
		          .then((response)=>{
		             var data=response.data.data;
		             that.liveData=that.dataFormat(data);

		              console.log(that.liveData);
                    /*  that.originArr=result.data;
                      that.vm.liveData=that.dataFormat(data);*/
		          },(response)=>{})
	}
})
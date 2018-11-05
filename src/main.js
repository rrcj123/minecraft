import Vue from 'vue'
import App from './App.vue'
import router from './router'


Vue.config.productionTip = false;

//引入VueResource到当前项目中
import VueResource from "vue-resource"
//加载VueResource
Vue.use(VueResource),
//定义全局(日期格式)过滤器
Vue.filter("dateFormat",function(datestr,pattern="YYYY-MM-DD"){
   var m=new Date(datestr).getMonth()+1;
   m=m < 10 ? '0' + m : '' + m;
   var d=new Date(datestr).getDate();
   d=d < 10 ? '0' + d : '' + d;
   var str=m+"-"+d;
   return str;
});
//公告类别过滤器
Vue.filter("classlist",function(classify) {
    var str = "";
    switch (classify) {
        case "rd":str = "热点";break;
        case "xw":str = "新闻";break;
        case "gg":str = "公告";break;
        case "hd":str = "活动";break;
    }
    return str;
})
//6.设置请求的根路径
Vue.http.options.root="http://123.206.86.33:2010/",
//7:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

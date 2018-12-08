import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


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
Vue.filter("dateTime",function(datestr,pattern="YYYY-MM-DD"){
    return new Date(datestr).toLocaleString()
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
});
//6.设置请求的根路径
Vue.http.options.root="https://worldht.rrcj123.com/",
//7:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;
//路由守卫
router.beforeEach((to, from, next) => {
    if (to.path==='/shangchuan') {
        if(!sessionStorage.getItem("user")){
            window.alert("您尚未登陆，返回首页");
            router.push({path: '/index'})
        }
    }
    if (to.path==='/list') {
        if(sessionStorage.getItem("user")!='rrcj123'){
            window.alert("请使用管理员账号尝试");
            router.push({path: '/index'})
        }
    }
    next()
});
router.afterEach((to,from,next) => {
    window.scrollTo(0,0);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

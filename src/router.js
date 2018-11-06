import Vue from 'vue'
import Router from 'vue-router'
import Index from "./components/index/Index"
import NewsList from "./components/news/NewsList"
import XinShou from "./components/xinshou/XinShou"
import WanJia from "./components/wanjia/WanJia"
import ShiPin from "./components/shipin/ShiPin"
import SheQu from "./components/shequ/SheQu"
import Login from "./components/login/login"

Vue.use(Router);
export default new Router({
    routes: [
      {path:'/',component:Index},
      {path:"/index",component:Index},
      {path:'/news',component:NewsList},
      {path:"/xinshou",component:XinShou},
      {path:"/wanjia",component:WanJia},
      {path:"/shipin",component:ShiPin},
      {path:"/shequ",component:SheQu},
      {path:"/login",component:Login},
  ]
})












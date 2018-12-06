import Vue from 'vue'
import Router from 'vue-router'
import Index from "./components/index/Index"
import NewsList from "./components/news/NewsList"
import XinShou from "./components/xinshou/XinShou"
import WanJia from "./components/wanjia/WanJia"
import ShiPin from "./components/shipin/ShiPin"
import SheQu from "./components/shequ/SheQu"
import Login from "./components/login/login"
import Shangchuan from "./components/shangchuan/shangchuan"

Vue.use(Router);
export default new Router({
    mode:'history',
    routes: [
      {path:'/',component:Index,name:Index},
      {path:"/index",component:Index,name:Index},
      {path:'/news',component:NewsList,name:NewsList},
      {path:"/xinshou",component:XinShou,name:XinShou},
      {path:"/wanjia",component:WanJia,name:WanJia},
      {path:"/shipin",component:ShiPin,name:ShiPin},
      {path:"/shequ",component:SheQu,name:SheQu},
      {path:"/login",component:Login,name:Login},
      {path:"/shangchuan",component:Shangchuan,name:Shangchuan},
  ],
})












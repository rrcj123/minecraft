<template>
    <div class="app_header">

        <div class="dingbu">
            <div class="logo"></div>
            <div class="wenzi">
                <ul class="ok" v-if="login_zhuangtai">
                    <li class="geren"><a href="javascript:;">欢迎：<span>{{user}}</span></a></li>
                    <li class="tuichu"><a href="javascript:;" @click="tuichu">退出</a></li>
                </ul>
                <ul class="login" v-else>
                    <li><a href="javascript:;" @click="zhuce">注册</a></li>
                    <li><a href="javascript:;" @click="denglu">登录</a></li>
                </ul>
                <div class="tangchuzhuang_bg" v-show="zhu_ce">
                    <div class="tangchuzhuang">
                        <assembly-register v-if="xuanze=='reg'"></assembly-register>
                        <assembly-login v-else></assembly-login>
                        <div class="guanbi" @click="guanbi"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="daohanglan">
            <div>
                <div class="daohanglan_bg">
                    <div class="daohanglan_shiji">
                        <div><a href="#" class="logo"><img src="http://img.rrcj123.com/minecraft/img/gongyong/logo.png"/></a></div>
                        <div class="wenzi">
                            <ul>
                                <li class="l1" :class="{active:yemian=='/index'}"  @click="ye_mian('/index')"><router-link to="index"><i></i><p>官网首页</p></router-link></li>
                                <li class="l2" :class="{active:yemian=='/news'}" @click="ye_mian('/news')"><router-link to="news"><i ></i><p>新闻资讯</p></router-link></li>
                                <li class="l3" :class="{active:yemian=='/xinshou'}" @click="ye_mian('/xinshou')"><router-link to="xinshou"><i></i><p>新手专区</p></router-link></li>
                                <li class="l4" :class="{active:yemian=='/wanjia'}" @click="ye_mian('/wanjia')"><router-link to="wanjia"><i></i><p>玩家作品</p></router-link></li>
                                <li class="l5" :class="{active:yemian=='/shipin'}" @click="ye_mian('/shipin')"><router-link to="shipin"><i></i><p>视频中心</p></router-link></li>
                                <li class="l6" :class="{active:yemian=='/shequ'}" @click="ye_mian('/shequ')"><router-link to="shequ" ><i></i><p>社区互动</p></router-link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import register from "../register/register"
    import login from "../login/login"
    export default {
        data(){
          return{
              yemian:"",
              zhu_ce:false,
              xuanze:"",
              login_zhuangtai:false,
              user:"",
          }
        },
        methods:{
            ye_mian(str){
                this.yemian=str;
            },
            zhuce(){
                this.zhu_ce = true;
                this.xuanze = 'reg'
            },
            denglu(){
                this.zhu_ce = true;
                this.xuanze = 'log'
            },
            guanbi(){
                this.zhu_ce = false;
            },
            zhuangtai(){
                if(sessionStorage.getItem("user"))this.login_zhuangtai=true;
                this.user = sessionStorage.getItem("user");
                console.log(this.user);
            },
            tuichu(){
                this.login_zhuangtai = false;
                sessionStorage.setItem("user","");
            },
        },
        created(){
            this.yemian=window.location.pathname;
            this.zhuangtai();
        },
        components:{
            'assembly-register':register,
            'assembly-login':login
        }
    }
</script>

<style scoped>

    @media (max-width: 1699.99px) {
        .dingbu {
            width: 1000px;
            height: 54px;
            margin: auto;
            display: flex; } }
    @media (min-width: 1700px) {
        .dingbu {
            width: 1200px;
            height: 54px;
            margin: auto;
            display: flex; } }
    .app-container .dingbu {
        justify-content: space-between; }
    .app-container .dingbu .logo {
        background: url("http://img.rrcj123.com/minecraft/img/header/h_logo.png") no-repeat;
        width: 133px;
        height: 44px;
        margin-top: 5px; }
    .app-container .dingbu .wenzi ul {
        list-style: none;
        padding: 0;
        margin: 0; }
    .app-container .dingbu .wenzi ul li {
        display: inline-block; }
    .app-container .dingbu .wenzi ul li a {
        text-decoration: none;
        display: inline-block;
        width: 50px;
        height: 50px;
        margin-left: 10px;
        text-align: center;
        line-height: 50px;
        font-size: 12px;
        color: black; }
    .app-container .dingbu .wenzi ul.ok li.geren a span{
       color: red;
        font-weight: 700;
    }
    .app-container .dingbu .wenzi ul.ok li.geren a {
        height: 50px;
        width: auto;
    }
    .app-container .dingbu .wenzi ul.login li a:hover {
        background: rgba(55, 55, 55, 0.1);
        border-bottom: 3px solid red; }
    .app-container .dingbu .wenzi ul.ok li.tuichu a:hover {
        background: rgba(55, 55, 55, 0.1);
        color: red;
    }
    .tangchuzhuang_bg{
        background: rgba(0,0,0,0.8);
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 4;
    }
    .tangchuzhuang{
        width: 479px;
        height: 432px;
        background: transparent;
        top: 250px;
        left: 700px;
        z-index: 5;
        margin:  300px auto;
    }
    .guanbi{
        cursor:pointer;
        width: 48px;
        height: 48px;
        margin: 0 auto;
        background: url("http://img.rrcj123.com/minecraft/img/login/icon.png") no-repeat -239px 0;
        z-index: 5;
    }
    .guanbi:hover{
        background: url("http://img.rrcj123.com/minecraft/img/login/icon.png") no-repeat -530px 0;
    }
    /*daohanglan*/
    .daohanglan {
        min-width: 1200px;
        margin: 0 auto;
        overflow:hidden;
    }
    .daohanglan>div{
        width: 1200px;
        margin: 0 auto ;
    }
    .daohanglan .daohanglan_bg{
        background: url("http://img.rrcj123.com/minecraft/img/gongyong/h_f_bg.jpg")  no-repeat;
        margin: 0 -360px;
    }
    .daohanglan .daohanglan_shiji {
        width: 1200px;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
    }
    .daohanglan .daohanglan_shiji .logo {
        display: block;
        height: 100px;
        width: 265px;
        margin-top: 12px;
    }
    .daohanglan .daohanglan_shiji .wenzi ul {
        list-style: none;
        padding: 0;
    }
    .daohanglan .daohanglan_shiji .wenzi ul li {
        display: inline-block;
        margin-left: 80px;
    }
    .daohanglan .daohanglan_shiji .wenzi ul li a {
        text-decoration: none;
        display: inline-block;
    }
    .daohanglan .daohanglan_shiji .wenzi ul li a i {
        display: inline-block;
        width: 31px;
        height: 31px;
        margin-left: 8px;
    }
    .daohanglan .daohanglan_shiji .wenzi ul li a p {
        color: white;
        font-size: 12px;
    }
    .daohanglan .daohanglan_shiji .wenzi ul .l1 i {
        background: url("http://img.rrcj123.com/minecraft/img/gongyong/guanwang.png");
    }
    .daohanglan .daohanglan_shiji .wenzi ul .l1:hover i ,.daohanglan .daohanglan_shiji .wenzi ul .l1.active i{
        background: url("http://img.rrcj123.com/minecraft/img/gongyong/guanwang_jihuo.png");
    }
    .daohanglan .daohanglan_shiji .wenzi ul .l1:hover p ,.daohanglan .daohanglan_shiji .wenzi ul .l1.active p{
        color: #AD1212;
    }
    .daohanglan .daohanglan_shiji .wenzi ul .l2 i {
        background: url("http://img.rrcj123.com/minecraft/img/gongyong/xinwen.png");
    }
    .daohanglan .daohanglan_shiji .wenzi ul .l2:hover i,.daohanglan .daohanglan_shiji .wenzi ul .l2.active i {
        background: url("http://img.rrcj123.com/minecraft/img/gongyong/xinwen_jihuo.png");
    }
    .daohanglan .daohanglan_shiji .wenzi ul .l2:hover p,.daohanglan .daohanglan_shiji .wenzi ul .l2.active p{
        color: #329AD6;
    }
    .daohanglan .daohanglan_shiji .wenzi ul .l3 i {
        background: url("http://img.rrcj123.com/minecraft/img/gongyong/xinshou.png");
    }
    .daohanglan .daohanglan_shiji .wenzi ul .l3:hover i,.daohanglan .daohanglan_shiji .wenzi ul .l3.active i{
        background: url("http://img.rrcj123.com/minecraft/img/gongyong/xinshou_jihuo.png");
    }
    .daohanglan .daohanglan_shiji .wenzi ul .l3:hover p,.daohanglan .daohanglan_shiji .wenzi ul .l3.active p{
        color: #C05019;
    }
    .daohanglan .daohanglan_shiji .wenzi ul .l4 i {
        background: url("http://img.rrcj123.com/minecraft/img/gongyong/wangjia.png");
    }
    .daohanglan .daohanglan_shiji .wenzi ul .l4:hover i,.daohanglan .daohanglan_shiji .wenzi ul .l4.active i {
        background: url("http://img.rrcj123.com/minecraft/img/gongyong/wangjia_jihuo.png");
    }
    .daohanglan .daohanglan_shiji .wenzi ul .l4:hover p,.daohanglan .daohanglan_shiji .wenzi ul .l4.active p{
        color: #1BAC4D;
    }
    .daohanglan .daohanglan_shiji .wenzi ul .l5 i {
        background: url("http://img.rrcj123.com/minecraft/img/gongyong/shipin.png");
    }
    .daohanglan .daohanglan_shiji .wenzi ul .l5:hover i,.daohanglan .daohanglan_shiji .wenzi ul .l5.active i{
        background: url("http://img.rrcj123.com/minecraft/img/gongyong/shipin_jihuo.png");
    }
    .daohanglan .daohanglan_shiji .wenzi ul .l5:hover p,.daohanglan .daohanglan_shiji .wenzi ul .l5.active p{
        color: #C8A734;
    }
    .daohanglan .daohanglan_shiji .wenzi ul .l6 i {
        background: url("http://img.rrcj123.com/minecraft/img/gongyong/shequ.png");
    }
    .daohanglan .daohanglan_shiji .wenzi ul .l6:hover i,.daohanglan .daohanglan_shiji .wenzi ul .l6.active i{
        background: url("http://img.rrcj123.com/minecraft/img/gongyong/shequ_jihuo.png");
    }
    .daohanglan .daohanglan_shiji .wenzi ul .l6:hover p,.daohanglan .daohanglan_shiji .wenzi ul .l6.active p{
        color: #D43493;
    }

</style>
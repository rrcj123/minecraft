<template>
    <div class="app_index">
        <div class="datu">
            <div class="shiji">
                <div class="datu_bg">
                    <div class="datu_neibu"></div>
                </div>
            </div>
            <!--大图下面-->
            <div class="shiji">
                <div class="index_xia_bg">
                    <!--下1-->
                    <div class="neirong">
                        <div class="xia_1">
                            <div class="left">
                                <div id="index_lunbo">
                                    <a href="javascript:;" v-for="(item,i) in lunbo_list" :title="item.title"><img :src="item.url" /></a>
                                </div>
                                <ul class="fenye">
                                    <li v-for="(item,i) in lunbo_list" :class="{ac:lunbo_ac==i}" @mouseenter="shoudong_lunbotu(i)"></li>
                                </ul>
                            </div>
                            <div class="center">
                                <div class="gonggaolan_biaoti">
                                    <ul id="gonggaolan_biaoti">
                                        <li><a href="javascript:void(0)" :class="{active:new_tab=='zx'}" @click="xw_huadong('zx')">最新</a></li><li><a href="javascript:void(0)" :class="{active:new_tab=='rd'}" @click="xw_huadong('rd')">热点</a></li><li><a href="javascript:void(0)" :class="{active:new_tab=='xw'}" @click="xw_huadong('xw')">新闻</a></li><li><a href="javascript:void(0)" :class="{active:new_tab=='gg'}" @click="xw_huadong('gg')">公告</a></li><li><a href="javascript:void(0)" :class="{active:new_tab=='hd'}" @click="xw_huadong('hd')">活动</a></li><router-link to="/news" class="gengduo" ></router-link>
                                    </ul>
                                </div>
                                <div class="gonggaolan_neirong">
                                <div id="gonggaolan_neirong" >
                                    <ul>
                                        <li v-for="(item,i) in list_news.zx" :class="{da:i==0}"><a href="javascript:;"><i></i>{{item.title}}</a><span :class="{yinchang:i==0}">{{item.ctime|dateFormat}}</span></li>
                                    </ul><ul>
                                    <li v-for="(item,i) in list_news.rd" :class="{da:i==0}"><a href="javascript:;"><i></i>{{item.title}}</a><span :class="{yinchang:i==0}">{{item.ctime|dateFormat}}</span></li>
                                </ul><ul>
                                    <li v-for="(item,i) in list_news.xw" :class="{da:i==0}"><a href="javascript:;"><i></i>{{item.title}}</a><span :class="{yinchang:i==0}">{{item.ctime|dateFormat}}</span></li>
                                </ul><ul>
                                    <li v-for="(item,i) in list_news.gg" :class="{da:i==0}"><a href="javascript:;"><i></i>{{item.title}}</a><span :class="{yinchang:i==0}">{{item.ctime|dateFormat}}</span></li>
                                </ul><ul>
                                    <li v-for="(item,i) in list_news.hd" :class="{da:i==0}"><a href="javascript:;"><i></i>{{item.title}}</a><span :class="{yinchang:i==0}">{{item.ctime|dateFormat}}</span></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div class="right">
                                <p class="fenxiang">分享</p>
                                <p class="sharh">SHARE</p>
                                <div class="link"></div>
                                <div class="title">
                                    <a href="javascript:;" :class="{ac:fenxiang=='wx'}" @mouseenter="fx('wx')">微信</a>
                                    <a href="javascript:;" :class="{ac:fenxiang=='wb'}" @mouseenter="fx('wb')">微博</a>
                                </div>
                                <div class="erweima_box">
                                    <div class="erweima">
                                        <span><img src="https://img.rrcj123.com/minecraft/img/index/fx_wx.jpg" alt="">
                                            <p>扫一扫关注微信</p>
                                            <p>Minecraftgf</p>
                                        </span>
                                        <span><img src="https://img.rrcj123.com/minecraft/img/index/fx_wb.jpg" alt="">
                                            <p>扫一扫关注微博</p>
                                            <p>我的世界Minecraft</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="xia_2">
                            <ul>
                                <li class="l1"><a href="javascript:;"></a></li>
                                <li class="l2"><a href="javascript:;"></a></li>
                                <li class="l3"><a href="javascript:;"></a></li>
                                <li class="l4"><a href="javascript:;"></a></li>
                                <li class="l5"><a href="javascript:;"></a></li>
                            </ul>
                        </div>
                        <div class="xia_3">
                            <div class="left">
                                <div class="wanjia">
                                    <span class="wanjia_1">玩家作品</span>
                                    <span class="wanjia_2">WORKS</span>
                                </div>
                                <div class="wanjia_xia" :class="{active:classify_tupian=='jctp'}"><a href="javascript:;" @mouseenter="wanjia('jctp')">精彩图片</a></div>
                                <div class="wanjia_xia" :class="{active:classify_tupian=='tx'}"><a href="javascript:;" @mouseenter="wanjia('tx')">头像下载</a></div>
                                <div class="wanjia_xia" :class="{active:classify_tupian=='bqb'}"><a href="javascript:;" @mouseenter="wanjia('bqb')">表情包</a></div>
                                <div class="wanjia_last"></div>
                                <router-link to="/wanjia" class="gengduo"><span>MORE</span><i></i></router-link>
                            </div>
                            <div class="right">
                                <ul :class="{tupian:classify_tupian=='jctp'}">
                                    <li v-for="item in list_news_wanjia" @click="zhanshi(item)" ref="abc">
                                        <div class="gaizi">
                                            <span>
                                                <p>{{item.title}}</p>
                                                <span>作者：{{item.author}}</span>
                                            </span>
                                        </div>
                                        <a href="javascript:;"><img :src="item.url"></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="zhanshi" v-show="tupian_xianshi">
                                <div class="img_bg">
                                    <div class="wenzi">
                                        <span class="title">{{tupian.title}}</span><i></i><span class="au">作者：{{tupian.author}}</span>
                                        <div class="guanbi_zhanshi" @click="guanbi_zhanshi"><img src="https://img.rrcj123.com/minecraft/img/gongyong/guanbi_tp.png"></div>
                                    </div>
                                    <div class="img">
                                        <img :src="tupian.url">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="xia_4">
                            <div class="shipin">
                                <span class="shipin_1">视频中心</span>
                                <span class="shipin_2">VIDEO</span>
                            </div>
                            <ul class="tab">
                                <li><a href="javascript:;" @mouseenter="shipin('gf')" :class="{active:classify_shipin=='gf'}">官方</a></li>
                                <li><a href="javascript:;" @mouseenter="shipin('tj')" :class="{active:classify_shipin=='tj'}">推荐</a></li>
                                <li><a href="javascript:;" @mouseenter="shipin('sc')" :class="{active:classify_shipin=='sc'}">生存</a></li>
                                <li><a href="javascript:;" @mouseenter="shipin('hs')" :class="{active:classify_shipin=='hs'}">红石</a></li>
                                <li><a href="javascript:;" @mouseenter="shipin('jz')" :class="{active:classify_shipin=='jz'}">建筑</a></li>
                                <li><a href="javascript:;" @mouseenter="shipin('hy')" :class="{active:classify_shipin=='hy'}">海洋</a></li>
                            </ul>
                            <router-link to="/shipin" class="gengduo"><span>MORE</span><i></i></router-link>
                            <ul class="neirong">
                                <li v-for="item in list_shipin" @click="zhanshi_video(item)"><img :src="item.t_url"/><div></div><img class="bofang" src="https://img.rrcj123.com/minecraft/img/xinshou/bofang.png"><span>{{item.title}}</span><span>作者：{{item.author}}</span></li>
                            </ul>
                            <div class="zhanshi_video" v-show="xianshi_video">
                                <div class="video">
                                    <div class="guanbi_zhanshi" @click="guanbi_zhanshi_video(video.id)"><img src="https://img.rrcj123.com/minecraft/img/gongyong/guanbi_tp.png"></div>
                                    <video :src="video.s_url" :id="video.id" autoplay controls></video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                list_news:{zx:{},rd:{},xw:{},gg:{},hd:{}},
                list_news_wanjia:[],
                new_tab:'zx',
                list_shipin:[],
                pageSize_news:6,
                pageSize_wanjia:8,
                classify_tupian:"jctp",
                classify_shipin:"gf",
                tupian_xianshi:false,
                tupian: {},
                lunbo_list:[],
                lunbo_ac:0,
                fenxiang:"wx",
                video:{},
                xianshi_video:false,
            }
        },
        methods:{
            asd(str){
                this.list_news=list_news;
            },

            getlunbotu(){
                var url="index/lunbo?classify=index";
                this.$http.get(url).then(result=>{
                    if(result.body.code==200){
                        this.lunbo_list=result.body.msg;
                    }
                });
            },
            zhanshi_video(obj){
                this.video = obj;
                this.xianshi_video = true;

            },
            guanbi_zhanshi_video(id){
                var video=document.getElementById(id);
                video.pause();
                this.xianshi_video = false;
            },
            fx(str){
                this.fenxiang=str;
                var box = document.querySelector(".erweima");
                if(str=='wb')box.style.marginLeft='-118px';
                else  box.style.marginLeft='0px';

            },
            shoudong_lunbotu(num){
                this.lunbo_ac=num;
                var index_lunbo = document.getElementById("index_lunbo");
                index_lunbo.style.marginLeft=-540*this.lunbo_ac+'px';
            },
            zd_lunbotu(){
                var lun_bo=this;
                this.t_index=setInterval(function () {
                    lun_bo.lunbo_ac=(lun_bo.lunbo_ac==lun_bo.lunbo_list.length-1?0:lun_bo.lunbo_ac+1)
                    var index_lunbo = document.getElementById("index_lunbo");
                    index_lunbo .style.marginLeft=-540*lun_bo.lunbo_ac+'px';
                },3000)
            },
            wanjia(str){
                this.classify_tupian=str;
                this.pageSize_wanjia=(str=="jctp"?8:10);
                this.getwanjia();
            },
            getNews(str){
                var url="news/list?pno=1&classify="+str+"&pageSize="+this.pageSize_news;
                this.$http.get(url).then(result=>{
                    if(result.body.code==1){
                        this.list_news[str]=result.body.msg.data;
                    }
                });
            },
            xw_huadong(str) {
                this.new_tab=str;
                var xw=document.getElementById("gonggaolan_neirong");
                var num=0;
                switch (str) {
                    case "zx":num=-488*0;break;
                    case "rd":num=-488*1;break;
                    case "xw":num=-488*2;break;
                    case "gg":num=-488*3;break;
                    case "hd":num=-488*4;break;
                }
                    num+='px';
                    xw.style.marginLeft=num;
            },
            zhanshi(obj){
                this.tupian=obj;
                this.tupian_xianshi = true;
            },
            guanbi_zhanshi(){
                this.tupian_xianshi = false;
            },
            getwanjia(){
                var url="wanjia/list?classify="+this.classify_tupian+"&pageSize="+this.pageSize_wanjia;
                this.$http.get(url).then(result=>{
                    if(result.body.code==1){
                        this.list_news_wanjia=result.body.msg.data;
                    }
                })
            },
            getshipin(){
                var url="shipin/list?classify="+this.classify_shipin+"&pageSize=8";
                this.$http.get(url).then(result=>{
                    this.list_shipin=result.body.msg.data;
                })
            },
            shipin(str){
                this.classify_shipin=str;
                this.getshipin();
            }
        },
        beforeDestroy() {
            clearInterval(this.t_index);//离开组件时关闭定时器
        },
        created(){
            this.getNews("zx");
            this.getNews("rd");
            this.getNews("xw");
            this.getNews("gg");
            this.getNews("hd");
            this.getwanjia();
            this.getshipin();
            this.getlunbotu();
            this.zd_lunbotu();
        }
    }
</script>

<style scoped>
    .datu{
        min-width: 1200px;
        margin: -20px auto 0;
        overflow: hidden;
    }
    .datu .shiji{
        width: 1200px;
        margin: 0 auto;

    }
    .datu .datu_bg{
        margin: 0 -360px;
        background: url("https://img.rrcj123.com/minecraft/img/index/datubg.jpg");
        height: 633px;
        padding-top: 190px;
    }
    .datu .datu_neibu{
        width: 773px;
        height: 105px;
        margin: 0 auto;
        background: url("https://img.rrcj123.com/minecraft/img/index/datu_neibu.png");
    }

    .datu .index_xia_bg{
        margin: -60px -360px 0;
        background: url("https://img.rrcj123.com/minecraft/img/index/xia_beijing.jpg");
        height: 1480px;
    }
    .neirong{
        width: 1200px;
        margin: 0 auto;

    }

    .xia_1 {
        overflow: hidden;
    }
    .xia_1 .left {
        position: relative;
        border: 12px solid #34ce57;
        width: 540px;
        height: 330px;
        float: left;
        overflow: hidden; }
    .xia_1 .left .fenye{
        position: absolute;
        bottom:10px;
        right: 10px;
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .xia_1 .left .fenye li{
        cursor: pointer;
        width: 10px;
        height: 10px;
        border: 3px solid #135805;
        margin-left: 3px;
        display: inline-block;
        background: #135805;
    }
    .xia_1 .left .fenye li.ac{
        border: 3px solid #ea4a34;
        margin-left: 3px;
        display: inline-block;
        background: white;
    }
    .xia_1 .left > div {
        width: 3780px;
        height: 330px;
        white-space: nowrap;
        transition: all 0.5s; }
    .xia_1 .left a {
        display: inline-block;
        width: 540px;
        height: 330px; }
    .xia_1 .left img {
        height: 330px;
        width: 540px; }
    .xia_1 .center {
        height: 330px;
        margin-top: 27px;
        margin-left: 0;
        float: left; }
    .xia_1 .center .gonggaolan_biaoti {
        height: 40px;
        background: #ffffff;
        margin-bottom: 2px; }
    .xia_1 .center .gonggaolan_biaoti ul {
        margin-top: 0;
        list-style: none;
        width: 488px;
        height: 40px;
        margin-bottom: 2px;
        padding: 0; }
    .xia_1 .center .gonggaolan_biaoti ul li {
        float: left;
        text-align: center;
        line-height: 40px; }
    .xia_1 .center .gonggaolan_biaoti ul li a {
        text-decoration: none;
        display: inline-block;
        width: 89px;
        height: 40px;
        font-size: 12px;
        color: black;
        font-weight: 700; }
    .xia_1 .center .gonggaolan_biaoti ul .active {
        background: url("https://img.rrcj123.com/minecraft/img/index/gonggaolanbeijing.png");
        color: white;}
    .xia_1 .center .gonggaolan_biaoti ul .gengduo {
        float: right;
        width: 40px;
        height: 40px;
        background: url("https://img.rrcj123.com/minecraft/img/index/gonggaolan_gengduo.png") no-repeat 50% 50%;
        transition: all 0.5s; }
    .xia_1 .center .gonggaolan_biaoti ul .gengduo:hover {
        transform: rotate(180deg); }
    .xia_1 .center .gonggaolan_neirong {
        white-space: nowrap;
        width: 488px;
        height: 285px;
        overflow: hidden; }
    .xia_1 .center .gonggaolan_neirong > div {
        transition: all 1s; }
    .xia_1 .center .gonggaolan_neirong ul {
        display: inline-block;
        width: 488px;
        height: 285px;
        list-style: none;
        padding: 0;
        margin: 0;
        background: white; }
    .xia_1 .center .gonggaolan_neirong ul li {
        width: 444px;
        margin: 0 auto;
        border-bottom: 1px dotted #D1C8C1; }
    .xia_1 .center .gonggaolan_neirong ul li i {
        display: inline-block;
        width: 0;
        height: 0;
        border: 5px solid transparent;
        border-left: 5px solid #a5a5a5; }
    .xia_1 .center .gonggaolan_neirong ul li a {
        display: inline-block;
        width: 410px;
        line-height: 44px;
        font-size: 12px;
        color: #333;
        text-decoration: none; }
    .xia_1 .center .gonggaolan_neirong ul li span {
        color: #999;
        font-size: 12px; }
    .xia_1 .center .gonggaolan_neirong ul li:hover a {
        color: #28BD09; }
    .xia_1 .center .gonggaolan_neirong ul .li_last {
        border: 0; }
    .xia_1 .center .gonggaolan_neirong ul .da {
        border-bottom: 1px solid initial; }
    .xia_1 .center .gonggaolan_neirong ul .yinchang {
        display: none }
    .xia_1 .center .gonggaolan_neirong ul .da a {
        line-height: 60px;
        font-size: 20px;
        color: #28bd09;
        font-weight: 700; }
    .xia_1 .right {
        background: url("https://img.rrcj123.com/minecraft/img/index/fenxiang_bg.png") no-repeat;
        width: 118px;
        height: 318px;
        border: 5px solid #34ce57;
        margin: 28px 0 0 20px;
        float: right;
    }
    .xia_1 .right p{
        text-align: center;
        display: block;
        margin: 0;
    }
    .xia_1 .right .fenxiang{
        margin-top: 30px;
        font-weight: 700;
        font-size: 20px;
    }
    .xia_1 .right .sharh{
        font-size: 12px;
        color: #999;
    }
    .xia_1 .right>div{
        text-align: center;
    }
    .xia_1 .right .link{
        border: 1px solid rgb(204,204,204);
        margin: 10px 15px 10px;
    }
    .xia_1 .right .title {
        margin-top: 10px;
    }
    .xia_1 .right .title a{
        display: inline-block;
        width: 38px;
        height: 30px;
        background: transparent;
        font-size: 12px;
        text-decoration:none;
        color: black;
        border-bottom: 5px solid transparent;
    }
    .xia_1 .right .title a.ac{
        color: #33b916;
        border-bottom: 5px solid #33b916;
    }
    .xia_1 .right .erweima_box{
        width: 118px;
        overflow: hidden;
    }
    .xia_1 .right span{
        display: inline-block;
        margin-top: 10px;
        width: 118px;
    }
    .xia_1 .right .title a:first-child{
        display: inline-block;
        margin-right: 8px;
    }
    .xia_1 .right .erweima{
        width: 236px;
        transition: all 0.3s;
    }
    .xia_1 .right .erweima p{
       font-size: 10px;
    }
    .xia_2 {
        margin-top: 33px; }
    .xia_2 ul {
        list-style: none;
        padding: 0;
        display: flex;
        align-items: flex-end; }
    .xia_2 ul a {
        float: left;
        width: 240px; }
    .xia_2 ul .l1 a {
        background: url("https://img.rrcj123.com/minecraft/img/index/xia2_zhuce.png");
        height: 143px; }
    .xia_2 ul .l1 a:hover {
        background: url("https://img.rrcj123.com/minecraft/img/index/xia2_zhuce_jihuo.png"); }
    .xia_2 ul .l2 a {
        background: url("https://img.rrcj123.com/minecraft/img/index/xia2_xinshou.png");
        height: 139px; }
    .xia_2 ul .l2 a:hover {
        background: url("https://img.rrcj123.com/minecraft/img/index/xia2_xinshou_jihuo.png"); }
    .xia_2 ul .l3 a {
        background: url("https://img.rrcj123.com/minecraft/img/index/xia2_chuangzao.png");
        height: 133px; }
    .xia_2 ul .l3 a:hover {
        background: url("https://img.rrcj123.com/minecraft/img/index/xia2_chuangzao_jihuo.png"); }
    .xia_2 ul .l4 a {
        background: url("https://img.rrcj123.com/minecraft/img/index/xia2_fuwuqi.png");
        height: 128px; }
    .xia_2 ul .l4 a:hover {
        background: url("https://img.rrcj123.com/minecraft/img/index/xia2_fuwuqi_jihuo.png"); }
    .xia_2 ul .l5 a {
        background: url("https://img.rrcj123.com/minecraft/img/index/xia2_shangcheng.png");
        height: 145px; }
    .xia_2 ul .l5 a:hover {
        background: url("https://img.rrcj123.com/minecraft/img/index/xia2_shangcheng_jihuo.png"); }

    .gengduo {
        text-decoration: none;
        float: right;
        height: 34px;
        width: 75px; }
    .gengduo span {
        color: #33b916;
        font-size: 12px;
        line-height: 34px; }
    .gengduo i {
        float: right;
        background: url("https://img.rrcj123.com/minecraft/img/xinshou/+.png");
        width: 34px;
        height: 34px;
        transition: all 0.5s; }
    .gengduo:hover i {
        transform: rotate(180deg); }

    .xia_3{
        margin-top: 40px;
        height: 393px;
    }
    .xia_3 .left {
        float: left;
    }
    .xia_3 .left .wanjia {
        background: url("https://img.rrcj123.com/minecraft/img/index/wanjiazuopin_bg.png") no-repeat;
        height: 92px;
        width: 165px;
        text-align: center;
    }
    .xia_3 .left .wanjia span {
        display: block;}
    .xia_3 .left .wanjia .wanjia_1 {
        padding-top: 30px;
        font-weight: 700;
        font-size: 20px;
        color: #333; }
    .xia_3 .left .wanjia .wanjia_2 {
        font-size: 12px;
        color: #999;
    }
    .xia_3 .left .wanjia_xia {
        width: 190px;
        transition: all 0.5s;}
    .xia_3 .left .wanjia_last{
        margin-top: 3px;
        width: 120px;
        height: 50px;
        background: #F0F0F0;
        margin-bottom: -40px;
        margin-left: 45px;
    }
    .xia_3 .left .wanjia_xia a {
        background: #F0F0F0;
        margin-top: 2px;
        display: inline-block;
        color: black;
        height: 77.5px;
        width: 165px;
        text-align: center;
        text-decoration: none;
        font-size: 12px;
        line-height: 77.5px;
        transition: all 0.5s;
    }
    .xia_3 .left .active {
        background: #ea4a34;
    }
    .xia_3 .left .active a {
        color: white;
        background: #ea4a34;}

    .xia_3 .right {
        float: left;
        height: 360px;
        width: 1008px; }
    .xia_3 .right ul {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        padding: 0;
        margin: 0;
        justify-content: space-between; }
    .xia_3 .right ul li {
        cursor:pointer;
        width: 183px;
        height: 183px;
        position: relative;
        margin-bottom: 10px; }
    .xia_3 .right ul .gaizi {
        position: absolute;
        width: 100%;
        height: 0;
        top: 0;
        left: 0;
        transition: all 0.3s;
        text-align: center;
    }
    .xia_3 .right ul .gaizi p{
        color: white;
        font-size: 12px;
    }
    .xia_3 .right ul .gaizi span{
        display: none;
        padding-top: 50px;
        font-size: 8px;
        color: #ccc;
    }
    .xia_3 .right ul li:hover .gaizi {
        background: rgba(0,0,0,0.7);
        height: 100%}
    .xia_3 .right ul li:hover .gaizi span{
        display: inline-block; }
    .xia_3 .right ul li img {
        width: 100%;
        height: 100%; }
    .xia_3 .zhanshi{
        background: rgba(0,0,0,0.7);
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 4;
    }
    .xia_3 .img_bg{
        background: #3F941F;
        margin-top: 5%;
        margin-bottom: 55%;
        height: 550px;
        padding-top: 48px ;
    }
    .xia_3 .zhanshi .wenzi{
        width: 970px;
        margin: 0 auto;
        position: relative;
    }
    .xia_3 .zhanshi .img{
        width: 970px;
        height: 442px;
        margin: 0 auto;
        text-align: center;
    }
    .xia_3 .zhanshi .title{
        color: white;
        font-size: 30px;
        font-weight: 700;
    }
    .xia_3 .zhanshi i{
        margin-left: 10px;
        display: inline-block;
        border: transparent 5px solid;
        border-left:white 5px solid;
    }
    .xia_3 .zhanshi .au{
        color: white;
        font-size: 12px;
    }
    .xia_3 .zhanshi .img_bg img{
        height: 100%;
        margin: 0 auto;
    }
    .xia_3 .zhanshi .guanbi_zhanshi{
        position: absolute;
        top: -123px;
        left: 895px;
        width: 75px;
        height: 75px;
        background: #3F941F;

    }
    .xia_3 .zhanshi .guanbi_zhanshi img{
        cursor:pointer;
        transition: all 0.5s;
    }
    .xia_3 .zhanshi .guanbi_zhanshi:hover img{
        transform: rotate(180deg);
    }
    .xia_3 .right .tupian li {
        width: 243px;
        height: 156px;
        margin-bottom: 15px; }
    .xia_3 .right .tupian li img {
        width: 100%;
        height: 100%; }

    .xia_4{
        width: 1200px;
        background: url("https://img.rrcj123.com/minecraft/img/index/shipinzhongxin_bg.png") no-repeat;
        position: relative;
    }
    .xia_4 .shipin{
        display: inline-block;
        width: 168px;
        height: 40px;
        text-align: center;
    }
    .xia_4 .shipin span{
        display: block;
    }
    .xia_4 .shipin_1{
        font-size: 20px;
        font-weight: 700;
    }
    .xia_4 .shipin_2{
        font-size: 12px;
        color: #999;
    }
    .xia_4 .tab{
        display: inline-block;
        list-style: none;
        padding: 0;
        margin: 0;
        position: absolute;
        top: 0;
        left: 168px;
    }
    .xia_4 .tab li{
        display: inline-block;
        text-align: center;
    }
    .xia_4 .tab li a{
        text-decoration: none;
        color: black;
        font-size: 12px;
        height: 45px;
        width: 120px;
        line-height: 45px;
        display: inline-block;
        transition: all 0.5s;
    }
    .xia_4 .tab li .active{
        background: url("https://img.rrcj123.com/minecraft/img/index/shipin_tab_bg.png") no-repeat;
        color: white;
    }
    .xia_4 .neirong{
        width: 1200px;
        list-style: none;
        padding: 20px 0;
        margin: 0;

    }
    .xia_4 .neirong ul {
        list-style: none;
        padding: 0;
        width: 1200px;
        margin: 0 auto;
    }
    .xia_4 .neirong li {
        display: inline-block;
        width: 284px;
        height: 200px;
        margin: 0 8px 20px;
        position: relative;
        cursor: pointer;
    }
    .xia_4 .neirong li div{
        background: rgba(0,0,0,0.4);
        position: absolute;
        top: 0;
        left: 0;
        height: 160px;
        width: 284px;
        transition: all 0.5s;
    }
    .xia_4 .neirong li:hover div{
        background: rgba(0,0,0,0.4);
        height: 0;
        width: 284px;
    }
    .xia_4 .neirong li .bofang{
        position: absolute;
        top: 57px;
        left: 117.5px;
        width: 46px;
        height: 46px;
        transition: all 0.5s;
    }
    .xia_4 .neirong li:hover .bofang{
        opacity:0;
    }
    .xia_4 .neirong li img {
        height: 160px;
        width: 284px; }
    .xia_4 .neirong li img ~ i {
        display: block;
        width: 38px;
        height: 30px;
        position: absolute;
        top: 130px;
        left: 246px;
        background: url("https://img.rrcj123.com/minecraft/img/shipin/fenxiang.png") 50% 50% no-repeat #308638; }
    .xia_4 .neirong li img + i {
        padding: 0 10px 0 40px;
        color: white;
        left: 0;
        width: auto;
        line-height: 30px;
        font-size: 12px;
        font-style: normal;
        background: url("https://img.rrcj123.com/minecraft/img/shipin/zan.png") 15% 50% no-repeat #308638;
        cursor: pointer; }
    .xia_4 .neirong li img + i:hover {
        background: url("https://img.rrcj123.com/minecraft/img/shipin/zan_jihuo.png") 15% 50% no-repeat #308638; }
    .xia_4 .neirong li span {
        display: block;
        font-size: 12px; }

    .zhanshi_video{
        background: rgba(0,0,0,0.7);
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 4;
    }
    .zhanshi_video .video{
        position: relative;
        width: 880px;
        margin: 150px auto;
    }
    .zhanshi_video .video video{
        width:880px;
        height:450px;
    }

    .zhanshi_video .guanbi_zhanshi{
        position: absolute;
        top: 0;
        left: 880px;
        width: 75px;
        height: 75px;
    }
    .zhanshi_video .guanbi_zhanshi img{
        transition: all 0.5s;
    }
    .zhanshi_video .guanbi_zhanshi:hover img{
        transform: rotate(180deg);
    }
</style>
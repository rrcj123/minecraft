<template>
    <div class="app_shipin">
        <div class="xia_bg">
            <div class="shiji">
                <div class="shipinzhongxin"></div>
                <div class="table" id="biaoti">
                    <a href="javascript:;" :class="{active:classify=='gf'}" @mouseenter="xuanze('gf')">官方</a>
                    <a href="javascript:;" :class="{active:classify=='tj'}" @mouseenter="xuanze('tj')">推荐</a>
                    <a href="javascript:;" :class="{active:classify=='sc'}" @mouseenter="xuanze('sc')">生存</a>
                    <a href="javascript:;" :class="{active:classify=='hs'}" @mouseenter="xuanze('hs')">红石</a>
                    <a href="javascript:;" :class="{active:classify=='js'}" @mouseenter="xuanze('jz')">建筑</a>
                    <a href="javascript:;" :class="{active:classify=='hy'}" @mouseenter="xuanze('hy')">海洋</a>
                </div>
                <div class="shipin">
                    <div id="shiping">
                        <div class="shipin_duli">
                            <ul>
                                <li v-for="(item,i) in list.data" @click="zhanshi(item)">
                                    <img :src="item.t_url" />
                                    <i v-html="item.zan" @click.stop="zan(item.id,i)"></i>
                                    <i>&nbsp;&nbsp;</i>
                                    <div></div>
                                    <img class="bofang" src="http://img.rrcj123.com/minecraft/img/xinshou/bofang.png">
                                    <span>{{item.title}}</span>
                                    <span>作者：{{item.author}}</span>
                                </li>
                            </ul>
                            <div class="zhanshi" v-show="xianshi_video">
                                <div class="video">
                                    <div class="guanbi_zhanshi" @click="guanbi_zhanshi(video.id)"><img src="http://img.rrcj123.com/minecraft/img/gongyong/guanbi_tp.png"></div>
                                    <video :src="video.s_url" :id="video.id" autoplay controls></video>
                                </div>
                            </div>
                        </div>
                        <div class="xia">
                            <a class="bt" href="javascript:;" @click="pages(1)" :class="{yinchang:pno==1}">首页</a>
                            <a class="bt" href="javascript:;" @click="pages('previous')" :class="{yinchang:pno==1}">上一页</a>
                            <a href="javascript:;" v-for="i in list.pageCount" v-if="parseInt(list.pno)-1<=i&&i<=parseInt(list.pno)+1" @click="pages(i)" :class="{active:pno==i,yinchang:list.pageCount==1}">{{i}}</a>
                            <a class="bt" href="javascript:;" @click="pages('next')" :class="{yinchang:pno==list.pageCount}">下一页</a>
                            <a class="bt" href="javascript:;" @click="pages(list.pageCount)" :class="{yinchang:pno==list.pageCount}">末页</a>
                            <span :class="{yinchang:list.pageCount==1}">第{{list.pno}}页 共{{list.pageCount}}页</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                list:[],
                classify:"gf",
                pno:1,
                video:{},
                xianshi_video:false,
            }
        },
        methods:{
            xuanze(classify){
                this.classify=classify;
                this.getshipin();
            },
            zan(id,i){
                this.list.data[i].zan++;
                var obj={id:id,zan:this.list.data[i].zan};
                var url="shipin/zan";
                this.$http.post(url,obj).then(result=>{

                });
            },
            pages(pno) {
                switch (pno) {
                    case "previous":this.pno>1?this.pno--:this.pno=1;break;
                    case "next":this.pno<this.list.pageCount?this.pno++:this.pno=this.list.pageCount;break;
                    default:this.pno=pno;
                }
                this.getshipin();
            },
            zhanshi(obj){
                this.video = obj;
                this.xianshi_video = true;

            },
            guanbi_zhanshi(id){
                var video=document.getElementById(id);
                video.pause();
                this.xianshi_video = false;
            },
            getshipin(){
                var url="shipin/list?classify="+this.classify+"&pno="+this.pno;
                this.$http.get(url).then(result=>{
                    this.list=result.body.msg;
                })
            }
        },
        created(){
            this.getshipin();
        }
    }
</script>

<style scoped>
    .xia_bg {
        padding-top: 50px;
    }

    .shiji .shipinzhongxin {
        background: url("http://img.rrcj123.com/minecraft/img/shipin/shipinzhongxin.png") no-repeat 50% 50%;
        height: 67px; }
    .shiji .table {
        margin: 35px auto 50px;
        display: flex;
        width: 1200px;
        justify-content: center; }
    .shiji .table a {
        text-decoration: none;
        width: 205px;
        height: 45px;
        line-height: 45px;
        font-size: 14px;
        color: black;
        font-weight: 700;
        text-align: center;
        border-top: 1px solid #cfe6ca;
        border-bottom: 1px solid #cfe6ca;
        transition: all 0.7s; }
    .shiji .table #a1 {
        border-left: 1px solid #cfe6ca; }
    .shiji .table .active {
        color: white;
        background: url("http://img.rrcj123.com/minecraft/img/xinwen/xia2_gaohanglanbeijing.png"); }
    .shiji .table a:hover {
        color: white;
        background: url("http://img.rrcj123.com/minecraft/img/xinwen/xia2_gaohanglanbeijing.png"); }
    .shiji .table #a7 {
        border-right: 1px solid #cfe6ca; }
    .shiji .shipin {
        width: 1200px;
        margin: 0px auto;
    }
    .shiji .shipin > div {
        transition: all 0.5s; }
    .shiji .shipin > div .shipin_duli {
        display: inline-block; }
    .shiji .shipin > div .shipin_duli ul {
        list-style: none;
        padding: 0;
        width: 1200px;
        margin: 0 auto;
    }
    .shiji .shipin > div .shipin_duli ul li {
        display: inline-block;
        width: 284px;
        height: 200px;
        margin: 0 8px 20px;
        position: relative;
        cursor: pointer;
    }
    .shiji .shipin > div .shipin_duli ul li div{
        background: rgba(0,0,0,0.4);
        position: absolute;
        top: 0;
        left: 0;
        height: 160px;
        width: 284px;
        transition: all 0.5s;
    }
    .shiji .shipin > div .shipin_duli ul li:hover div{
        background: rgba(0,0,0,0.4);
        height: 0px;
        width: 284px;
    }
    .shiji .shipin > div .shipin_duli ul li .bofang{
        position: absolute;
        top: 57px;
        left: 117.5px;
        width: 46px;
        height: 46px;
        transition: all 0.5s;
    }
    .shiji .shipin > div .shipin_duli ul li:hover .bofang{
        opacity:0;
    }
    .shiji .shipin > div .shipin_duli ul li img {
        height: 160px;
        width: 284px; }
    .shiji .shipin > div .shipin_duli ul li img ~ i {
        display: block;
        width: 38px;
        height: 30px;
        position: absolute;
        top: 130px;
        left: 246px;
        background: url("http://img.rrcj123.com/minecraft/img/shipin/fenxiang.png") 50% 50% no-repeat #308638; }
    .shiji .shipin > div .shipin_duli ul li img + i {
        padding: 0 10px 0 40px;
        color: white;
        left: 0;
        width: auto;
        line-height: 30px;
        font-size: 12px;
        font-style: normal;
        background: url("http://img.rrcj123.com/minecraft/img/shipin/zan.png") 15% 50% no-repeat #308638;
        cursor: pointer; }
    .shiji .shipin > div .shipin_duli ul li img + i:hover {
        background: url("http://img.rrcj123.com/minecraft/img/shipin/zan_jihuo.png") 15% 50% no-repeat #308638; }
    .shiji .shipin > div .shipin_duli ul li span {
        display: block;
        font-size: 12px; }
    .shiji .shipin > div .shipin_duli ul .last {
        margin-right: 0; }
    .xia {
        margin-top: 52px;
        text-align: center;
        font-size: 12px; }
    .xia a, .xia span {
        text-decoration: none;
        display: inline-block;
        padding: 4px 10px;
        color: #bbbbbb; }
    .xia a:hover {
        background: #3c3c3c;
        color: white;
        border-radius: 1px;}
    .xia span {
        color: #3c3c3c; }
    .xia .bt {
        border: 1px solid #bbbbbb;
        border-radius: 1px;
        margin-right: 8px;
        color: #3c3c3c; }
    .xia .active{
        color: black;
    }
    .xia .active:hover{
        color: black;
        background: initial;
        cursor: default;
    }
    .xia .yinchang{
        display: none;
    }
    .zhanshi{
        background: rgba(0,0,0,0.7);
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 4;
    }
    .zhanshi .video{
        position: relative;
        width: 880px;
        margin: 150px auto;
    }
    .zhanshi .video video{
        width:880px;
        height:450px;
    }

    .zhanshi .guanbi_zhanshi{
        position: absolute;
        top: 0;
        left: 880px;
        width: 75px;
        height: 75px;
    }
    .zhanshi .guanbi_zhanshi img{
        transition: all 0.5s;
    }
    .zhanshi .guanbi_zhanshi:hover img{
        transform: rotate(180deg);
    }
</style>
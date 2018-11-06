<template>
    <div class="app_wanjia">
        <div class="xia_bg">
            <div class="shiji">
                <div class="wanjiazuopin"></div>
                <div class="table" id="biaoti">
                    <a href="javascript:void(0);" :class="{active:classify=='jctp'}" @click="xuanze('jctp')">精彩图片</a>
                    <a href="javascript:void(0);" :class="{active:classify=='tx'}" @click="xuanze('tx')">头像</a>
                    <a href="javascript:void(0);" :class="{active:classify=='bqb'}" @click="xuanze('bqb')">表情包</a>
                </div>
                <div class="zuopin">
                    <ul>
                        <li v-for="(item,i) in list.data" :key="item.id" :id="classify">
                            <a href="javascript:void(0);" @click="zhanshi(item)">
                                <img :src="item.url"/>
                                <i v-html="item.zan" @click.stop="zan(item.id,i)"></i>
                                <div>
                                    <span>{{item.title}}</span>
                                    <span>作者：{{item.author}}</span>
                                </div>
                            </a>
                        </li>
                    </ul>
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
                <div class="xia">
                    <a class="bt" href="javascript:;" @click="pages(1)" :class="{yinchang:pno==1}">首页</a>
                    <a class="bt" href="javascript:;" @click="pages('previous')" :class="{yinchang:pno==1}">上一页</a>
                    <a href="javascript:;" v-for="i in list.pageCount" v-if="parseInt(list.pno)-1<=i&&i<=parseInt(list.pno)+1" @click="pages(i)" :class="{active:pno==i}">{{i}}</a>
                    <a class="bt" href="javascript:;" @click="pages('next')" :class="{yinchang:pno==list.pageCount}">下一页</a>
                    <a class="bt" href="javascript:;" @click="pages(list.pageCount)" :class="{yinchang:pno==list.pageCount}">末页</a>
                    <span>第{{list.pno}}页 共{{list.pageCount}}页</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                list:[],
                classify:"jctp",
                pno:1,
                pageSize:20,
                tupian:{},
                tupian_xianshi:false,
            }
        },
        methods:{
            zan(id,i,e){
                //e.stopPropagation();
                if(this.classify!="jctp")return;
                this.list.data[i].zan++;
                var obj={id:id,zan:this.list.data[i].zan};
                var url="wanjia/zan";
                this.$http.post(url,obj).then(result=>{

                });
            },
            xuanze(classify){
                this.pno=1;
                this.classify=classify;
                this.pageSize=classify=="jctp"?20:12;
                this.getzuopin();
            },
            pages(pno) {
                switch (pno) {
                    case "previous":this.pno>1?this.pno--:this.pno=1;break;
                    case "next":this.pno<this.list.pageCount?this.pno++:this.pno=this.list.pageCount;break;
                    default:this.pno=pno;
                }
                this.getzuopin();
            },
            zhanshi(obj){
                this.tupian=obj;
                this.tupian_xianshi = true;
            },
            guanbi_zhanshi(){
                this.tupian_xianshi = false;
            },
            getzuopin(){
                var url="wanjia/list?classify="+this.classify+"&pno="+this.pno+"&pageSize="+this.pageSize;
                this.$http.get(url).then(result=>{
                    if(result.body.code==1){
                        this.list=result.body.msg;
                    }
                })
            }
        },
        created(){
            this.getzuopin();
        }
    }
</script>

<style scoped>
    .xia_bg {
        width: 1200px;
        margin: 0 auto;
        padding-top: 50px;
    }

    .shiji .wanjiazuopin {
        background: url("https://img.rrcj123.com/minecraft/img/wanjia/wanjiazuopin.png") no-repeat 50% 50%;
        height: 68px; }
    .shiji .table {
        margin: 35px 0 50px;
        display: flex;
        justify-content: center; }
    .shiji .table a {
        text-decoration: none;
        width: 167px;
        height: 45px;
        line-height: 45px;
        font-size: 14px;
        color: black;
        font-weight: 700;
        text-align: center;
        border-top: 1px solid #cfe6ca;
        border-bottom: 1px solid #cfe6ca;
        transition: all 0.7s; }
    .shiji .table a:hover {
        color: white;
        background: url("https://img.rrcj123.com/minecraft/img/xinwen/xia2_gaohanglanbeijing.png"); }
    .shiji .table #a1 {
        border-left: 1px solid #cfe6ca; }
    .shiji .table #a2 {
        margin: 0 5px; }
    .shiji .table #a3 {
        border-right: 1px solid #cfe6ca; }
    .shiji .table .active {
        color: white;
        background: url("https://img.rrcj123.com/minecraft/img/xinwen/xia2_gaohanglanbeijing.png"); }
    .shiji .zuopin {
        white-space: nowrap;
        width: 1200px;
        overflow: hidden; }
    .shiji .zuopin ul {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        padding: 0;
        width: 1200px;
        margin: 0;
    }
    .shiji .zuopin ul li {
        display: block;
        margin: 0 7px 10px;
        position: relative;}
    .shiji .zuopin ul li img {
        height: 160px;
        width: 285px; }
    .shiji .zuopin ul li img + i {
        display: block;
        height: 30px;
        position: absolute;
        top: 0;
        padding: 0 10px 0 40px;
        color: white;
        left: 0;
        width: auto;
        line-height: 30px;
        font-size: 12px;
        font-style: normal;
        background: url("https://img.rrcj123.com/minecraft/img/shipin/zan.png") 15% 50% no-repeat #308638;
        cursor: pointer; }
    .shiji .zuopin ul li img + i:hover {
        background: url("https://img.rrcj123.com/minecraft/img/shipin/zan_jihuo.png") 15% 50% no-repeat transparent; }
    .shiji .zuopin ul li div {
        background: rgba(0, 0, 0, 0.6);
        padding: 5px 0;
        height: 50px;
        width: 285px;
        position: absolute;
        top: 110px; }
    .shiji .zuopin ul li div span {
        margin-left: 3px;
        display: block;
        font-size: 12px;
        padding: 2px 0; }
    .shiji .zuopin ul li div span:first-child {
        color: white; }
    .shiji .zuopin ul li div span:last-child {
        color: #58a351; }
    .shiji .zuopin ul .last {
        margin-right: 0; }

    #tx img,#bqb img{
        height: 285px; }
    #tx img+i,#bqb img+i{
        color: transparent;
        background: url("https://img.rrcj123.com/minecraft/img/wanjia/xiazai.png") 50% 50% no-repeat #308638;
        padding: 0;
        width: 30px;
        left: 255px; }

    #tx div,#bqb div  {
        top: 235px; }

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
        border-radius: 1px;
    }
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
    .zhanshi .img_bg{
        background: #3F941F;
        margin-top: 5%;
        margin-bottom: 55%;
        height: 550px;
        padding-top: 48px ;
    }
    .zhanshi .wenzi{
        width: 970px;
        margin: 0 auto 10px;
        position: relative;
    }
    .zhanshi .img{
        width: 970px;
        height: 442px;
        margin: 0 auto;
        text-align: center;
    }
    .zhanshi .title{
        color: white;
        font-size: 30px;
        font-weight: 700;
    }
    .zhanshi i{
        margin-left: 10px;
        display: inline-block;
        border: transparent 5px solid;
        border-left:white 5px solid;
    }
     .zhanshi .au{
        color: white;
        font-size: 12px;
    }
     .zhanshi .img_bg img{
        height: 100%;
        margin: 0 auto;
    }
     .zhanshi .guanbi_zhanshi{
        position: absolute;
        top: -123px;
        left: 895px;
        width: 75px;
        height: 75px;
        background: #3F941F;

    }
    .zhanshi .guanbi_zhanshi img{
        cursor:pointer;
        transition: all 0.5s;
    }
    .zhanshi .guanbi_zhanshi:hover img{
        transform: rotate(180deg);
    }
</style>
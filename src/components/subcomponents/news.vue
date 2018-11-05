<template>
    <div class="app_news">
        <div class="xia_bg">
            <div class="xia1"></div>
            <div class="xia2">
                <a :class="{active:ac==1}" @click="active_a(1,'zx')" class="a1" href="javascript:;">最新</a>
                <a :class="{active:ac==2}" @click="active_a(2,'rd')" href="javascript:;">热点</a>
                <a :class="{active:ac==3}" @click="active_a(3,'xw')" href="javascript:;">新闻</a>
                <a :class="{active:ac==4}" @click="active_a(4,'gg')" href="javascript:;">公告</a>
                <a :class="{active:ac==5}" @click="active_a(5,'hd')" class="a5" href="javascript:;">活动</a>
            </div>
            <div class="xia3">
                <ul>
                    <li v-for="item in list.data" :key="item.nid">
                        <a :title="item.title" :href="item.url">
                    <span class="zuo">{{item.classify | classlist}}
                        <span class="left"></span>
                        <span class="right"></span>
                    </span>
                            <span class="neirong">
                        <span class="biaoti">{{item.title}}</span>
                        <span class="xia3_zhengwen">{{item.conten}}</span>
                    </span>
                            <span class="shijian">{{item.ctime | dateFormat}}</span>
                            <span class="xiangqing">>详情</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="xia4">
                <a class="bt" href="javascript:;" @click="pages(1)" :class="{yinchang:pno==1}">首页</a>
                <a class="bt" href="javascript:;" @click="pages('previous')" :class="{yinchang:pno==1}">上一页</a>
                <a href="javascript:;" v-for="i in list.pageCount" v-if="parseInt(list.pno)-1<=i&&i<=parseInt(list.pno)+1" @click="pages(i)" :class="{active:pno==i}">{{i}}</a>
                <a class="bt" href="javascript:;" @click="pages('next')" :class="{yinchang:pno==list.pageCount}">下一页</a>
                <a class="bt" href="javascript:;" @click="pages(list.pageCount)" :class="{yinchang:pno==list.pageCount}">末页</a>
                <span>第{{list.pno}}页 共{{list.pageCount}}页</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                list:[],
                pno:1,
                classify:'zx',
                ac:1
            }
        },
        methods:{
            active_a(pno,classify){
               this.ac=pno;
               this.pno=1;
               this.classify=classify;
               this.getNews();
            },
            pages(pno) {
                switch (pno) {
                    case "previous":this.pno>1?this.pno--:this.pno=1;break;
                    case "next":this.pno<this.list.pageCount?this.pno++:this.pno=this.list.pageCount;break;
                    default:this.pno=pno;
                }
                this.getNews();
            },
            getNews(pno=this.pno){
                var url="news/list?pno="+this.pno+"&classify="+this.classify;
                this.$http.get(url).then(result=>{
                    if(result.body.code==1){
                        this.list=result.body.msg;
                    }
                })
            }
        },
        created(){
            this.getNews();
        }
    }
</script>

<style scoped>
    .xia_bg {
        padding-top: 50px;
        height: 1263px; }

    .xia1 {
        height: 67px;
        width: 1200px;
        margin: 0 auto;
        background: url("http://img.rrcj123.com/minecraft/img/xinwen/xia1.png") no-repeat 50% 50%; }

    .xia2 {
        margin-top: 45px;
        display: flex;
        justify-content: center; }
    .xia2 a {
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
    .xia2 a:hover {
        color: white;
        background: url("http://img.rrcj123.com/minecraft/img/xinwen/xia2_gaohanglanbeijing.png"); }
    .xia2 .a1 {
        border-left: 1px solid #cfe6ca; }
    .xia2 .active {
        color: white;
        background: url("http://img.rrcj123.com/minecraft/img/xinwen/xia2_gaohanglanbeijing.png"); }
    .xia2 .a5 {
        border-right: 1px solid #cfe6ca; }

    .xia3 ul {
        margin: 0;
        padding: 0;
        list-style: none; }

    .xia3 li {
        display: block;
        transition: all 0.5s; }
    .xia3 li:hover {
        background: #ebf7ff;
        transform: translate(-50px); }
    .xia3 li:hover .zuo {
        font-size: 14px;
        background: #61C355; }
    .xia3 li:hover .zuo .left {
        background: url("http://img.rrcj123.com/minecraft/img/xinwen/left_jihuo.png"); }
    .xia3 li:hover .zuo .right {
        background: url("http://img.rrcj123.com/minecraft/img/xinwen/right_jihuo.png"); }
    .xia3 li:hover .biaoti {
        color: #28BD09; }
    .xia3 li a {
        display: block;
        text-decoration: none;
        color: black;
        width: 1030px;
        margin: 0 auto;
        border-bottom: dashed 1px #c4bbb5;
        position: relative; }
    .xia3 li a .zuo {
        font-size: 14px;
        position: absolute;
        top: 40px;
        background-color: #999999;
        color: white;
        padding: 0 20px;
        line-height: 28px; }
    .xia3 li a .zuo span {
        position: absolute;
        width: 20px;
        height: 36px; }
    .xia3 li a .zuo .left {
        left: -6px;
        top: -4px;
        background: url("http://img.rrcj123.com/minecraft/img/xinwen/left_weijihuo.png"); }
    .xia3 li a .zuo .right {
        right: -6px;
        top: -4px;
        background: url("http://img.rrcj123.com/minecraft/img/xinwen/right_weijihuo.png"); }
    .xia3 li a .neirong {
        display: inline-block;
        width: 830px;
        min-height: 88px;
        margin: 40px 0;
        padding: 0 80px 0 120px; }
    .xia3 li a .neirong .biaoti {
        font-size: 20px;
        display: block; }
    .xia3 li a .neirong .xia3_zhengwen {
        display: block;
        margin-top: 12px;
        font-size: 14px;
        line-height: 22px;
        color: #635F58; }
    .xia3 li a .shijian {
        position: absolute;
        top: 50px;
        right: 30px;
        font-size: 14px;
        color: #999999; }
    .xia3 li a .xiangqing {
        position: absolute;
        font-size: 14px;
        color: #28BD09;
        top: 80px;
        right: 30px; }

    .xia4 {
        margin-top: 52px;
        text-align: center;
        font-size: 12px; }
    .xia4 a, .xia4 span {
        text-decoration: none;
        display: inline-block;
        padding: 4px 10px;
        color: #bbbbbb; }
    .xia4 a:hover {
        background: #3c3c3c;
        color: white;
        border-radius: 1px;}
    .xia4 span {
        color: #3c3c3c; }
    .xia4 .bt {
        border: 1px solid #bbbbbb;
        border-radius: 1px;
        margin-right: 8px;
        color: #3c3c3c; }
    .xia4 .active{
        color: black;
    }
    .xia4 .active:hover{
        color: black;
        background: initial;
        cursor: default;
    }
    .xia4 .yinchang{
        display: none;
    }

</style>
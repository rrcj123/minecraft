<template>
    <div class="app_newslist">
        <!--neirong-->
        <div class="xia_bg">
            <div class="shiji">
                <!--图文攻略-->
                <table></table>
                <div class="tab">
                    <a href="javascript:" class="biaoqian" :class="{active:tu=='xs'}" @mouseenter="t('xs')">小白起步</a><a href="javascript:" class="biaoqian" :class="{active:tu=='gs'}" @mouseenter="t('gs')">高手进阶</a>
                    <a href="javascript:;" class="gengduo"><span>MORE</span><i></i></a>
                </div>
                <!--图文攻略内容-->
                <div class="tuwengongluo_txt">
                    <div class="lunbo">
                        <div id="lunbo">
                            <a href="javascript:;" v-for="item in lunbo_list"><img :src="item.url"/></a>
                        </div>
                        <div id="lunbo_anniu">
                            <span v-for="(item,i) in lunbo_list" :class="{ac:lunbo_ac==i}" @mouseenter="xinshou_shoudong_lunbo(i)">{{item.title}}</span>
                        </div>
                    </div>
                    <div class="lunbo_right">
                        <div class="ding">
                        </div>
                        <ul id="xiaobai">
                            <li v-for="t_item in list_tu"><i></i><a href="javascript:;">{{t_item.title}}</a><span>{{t_item.ctime | dateFormat}}</span></li>
                        </ul>
                    </div>
                </div>
                <!--视频攻略-->
                <div>
                    <div class="tab shipin_tab">
                        <a href="javascript:" class="biaoqian" :class="{active:shi=='jz'}"  @mouseenter="s('jz')">建筑</a><a href="javascript:" class="biaoqian" :class="{active:shi=='sc'}" @mouseenter="s('sc')">生存</a><a href="javascript:" class="biaoqian" :class="{active:shi=='hs'}" @mouseenter="s('hs')">红石</a>
                        <a href="javascript:;" class="gengduo"><span>MORE</span><i></i></a>
                    </div>
                    <div class="shipingonglue">
                        <div>
                            <div>
                                <ul>
                                    <li v-for="(s_item,i) in list_shi">
                                        <a href="javascript:;"><img :src="s_item.t_url"/><div></div><span>{{s_item.title}}</span><span>作者：{{s_item.author}}</span><a href="javascript:;" @click="zan(s_item.sid,i)" v-html="s_item.zan"></a><img class="bofang" src="http://img.rrcj123.com/minecraft/img/xinshou/bofang.png"></a></li>
                                </ul>
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
                list_tu:[],
                list_shi:[],
                tu:"xs",
                shi:"jz",
                lunbo_list:[],
                lunbo_ac:0,
            }
        },
        methods:{
            t(str){
                this.tu=str;
                this.gettu_gonglue();
            },
            s(str){
                this.shi=str;
                this.getshi_gonglue();
            },
            zan(id,i){
                this.list.shi[i].zan++;
                var obj={sid:id,zan:this.list.shi[i].zan};
                var url="xinshou/zan";
                this.$http.post(url,obj).then(result=>{

                });
            },
            getlunbotu(){
                var url="index/lunbo?classify=xinshou";
                this.$http.get(url).then(result=>{
                    if(result.body.code==200){
                        this.lunbo_list=result.body.msg;
                        console.log(this.lunbo_list)
                    }
                });
            },
            xinshou_shoudong_lunbo(num){
                this.lunbo_ac=num;
                var lunbo = document.getElementById("lunbo");
                lunbo.style.marginLeft=-640*this.lunbo_ac+'px';
            },
            xinshou_zd_lunbo(){
                var lun_bo=this;
                this.xinshou_t=setInterval(function () {
                    lun_bo.lunbo_ac=(lun_bo.lunbo_ac==lun_bo.lunbo_list.length-1?0:lun_bo.lunbo_ac+1)
                    var lunbo = document.getElementById("lunbo");
                    lunbo.style.marginLeft=-640*lun_bo.lunbo_ac+'px';
                },4000)
            },
            gettu_gonglue(){
                var url="xinshou/list_tu?tu="+this.tu+"&shi="+this.shi;
                this.$http.get(url).then(result=>{
                    if(result.body.code==1){
                        this.list_tu=result.body.msg;
                    }
                })
            },
            getshi_gonglue(){
                var url="xinshou/list_shi?shi="+this.shi;
                this.$http.get(url).then(result=>{
                    if(result.body.code==1){
                        this.list_shi=result.body.msg;

                    }
                })
            }
        },
        beforeDestroy(){
            clearInterval(this.xinshou_t);//离开组件时关闭定时器
        },
        created(){
            this.gettu_gonglue();
            this.getshi_gonglue();
            this.getlunbotu();
            this.xinshou_zd_lunbo();
        }
    }
</script>

<style scoped>
    .app_newslist .shiji{
        width: 1200px;
        margin: 0 auto;
        padding-top: 100px;
    }
    .tab {
        border-bottom: 3px solid #d8d8d8;
        height: 45px;
        width: 1000px;
        padding-left: 200px;
        background: url("http://img.rrcj123.com/minecraft/img/xinshou/xia1_tuwen.png") no-repeat;
        margin-bottom: 20px;
        margin-top: -48px; }
    .tab .biaoqian {
        display: inline-block;
        width: 205px;
        line-height: 45px;
        text-decoration: none;
        font-size: 12px;
        color: black;
        font-weight: 700;
        text-align: center; }
    .tab .active {
        color: white;
        background: url(http://img.rrcj123.com/minecraft/img/xinshou/tuwen_daohanglan_bg.png); }
    .tab .gengduo {
        text-decoration: none;
        float: right;
        height: 34px;
        width: 75px; }
    .tab .gengduo span {
        color: #33b916;
        font-size: 12px;
        line-height: 34px; }
    .tab .gengduo i {
        float: right;
        background: url("http://img.rrcj123.com/minecraft/img/xinshou/+.png");
        width: 34px;
        height: 34px;
        transition: all 0.5s; }
    .tab .gengduo:hover i {
        transform: rotate(180deg); }

    .tuwengongluo_txt {
        position: relative; }
    .tuwengongluo_txt .lunbo {
        display: inline-block;
        width: 640px;
        height: 330px;
        border: 12px solid #8AD573;
        position: relative;
        overflow: hidden; }
    .tuwengongluo_txt .lunbo > div {
        white-space: nowrap;
        display: flex;
        transition: all 0.5s; }
    .tuwengongluo_txt .lunbo > div + div {
        position: absolute;
        top: 285px;
        display: flex; }
    .tuwengongluo_txt .lunbo > div + div span {
        line-height: 45px;
        width: 160px;
        font-size: 12px;
        text-align: center;
        color: white;
        background: rgba(0, 0, 0, 0.6);
        cursor: pointer; }
    .tuwengongluo_txt .lunbo > div + div .ac {
        background: rgba(234, 76, 55, 0.6); }
    .tuwengongluo_txt .lunbo_right {
        display: inline-block;
        width: 536px;
        height: 354px;
        background: white;
        position: absolute;
        left: 664px;
        transition: all 1s linear; }
    .tuwengongluo_txt .lunbo_right .ding {
        width: 100%;
        height: 60px;
        border-bottom: 2px solid #EDF3EC;
        background: url("http://img.rrcj123.com/minecraft/img/xinshou/lunbo_right.png") no-repeat 95% 50%; }
    .tuwengongluo_txt .lunbo_right ul {
        list-style: none;
        padding: 0 22px;
        margin: 0;
        overflow: hidden;
        transition: all 0.5s; }
    .tuwengongluo_txt .lunbo_right ul li {
        display: block;
        border-bottom: 1px dotted #D1C8C1; }
    .tuwengongluo_txt .lunbo_right ul li i {
        display: inline-block;
        border: 5px solid transparent;
        border-left: 5px solid #a5a5a5; }
    .tuwengongluo_txt .lunbo_right ul li a {
        display: inline-block;
        line-height: 60px;
        font-size: 12px;
        width: 430px;
        text-decoration: none;
        color: #333; }
    .tuwengongluo_txt .lunbo_right ul li span {
        color: #999;
        font-size: 12px; }
    .tuwengongluo_txt .lunbo_right ul li:hover a {
        color: #28BD09;
        font-size: 15px; }
    .tuwengongluo_txt .lunbo_right .yinchang {
        height: 0; }
    .tuwengongluo_txt .lunbo_right .xianshi {
        height: 244px; }

    .shipin_tab {
        background: url("http://img.rrcj123.com/minecraft/img/xinshou/xia2_shipin.png") no-repeat;
        margin-bottom: 20px;
        margin-top: 45px; }
    .shipin_tab .biaoqian {
        width: 140px; }
    .shipin_tab .active {
        color: white;
        background: url(http://img.rrcj123.com/minecraft/img/xinshou/tuwen_daohanglan_bg.png);
        background-size: 100% 100%; }
    .shipin_tab .gengduo {
        text-decoration: none;
        float: right;
        height: 34px;
        width: 75px; }
    .shipin_tab .gengduo span {
        color: #33b916;
        font-size: 12px;
        line-height: 34px; }
    .shipin_tab .gengduo i {
        float: right;
        background: url("http://img.rrcj123.com/minecraft/img/xinshou/+.png");
        width: 34px;
        height: 34px;
        transition: all 0.5s; }
    .shipin_tab .gengduo:hover i {
        transform: rotate(180deg); }

    .shipingonglue {
        overflow: hidden; }
    .shipingonglue > div {
        white-space: nowrap;
        transition: all 0.5s; }
    .shipingonglue > div > div {
        display: inline-block; }
    .shipingonglue ul {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap; }
    .shipingonglue ul li {
        height: 161px;
        margin-right: 20px;
        position: relative; }
    .shipingonglue ul li a {
        text-decoration: none; }
    .shipingonglue ul li div{
        background: rgba(0,0,0,0.4);
        position: absolute;
        top: 0;
        left: 0;
        height: 124px;
        width: 220px;
        transition: all 0.5s;
    }
    .shipingonglue ul li:hover div{
        background: rgba(0,0,0,0.4);
        height: 0px;
    }
    .shipingonglue ul li .bofang{
        position: absolute;
        top: 39px;
        left: 87px;
        width: 46px;
        height: 46px;
        transition: all 0.5s;
    }
    .shipingonglue ul li:hover .bofang{
        opacity:0;
    }

    .shipingonglue ul li a img {
        height: 124px;
        width: 220px; }
    .shipingonglue ul li a p {
        line-height: 21px;
        position: absolute;
        background: #D43493;
        color: white;
        font-size: 12px;
        padding-right: 25px;
        background: url("http://img.rrcj123.com/minecraft/img/wanjia/zan.png") no-repeat 100% 50%;
        top: 90px;
        right: 10px;
        margin: 0; }
    .shipingonglue ul li a p:hover {
        background: url("http://img.rrcj123.com/minecraft/img/wanjia/zan_jihuo.png") no-repeat 100% 50%; }
    .shipingonglue ul li a span {
        display: block;
        font-size: 12px;
        color: black; }
    .shipingonglue ul li a span + span {
        color: #62c356; }
    .shipingonglue ul .last {
        margin: 0; }
</style>
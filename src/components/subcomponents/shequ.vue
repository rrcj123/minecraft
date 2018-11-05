<template>
    <div class="app_shequ">
        <div class="xia_xia">
            <!--社区论坛-->
            <div class="shequluntan"></div>
            <!--二维码-->
            <div class="erweima">
                <div>
                    <img class="renwu" src="http://img.rrcj123.com/minecraft/img/shequ/xia2_left.png"/>
                    <p> 关注官方公众号</p>
                    <p> 扫描二维码</p>
                    <p class="dazi">官网微信</p>
                    <img class="erweima_tu" src="http://img.rrcj123.com/minecraft/img/shequ/xia2_wx.jpg"/>
                </div>
                <div>
                    <img class="renwu" src="http://img.rrcj123.com/minecraft/img/shequ/xia2_right.png"/>
                    <p> 关注官方微博</p>
                    <p> 扫描二维码</p>
                    <p class="dazi">官网微博</p>
                    <img class="erweima_tu" src="http://img.rrcj123.com/minecraft/img/shequ/xia2_wb.jpg"/>
                </div>
            </div>
            <!--qq群-->
            <div class="qqun">
                <div>官方Q群</div>
                <p>开发者反馈邮箱：minecraftstarter@163.com<a href="javascript:;">许可协议</a></p>
                <ul>
                    <li v-for="item in list"><i></i>{{item.num}}（{{item.id}}群）<a target="_blank" href="//shang.qq.com/wpa/qunwpa?idkey=67fcf09029f259d26d31cb77f17c19b7bf2437cf1767fcd3a3387443cbe966d5">一键入群</a></li>
                </ul>
            </div>
            <!--底部论坛-->
            <div class="dibuluntan">
                <img src="http://img.rrcj123.com/minecraft/img/shequ/xia4_gflt.png"/>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;权威的《我的世界》官方论坛，为你提供学习研究、创造分享、交流反馈的平台；精品的游戏内容、官方活动、最新资讯、一手攻略、精彩视频看不停，还可以和红石大触、指令大神交流游戏心得，MC带你涨知识！</div>
                <img src="http://img.rrcj123.com/minecraft/img/shequ/xia4_zwlt.png"/>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;最大的《Minecraft》（我的世界）玩家创造、研究、交流学习和分享的中文社交平台！创始于2010年，历史悠久，沉淀丰厚。</div>
                <div class="zhuren"></div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                list:[]
            }
        },
        methods:{
            getqqqun(){
                var url="qqqun/list";
                this.$http.get(url).then(result=>{
                    if(result.body.code==1){
                        this.list=result.body.msg;
                    }
                })
            }
        },
        created(){
            this.getqqqun()
        }
    }
</script>

<style scoped>
    .xia_xia{
        padding-top: 50px;
    }
.shequluntan {
    height: 67px;
    width: 1200px;
    margin: 0 auto;
    background: url("http://img.rrcj123.com/minecraft/img/shequ/xia1.png") no-repeat 50% 50%; }

.erweima {
    width: 1200px;
    height: 263px;
    margin: 50px auto 60px;
    display: flex;
    justify-content: space-between; }
.erweima div {
    background: white;
    width: 587px;
    height: 263px; }
.erweima div p {
    padding: 39px 8px 0;
    width: 10px;
    font-size: 12px;
    float: left;
    color: black;
    line-height: 17px; }
.erweima div .dazi {
    font-size: 28px;
    width: 30px;
    color: black;
    padding: 40px 50px 0 30px;
    line-height: 32px;
    font-weight: 700; }
.erweima .renwu {
    padding: 28px 50px 0 30px;
    float: left; }
.erweima .erweima_tu {
    padding-top: 60px; }

.qqun {
    height: 31px;
    width: 1200px;
    margin: 0 auto; }
.qqun > div {
    background: url("http://img.rrcj123.com/minecraft/img/shequ/xia3.png") no-repeat;
    padding-left: 40px;
    font-size: 18px;
    line-height: 31px;
    font-weight: 700; }
.qqun p {
    display: inline-block;
    font-size: 16px;
    color: #33B916;
    font-weight: 700;
    width: 445px;
    height: 60px;
    line-height: 60px;
    margin: 0;
    border-bottom: dashed 1px #999; }
.qqun p a {
    padding-left: 20px;
    color: #999;
    font-weight: 100; }
.qqun ul {
    padding: 0;
    list-style: none;
    margin: 0; }
.qqun ul li {
    width: 210px;
    height: 70px;
    line-height: 70px;
    float: left;
    margin: 0 15px;
    font-size: 12px;
    border-bottom: 1px dashed #999;
    position: relative; }
.qqun ul i {
    display: inline-block;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-left: 5px solid #a5a5a5;
    margin-right: 5px; }
.qqun ul a {
    position: absolute;
    top: 21px;
    left: 136px;
    text-decoration: none;
    height: 30px;
    width: 74px;
    background: #61C355;
    line-height: 30px;
    text-align: center;
    color: white; }
.qqun ul a:hover {
    background: #EA4A34; }

.dibuluntan {
    width: 1200px;
    margin: 0 auto;
    clear: both; }
.dibuluntan img {
    padding: 30px 0 20px;
    display: block; }
.dibuluntan div {
    display: inline-block;
    width: 870px;
    height: 100px;
    mask-size: 16px;
    line-height: 50px;
    color: #777777; }
.dibuluntan .zhuren {
    display: inline-block;
    width: 255px;
    height: 286px;
    background: url("http://img.rrcj123.com/minecraft/img/shequ/xia4_zhuren.png");
    margin-top: -270px;
    margin-left: 30px; }

</style>
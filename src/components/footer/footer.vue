<template>
    <div class="app_footer">
        <div class="foot">
            <div>
                <div class="f_bg">
                    <div class="foot_shiji">
					 <span>
						 <img src="https://img.rrcj123.com/minecraft/img/footer/f_logo1.png">
						 <img class="f_logo2" src="https://img.rrcj123.com/minecraft/img/footer/f_logo2.png">
					 </span>
                        <span class="wenzi">
						 <i>网易公司版权所有 ©1997-2018</i>
					 </span>
                        <div class="wenzi">
                            <p>Minecraft是Microsoft旗下Mojang开发的3D沙盒游戏，电脑端及手机端版本在中国大陆由网易游戏运营</p>
                            <p>本游戏适合全年龄段玩家</p>
                            <p>积极健康的游戏心态是健康游戏的开端，本游戏故事情节设置紧凑，请您合理控制游戏时间，避免沉溺游戏影响生活，注意自我保护，防范网络陷阱。</p>
                            <p>《网络文化经营许可证》 《网络游戏管理暂行办法》 沪网文[2016]3825-278号 ISBN 978-7-7979-8877-3 文网游进字〔2017〕0072 号（端游）<br>文网游进字〔2017〕0074 号 （手游）</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .app-container .foot {
        min-width: 1200px;
        height: 203px;
        margin: 0 auto;
        overflow: hidden;
    }
    .app-container .foot>div{
        width: 1200px;
        margin: 0 auto;
    }
    .app-container .foot .f_bg{
        background: url("https://img.rrcj123.com/minecraft/img/gongyong/h_f_bg.jpg");
        margin: 0 -360px;
    }
    .app-container .foot .foot_shiji{
        width:804px;
        height: 203px;
        margin: 0 auto;
        padding: 15px 0 10px;
    }
    .app-container .foot .foot_shiji .f_logo2{
        margin-right: 300px;
    }
    .app-container .foot .foot_shiji .wenzi p,i{
        color: white;
        font-style:normal;
        font-size: 12px;
    }
    .app-container .foot .foot_shiji .wenzi a{
        color: white;
    }
    .app-container .foot_shiji .wenzi{
        padding-top: 10px;
    }
    .app-container .foot_shiji .wenzi p{
        font-size: 12px;
    }
</style>
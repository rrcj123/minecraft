<template>
    <div class="app_datu">
        <div class="datu">
            <div class="shiji">
                <div class="datu_bg"></div>
            </div>
            <div class="shiji">
                <div class="xia_bg">
                    <assembly-news v-if="yemian=='news'"></assembly-news>
                    <assembly-xinshou v-else-if="yemian=='xinshou'"></assembly-xinshou>
                    <assembly-wanjia v-else-if="yemian=='wanjia'"></assembly-wanjia>
                    <assembly-shipin v-else-if="yemian=='shipin'"></assembly-shipin>
                    <assembly-shequ v-else-if="yemian=='shequ'"></assembly-shequ>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import news from "./news";
    import xinshou from "./xinshou";
    import wanjia from "./wanjia";
    import shequ from "./shequ"
    import shipin from "./shipin"
    export default{
        data(){
            return {

            }
        },
        methods:{

        },
        created(){
            this.$emit('success',false)
        },
        components:{
            'assembly-news':news,
            'assembly-xinshou':xinshou,
            'assembly-wanjia':wanjia,
            'assembly-shequ':shequ,
            'assembly-shipin':shipin,

        },
        props:["yemian"]
    }
</script>

<style scoped>
       .app_datu .datu{
        min-width: 1200px;
        margin: -20px auto 0;
        overflow: hidden;
    }
    .app_datu .datu .shiji{
        width: 1200px;
        margin: 0 auto;
    }
    .app_datu .datu .datu_bg{
        margin: 0 -360px;
        background: url("http://img.rrcj123.com/minecraft/img/gongyong/datu_bg.jpg") no-repeat;
        height: 432px;
    }
    .app_datu .datu .xia_bg{
        margin: 0 -360px;
        background: url("http://img.rrcj123.com/minecraft/img/gongyong/xia_bg.jpg") no-repeat;
        height: 1313px;
    }
</style>
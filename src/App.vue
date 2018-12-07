<template>
 <div class="app-container" v-if="zhuangtai">
    <!--1.顶部导航-->
	 <assembly-header></assembly-header>
    <!--2.路由显示其他模块-->
	 <router-view></router-view>
    <!--3.底部 mui tabber-->
	<assembly-footer></assembly-footer>
 </div>
<div v-else>
    <assembly-cuowu></assembly-cuowu>
</div>
</template>

<script>
	import header from "./components/header/header";
    import footer from "./components/footer/footer";
    import cuowu from "./components/404/404";
    export default{
        data(){
            return {
				yemian:"",
				zhuangtai:false
            }
        },
        methods:{
			zhuang_tai(){
                if(this.yemian=='/')this.zhuangtai=true;
			    if(this.yemian=='/index')this.zhuangtai=true;
                if(this.yemian=='/news')this.zhuangtai=true;
                if(this.yemian=='/xinshou')this.zhuangtai=true;
                if(this.yemian=='/wanjia')this.zhuangtai=true;
                if(this.yemian=='/shequ')this.zhuangtai=true;
                if(this.yemian=='/shipin')this.zhuangtai=true;
                if(this.yemian=='/login')this.zhuangtai=true;
                if(this.yemian=='/shangchuan')this.zhuangtai=true;
                if(this.yemian=='/list')this.zhuangtai=true;
			}
        },
        created(){
			this.yemian=window.location.pathname
			this.zhuang_tai()
        },
        components:{
            'assembly-header':header,
            'assembly-footer':footer,
            'assembly-cuowu':cuowu
        }
    }
</script>

<style scoped>






</style>

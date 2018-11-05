<template>
    <div class="app_xinshou">
        <assembly-fubeijing :yemian="yemian"></assembly-fubeijing>
    </div>
</template>

<script>
    import fubeijing from "../subcomponents/fubeijing"
    export default{
        data(){
            return {
                yemian:'wanjia'
            }
        },
        methods:{

        },
        created(){

        },
        components:{
            'assembly-fubeijing':fubeijing
        },
    }
</script>

<style scoped>

</style>>
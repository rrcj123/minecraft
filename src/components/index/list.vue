<template>
    <div>
        <ul>
            <li>
                <span style="width:100px;font-weight: 700">编号</span>
                <span style="width:200px;font-weight: 700">上传者</span>
                <span style="width:200px;font-weight: 700">IP</span>
                <span style="width:100px;font-weight: 700">城市</span>
                <span style="width:200px;font-weight: 700">标题</span>
                <span style="width:300px;font-weight: 700">上传时间</span>
                <span style="width:100px;font-weight: 700">操作</span>
            </li>
            <li v-for="(item,i) in list">
                <span style="width:100px;font-size: 15px">{{++i}}</span>
                <span style="width:200px;font-size: 15px">{{item.user}}</span>
                <span style="width:200px;font-size: 15px">{{item.ip?item.ip:"未知"}}</span>
                <span style="width:100px;font-size: 15px">{{item.city?item.city:"未知"}}</span>
                <span style="width:200px;font-size: 15px">{{item.title}}</span>
                <span style="width:300px;font-size: 15px">{{item.time | dateTime}}</span>
                <span style="width:100px;font-size: 15px"><a v-if="i>6" href="javascript:" @click="s(item.uid)">删除</a><b v-else>不能删除</b></span>
            </li>
        </ul>
    </div>
</template>
i
<script>
    export default {
        name: "list",
        data(){
          return{
              list:[]
          }
        },
        methods:{
            xinxilist(){
                this.$http.post('https://worldht.rrcj123.com/index/lunbolist').then(res=>{
                    this.list = res.body.msg;
                })
            },
            s(id){
                this.$http.post('https://worldht.rrcj123.com/index/lunbolists',{uid:id}).then(res=>{
                    window.alert("删除成功")
                });
                setTimeout(this.xinxilist,100)

            }
        },
        created(){
            this.xinxilist()
        }
    }
</script>

<style scoped lang="scss">
    *{
        box-sizing: border-box;
    }
ul{
    list-style: none;
    padding: 0;
    margin:0 auto;
    width: 1200px;
    li{
        display: inline-block;
        width: 1200px;
        span{
            display: inline-block;
            text-align: center;
            border: #999 solid 1px;
            padding: 2px;
        }

    }
}
</style>
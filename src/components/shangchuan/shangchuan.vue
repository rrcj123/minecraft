<template>
    <div>
        <div class="box">
            <form enctype="multipart/form-data" method="post" action="https://worldht.rrcj123.com/shangchuan" target="nm_iframe" id="_from">
                图片文件：<input type="file" id="_file" name="_file" style="width: 200px"/>
                <span style="font-size: 12px;padding-left: 25px;color: #999">最大300k</span><br/>
                <input type="hidden" name="ip" v-model="ip"/>
                <input type="hidden" name="user" v-model="user"/>
                <input type="hidden" name="city" v-model="city"/>
                图片标题：<input type="text" style="width: 200px;margin-bottom:10px;" v-model="title" name="title"/><span style="font-size: 12px;padding-left: 20px;color: #999">不超过10个字</span><br/>
                <!-- 仅仅在使用multer。array时候 -->
                <!-- <input type="file" id="_file1" name="_file" style="width:400px;height:35px;"/>
                <input type="file" id="_file2" name="_file" style="width:400px;height:35px;"/> -->
                <input type="button" value="上传" @click="tijiao()" style="width:100px;height:35px;" />
            </form>
            <iframe id="id_iframe" frameborder="0" name="nm_iframe" style="width: 100%;height:50px;"></iframe>
        </div>
        <remote-js src="https://pv.sohu.com/cityjson?ie=utf-8"></remote-js>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                user:null,
                ip:null,
                city:null,
                title:null
            }
        },
        methods:{
            getip(){
                this.ip = returnCitySN["cip"];
                this.city = returnCitySN["cname"];
                console.log(this.ip)

            },
            tijiao(){
                if(document.getElementById("_file").files[0]){
                    if(document.getElementById("_file").files[0].size>1024*300){
                        window.alert("亲，图片不允许超过300k");
                    }else {
                        if(!this.title) {
                            window.alert("亲，没有输入标题哦");
                        }else if(this.title.length>10){
                            window.alert("亲，标题超过10个字啦");
                        }else{
                            document.getElementById("_from").submit();
                        }
                    }
                }else {
                    window.alert("木有上传图哦")
                }
            }
        },
        created(){
            this.user = sessionStorage.getItem("user");
            setTimeout(this.getip,100)
        },
        components:{
            'remote-js': {
                render(createElement) {
                    return createElement('script', { attrs: { type: 'text/javascript', src: this.src }});
                },
                props: {
                    src: { type: String, required: true },
                },
            },
        }
    }
</script>

<style scoped>
.box{
    width:400px;
    margin: 0 auto;
}
</style>
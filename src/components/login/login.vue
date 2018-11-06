<template>
    <div class="app_login">
        <div class="login">
            <div class="kuaishu"><img src="https://img.rrcj123.com/minecraft/img/login/denglu.png" alt=""></div>
            <div class="neirong">
                <input class="box" type="text" placeholder="请输入用户账号" v-model="user" @blur="shiqu('user')" @focus="huode('user')" :class="{err:user_yanzheng}">
                <div class="kongbai"></div>
                <span class="tishi" v-html="user_tishi" v-if=user_yanzheng></span>
                <div class="kongbai"></div>
                <input class="box" type="password" placeholder="请输入密码" v-model="pwd" @blur="shiqu('pwd')" @focus="huode('pwd')" :class="{err:pwd_yanzheng}">
                <div class="kongbai"></div>
                <span class="tishi" v-html="pwd_tishi" v-show="!pwd" v-if=pwd_yanzheng></span>
                <div class="kongbai"></div>
                <a href="javascript:;" class="zhuce"><img src="https://img.rrcj123.com/minecraft/img/login/dengluanniu.jpg" @click="denglu"></a>
                <div class="kongbai"></div>
                <span class="tishi" v-html="log" v-if="log_yanzheng"></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                user:"",
                user_yanzheng:false,
                user_tishi:"",
                pwd:"",
                pwd_yanzheng:false,
                pwd_tishi:"",
                log:'账号或密码错误,请仔细检查',
                log_yanzheng:false
            }
        },
        methods:{
            shiqu(str){
                if(str=='user'){
                    if(!this.user){
                        this.user_tishi="账号不可以为空"
                        this.user_yanzheng=true;
                    }
                }
                else {
                    if(!this.pwd){
                        this.pwd_yanzheng=true;
                        this.pwd_tishi="密码不可以为空";
                    }
                    else this.pwd_tishi="";
                }

            },
            huode(str){
                this.log_yanzheng=false;
                str=='user'?this.user_yanzheng=false:this.pwd_yanzheng=false
            },
            denglu(){
                this.shiqu('user');
                this.shiqu('pwd');
                if(!this.user_yanzheng&&!this.pwd_yanzheng){
                    var obj={uname:this.user,pwd:this.pwd};
                    var url="user/login";
                    this.$http.post(url,obj).then(result=>{
                        if(result.body==0)this.log_yanzheng=true;
                        else {
                            sessionStorage.setItem("user",this.user);
                            window.location.reload();
                        }
                    });
                }
            }
        }
    }
</script>

<style scoped>

    .app_login .login{
        width: 479px;
        height: 432px;
        background: url("https://img.rrcj123.com/minecraft/img/login/login.png");
    }
    .app_login .login .kuaishu{
        width: 154px;
        padding: 35px 0 20px 0;
        margin: 0 auto;
    }
    .app_login .login .neirong{
        width: 302px;
        margin: 0 auto;
    }
    .app_login .login .box{
        width: 258px;
        height: 42px;
        padding: 0 32px 0 8px;
        border: 2px black solid;
        font-size: 16px;
    }
    .app_login .login .box.err{
        border: 2px solid red;
    }



    /* ::-webkit-input-placeholder { color:#999; }*/
    /*::-moz-placeholder { color:#f00; } !+* firefox 19+ *!*/
    /*:-ms-input-placeholder { color:#f00; } !* ie *!*/
    input:-moz-placeholder { color:#999; }
    .app_login .login .kongbai{
        height: 14px;
    }
    .app_login .tishi{
        color: #fa5b5b;
        font-size: 12px;
    }
    .app_login .tishi .tubiao{

        width: 12px;
        height: 12px;
        background: red;
    }
    /*#region checkbox样式 */


    .app_login .xieyi{
        position: absolute;
        top: 0;
        left: 20px;
        font-size: 12px;
        color: #aaaaaa;
    }
    .app_login .xieyi a{
        color: #3785b2;
        text-decoration: none;
    }
    .app_login .yinchang{
        display:  none;
    }
</style>
<template>
    <div class="app_login">
        <div class="login">
            <div class="kuaishu"><img src="https://img.rrcj123.com/minecraft/img/login/zhuce.png" alt=""></div>
                <div class="neirong">
                    <input class="box" type="text" placeholder="用户账号" v-model="user" @blur="shiqu('user')" @focus="huode('user')" :class="{err:user_yanzheng}">
                    <div class="kongbai"></div>
                    <span class="tishi" v-html="user_tishi" v-if=user_yanzheng></span>
                    <div class="kongbai"></div>
                    <input class="box" type="password" placeholder="6-16位密码，区分大小写" v-model="pwd" @blur="shiqu('pwd')" @focus="huode('pwd')" :class="{err:pwd_yanzheng}">
                    <div class="kongbai"></div>
                    <span class="tishi" v-html="pwd_tishi" v-show="pwd.length<6||pwd.length>18" v-if=pwd_yanzheng></span>
                    <div class="kongbai"></div>
                    <a href="javascript:;" class="zhuce"><img src="https://img.rrcj123.com/minecraft/img/login/zhuceanniu.jpg" @click="zhuce"></a>
                    <div class="kongbai"></div>
                    <span>
                        <input type="checkbox" id="questionNo" @click="tongyi" checked="checked"><label for="questionNo"></label>
                        <span class="xieyi">我同意<a href="javascript:;" >《服务条款》</a>和<a href="javascript:;">《隐私保护和个人信息政策》</a></span>
                    </span>
                    <span class="tishi" v-html="tiaoli_tishi" v-show="tiaoli_yanzheng"></span>
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
                tiaoli:0,
                tiaoli_yanzheng:false,
                tiaoli_tishi:"您需要同意相关条例才能注册"
            }
        },
        methods:{
            shiqu(str){
                if(str=='user'){
                    if(this.user.length<4||this.user.length>10){
                        this.user_tishi="账号须由4-10个字符组成"
                        this.user_yanzheng=true;
                    }
                    else {
                        var obj={uname:this.user};
                        var url="user/resister_uname";
                        this.$http.post(url,obj).then(result=>{
                            if(result.body==0){
                                this.user_yanzheng=true;
                                this.user_tishi="该账号已注册";
                            }
                            else this.user_tishi="";
                        });
                    }
                }
                else {
                    if(this.pwd.length<6||this.pwd.length>18){
                        this.pwd_yanzheng=true;
                        this.pwd_tishi="密码须由6-18个字符组成,区分大小写";
                    }
                    else this.pwd_tishi="";
                }
            },
            huode(str){
                str=='user'?this.user_yanzheng=false:this.pwd_yanzheng=false
            },
            tongyi(){
                this.tiaoli++;
                if (this.tiaoli%2==0) {
                    this.tiaoli_yanzheng=false
                }
                else this.tiaoli_yanzheng=true
            },
            zhuce(){
                this.shiqu('user');
                this.shiqu("pwd")
                console.log(this.user_yanzheng,this.pwd_yanzheng,this.tiaoli_yanzheng)
                if(!this.user_yanzheng&&!this.pwd_yanzheng&&!this.tiaoli_yanzheng&&this.user){

                    var obj={uname:this.user,pwd:this.pwd};
                    var url="user/resister";
                    this.$http.post(url,obj).then(result=>{
                        sessionStorage.setItem("user",this.user);
                        window.location.reload();
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

    span {
        position: relative;
        display: block;
        /*margin: 20px 100px;*/
    }
    span label { /*label标签用于Click事件和我们要定义的复选框的方框样式。*/
        cursor: pointer;
        position: absolute;
        height: 14px;
        top: 0;
        left: 0;
        width: 15px;     /* !*如果没有文字，打开这段样式*!*/
        background: #eee;
        border: 1px solid #aaaaaa;
    }
    /*创建方框中的对勾，对于这一点，我们可以使用:after伪类创建一个新的元素，为了实现这个样式，我们可以创建一个5px x 9px的长方形并给他加上边框。
这时候我们去掉上面和右边的边框之后，它会看起来像一个字母L。然后我们可以使用CSS的transform属性让它旋转一下，这样看起来就像是一个对勾。*/
    span label::after {
        content: '';
        opacity: 0.1; /*设置复选框标签透明度0.2,半透明的对勾 下面悬停时候加深*/
        position: absolute;
        width: 6px;
        height: 3px;
        background: transparent;
        top: 4px;
        left: 3px;
        border: 3px solid green;
        border-top: none;
        border-right: none;
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }

    label:hover::after {
        opacity: 0.5;
    }

    input[type=checkbox]:checked + label:after { /*checkbox选中后，设置相邻元素对勾为不透明*/
        opacity: 1;
    }


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
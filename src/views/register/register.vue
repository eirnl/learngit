<template>
    <div>
        <h1>注册</h1>
        <p>用户名：<input type="text" v-model='userid'></p>
        <p>邮箱：<input type="text" v-model="email"></p>
        <p>密码：<input type="password" v-model="userpwd"></p>
        <button @click="register()">注册</button>
    </div>
</template>
<script>
export default {
     data(){
        return{
            userid:'',
            userpwd:'',
            email:''
        }
    },
        methods:{
            register(){
                this.$http({
                    url:"http://www.520mg.com/member/reg_new2.php",
                    method:'post',
                    withCredentials:true,//发送ajax
                    data:`userid=${this.userid}&userpwd=${this.userpwd}&email=${this.email}`,
                })
                .then(
                    // 注册失败（用户名，密码等问题）
                    res=>{
                    if(res.data.status==1){
                        this.$router.push('/')
                    }else{
                        alert(res.data.msg)
                        // 用户名已经有了，密码短...
                    }
                },
                //  ajax失败，没有网，地址不存在
                (err)=>{
                    console.log(err)
                })
            }
        }
}
</script>
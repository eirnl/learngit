<template>
    <div>
        <van-nav-bar title="购物车" left-text="返回" left-arrow>
            <van-icon name="search" slot="right" />
        </van-nav-bar>
        <h1>购物车</h1>

        <div v-for="(item,index) in goods" :key="index" class="row">
            <div class="col-10"><van-checkbox v-model="checked">复选框</van-checkbox></div>
            <div class="col-30">
                <img :src="item.image_url" width="100%" alt="">
            </div>
            {{item.name}}--{{item.index}}

        </div>
    </div>
</template>
<script>
//导入mapState方法
import {mapState} from 'vuex';
//01 导入插件
import {NavBar,Icon} from 'vant';
export default {
    computed:{
        ...mapState(["goods"])
    },
    components:{
        //02 注册组件
        //vant-nav-bar:NavBar
        //es6属性动态设置写法
        [NavBar.name]:NavBar,
        [Icon.name]:Icon
    }

}
</script>
<style lang="">
/* .van-nav-bar .van-icon{

} */
</style>
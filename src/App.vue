<template>
  <div id="app">
   
    <router-view class="full has-tabs"/>
     <div class="row tac tabs">
      <router-link class="col" to="/">首页</router-link>
      <!-- to切换的地址 -->
      <router-link class="col" to="/category" >分类</router-link>
      <router-link class="col" to="/cart">购物车{{cartNum}}</router-link>
      <router-link class="col" to="/user">个人中心</router-link>
    </div>
  </div>
</template>
<script>
import {mapGetters,mapActions} from "vuex"
export default {
  created(){
    //当Vue创建完毕调用getGoods获取商品信息
    this.getGoods();
    // this.$http.get("http://www.mi.com/pro")
    // .then(res=>{
    //   console.log(res.data);
    // })
  },
  computed:{
    //把vuex里面的getter属性，转换为
    ...mapGetters(["cartNum"])
  },
  methods:{
    ...mapActions(["getGoods"])
  }
}
</script>
<style lang="less">
// about 不精确匹配
.about.router-link-active{color: red;}
// 精确匹配
.router-link-exact-active{color: red;}
</style>

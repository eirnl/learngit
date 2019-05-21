<template>
    
    <div class="category">
            <div class="bar-header row">
                <span class="pa" @click="$router.go(-1)">返回</span>
                <div class="col tac">分类</div>
                <span class="pa">搜索</span>
            </div>

            <div class="full has-header">
              <div class="container row full">
                  <div class="col-20 list scollV">
                    <div class="item" v-for="item in category" :key="item.category_id">
                        {{item.category_name}}
                    </div>
                  </div>
                    <!-- 80%开始 -->
                  <div class="col-80">
                          <div v-for="bcat in category" :key="bcat.category_id">
                              <!-- 大分类开始 -->
                              {{bcat.category_name}}
                              <div v-for="(mcat,index) in bcat.category_list" :key="index">
                                  <!-- 中分类开始 -->

                                  <div v-if="mcat.view_type=='cells_auto_fill'">
                                    <!-- 图片 -->
                                    <img :src="mcat.body.items[0].img_url" width="100%" alt="">
                                </div>

                                <div v-if="mcat.view_type=='category_title'">
                                    <!-- 标题 -->
                                    <div class="tac">--{{mcat.body.category_name}} --</div>
                                </div>
                                
                                <div class="row row-wrap" v-if="mcat.view_type=='category_group'">
                                    <!-- 组 -->
                                    <div class="col-33 tac pa small" @click="$router.push('/product/'+pro.action.path)" v-for="(pro, ind) in mcat.body.items" :key="ind">
                                       <!-- 单个产品 -->
                                        <img :src="pro.img_url" alt="" width="100%">
                                        <p class="ellipsis">{{pro.product_name}}</p>
                                            
                                        
                                    </div>
                                </div>
                                  <!-- 中分类结束 -->
                              </div>
                               <!-- 大分类结束 -->
                          </div>
                  </div>
                    <!-- 80结束 -->
              </div>
        </div>
    </div>
  
</template>
<script>
export default {
    data(){
        return {
            category:[]
        }
    },
    created(){
        this.getCat();
    },
    methods: {
        getCat(){
            this.$http.get("https://biger.applinzi.com/category.php")
            .then(res=>{
                console.log(res.data);
                this.category = res.data.data;
            })
        }
        
    },
    //生命周期
    // beforeCreate(){
    //     console.log("beforeCreate")
    // },
    // created(){
    //      console.log("create")
    //       console.log("通常做ajax操作，在这里面可以操作data数据")
    // },
    // beforeMount() {
    //    console.log("beforeMount还没有执行渲染")  
    // },
    // mounted(){
    //      console.log("mounted数据已经被渲染到模板")
    //       console.log("初始数据已经在模板中渲染完毕，可以做dom操作")
    // },
    // beforeUpdate(){
    //      console.log("beforeUpdat准备更新")
    // },
    // updated(){
    //      console.log("updated更新完毕")
    //      console.log("只要有数据就会更新调用，新的数据已经在模板中渲染了")
    // },
    // beforeDestroy() {
    //      console.log("beforeDrstory准备销毁组件")
    // },
    // destroyed(){
    //      console.log("destoryed组件销毁了")
    // }
}
</script>
<style>
.list .item{
    line-height: 0.43rem;
    border-bottom: 1px solid #f2f2f2;
    text-align: center;
}
</style>

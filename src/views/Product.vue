<template>
    <div>
        <div class="container">
            <div class="header row">
                <button @click="$router.go(-1)"  >返回</button>
                <div class="col"></div>
                <button  >分享</button>
            </div>
            <swiper :gallery="gallery" v-if="gallery.length"></swiper>
            <h3>{{product_info.name}}</h3>
            <p v-html="product_info.product_desc"></p>
            <h2>价格</h2>
        </div>
    </div>
</template>
<script>

</script>
<style lang="">
    
</style>
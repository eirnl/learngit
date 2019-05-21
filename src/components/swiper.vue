<template>
    <div>
         <div class="slider"><img width="100%" :src="gallery[current].img_url" alt=""></div>
    </div>
</template>
<script>
import { setInterval } from 'timers';
export default {
    data(){
        return {current:0}
    },
    props:["gallery"],
    mounted(){
        setInterval(()=>{
            this.current++;
            if(this.current>=this.gallery.length){
                this.current = 0;
            }
        },3000)
    }
}
</script>
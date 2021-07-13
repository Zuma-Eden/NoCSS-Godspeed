<template>
    <div class="home">
        <imager :src="img"/>
        <i class="firefly" v-for="n in 15"></i>

        <div red bg xl bold>color and font</div>

    </div>
</template>

<script>
import img from './01.jpg'
import imager from '@/components/imager/index.vue'
export default {
    name: "Home",
    components:{
        imager
    },
    mounted() {
        console.log(this.a)
    },
    data(){
        return {
            a:3,
            img
        }
    },

}
</script>


<style scoped lang="scss">
div.home{
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: black;

}
@import "home.scss";
</style>
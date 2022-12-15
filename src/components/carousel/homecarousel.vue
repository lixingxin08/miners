<template>
  <a-carousel autoplay :dots=false>
    <div v-for="(item,index) in bannerdata" :key="index"> <div >
      <router-link :to="{'name':'productsdetail','query':{'goods_id':item.id}}">
      <img :src="item.banner" alt="" class="home_carouselimg" />
    </router-link>
    </div></div>
  </a-carousel>
</template>
<script>
export default {
  props:{
    bannerdata:Array
  },
  created(){
  }
};
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 100%;
  overflow: hidden;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
.home_carouselimg{
  width: 100%;
  height: 500px;
}
</style>

<template>
  <a-carousel autoplay :dots=true arrows>
    <div slot="prevArrow" slot-scope="props" class="custom-slick-arrow" style="left: 13%;zIndex: 1; transform: translateY(-50%); font-size: 40px; color: #4361ff;">
      <a-icon type="left-circle" />
    </div>
    <div slot="nextArrow" slot-scope="props" class="custom-slick-arrow" style="right: 13% ;transform: translateY(-50%); font-size: 40px; color: #4361ff;">
      <a-icon type="right-circle" />
    </div>
    <div v-for="(item, index) in bannerdata" :key="index">
      <div>
        <router-link :to="{ 'name': 'productsdetail', 'query': { 'goods_id': item.id } }">
          <img :src="item.banner" alt="" class="home_carouselimg" />
        </router-link>
      </div>
    </div>
  </a-carousel>
</template>
<script>
export default {
  props: {
    bannerdata: Array
  },
  created() {
  }
};
</script>
<style scoped>
/* For demo */
.ant-carousel>>>.slick-slide {
  text-align: center;
  height: 100%;
  overflow: hidden;
}

.ant-carousel>>>.slick-slide h3 {
  color: #fff;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.home_carouselimg {
  width: 100%;
  height: 500px;
}
</style>

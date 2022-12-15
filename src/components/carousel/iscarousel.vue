<template>
  <a-carousel autoplay :dots=false class="extent_box">
    <div class="extent_box" v-for="item in 4" :key="item">
      <div class="iscarousel_box flex_column">
        <div class="piont flex_a">
        <img src="../../img/procarls.png" alt="">
      </div>
      <div class="col_f">Joshua Sanders</div>
      <div class="col_f">this is awesome I'm going to have thousands of lil doggy coins to hodl and many lite coins hope
        to see you at the moon. for the price the machine is worth it hope to move up to mining bigger and better things
      </div>
      </div>
    </div>
  </a-carousel>
</template>
<script>
export default {
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
.iscarousel_box{
  width: 100%;
  height: 220px;
  padding:0 20px;
  text-align: center;
}
.piont {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;

}

.piont img {
  width: 50px;
  height: 10px;
}
</style>
  
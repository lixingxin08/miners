<template>
    <a-carousel autoplay :dots=false>
        <div><img src="../../img/about.jpg" alt="" class="about_img" /></div>
        <!-- <div><img src="../../img/20220911034249.png" alt="" /></div>
        <div><img src="../../img/20220911034249.png" alt="" /></div>
        <div><img src="../../img/20220911034249.png" alt="" /></div> -->
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
.about_img{
    width: 100%;
    height: 100%;
}
</style>
  
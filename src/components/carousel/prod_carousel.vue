<template>
  <a-carousel arrows :dots="false" class="pro_carousel">
    <div slot="prevArrow" slot-scope="props" class="custom-slick-arrow" style="left: 10px;zIndex: 1;transform: translateY(-50%);">
      <a-icon type="left-circle" />
    </div>
    <div slot="nextArrow" slot-scope="props" class="custom-slick-arrow" style="right: 10px;transform: translateY(-50%);">
      <a-icon type="right-circle" />
    </div>
    <div class="pro_item flex_f font_f1" v-for="(item, index) in product_item" :key="index">
      <div v-for="(items, indexs) in item" :key="indexs" class="pro_itemchld">
        <div class="extent_box flex_a">
          <router-link :to="{'name':'products','query':{'id': productsList[indexs+index*6].id}}" class="homelink">
                  <span class="homelink"> {{items}}</span> </router-link></div>
      </div>
    </div>
  </a-carousel>
</template>
<script>
import { Mixin2 } from '../../utils/mixins';
export default {
  mixins: [Mixin2],
  mounted() {
  },
  data() {
    return {
      product_item: [ ],
      productsList:''
    };
  },
  created(){
    this.getProductsList()
  },
  methods:{
    async getProductsList() {
      // let res = resdata.productlist
      // this.productsList = res.data
      let res = await this.$http.get(this.$api.getProductsList)
      if(res.data.code==200){
          this.productsList=res.data.data.product
          let num = Math.ceil(this.productsList.length / 6)
    if (num >= 1) {
      for (let i = 0; i < num; i++) {
        let aa = []
        for (let j = 0; j < 6; j++) {
          if (j+i*6<this.productsList.length) {
            aa.push(this.productsList[j+i*6].cname)
          }       
        }
        this.product_item.push(aa)
      }
    }
      }else {
        this.$message.error(res.data.msg)
      }
    }
  }
};
</script>
<style scoped>
/* For demo */
.ant-carousel>>>.slick-slide {
  text-align: center;
  height: 120px;
  overflow: hidden;
}

.ant-carousel>>>.custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 40px;
  color: #e5e5e5;
}

.ant-carousel>>>.custom-slick-arrow:before {
  display: none;
}

.ant-carousel>>>.custom-slick-arrow:hover {
  color: #4361ff;
}

.ant-carousel>>>.slick-slide h3 {
  color: #fff;
}

.pro_item {
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding-top: 20px;
  padding-left: 40px;
}

.pro_itemchld {
  width: 15.83%;
  height: 80px;
  display: inline-block;
  box-sizing: border-box;
  border-right: 1px solid #e5e5e5;
}

.pro_itemchld:nth-child(6n) {
  border-right: none
}
.homelink{
  font-size: 16px;
  color: #393939;
  font-weight: 600;
  text-align: center;
}
.homelink:hover{
  color:#2b358a;
}
</style>

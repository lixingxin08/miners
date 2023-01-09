<template>
  <div class="haeds" :class="flextype?'':'disp_flex'">
    <div class="content flex_b">
      <router-link :to="{ 'name': 'home',}">
      <div class="headimg">
        <img src="../../img/logo3.jpg" alt="" />
      </div>
    </router-link>
      <div class="head_r flex_a font_f1">
        <div class="head_i">
          <router-link :to="{ name: 'home' }">
            <span class="ishover font_f1">HOME</span>
          </router-link>
        </div>
        <div>
          <a-dropdown placement="bottomCenter">
            <a class="ant-dropdown-link ismenuchild" @click="(e) => e.preventDefault()">
              <router-link :to="{'name':'products','query':{'id':''}}">
                <span class="ishover font_f1">PRODUCTS</span>
              </router-link>
            </a>

            <a-menu slot="overlay" class="ismenucontent">
              <a-menu-item v-for="(item,index) in productsList.product" :key="index" class="head_menuitem">
                <div>
                  <router-link :to="{'name':'products','query':{'id':item.id}}">
                    <span class="ishover font_f4"> {{item.cname}}</span>
                  </router-link>
                </div>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
        <div class="head_i">
          <router-link :to="{ 'name': 'immersion','query':{'id':'26'} }">
            <span class="ishover">IMERSION COOLING</span>
          </router-link>
        </div>
        <div class="head_i">
          <router-link :to="{ 'name':'aboutus','query':{'usid':0} }">
            <span class="ishover">ABOUT US</span>
          </router-link>
        </div>
        <!-- <div>
          <a-dropdown placement="bottomCenter">
            <a class="ant-dropdown-link ismenuchild" @click="(e) => e.preventDefault()">
              <router-link :to="{'name':'aboutus','query':{'usid':0}}">
                <span class="ishover"> ABOUT US</span>
              </router-link>
            </a>

            <a-menu slot="overlay" class="ismenucontent">
              <a-menu-item v-for="(item,index) in aboutusdata" :key="index" class="head_menuitem">
                <div>
                  <router-link :to="{'name':'aboutus','query':{'usid':index}}">
                    <span class="ishover "> {{item}}</span>
                  </router-link>
                </div>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
       -->
        <div class="head_i">
          <router-link :to="{ name: 'news' }">
            <span class="ishover">NEWS</span>
          </router-link>/
          <router-link :to="{ name: 'cases' }">
            <span class="ishover">CASES</span>
          </router-link>
        </div>
        <div class="head_i">
          <router-link :to="{ name: 'contactus' }">
            <span class="ishover">CONTACT US</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import resdata from './data.json'
import { Mixin2 } from '../../utils/mixins';
import { mapState,mapMutations } from 'vuex'
export default {
  mixins: [Mixin2],
  data() {
    return {
    };
  },
  computed: {
    ...mapState(['productsList'])
  },
  methods: {
    ...mapMutations(['setproductsList']),
    async getProductsList() {

      let res = await this.$http.get(this.$api.getProductsList)
      if(res.data.code==200){
          this.setproductsList(res.data.data)
      }else {
        this.$message.error(res.data.msg)
      }
    }
  },
  created() {
    this.getProductsList()

  },
  props: {
    flextype: Boolean
  },
  mounted() {
  }
};
</script>
<style>
.haeds {
  width: 100%;
  height: 120px;
  line-height: 120px;
  font-size: 18px;
  font-weight: normal;
  background-color: #fff;
  z-index: 999;
  box-shadow: 0 0px 4px rgb(0 0 0 / 8%);
  color: #393939;
}

.ismenuchild {
  height: 110px;
  display: block;
  color: #000;
}

.ismenucontent {
  border-top: 5px solid #393939;
}

.headimg img {
  width:100%;
  height: 80px;
}

.head_r {
  margin-left: 60px;
  flex:1
}

.disp_flex {
  position: fixed;
  top: 0px;
}

.head_menuitem {
  height: 50px;
  line-height: 50px !important;
}
.head_i{
 padding-top: 10px;
}
</style>

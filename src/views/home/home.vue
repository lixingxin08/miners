<template>
  <div id="home">
    <div class="home_carousel">
      <iscarousel :bannerdata="bannerdata"></iscarousel>
    </div>

    <div class="content">
      <procarousel></procarousel>
    </div>
    <div class="flex_fs home_1 home_item">
      <div class="home1_img">
        <img src="../../img/h_yyx_category_bg.png" alt="" />
      </div>
      <div class="content">
        <div>
          <div class="home_title">
            <span class="color2" style="font-size: 36px; font-weight: bold">Marine King Miner</span>
            <!-- <router-link :to="{'name':'aboutus','query':{'usid':0}}">
              <span class="color1 underline" style="font-size: 18px; font-weight: bold; margin-left: 30px">View
                More</span>
            </router-link> -->

          </div>
          <div class="flex_b">
            <div class="home_itemimg">
              <!-- <img src="../../img/ss23.jpg" alt="" /> -->
              <div style="width:636px;height:356px"> <a class="twitter-timeline"
                href="https://twitter.com/NHASH_Official?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Escreen-name%3ANHASH_Official%7Ctwcon%5Es2"
                data-tweet-limit="10" data-width="636" data-height="356">
                Tweets by @TwitterDev
              </a></div>
             
            </div>
            <div class="home1_art">
              <!-- <router-link :to="{ 'name': 'aboutus', 'query': { 'usid': 0 } }">
                <div class="home1_art_t">Marine King Miner</div>
              </router-link> -->
              <router-link :to="{ 'name': 'aboutus', 'query': { 'usid': 0 } }">
                <div ref="test" @click="toeli()" class="iscursor col_0 home1_art_main">
                  Headquartered in Chengdu, Marine King Miner is one of the top
                  three asic miner suppliers in China.As an experienced supplier
                  in this line, Marine King Miner has close business relationship
                  with asic manufacturers like Bitmain, Innosilicon, Canaan,
                  MicroBT, Goldshell and it is able to supply the latest models in
                  large quantity.For better customer service, it set up a factory
                  in Dongguan, China with an efficient team to provide services
                  like repairing, upgrading, dust cleaning and packaging. It
                </div>
              </router-link>
              <div class="home1_art_b flex_a">
                <!-- <a href="https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fwww.nhash.net%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5ENHASH_Official&region=follow_link&screen_name=NHASH_Official">
                  <div class="home1_art_b_item">
                    <a-icon type="twitter" /> Follow @NHASH_Official
                  </div>
                </a> -->
                <!-- <div class="home1_art_b_item">
                  <div class="color1" style="font-size: 52px">10000+</div>
                  <div style="font-size: 20px">Customers Served</div>
                </div>
                <div class="home1_art_b_item">
                  <div class="color1" style="font-size: 52px">20000+</div>
                  <div style="font-size: 20px">Annual Sales</div>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Product-->
    <div class="content home_3 home_item" v-if="bannertype">
      <!--Product-->
      <div class="home_item_t">
        <span class="line"></span>
        <span class="font_40">Products</span>
        <span class="line"></span>
      </div>
      <div class="products_box rel1">
        <div class="extent_box ab1" :class="scrolltype ? 'isproducts' : ''">
          <div class="flex_b">
            <div class="home_pro_i1 box_shadown rel">
              <img :src="this.bannerdata[0].product_img" alt="" class="extent_box toscaleimg ab" />
              <router-link :to="{ 'name': 'productsdetail', 'query': { 'goods_id': this.bannerdata[0].id } }">
                <div class="extent_box">
                  <!-- <div class="tac home_pro1 font_22">{{ bannerdata[0].title }}</div>
                  <div class="tac home_pro2 font_18">{{ bannerdata[0].algorithm }}</div>
                  <div class="tac home_pro3 font_18">
                    <span>{{ bannerdata[0].hashrate | filnum(bannerdata[0].hashrate) }}</span>|
                    <span>{{ bannerdata[0].power_watt | filnum(bannerdata[0].power_watt) }}</span> |
                    <span>{{ bannerdata[0].power_jth | filnum(bannerdata[0].power_jth) }}</span>
                  </div>
                  <div class="tac home_pro4 font_18 col_2 ab_20">
                  </div> -->
                </div>
              </router-link>
            </div>

            <div class="home_pro_i2 box_shadown rel">
              <img :src="this.bannerdata[1].product_img" alt="" class="extent_box toscaleimg ab" />
              <router-link :to="{ 'name': 'productsdetail', 'query': { 'goods_id': this.bannerdata[1].id } }">
                <div class="extent_box">
                  <!-- <div class="tac home_pro1 font_22">{{ bannerdata[1].title }}</div>
                  <div class="tac home_pro2 font_18">{{ bannerdata[1].algorithm }}</div>
                  <div class="tac home_pro3 font_18">
                    <span>{{ bannerdata[1].hashrate | filnum(bannerdata[1].hashrate) }}</span>|
                    <span>{{ bannerdata[1].power_watt | filnum(bannerdata[1].power_watt) }}</span> |
                    <span>{{ bannerdata[1].power_jth | filnum(bannerdata[1].power_jth) }}</span>
                  </div>
                  <div class="tac home_pro4 font_18 col_2 ab_20">

                  </div> -->
                </div>
              </router-link>
            </div>
          </div>
          <div class="flex_b mt20_mb20">
            <div class="home_pro_i2 box_shadown rel" v-if="this.bannerdata.length >= 3">
              <img :src="this.bannerdata[2].product_img" alt="" class="extent_box toscaleimg ab" />
              <router-link :to="{ 'name': 'productsdetail', 'query': { 'goods_id': this.bannerdata[2].id } }">
                <div class="extent_box">
                  <!-- <div class="tac home_pro1 font_22">{{ bannerdata[2].title }}</div>
                  <div class="tac home_pro2 font_18">{{ bannerdata[2].algorithm }}</div>
                  <div class="tac home_pro3 font_18">
                    <span>{{ bannerdata[2].hashrate | filnum(bannerdata[2].hashrate) }}</span>|
                    <span>{{ bannerdata[2].power_watt | filnum(bannerdata[2].power_watt) }}</span> |
                    <span>{{ bannerdata[2].power_jth | filnum(bannerdata[2].power_jth) }}</span>
                  </div>
                  <div class="tac home_pro4 font_18 col_2 ab_20">

                  </div> -->
                </div>
              </router-link>
            </div>
            <div class="home_pro_i1 box_shadown rel" v-if="this.bannerdata.length >= 4">
              <img :src="this.bannerdata[3].product_img" alt="" class="extent_box toscaleimg ab" />
              <router-link :to="{ 'name': 'productsdetail', 'query': { 'goods_id': this.bannerdata[3].id } }">
                <div class="extent_box">
                  <!-- <div class="tac home_pro1 font_22">{{ bannerdata[3].title }}</div>
                  <div class="tac home_pro2 font_18">{{ bannerdata[3].algorithm }}</div>
                  <div class="tac home_pro3 font_18">
                    <span>{{ bannerdata[3].hashrate | filnum(bannerdata[3].hashrate) }}</span>|
                    <span>{{ bannerdata[3].power_watt | filnum(bannerdata[3].power_watt) }}</span> |
                    <span>{{ bannerdata[3].power_jth | filnum(bannerdata[3].power_jth) }}</span>
                  </div>
                  <div class="tac home_pro4 font_18 col_2 ab_20">

                  </div> -->
                </div>
              </router-link>
            </div>
          </div>
          <div class="flex_b">
            <div class="home_pro_i3 box_shadown rel" v-if="this.bannerdata.length >= 5">
              <img :src="this.bannerdata[4].product_img" alt="" class="extent_box toscaleimg ab" />
              <router-link :to="{ 'name': 'productsdetail', 'query': { 'goods_id': this.bannerdata[4].id } }">
                <div class="extent_box">
                  <!-- <div class="tac home_pro1 font_22">{{ bannerdata[4].title }}</div>
                  <div class="tac home_pro2 font_18">{{ bannerdata[4].algorithm }}</div>
                  <div class="tac home_pro3 font_18">
                    <span>{{ bannerdata[4].hashrate | filnum(bannerdata[4].hashrate) }}</span>|
                    <span>{{ bannerdata[4].power_watt | filnum(bannerdata[4].power_watt) }}</span> |
                    <span>{{ bannerdata[4].power_jth | filnum(bannerdata[4].power_jth) }}</span>
                  </div>
                  <div class="tac home_pro4 font_18 col_2 ab_20">

                  </div> -->
                </div>
              </router-link>
            </div>
            <div class="home_pro_i3 box_shadown rel" v-if="this.bannerdata.length >= 6">
              <img :src="this.bannerdata[5].product_img" alt="" class="extent_box toscaleimg ab" />
              <router-link :to="{ 'name': 'productsdetail', 'query': { 'goods_id': this.bannerdata[5].id } }">
                <div class="extent_box">
                  <!-- <div class="tac home_pro1 font_22">{{ bannerdata[5].title }}</div>
                  <div class="tac home_pro2 font_18">{{ bannerdata[5].algorithm }}</div>
                  <div class="tac home_pro3 font_18">
                    <span>{{ bannerdata[5].hashrate | filnum(bannerdata[5].hashrate) }}</span>|
                    <span>{{ bannerdata[5].power_watt | filnum(bannerdata[5].power_watt) }}</span> |
                    <span>{{ bannerdata[5].power_jth | filnum(bannerdata[5].power_jth) }}</span>
                  </div>
                  <div class="tac home_pro4 font_18 col_2 ab_20">
                  </div> -->
                </div>
              </router-link>
            </div>
            <div class="home_pro_i3 box_shadown rel" v-if="this.bannerdata.length >= 7">
              <img :src="this.bannerdata[6].product_img" alt="" class="extent_box toscaleimg ab" />
              <router-link :to="{ 'name': 'productsdetail', 'query': { 'goods_id': this.bannerdata[6].id } }">
                <div class="extent_box">
                  <!-- <div class="tac home_pro1 font_22">{{ bannerdata[6].title }}</div>
                  <div class="tac home_pro2 font_18">{{ bannerdata[6].algorithm }}</div>
                  <div class="tac home_pro3 font_18">
                    <span>{{ bannerdata[6].hashrate | filnum(bannerdata[6].hashrate) }}</span>|
                    <span>{{ bannerdata[6].power_watt | filnum(bannerdata[6].power_watt) }}</span> |
                    <span>{{ bannerdata[6].power_jth | filnum(bannerdata[6].power_jth) }}</span>
                  </div>
                  <div class="tac home_pro4 font_18 col_2 ab_20">
                  </div> -->
                </div>
              </router-link>
            </div>
            <div class="home_pro_i3 box_shadown flex_col_between">
              <div class="home_pro_end rel" v-if="this.bannerdata.length >= 8">
                <img :src="this.bannerdata[7].product_img" alt="" class="extent_box toscaleimg ab" />
                <router-link :to="{ 'name': 'productsdetail', 'query': { 'goods_id': this.bannerdata[6].id } }">
                  <div class="extent_box">
                    <!-- <div class="tac home_pro1 font_22">{{ bannerdata[7].title }}</div>
                    <div class="tac home_pro2 font_18">{{ bannerdata[7].algorithm }}</div>
                    <div class="tac home_pro3 font_18">
                      <span>{{ bannerdata[7].hashrate | filnum(bannerdata[7].hashrate) }}</span>|
                      <span>{{ bannerdata[7].power_watt | filnum(bannerdata[7].power_watt) }}</span> |
                      <span>{{ bannerdata[7].power_jth | filnum(bannerdata[7].power_jth) }}</span>
                    </div>
                    <div class="tac home_pro4 font_18 col_2 ab_20">
                    </div> -->
                  </div>
                </router-link>
              </div>
              <div class="home_pro_end2 rel">
                <img src="https://www-static.bitmain.com/_nuxt/img/9ca12a3.jpg" alt=""
                  class="extent_box toscaleimg ab" />
                <router-link :to="{ 'name': 'products', 'query': { 'id': '' } }">
                  <div class="tac home_pro1 font_22 flex_b ">
                    <div>More Products</div>
                    <div>
                      <a-icon type="right-circle" />
                    </div>
                  </div>
                </router-link>
              </div>


            </div>

          </div>
        </div>
      </div>

      <div class="clear"></div>
    </div>
    <!-- News & Events-->
    <div class="content">
      <div class="home_item_t">
        <span class="line"></span>
        <span class="font_40">News & Events</span>
        <span class="line"></span>
      </div>
      <div class="flex_b home_3_box" v-if="homenews.length <= 3">
        <div class="box_flex home_news box_shadown iscursor" v-for="(item, index) in homenews" :key="index">
          <router-link :to="{ 'name': 'news_detail', 'query': { 'id': item.id, 'choice_type': item.type } }">
            <div class="box_fleximg home_newsimg">
              <img :src="item.picture" alt="" class="toscaleimg" />
            </div>
            <p></p>
            <p></p>
            <div class="box_flex_art">
             <span class="color2"> {{ item.title }}</span>
            </div>
            <p></p>
            <div class="box_flex_art font_14" style="color:rgba(0,0,0,.6)">
              {{ item.create_time | timestampToTime(item.create_time) }}
            </div>
            <p></p>
            <div class="box_flex_art font_12" style="color:rgba(0,0,0,.6)">
              {{ toel2(item.short_desc, 100) }}
            </div>
          </router-link>
        </div>

      </div>
      <div class="flex_b home_3_box" v-if="homenews.length > 3">
        <div class="box_flex home_news box_shadown iscursor" v-for="item in 3" :key="item">
          <router-link :to="{ 'name': 'news_detail', 'query': { 'id': item.id, 'choice_type': item.type } }">
            <div class="box_fleximg home_newsimg">
              <img :src="homenews[item].picture" alt="" class="toscaleimg" />
            </div>
            <p></p>
            <p></p>
            <div class="box_flex_art">
             <span class="color2"> {{ homenews[item].title }}</span>
            </div>
            <p></p>
            <div class="box_flex_art font_14" style="color:rgba(0,0,0,.6)">
              {{ homenews[item].create_time | timestampToTime(homenews[item].create_time) }}
            </div>
            <p></p>
            <div class="box_flex_art font_12" style="color:rgba(0,0,0,.6)">
              {{ toel2(homenews[item].short_desc, 100) }}
            </div>
          </router-link>
        </div>

      </div>
    </div>
    <!--AladdinMiner Advantages-->>
    <div class="content home_3 home_8 home_item">
      <div class="home_item_t">
        <span class="line"></span>
        <span class="font_40">Miners1688 Advantages</span>
        <span class="line"></span>
      </div>
      <div class="home_item_t_art">
        <!-- <span class="line2"></span> -->
        <span class="font_18 color2">We provide perfect pre-sales and after-sales service.</span>
        <!-- <span class="line2"></span> -->
      </div>
      <div class="home_item_t_art">
        Besides our own products (Miners1688), we also have various resources to collect other machines which is in
        the best condition.
      </div>
      <div class="home_item_t_art">
        After the machines arriving at our warehouse, we have a standardized procedure and professional team to carry
        out it.
      </div>
      <div class="advantages flex_b">
        <div class="advantages_item flex_fs">
          <div class="advantages_img">
            <img src="../../img/Testing.png" alt="">
          </div>
          <div class="advantages_art">
            <div class="advantages_art_t">TESTING</div>
            <div class="advantages_art_c">We will test every machines to ensure the due hash rate. The fans, hashboards
              and every single
              components in the machines will be tested accordingly.</div>
          </div>
        </div>
        <div class="advantages_item flex_fs">
          <div class="advantages_img">
            <img src="../../img/repair.png" alt="">
          </div>
          <div class="advantages_art">
            <div class="advantages_art_t">REPAIR</div>
            <div class="advantages_art_c">After testing, if there're problems with the machines, we'll fix them all to
              make sure the machines run smoothly.</div>
          </div>
        </div>
      </div>

      <div class="advantages flex_b">
        <div class="advantages_item flex_fs">
          <div class="advantages_img">
            <img src="../../img/cleaning.png" alt="">
          </div>
          <div class="advantages_art">
            <div class="advantages_art_t">CLEANING</div>
            <div class="advantages_art_c">We can clean and polish the machines according to clients' requirement. To a
              certain extent, we can make the machines as new as the original one.</div>
          </div>
        </div>
        <div class="advantages_item flex_fs">
          <div class="advantages_img">
            <img src="../../img/Video-taking.png" alt="">
          </div>
          <div class="advantages_art">
            <div class="advantages_art_t">VIDEO TAKING</div>
            <div class="advantages_art_c">We provide videos for every single machines. Basically, clients can see the
              average hash rate, instant hash rate, the appearance, the serial code of machines. If clients require
              particular content in the video, we'll also fulfill.</div>
          </div>
        </div>
      </div>

      <div class="advantages flex_b">
        <div class="advantages_item flex_fs">
          <div class="advantages_img">
            <img src="../../img/Packaging.png" alt="">
          </div>
          <div class="advantages_art">
            <div class="advantages_art_t">PACKAGING</div>
            <div class="advantages_art_c">It's well know that, miner is a kind of fragile machine so we pay highly
              attention to the packaging. We have customized packaging foam for the miners which can greatly protect the
              miners from being crashed.</div>
          </div>
        </div>
        <div class="advantages_item flex_fs">
          <div class="advantages_img">
            <img src="../../img/After-sales-service.png" alt="">
          </div>
          <div class="advantages_art">
            <div class="advantages_art_t">AFTER-SALES SERVICE</div>
            <div class="advantages_art_c">If clients meet any problems during operating the miners, we'll assist them to
              solve. If the miners need to be repaired, clients can send them back to us, we'll repair for them.</div>
          </div>
        </div>
      </div>
    </div>
    <subdialogVue :visitype="visitype" @toclose="toclose" :pro_detail="pro_detail"></subdialogVue>
  </div>
</template>
<script>
import iscarousel from "../../components/carousel/homecarousel.vue";
import procarousel from "../../components/carousel/prod_carousel.vue";
import { Mixin1 } from "../../utils/mixins.js"
import subdialogVue from '../../components/dialog/subdialog.vue'
import { issubdialog } from '../../utils/mixins'
import resdata from './home.json'
import newdata from './news.json'
import { mapState, mapMutations } from 'vuex'
export default {
  name: "home",
  data() {
    return {
      bannerdata: [],
      scrolltype: false,
      bannertype: false,
      homenews: []
    };
  },
  computed: {
    ...mapState(['newslist']),
  },
  components: {
    iscarousel,
    procarousel,
    subdialogVue
  },
  mixins: [Mixin1, issubdialog],
  methods: {
    ...mapMutations(['setnewslist']),
    async getBanner() {
      // let res = resdata
      // this.bannerdata = res.data
      this.bannertype = false
      let res = await this.$http.get(this.$api.getBanner)
      if (res.data.code == 200) {
        this.bannerdata = res.data.data
        console.log(this.bannerdata ,'this.bannerdata ');
        this.bannertype = true
      } else {
        this.$message.error(res.message)
      }
    },
    async getNewsAndCasesList() {
      let res = await this.$http.get(this.$api.getNewsAndCasesList)
      if (res.data.code == 200) {
        this.setnewslist(res.data.data)
        let aa = res.data.data.news
        if (!aa) {
          return
        }
        for (let i = 0; i < aa.length; i++) {
          if (aa[i].is_hot !== 0) {
            this.homenews.push(aa[i])
          }
        }
        console.log(this.homenews, 'this.homenews');
      } else {
        this.$message.error(res.message)
      }
    },
    async getProductsInfo(index) {
      this.infotype = false
      // let res = resdata.productsInfo
      // this.productsInfo = res.data
      let params = {
        id: index,
      }
      let res = await this.$http.post(this.$api.getProductsInfo, params)
      if (res.code == 200) {
        this.productsInfo = res.data
      } else {
        this.$message.error(res.message)
      }
    },
    handleScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 滚动条偏移量
      if (scrollTop > 550) {
        this.scrolltype = true
      }
    }
  },
  created() {
    this.getBanner()
    this.getNewsAndCasesList()

  },
  filters: {

  },
  mounted() {
    this.toeli(this.$refs.test, 500);
    console.log(this.newslist, 9999);
    // this.getnewslist()
    // window.addEventListener('scroll', this.handleScroll)
  },
};
</script>
<style>
#components-layout-demo-custom-trigger {
  height: 100%;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #ff4500;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.home_item {
  height: 533px;
  padding: 37px 0;
}

.home_1 {
  background-color: #f4f6f9;
  position: relative;
}

.home1_img {
  position: absolute;
  left: 0;
  top: 0;
}

.home1_img img {
  height: 450px;
}

.home_itemimg {
  position: relative;
  left: 0;
  width: 636px;
  height: 356px;
}

.home_carousel {
  width: 100%;
  height: 500px;
  overflow: hidden;
}


.home_title {
  height: 63px;
  padding: 10px 0 10px 20px;
  margin-bottom: 40px;
  border-left: 8px solid #4361ff;
  text-align: left;
}

.home1_art {
  text-align: left;
  padding: 8px 0 8px 30px;
  height: 356px;
  word-break: break-all;
}
.home1_art_main{
  font-size: 24px;
}
.home1_art_t {
  font-size: 24px;
  color: #111;
  font-weight: 600;
}

.home1_art_t:hover {
  color: #ff4500;
}

.home1_art_b {
  margin-top: 16px;
}

.home_2_c {
  margin-top: 50px;
}

.home_2_c_item {
  width: 24.5%;
  text-align: left;
}

.home_2_c_img {
  width: 300px;
  height: 223px;
  overflow: hidden;
}

.home_2_c_art1 {
  color: #a6a6a6;
  margin-top: 12px;
}

.home_2_c_art2 {
  width: 100%;
  height: 20px;
  font-size: 16px;
  color: #222;
  margin-top: 12px;
}

.home_2_c_art3 {
  width: 100%;
  height: 50px;
  margin-top: 12px;
  color: #a6a6a6;
  overflow: hidden;
  text-overflow: ellipsis;
}

.home_3 {
  height: 100%;
}

.home_3_box {
  flex-wrap: wrap;
}

.home_3item {
  height: 523px;
}

.home_3itemimg {
  height: 380px;
}

.home1_art_b_item {
  width: 200px;
  height: 26px;
  background-color: #ff4500;
  border-radius: 13px;
  font-size: 13px;
  line-height: 26px;
  color: #fff;
  text-align: center;
  cursor: pointer;
  margin-top: 20px;
}

.home4 {
  width: 100%;
  margin-top: 20px;
  background: url('../../img/yyxbg.png') 100% 100% no-repeat;
}

.Contactimg {
  width: 240px;
  height: 240px;
}

.Contact_b {
  color: #161618;
  font-size: 16px;
  margin-top: 20px;
  font-weight: 600;
}

.Contact_end {
  font-size: 60px;
  color: #ff4500;
}

.home_Contact_box:hover .Contact_end {
  color: orange;
}

.choose_box {
  width: 288px;
  height: 288px;
  color: #fff;
  text-align: center;
  position: relative;
}

.choose_bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 288px;
  height: 288px;
  z-index: -22;
}

.choos_c {
  margin-top: 17px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

.choos_b {
  margin-top: 17px;
  text-align: center;
  font-size: 16px;
}

.home_item_t {
  margin: 23px auto 40px;
  text-align: center;
  height: 60px;
}

.advantages {
  margin-top: 15px;
  margin-bottom: 60px;
}

.advantages_item {
  width: 48%;
}

.home_item_t_art {
  text-align: center;
  margin-bottom: 6px;
  font-weight: 400;
  font-family: "Montserrat", Sans-serif;
  font-size: 16px;
  color: #808285;
}

.advantages_img img {
  width: 82px;
  margin-right: 8px;
}

.advantages_art {
  flex: 1
}

.advantages_art_t {
  font-size: 22px;
  font-weight: 700;
}

.advantages_art_c {
  font-size: 15px;
  color: #808285;
}

.line {
  display: inline-block;
  width: 60px;
  height: 2px;
  background-color: #dadbe0;
  margin: 10px 20px;
}

.home_pro {
  text-align: center;
}

.home_pro_i1 {
  width: 62.4%;
  height: 507px;
  overflow: hidden;
  border: 1px solid #dedede;
  cursor: pointer;
}

.home_pro_i2 {
  width: 37%;
  height: 507px;
  overflow: hidden;
  border: 1px solid #dedede;
  cursor: pointer;
}

.home_pro_i3 {
  width: 24.5%;
  height: 446px;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 1px solid #dedede;
  cursor: pointer;
}

.home_pro1 {
  margin-top: 30px;
  margin-bottom: 8px;
  color: #000;
}

.home_pro2 {
  margin-bottom: 8px;
  color: #000;
}

.home_pro3 {
  color: #000;
}

.home_pro4 {
  width: 100%;

}

.home_pro_end {
  width: 100%;
  height: 262px;
  overflow: hidden;
  border: 1px solid #ddd;
}

.home_pro_end2 {
  width: 100%;
  height: 169px;
  overflow: hidden;
  padding: 20px;
  padding-top: 40px;
  background: rgba(0, 0, 0, .1);
}

.home_news {
  height: 588px;
}

.home_newsimg {
  width: 100%;
  height: 293px;
}

.products_box {
  height: 1510px;
  overflow: hidden;
}

.isproducts {
  left: -1400px;
  animation: scrollin 3s ease 0s 1;
  animation-fill-mode: forwards;
}

@keyframes scrollin {
  0% {
    left: -1400px;
  }

  100% {
    left: 0;
  }
}
</style>

<template>
  <div id="app">
    <!-- <div class="nav" :class="scroltype?'':'nav_flex'">
      <div class="content col_f flex_c_e">
        <div class="nav_L">
          <a-icon type="mail" />
          {{companyInfo[0].email}}
        </div>
        <div>
          <a-icon type="phone" theme="filled" />
          {{companyInfo[0].tel}}
        </div>
      </div>
    </div> -->
    <headers :flextype="scroltype"></headers>
    <a-config-provider>
      <router-view class="min_content" />
    </a-config-provider>
    <islink></islink>
    <isfoolter></isfoolter>
  </div>
</template>

<script>
import headers from "./components/pages/header.vue";
import isfoolter from "./components/pages/foolter.vue"
import islink from "./components/pages/link.vue";
import { mapState, mapMutations } from 'vuex'
export default {
  name: "App",
  components: { headers, islink, isfoolter },
  data() {
    return {
      // zhCN,
      ivews: "login,home", //缓存组件
      scroltype: true
    };
  },
  computed: {
    ...mapState(['companyInfo'])
  },
  created() {
    this.getCompanyInfo()
  },
  methods: {
    ...mapMutations(['setCompanyInfo']),
    async getCompanyInfo() {
      // let res = resdata
      // this.companyInfo = res.data
      let res = await this.$http.get(this.$api.getCompanyInfo)
      if (res.data.code == 200) {
        this.setCompanyInfo(res.data.data)
      } else {
        this.$message.error(res.data.msg)
      }
    },
    scrollEvent() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop // 滚动条偏移量
      if (scrollTop < 600) {
        this.scroltype = true
      } else {
        this.scroltype = false
      }
    },
    scrollToTop() {
      let el = document.querySelector('#app');
      el.scrollTop = 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollEvent)
  },
  watch: {
    // 监听路由变化
    '$route.path': function () {
      // 页面重置到顶部
      this.scrollToTop()
    }
  }
};
</script>
<style>
@import './assets/fonts/fonts.css';

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #393939;
  font-size: 12px;
  /* width: 1920px; */
  overflow: scroll;
  box-sizing: border-box;
  font-family: 'MiSans-Normal';
  font-weight: 400;
}

#app::-webkit-scrollbar {
  display: none;
}

.nav {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: orange;
}

.nav_flex {
  position: fixed;
  top: 0;
  z-index: 999;
}

.nav_L {
  padding-right: 40px;
}
</style>

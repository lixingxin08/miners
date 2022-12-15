import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    companyInfo:'',
    productsList:'',
    newslist:''
  },
  getters: {
    
  },

  mutations: {
    setCompanyInfo(state, info){
      state.companyInfo=info
    },
    setproductsList(state, info){
      state.productsList=info
    },
    setnewslist(state, info){
      state.newslist=info
    },
  },

  actions: {
  },

  modules: {

    //这里是我自己理解的是为了给全局变量分组，所以需要写提前声明其他store文件，然后引入这里

  }

})

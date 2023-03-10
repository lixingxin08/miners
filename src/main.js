// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './css/base.css'
import './css/style.css'
import './css/index.css'
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = true
import axios from './js/axios_config.js';
import api from './js/api_config.js';
import utils from './utils/utils.js';
import config from './utils/config.js'
import Vuex from 'vuex'
import store from './store'
Vue.prototype.$http = axios;
Vue.prototype.$api = api;
Vue.prototype.$utils = utils;
Vue.prototype.$config = config
// import VueLazyLoad from 'vue-lazyload'
Vue.use(Vuex)
import 'ant-design-vue/dist/antd.css';
import {
  Layout,
  Button,
  Icon,
  Select,
  Dropdown,
  Menu,
  Input,
  Tree,
  TreeSelect,
  Breadcrumb,
  Table,
  DatePicker,
  Switch,
  Popconfirm,
  Checkbox,
  Form,
  Steps,
  InputNumber,
  Upload,
  message,
  Descriptions,
  Radio,
  ConfigProvider,
  Carousel,
  Pagination,
  Modal,
  Anchor,
  Collapse,
  Divider
} from 'ant-design-vue';
Vue.use(Dropdown);
Vue.use(Layout);
Vue.use(Button);
Vue.use(Icon);
Vue.use(Select);
Vue.use(Menu);
Vue.use(Input);
Vue.use(Tree);
Vue.use(TreeSelect);
Vue.use(Breadcrumb);
Vue.use(Table);
Vue.use(DatePicker);
Vue.use(Switch);
Vue.use(Popconfirm);
Vue.use(Checkbox);
Vue.use(Form);
Vue.use(Steps);
Vue.use(InputNumber);
Vue.use(Upload);
Vue.use(Radio);
Vue.prototype.$message = message
Vue.use(Descriptions)
Vue.use(ConfigProvider)
Vue.use(Carousel)
Vue.use(Modal)
Vue.use(Pagination)
Vue.use(Anchor)
Vue.use(Collapse)
Vue.use(Divider)

import md5 from 'js-md5';
Vue.prototype.$md5 = md5

// http response 拦截器
axios.create({
  timeout: 5000
})
router.afterEach((to,from,next)=>{ 
  window.scrollTo(0,0)
})
axios.interceptors.request.use(
  config => {
    // 每次发送请求之前判断vuex中是否存在token
    let token = ""
    if (window.location.host.indexOf("localhost") >= 0) {
      token = "eyJhbGciOiJIUzI1NiIsIlR5cGUiOiJKd3QiLCJ0eXAiOiJKV1QifQ.eyJleHBpcmVzIjoxNjAyNjgxMjUxMTY0LCJ0b2tlbklkIjoiNDIyNTAzYmU0ODJmNDBlZTg3ODE1NjJhNWE4ODE0OTgiLCJ1c2VySWQiOiI0YjdmYmMyYWFkOTI0ZWM3YWQ3OTYxOTIxNmIzNmVhYyJ9.Lkq4cXwdY0vxD5EBmhNXbXZJ-dyDZl0vTg4ls7uxRp8"

    } else {
      if (localStorage.getItem('asset'))
        token = JSON.parse(localStorage.getItem('asset')).token || ""
    }
    config.headers.common['token'] = token
    return config;
  },
  error => {
    return Promise.error(error);
  }
)
let backnum = 0
let thisurl = window.location.href.split('/#')
let bb = thisurl[0].split('/asset')
axios.interceptors.response.use(
  response => {
    backnum++
    if (localStorage.getItem('asset')) {
      let aa = JSON.parse(localStorage.getItem('asset'))
      aa.token = response.headers.token
      localStorage.setItem('asset', JSON.stringify(aa))
    }
    if (response.data.resultMsg == "执行成功，但没有获取到数据") {
      response.data.data = []
      response.data.data.list = []

    }
    if (response.data.resultCode == "20100") {
      message.error("令牌错误，请重新登录", 5)
      //if (backnum >= 2) {
      window.location.href = bb[0]
      // }
    }
    if (response.data.resultCode == "20101") {
      message.error("未登录，请先登录", 5)
      // if (backnum >= 3) {
      window.location.href = bb[0]
      // }
    }
    if (response.data.code == "20102") {
      message.error("你的账号已在其他地方登录，请重新登录", 5)
      // if (backnum >= 3) {
      window.location.href = bb[0]
      //}
    }
    if (response.data.resultCode == "20103") {
      message.error("登录已过期，请重新登录！", 5)
      //  if (backnum >= 3) {
      window.location.href = bb[0]
      // }
    }
    if (response.data.resultCode == "20104") {
      message.error("登录已失效，请重新登录！", 5)
      // if (backnum >= 3) {
      window.location.href = bb[0]
      // }
    }
    if (response.data.resultCode == "20105") {
      message.error("登录已失效，请重新登录！", 5)
      //if (backnum >= 3) {
      window.location.href = bb[0]
      // }
    }

    return response;
  },
  // error => {
  //   if (error.response) {
  //     console.log(error.response.status, 'errorerrorerrorerror');
  //     if (error.response.status == 404) {
  //       router.replace({
  //         path: '/error404',
  //       })
  //     }
  //     if (error.response.status == 403) {
  //       router.replace({
  //         path: '/error403',
  //       })
  //     }
  //     if (error.response.status == 500) {
  //       router.replace({
  //         path: '/error500',
  //       })
  //     }
  //     if (error.response.status == 504) {
  //       router.replace({
  //         path: '/error504',
  //       })
  //     }
  //   }
  //   return Promise.reject(error.response.data)
  // }
)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})

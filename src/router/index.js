import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('@/views/home/home')
const login = () => import('@/views/login/login')
const products = () => import('@/views/products/products')
const productsdetail = () => import('@/views/products/products_detail.vue')
const aboutus = () => import('@/views/aboutuse/aboutuse')
const news = () => import('@/views/news/news')
const news_detail = () => import('@/views/news/news_detail')
const cases = () => import('@/views/cases/cases')
const casesdetail = () => import('@/views/cases/casesdetail')
const contactus = () => import('@/views/contactus/contactus')


const error_404 = () => import('@/components/error_page/404.vue')
const error_403 = () => import('@/components/error_page/403.vue')
const error_500 = () => import('@/components/error_page/500.vue')
Vue.use(Router)
export default new Router({
  routes: [{
      path: '',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/products',
      name: 'products',
      component: products
    },
    {
      path: '/productsdetail',
      name: 'productsdetail',
      component: productsdetail
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: aboutus
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/news_detail',
      name: 'news_detail',
      component: news_detail
    },
    {
      path: '/cases',
      name: 'cases',
      component: cases
    },
    {
      path: '/casesdetail',
      name: 'casesdetail',
      component: casesdetail
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: contactus
    },

    {
      path: '/error404',
      name: 'error_404',
      component: error_404
    },
    {
      path: '/error403',
      name: 'error_403',
      component: error_403
    },
    {
      path: '/error500',
      name: 'error_500',
      component: error_500
    },
  ],
})

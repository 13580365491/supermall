import Vue from 'vue';
import VueRouter from 'vue-router';

//路由懒加载
const Home = () => import('views/home/home');
const Category = () => import('views/category/category');
const Cart = () => import('views/cart/cart');
const Bussiness = () => import('views/bussiness/bussiness');
const Detail = () => import('views/detail/detail');

//安装插件
Vue.use(VueRouter)

//创建路由对象
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/bussiness',
    component: Bussiness
  },
  {
    path: '/detail/:iid',
    component: Detail
  }
]
const router = new VueRouter({
  routes,
  mode: 'history',
})

//导出router
export default router;
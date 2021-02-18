import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
// 导入搜索页路由
import Search from '../views/Search.vue'
// 导入更多热门推荐页面
import MoreHot from '../views/MoreHot'
// 导入更多新碟上架页面
import MoreNewDiscs from '../views/MoreNewDiscs'
// 导入404错误界面
import ErrorPage from '../views/ErrorPage.vue'

Vue.use(VueRouter)

// 消除在搜索页面点击搜索之后报路由重复的问题
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

const routes = [
  // 主页路由
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  // 搜索页路由
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  // 更多热门推荐
  {
    path: '/morehot',
    name: 'MoreHot',
    component: MoreHot
  },
  // 更多新碟上架
  {
    path: '/morenewdiscs',
    name: 'MoreNewDiscs',
    component: MoreNewDiscs
  },
  // 404页面
  {
    path: '*',
    name: '404',
    component: ErrorPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

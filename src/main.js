import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'// 导入element-ui的css
import '@/static/css/reset.css'// 导入初始化的css

// 引入热门榜单组件
import HotRecommend from '@/components/global/HotRecommend.vue'
// 配置为全局组件
Vue.component('HotRecommend',HotRecommend)
// 引入新碟上架组件
import Album from '@/components/global/Album'
// 配置为全局组件
Vue.component('Album',Album)
// 引入新碟上架大组件
import BigAlbum from '@/components/global/BigAlbum'
// 配置为全局组件
Vue.component('BigAlbum',BigAlbum)
// 引入榜单组件
import BillList from '@/components/global/BillList'
// 配置为全局组件
Vue.component('BillList',BillList)
// 引入顶部导航栏组件
import TopNav from '@/components/global/TopNav'
// 配置为全局组件
Vue.component('TopNav',TopNav)
// 引入脚注组件
import Footer from '@/components/global/Footer'
// 配置为全局组件
Vue.component('Footer',Footer)

//使用elementUI插件
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

<template>
  <div class="MoreHot" @mousewheel="showTop">
    <!-- 顶部导航栏 -->
    <TopNav :typess="typess"/>
    <!-- 头部导航栏 -->
    <HeadNav />
    <div class="main">
      <div class="warp">
        <div class="title">
          <h3>
            <span class="ff2">全部</span>
            <a href="javascript:void(0)" class="menu">
              <i>
                选择分类
                <em class="icn38"></em>
              </i>
            </a>
          </h3>
          <div class="btn">
            <a href="javascript:void(0)" class="al">热门</a>
          </div>
        </div>
        <div class="songslist">
          <HotRecommend class="hot" v-for="(item,index) in hotData" :key="index" :hotData="hotData[index]"/>
        </div>
        <div>
          <div class="page">
            <a ref="zpgi" v-for="(item,index) in nums" :key="item" href="javascript:void(0)" class="zpgi" @click="changePage(index)">{{item}}</a>
          </div>
        </div>
      </div>
    </div>
    <!-- 脚注 -->
    <Footer />
    <!-- 回到顶部 -->
    <a ref="backTop" class="m_back" href="#"></a>
  </div>
</template>

<script>
// 导入头部导航栏
import HeadNav from '@/components/HeadNav'
// 导入获取热门推荐的数据的js文件
import {getPersonalized} from '@/api/personalized'
export default {
  name: 'MoreHot',
  components:{
    HeadNav
  },
  data() {
    return {
      // 用来生成遍历
      nums: ['1','2'],
      // 用来判断导航栏的样式
      typess: 'true',
      // 用来存放即将要显示的热门推荐数据
      hotData: [],
      // 用来存放所有的热门推荐数据
      allHotData: []
    }
  },
  // 挂载的时候请求热门推荐接口数据
  mounted(){
    // 挂载之后给分页器设置默认值
    // 获取所有的页数
    let nums = this.$refs.zpgi
    // 将第一页设置为选中页
    nums[0].className = "zpgi selected"

    // 获取热门推荐的接口数据
    getPersonalized().then(response => {
      // 获取数据显示在热门推荐中
      this.allHotData = response.data.result
      this.hotData = this.allHotData.slice(0,15)
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    // 设置鼠标滚动事件
    showTop() {
      // 获取当前y轴的位置
      let index = document.documentElement.scrollTop
      // 滚动鼠标时判断是否显示top
      if(index === 0){
        // 隐藏top
        this.$refs.backTop.style.display = 'none'
      }else {
        // 显示top
        this.$refs.backTop.style.display = 'block'
      }
    },
    // 点击页数事件
    changePage(index){
      // 获取所有的页数
      let nums = this.$refs.zpgi
      // 清除选中样式
      this.clearStyle()
      // 将当前选中页数设置样式
      nums[index].className = "zpgi selected"
      
      //获取偏移量
      let offset = index + 1
      this.hotData = this.allHotData.slice(index*15,offset*15)
    },
    // 清除分页器中选中的样式
    clearStyle(){
      // 获取所有的页数
      let nums = this.$refs.zpgi
      nums.forEach((item) => {
        item.className = 'zpgi'
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .MoreHot{
    min-width: 982px;
    background: #f5f5f5;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
  .main{
    width: 980px;
    min-height: 700px;
    _height: 700px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
  }
  .m_back{
    display: none;
    position: fixed;
    text-indent: -9999px;
    left: 50%;
    margin-left: 500px;
    bottom: 160px;
    width: 49px;
    height: 44px;
    background: url(../static/imgs/sprite.png) no-repeat 0 9999px;
    background-position: -265px -47px;
  }
  .warp{
    padding: 40px;
  }
  .title{
    height: 40px;
    border-bottom: 2px solid #c20c0c;
    h3{
      float: left;
      font-size: 24px;
      font-weight: normal;
      line-height: 36px;
    }
  }
  .btn{
    float: right;
    background: url(../static/imgs/button.png) no-repeat 0 9999px;
    height: 29px;
    background-position: 0 0;
    border-radius: 3px;
  }
  .ff2{
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
  }
  .menu{
    font-size: 12px;
    font-weight: normal;
    margin: 2px 0 0 12px;
    background: url(../static/imgs/button2.png) no-repeat 0 9999px;
    background-position: right -100px;
    padding: 0 5px 0 0;
    white-space: nowrap;
    display: inline-block;
    height: 31px;
    line-height: 31px;
    overflow: hidden;
    vertical-align: top;
    text-align: center;
    cursor: pointer;
    i{
      color: #0c73c2 !important;
      padding: 0 10px 0 15px;
      background: url(../static/imgs/button2.png) no-repeat 0 9999px;
      background-position: 0 -59px;
      display: inline-block;
      height: 31px;
      line-height: 31px;
      overflow: hidden;
      vertical-align: top;
      text-align: center;
      cursor: pointer;
    }
  }
  .icn38{
    margin-left: 5px;
    width: 8px;
    height: 5px;
    background: url(../static/imgs/icon.png) no-repeat 0 9999px;
    background-position: -70px -543px;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
  }
  .al{
    color: #fff;
    float: left;
    width: 46px;
    height: 29px;
    line-height: 29px;
    text-align: center;
  }
  .songslist{
    width: 950px;
    padding-top: 30px;
    margin-left: -50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:space-between;
  }
  .hot{
    margin-left: 50px;
    margin-bottom: 30px;
  }
  .page{
    margin: 20px 0;
    text-align: center;
  }
  .zpgi{
    height: 22px;
    padding: 0 8px;
    background: url(../static/imgs/button.png) no-repeat 0 9999px;  
    background-color: #fff;
    line-height: 22px;
    margin: 0 1px 0 2px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 2px;
    vertical-align: middle;
  }
  .zpgi:hover{
    border: 1px solid black;
    text-decoration: none;
  }
  .zdot{
    text-align: center;
  }
  .zpgi.selected{
    background: url(../static/imgs/button.png) no-repeat 0 9999px;
    background-position: 0 -650px;
    border-color: #A2161B;
    color: #fff;
    cursor: default;
  }
</style>
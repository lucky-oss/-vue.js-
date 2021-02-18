<template>
  <div class="MoreNewDiscs" @mousewheel="showTop">
    <!-- 顶部导航栏 -->
    <TopNav :typess="typess"/>
    <!-- 头部导航栏 -->
    <HeadNav />
    <!-- 中间内容部分 -->
    <div class="g_bg">
      <div class="warp">
        <div class="title">
          <h3>
            <span class="ff2">热门新碟</span>
          </h3>
        </div>
        <div  class="cvrlst">
          <BigAlbum v-for="(item,index) in newAlbumData" :key="index" class="album" :newalbumdata="newAlbumData[index]"/>
        </div>
        <div class="title" style="marginTop:10px">
          <h3>
            <span class="ff2">全部新碟</span>
          </h3>
          <div class="tab">
            <a href="javascript:void(0)" class="s_fc3">全部</a>
            <span class="line">|</span>
            <a href="javascript:void(0)" class="s_fc3">华语</a>
            <span class="line">|</span>
            <a href="javascript:void(0)" class="s_fc3">欧美</a>
            <span class="line">|</span>
            <a href="javascript:void(0)" class="s_fc3">韩国</a>
            <span class="line">|</span>
            <a href="javascript:void(0)" class="s_fc3">日本</a>
          </div>
        </div>
        <div class="cvrlst">
          <BigAlbum v-for="(item,index) in someAlbumData" :key="index" class="album" :newalbumdata="someAlbumData[index]"/>
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
// 导入获取新碟上架接口数据的js文件
import {getAlbum,getAllAlbum} from '@/api/album'
// 导入头部导航栏
import HeadNav from '@/components/HeadNav'
export default {
  name: 'MoreNewDiscs',
  components: {
    HeadNav
  },
  data() {
    return {
      // 用来生成遍历
      nums: ['1','2','3','4','5','6','7','8','9'],
      // 用来判断导航栏的样式
      typess: 'true',
      // 用来存放从接口获取的新碟上架数据
      newAlbumData: [],
      // 用来存放每一页数量的新碟
      someAlbumData: [],
      // 用来存放请求的所有新碟
      allAlbumData:[],
    }
  },
  created(){
    // 获取新碟上架接口的数据
    getAlbum().then(response => {
      this.newAlbumData = response.data.albums.slice(0,10)
    }).catch(error => {
      console.log(error)
    })
    // 传递参数
    let params = {
        limit:315
    }
    // 获取315张新碟
    getAllAlbum(params).then(response => {
      // 将获取的碟片赋给allAlbumData
      this.allAlbumData = response.data.albums
      //先显示前35张
      this.someAlbumData = this.allAlbumData.slice(0,35)
    }).catch(error => {
      console.log(error)
    })
  },
  // 挂载之后给分页器设置默认值
  mounted() {
    // 获取所有的页数
    let nums = this.$refs.zpgi
    // 将第一页设置为选中页
    nums[0].className = "zpgi selected"
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
      // 显示当前页的新碟数据
      this.someAlbumData = this.allAlbumData.slice(index*35,offset*35)
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
  .MoreNewDiscs{
    min-width: 982px;
    background: #f5f5f5;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
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
  .g_bg{
    width: 980px;
    min-height: 700px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
  }
  .warp{
    padding: 40px;
    position: relative;
  }
  .title{
    height: 40px;
    border-bottom: 2px solid #c20c0c;
    h3{
      float: left;
      font-size: 24px;
      line-height: 40px;
      font-weight: normal;
    }
  }
  .ff2{
    font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
    font-weight: normal;
  }
  .cvrlst{
    width: 900px;
    padding-top: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:space-between;
  }
  .tab{
    float: left;
    margin: 10px 0 0 17px;
    line-height: 30px;
    a{
      color: #666;
      margin: 0 3px;
    }
  }
  .line{
    margin: 0 10px;
    color: #ccc;
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
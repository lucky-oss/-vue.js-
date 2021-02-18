<template>
  <!-- 搜索结果界面 -->
  <div class="Search" @mousewheel="showTop">
    <!-- 导航栏 -->
    <SearchTopNav @getKeyWord="getKeyWord" @getSongs="getSongs"/>
    <div class="red_bar"></div>
    <div class="search_bg">
      <div class="warp">
        <div class="pgsrch">
          <input class="search_input" type="text" v-model.lazy="keyword" style="opacity: 1;" @keyup.enter="submit">
          <span class="j-flag">&nbsp;</span>
          <a class="btn" title="搜索" href="javascript:void(0)" @click="submit">搜索</a>
        <div class="lstlay" style="display:none;"></div>
        </div>
        <div v-if="songs" class="m_search">
          <div class="snote">
            搜索“{{keyword}}”，找到
            <em class="fc6">{{songs.length}}</em>
            首单曲
          </div>
        </div>
        <div v-else class="m_search">
          <div class="snote">
            搜索“##”，找到
            <em class="fc6">0</em>
            首单曲
          </div>
        </div>
        <ul class="tabs">
          <li class="fst">
            <a class="z_slt" href="javascript:void(0)">
              <em>单曲</em>
            </a>
          </li>
          <li class="other">
            <a href="javascript:void(0)">
              <em>歌手</em>
            </a>
          </li>
          <li class="other">
            <a href="javascript:void(0)">
              <em>专辑</em>
            </a>
          </li>
          <li class="other">
            <a href="javascript:void(0)">
              <em>视频</em>
            </a>
          </li>
          <li class="other">
            <a href="javascript:void(0)">
              <em>歌词</em>
            </a>
          </li>
          <li class="other">
            <a href="javascript:void(0)">
              <em>歌单</em>
            </a>
          </li>
          <li class="other">
            <a href="javascript:void(0)">
              <em>主播电台</em>
            </a>
          </li>
          <li class="other">
            <a href="javascript:void(0)">
              <em>用户</em>
            </a>
          </li>
        </ul>
        <div>
          <div style="display:block;marginTop:20px;">
            <div v-if="songs" class="showSongs">
              <div ref="item" v-for="(item,index) in songs" :key="index" class="item" @mouseover="showOpt(index)" @mouseout="hiddenOpt(index)">
                <div>
                  <div class="hd">
                    <a class="ply" href="javascript:void(0)" title="播放"></a>
                  </div>
                </div>
                <div ref="w0" class="w0">
                  <div>
                    <div class="text">
                      <a href="javascript:void(0)">
                        <b :title="item.name">{{item.name}}</b>
                      </a>
                      <!-- 判断是否有MV -->
                      <a v-if="item.mvid !==0" class="mv" href="javascript:void(0)" title="MV"></a>
                    </div>
                  </div>
                </div>
                <div>
                  <div ref="opt" style="display: none">
                    <a class="icn_add" href="javascript:void(0)" title="添加到播放列表"></a>
                    <span class="icn_fav" title="收藏"></span>
                    <span class="icn_share" title="分享"></span>
                    <span class="icn_dl" title="下载"></span>
                  </div>
                </div>
                <div class="w1">
                  <div class="w_text">
                    <a href="javascript:void(0)">{{item.artists[0].name}}</a>
                  </div>
                </div>
                <div class="w2">
                  <div class="w_text">
                    <a href="javascript:void(0)" :title="`《${item.album.name}》`">《{{item.album.name}}》</a>
                  </div>
                </div>
                <div>
                  {{conversionTime(item.duration)}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 脚注 -->
    <Footer />
    <a ref="backTop" class="m_back" href="#"></a>
  </div>
</template>

<script>
// 导入搜索的导航栏
import SearchTopNav from '@/components/SerachTopNav.vue'
// 导入获取搜索结果接口数据的js文件
import {getSearchList} from '@/api/search.js'
export default {
  name: 'Search',
  components: {
    SearchTopNav
  },
  data() {
    return {
      // 歌曲数组
      songs: [],
      // 搜索框中的值
      keyword: ''
    }
  },
  // 挂载的时候拿到路由中的参数
  created(){
    // 将获取到的参数赋值给songs
    this.songs = this.$route.params.data.songs
    this.keyword = this.$route.params.keyword
  },
  methods: {
    // 获取子组件传过来的关键字
    getKeyWord(val){
      this.keyword = val
    },
    // 获取子组件传过来的搜索结果
    getSongs(val) {
      this.songs = val.songs
    },
    // 提交搜索事件
    submit() {
      let params = {
        keywords: this.keyword,
        type: 1
      }
      getSearchList(params).then(response => {
        this.songs = response.data.result.songs
      }).catch(error => {
        console.log(error)
      })
    },
    // 鼠标移入选项显示opt
    showOpt(index){
      // 获取w0节点
      let w0 = this.$refs.w0
      w0[index].style.width = '370px'
      // 获取鼠标移入行的opt的dom
      let opt = this.$refs.opt
      opt[index].style.display = 'block'
    },
    // 鼠标移出隐藏opt
    hiddenOpt(index){
      // 获取w0节点
      let w0 = this.$refs.w0
      w0[index].style.width = '476px'
      // 获取鼠标移出行的opt的dom
      let opt = this.$refs.opt
      opt[index].style.display = 'none'
    },
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
    conversionTime: function(time) {
      // 将获取的毫秒值转换为秒
      let seconds = time/1000
      //获取分
      let minute = Math.floor(seconds/60)
      // 获取剩余秒
      let lastSeconds = seconds%60
      let duration = '0'+minute+':'+lastSeconds.toFixed(0)
      if(lastSeconds < 10) {
        duration = '0'+minute+':'+'0'+lastSeconds.toFixed(0)
      }
      return duration
    } 
  }
}
</script>
<style lang="less" scoped>
  .Search{
    min-width: 982px;
    background: #f5f5f5;
  }
  .red_bar{
    height: 5px;
    box-sizing: border-box;
    background-color: #C20C0C;
  }
  .search_bg{
    position: relative;
    width: 980px;
    min-height: 700px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
    padding-bottom: 40px;
  }
  .pgsrch{
    width: 420px;
    height: 40px;
    margin: 0 auto;
    background: url(../static/imgs/sprite.png) no-repeat 0 9999px;
    background-position: 0 0;
    z-index: 10;
  }
  .search_input{
    float: left;
    width: 320px;
    height: 17px;
    margin: 12px 0 0 20px;
    padding: 0;
    background: #fff;
    border: none;
    outline: none;
  }
  .btn{
    float: right;
    width: 50px;
    height: 40px;
    text-indent: -9999px;
    background: url(../static/imgs/sprite.png) no-repeat 0 9999px;
  }
  .btn:hover{
    background-position: -430px 0;
  }
  .lstlay{
    position: absolute;
    top: 43px;
    width: 418px;
    z-index: 120;
    left: 0;
    box-sizing: border-box;
    border: 1px solid #bebebe;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 4px 7px #555;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);
  }
  .snote{
    margin: 28px 0 17px;
    color: #999;
  }
  .fc6{
    color: #c20c0c;
  }
  .tabs{
    margin-bottom: auto;
    height: 39px;
    border: 1px solid #ccc;
    border-width: 0 1px;
    background: url(../static/imgs/tab.png) no-repeat 0 9999px;
    background-position: 0 0;
    background-repeat: repeat-x;
    a:hover{
      background: url(../static/imgs/tab.png) no-repeat 0 9999px;
      background-position: left -90px;
    }
  }
  .other{
    position: relative;
    left: -1px;
    float: left;
    height: 39px;
    font-size: 14px;
    a{
      padding-left: 2px;
      float: left;
      height: 39px;
      font-size: 14px;
      background: url(../static/imgs/tab.png) no-repeat 0 9999px;
      em{
        float: left;
        width: 108px;
        height: 37px;
        padding: 2px 2px 0 0;
        line-height: 37px;
        cursor: pointer;
        text-align: center;
        background: url(../static/imgs/tab.png) no-repeat 0 9999px;
      }
    }
  }
  .z_slt{
    position: relative;
    left: -1px;
    em{
      background: url(../static/imgs/tab.png) no-repeat 0 9999px;
      background-position: left -90px;
      width: 108px;
      padding: 2px 2px 0 0;
      line-height: 37px;
      cursor: pointer;
      text-align: center;
      float: left;
      height: 37px;
      font-size: 14px;
    }
  }
  .warp{
    padding: 40px;
  }
  .item{
    padding: 10px 10px 8px 18px;
    border: 1px solid #fff;
    height: 23px;
    div{
      float: left;
      margin-right: 5px;
    }
  }
  .hd{
    height: 17px;
    width: 17px;
  }
  .ply{
    display: inline-block;
    width: 17px;
    height: 17px;
    margin-right: 15px;
    cursor: pointer;
    background: url(../static/imgs/table.png) no-repeat 0 9999px;
    background-position: 0 -103px;
  }
  .ply:hover{
    background-position: 0 -128px;
  }
  .w0{
    width: 476px;
  }
  .w1{
    width: 15%;
    margin-right: 12px;
  }
  .w2{
    width: 18%;
    margin-right: 12px;
    min-height: 16px;
  }
  .text{
    position: relative;
    display: inline-block;
    padding-right: 25px;
    width: auto;
    max-width: 100%;
    height: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    b{
      line-height: 18px;
    }
  }
  .mv{
    position: absolute;
    right: 0;
    display: inline-block;
    vertical-align: middle;
    width: 23px;
    height: 17px;
    background: url(../static/imgs/table.png) no-repeat 0 9999px;
    background-position: 0 -151px;
  }
  .icn_add{
    margin-right: 8px;
    margin-bottom: 3px;
    width: 13px;
    height: 13px;
    background: url(../static/imgs/icon.png) no-repeat 0 9999px;
    background-position: 0 -700px;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
  }
  .icn_add:hover{
    background-position: -22px -700px;
  }
  .icn_fav{
    margin-left: 0;
    background: url(../static/imgs/table.png) no-repeat 0 9999px;
    background-position: 0 -174px;
    display: inline-block;
    vertical-align: middle;
    width: 18px;
    height: 16px;
    cursor: pointer;
    margin: 0 7px 0 0;
  }
  .icn_fav:hover{
    background-position: -20px -174px;
  }
  .icn_share{
    display: inline-block;
    vertical-align: middle;
    width: 18px;
    height: 16px;
    cursor: pointer;
    margin: 0 7px 0 0;
    background: url(../static/imgs/table.png) no-repeat 0 9999px;
    background-position: 0 -195px;
  }
  .icn_share:hover{
    background-position: -20px -195px;
  }
  .icn_dl{
    display: inline-block;
    vertical-align: middle;
    width: 18px;
    height: 16px;
    cursor: pointer;
    margin: 0 7px 0 0;
    background: url(../static/imgs/table.png) no-repeat 0 9999px;
    background-position: -81px -174px;
  }
  .icn_dl:hover{
    background-position: -104px -174px;
  }
  .w_text{
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 18px;
  }
  .item.even{
    background: #f7f7f7;
    border-color: #f7f7f7;
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
</style>
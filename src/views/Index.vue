<template>
  <div class="Index" @mousewheel="showTop">
    <!-- 顶部导航栏 -->
    <TopNav :typess="typess"/>
    <!-- 头部导航栏 -->
    <HeadNav/>
    <!-- 轮播图 -->
    <Rotation :banners="banners"/>
    <!-- 主体内容 -->
    <main class="main">
      <div class="main_div">
        <div class="main_left">
          <!-- 热门推荐 -->
          <Hot :hotData="hotData"/>
          <!-- 新碟上架 -->
          <NewDiscs :newalbumdata="newAlbumData"/>
          <!-- 榜单 -->
          <MusicList :soaringData="soaringData" :newSongData="newSongData" :originalData="originalData"/>
        </div>
        <div class="main_right">
          <div class="main_left_top">
            <a class="head" href="javascript:void(0)">
              <img src="../static/imgs/bigHead.jpg">
            </a>
            <div class="info">
              <h4>
                <a class="name" href="javascript:void(0)">
                  namely`like
                </a>
              </h4>
              <p>
                <a class="u_lv" href="javascript:viod(0)">
                  7
                  <i class="lv_right"></i>
                </a>
              </p>
              <div class="btn_warp">
                <a class="btn_a" href="javascript:void(0)">
                  <i>签  到</i>
                </a>
              </div>
            </div>
            <ul class="dny">
              <li class="fst">
                <a href="javascript:void(0)">
                  <strong>0</strong>
                  <span>动态</span>
                </a>
              </li>
              <li class="lst">
                <a href="javascript:void(0)">
                  <strong>0</strong>
                  <span>关注</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <strong>0</strong>
                  <span>粉丝</span>
                </a>
              </li>
            </ul>
          </div>
          <!-- 入驻歌手 -->
          <div class="main_left_middle">
            <h3 class="middle_h3">
              <span style="fontWeight:bold">入驻歌手</span>
              <a href="javascript:void(0)">查看全部  ></a>
            </h3>
            <div class="singerInfo">
              <div v-for="(item,index) in singerInfo" :key="index" class="singer">
                <img :src="item.headUrl" style="width:62px;height:62px">
                <div class="singer_info">
                  <h4><a href="javascript:void(0)">{{item.name}}</a></h4>
                  <p>{{item.content}}</p>
                </div>
              </div>
            </div>
            <a class="apply" href="javascript:void(0)">
              <i>申请成为网易音乐人</i>
            </a>
          </div>
          <!-- 热门主播 -->
          <div class="main_left_bottom">
            <h3 class="v_hd3" style="fontWeight:bold">热门主播</h3>
            <div class="anchor">
              <div v-for="(item,index) in anchroInfo" :key="index" class="anchor_info">
                <a href="javascript:void(0)">
                  <img :src="item.headUrl" class="anchor_img">
                </a>
                <div class="anchor_content">
                  <p>
                    <a href="javascript:void(0)">{{item.name}}</a>
                    <sup class="u_icn"></sup>
                  </p>
                  <p>{{item.content}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- 底部 -->
    <Footer :allAlbumDats="allAlbumData"/>
    <!-- 回到顶部 -->
    <a ref="backTop" class="m_back" href="#"></a>
  </div>
</template>

<script>
import Rotation from '@/components/Rotation'
// 导入头部导航栏
import HeadNav from '@/components/HeadNav'
// 导入热门推荐
import Hot from '@/components/Hot'
// 导入个性化推荐
import NewDiscs from '@/components/NewDiscs'
// 导入榜单
import MusicList from '@/components/MusicList'
// 导入获取轮播图数据的js文件
import {getBanners} from '@/api/banner'
// 导入获取热门推荐的数据的js文件
import {getPersonalized} from '@/api/personalized'
// 导入获取榜单接口数据的js文件
import {getSoaringList,getnewSongList,getOriginalList} from '@/api/billList'
// 导入获取新碟上架接口数据的js文件
import {getAlbum} from '@/api/album'
export default {
  name: 'Index',
  components: {
    Rotation,
    HeadNav,
    Hot,
    NewDiscs,
    MusicList
  },
  data() {
    return {
      // 用来判断导航栏的样式
      typess: 'true',
      // 用来存放获取的轮播图数据
      banners: [],
      // 用来存放从接口获取的热门推荐数据
      hotData: [],
      // 用来存放从接口获取的飙升榜数据
      soaringData: [],
      // 用来存放从接口获取的新歌榜数据
      newSongData: [],
      // 用来存放从接口获取的原创榜数据
      originalData: [],
      // 用来存放从接口获取的新碟上架数据
      newAlbumData: [],
      // 用来存放请求的所有新碟
      allAlbumData:[],
      // 用来存放歌手信息数据
      singerInfo: [
        {
          //头像地址
          headUrl: require('../static/imgs/singer01.jpg'),
          // 歌手姓名
          name: '张惠妹aMEI',
          // 歌手描述
          content: '台湾歌手张惠妹',
        },
        {
          headUrl: require('../static/imgs/singer02.jpg'),
          name: 'Fine乐团',
          content: '独立音乐人',
        },
        {
          headUrl: require('../static/imgs/singer03.jpg'),
          name: '萬曉利',
          content: '民谣歌手、中国现代民谣的代表人物之一',
        },{
          headUrl: require('../static/imgs/singer04.jpg'),
          name: '音乐人赵雷',
          content: '民谣歌手',
        },
        {
          headUrl: require('../static/imgs/singer05.jpg'),
          name: '王三溥',
          content: '音乐人',
        }
      ],
      // 用来存放主播数据
      anchroInfo: [
        {
          // 主播头像
          headUrl:require('../static/imgs/anchro01.jpg'),
          // 主播名字
          name: '陈立',
          // 主播描述
          content: '心理学家、美食家陈立教授'
        },
        {
          // 主播头像
          headUrl:require('../static/imgs/anchro02.jpg'),
          // 主播名字
          name: 'DJ艳秋',
          // 主播描述
          content: '著名音乐节目主持人'
        },{
          // 主播头像
          headUrl:require('../static/imgs/anchro03.jpg'),
          // 主播名字
          name: '国家大剧院古典音乐频道',
          // 主播描述
          content: '国家大剧院古典音乐官方'
        },
        {
          // 主播头像
          headUrl:require('../static/imgs/anchro04.jpg'),
          // 主播名字
          name: '谢谢收听',
          // 主播描述
          content: '南京电台主持人王馨'
        },
        {
          // 主播头像
          headUrl:require('../static/imgs/anchro05.jpg'),
          // 主播名字
          name: 'JD晓苏',
          // 主播描述
          content: '独立DJ，CRI环球旅游广播特邀DJ'
        }
      ]
    }
  },
  created() {
    // 获取轮播图的数据
    getBanners().then(response => {
      this.banners = response.data.banners
    }).catch(error => {
      console.log(error)
    })
    // 获取热门推荐的接口数据
    getPersonalized().then(response => {
      // 获取前八个数据显示在热门推荐中
      this.hotData = response.data.result.slice(0,8)
    }).catch(error => {
      console.log(error)
    })
    // 获取飙升榜接口的数据
    getSoaringList().then(responose => {
      // 获取前十个数据
      this.soaringData = responose.data.playlist.tracks.slice(0,10)
    }).catch(error => {
      console.log(error)
    })
    // 获取新歌榜接口的数据
    getnewSongList().then(responose => {
      // 获取前十个数据
      this.newSongData = responose.data.playlist.tracks.slice(0,10)
    }).catch(error => {
      console.log(error)
    })
    // 获取原创榜接口的数据
    getOriginalList().then(responose => {
      // 获取前十个数据
      this.originalData = responose.data.playlist.tracks.slice(0,10)
    }).catch(error => {
      console.log(error)
    })
    // 获取新碟上架接口的数据
    getAlbum().then(response => {
      this.newAlbumData = response.data.albums.slice(0,10)
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
    }
  }
}
</script>

<style lang="less" scoped>
  .Index{
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
  .main{
    flex: 1;
    background: #F5F5F5;
  }
  .main_div{
    width: 980px;
    height: 100%;
    background-color: #FFFFFF;
    margin: 0 auto;
    display: flex;
    border-left: 1px solid rgb(223, 220, 220);
    border-right: 1px solid rgb(223, 220, 220);
  }
  .main_right{
    width: 250px;
    height: 100%;
  }
  .main_left{
    flex: 1;  
    padding: 20px 0 40px;
    border-right: 1px solid rgb(223, 220, 220);
  }
  .main_left_top{
    height: 165px;
    padding-top: 20px;
    background: url(../static/imgs/index.png) no-repeat 0 9999px;
    background-position: 0 -270px;
  }
  .head{
    float: left;
    width: 80px;
    height: 80px;
    margin-left: 20px;
    _margin-left: 10px;
    padding: 2px;
    background: #fff;
    border: 1px solid #dadada;
  }
  .info{
    float: left;
    width: 115px;
    margin-left: 18px;
    padding-top: 3px;
  }
  .name{
    width: auto;
    max-width: 100%;
    vertical-align: middle;
    font-size: 14px;
    display: inline-block;
    text-decoration: none;
    color: #333;
    font-weight: bold;
    line-height: 25px;
  }
  .u_lv{
    display: inline-block;
    height: 17px;
    overflow: hidden;
    padding-left: 25px;
    line-height: 18px;
    color: #999;
    font-weight: bold;
    font-style: italic;
    background: url(../static/imgs/icon2.png) no-repeat 0 9999px;
    background-position: -130px -64px;
    text-decoration: none;
  }
  .lv_right{
    float: right;
    width: 8px;
    height: 17px;
    background: url(../static/imgs/icon2.png) no-repeat 0 9999px;
    background-position: -192px -64px;
  }
  .btn_warp{
    margin-top: 15px;
    position: relative;
  }
  .btn_a{
    padding: 0 5px 0 0;
    white-space: nowrap;
    color: #fff;
    display: inline-block;
    height: 31px;
    line-height: 31px;
    overflow: hidden;
    vertical-align: top;
    text-align: center;
    background: url(../static/imgs/button2.png) no-repeat 0 9999px;
    background-position: right -428px;
    text-decoration: none;
  }
  .btn_a i{
    width: 60px;
    padding: 0 15px 0 20px;
    pointer-events: none;
    display: inline-block;
    height: 31px;
    line-height: 31px;
    overflow: hidden;
    vertical-align: top;
    text-align: center;
    color: #fff;
    background: url(../static/imgs/button2.png) no-repeat 0 9999px;
    background-position: 0 -387px;
  }
  .dny{
    margin: 115px 0 0 0px;
    color: #666;
    a{
      text-decoration: none;
      display: block;
      color: #666;
    }
    strong{
      display: block;
      font-size: 20px;
      font-weight: normal;
      margin-bottom: 5px;
    }
    span{
      margin-left: 2px;
    }
  }
  .dny li{
    float: left;
    height: 40px;
    padding: 0 18px;
    
    list-style: none;
  }
  .fst{
    padding-left: 0;
    border-right: 1px solid #e4e4e4;
  }
  .lst{
    border-right: 1px solid #e4e4e4;
  }
  .main_left_middle{
    margin-top: 15px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .middle_h3{
    display: flex;
    justify-content: space-between;
    height: 23px;
    margin: 0 20px;
    line-height: 23px;
    border-bottom: 1px solid #ccc;
    color: #333;
    a{
      text-decoration: none;
      color: #333;
    }
  }
  .singerInfo{
    margin: 20px 20px;
    height: 360px;
  }
  .singer{
    display: flex;
    background: #fafafa;
    margin-bottom: 14px;
  }
  .singer:hover{
    background: #F5F5F5;
  }
  .singer_info{
    width: 133px;
    height: 60px;
    padding-left: 14px;
    border: 1px solid #e9e9e9;
    border-left: none;
    h4{
      margin-top: 8px;
      font-size: 14px;
      font-weight: bold;
    }
    p{
      margin-top: 16px;
      color: #666;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
    }
  }
  .apply{
    display: inline-block;
    margin-left: 20px;
    border-radius: 4px;
    width: 210px;
    height: 31px;
    text-decoration: none;
    color: #333;
    font-weight: bold;
    display: flex;  
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(#f7f7f7, #eeeeeedc);
    border: 1px solid rgb(202, 202, 202);
  }
  .apply:hover{
    background-image: linear-gradient(#faf8f8, #fcfcfcdc);
  }
  .main_left_bottom{
    margin-top: 30px;
  }
  .v_hd3{
    height: 23px;
    margin: 0 20px;
    line-height: 23px;
    border-bottom: 1px solid #ccc;
    color: #333;
  }
  .anchor{
    margin: 20px 20px 0 20px;
    height: 280px;
  }
  .anchor_info{
    display: flex;
    width: 210px;
    height: 50px;
  }
  .anchor_img{
    width: 40px;
    height: 40px;
    margin-right: 8px;
    box-shadow: 0 0 1px #333333 inset;
  }
  .u_icn{
    margin-top: -1px;
    width: 11px;
    height: 13px;
    background: url(../static/imgs/icon.png) no-repeat 0 9999px;
    background-position: 0 1px;
    font-size: 100%;
    font-style: normal;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
  }
  .anchor_content{
    a{
      margin-top: 3px;
    }
    p{
      width: 160px;
      color: #666;
      line-height: 21px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
    }
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
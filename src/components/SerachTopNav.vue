<template>
  <div class="SearchTopNav">
    <div class="wrap">
      <h1 class="logo">
        <a href="#" hidefocus="true">
          <em>网易云音乐</em>
        </a>
      </h1>
      <ul class="nav_ul">
        <li>
          <span>
            <router-link to="/" class="showRed">
                <em>发现音乐</em>
                <!-- <sub class="corOne">&nbsp;</sub> -->
            </router-link>
          </span>
        </li>
        <li>
          <span>
            <a href="javascript:void(0)">
              <em>我的音乐</em>
              <sub class="cor">&nbsp;</sub>
            </a>
          </span>
        </li>
        <li>
          <span>
            <a href="javascript:void(0)">
              <em>朋友</em>
              <sub class="cor">&nbsp;</sub>
            </a>
          </span>
        </li>
        <li>
          <span>
            <a href="javascript:void(0)">
              <em>商城</em>
              <sub class="cor">&nbsp;</sub>
            </a>
          </span>
        </li>
        <li>
          <span>
            <a href="javascript:void(0)">
              <em>音乐人</em>
              <sub class="cor">&nbsp;</sub>
            </a>
          </span>
        </li>
        <li>
          <span>
            <a href="javascript:void(0)">
              <em>下载客户端</em>
              <sub class="cor">&nbsp;</sub>
            </a>
          </span>
          <sup class="hot">&nbsp;</sup>
        </li>
      </ul>
      <div style="marginRight:15px">
        <div class="block">
          <el-avatar :size="32" :src="headUrl"></el-avatar>
        <i class="topMsg">32</i>
          </div>
        <div class="creator">
          <a href="javascript:void(0)">创作者中心</a>
        </div>
        <!-- 搜索框 -->
        <div class="search">
          <input type="text" v-model="value" class="txt" placeholder="视频/音乐/电台/用户" @keyup.enter="submit">
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
// 导入获取搜索结果接口数据的js文件
import {getSearchList} from '@/api/search.js'
export default {
  name: 'TopNav',
  data() {
    return {
      statusType: '',
      // 存放头像地址
      headUrl: 'http://p4.music.126.net/RLeBJe4D1ZzUtltxfoKDMg==/109951163250239066.jpg?param=30y30',
      // 获取搜索框数据
      value: '',
    }
  },
  methods: {
    // 提交搜索事件
    submit() {
      let params = {
        keywords: this.value,
        type: 1
      }
      getSearchList(params).then(response => {
        // 拿到数据之后传给父组件
        this.$emit('getSongs',response.data.result)
      }).catch(error => {
        console.log(error)
      })

      // 将value传给父组件Search
      this.$emit('getKeyWord',this.value)
    }
  }
}
</script>
<style lang="less" scoped>
  .SearchTopNav{
    height: 70px;
    widows: 100%;
    position: relative;
    z-index: 1000;
    box-sizing: border-box;
    background: #242424;
    border-bottom: 1px solid #000;
  }
  .wrap{
    width: 1100px;
    margin: 0 auto;
  }
  .logo{
    float: left;
    width: 176px;
    height: 69px;
    background: url(../static/imgs/topbar.png) no-repeat 0 9999px;
    background-position: 0 0;
  }
  .logo a{
    float: left;
    width: 157px;
    height: 100%;
    padding-right: 20px;
    text-indent: -9999px;
  }
  .nav_ul{
    float: left;
    display: block;
    list-style-type: disc;
    margin-bottom: 10px;
    li{
      position: relative;
      background-position: right -300px;
      float: left;
      height: 70px;
      font-size: 14px;
      list-style: none;
      display: list-item;
      text-align: -webkit-match-parent;
      span{
        background: none;
      }
      a{
        text-decoration: none;
        padding: 0 19px;
        text-align: center;
        line-height: 70px;
        color: #ccc;
      }
    }
    li:hover{
      background-color: #000;
    }
  }
  .li_active{
    background-color: #000;
  }
  .hot{
    display: block;
    position: absolute;
    top: 21px;
    left: 100px;
    width: 28px;
    height: 19px;
    background: url(../static/imgs/topbar.png) no-repeat 0 9999px;
    background-position: -190px 0;
  }
  .search{
    position: relative;
    float: right;
    margin-right: 85px;
    width: 158px;
    height: 32px;
    margin-top: 19px;
    background: url(../static/imgs/topbar.png) no-repeat 0 9999px;
    background-position: 0 -99px;
    background-color: #fff;
    border-radius: 32px;
  }
  .txt{
    position: absolute;
    top: 10px;
    right: 10px;
    width: 75%;
    border: none;
    outline: none;
    color: #9b9b9b;
    font-size: 12px;
    line-height: 6px;
  }
  .creator{
    float: right;
    width: 90px;
    height: 32px;
    margin-top: 20px;
    margin-left: -72px;
    box-sizing: border-box;
    border: 1px solid #4F4F4F;
    line-height: 30px;
    border-radius: 20px;
    text-align: center;
    a{
      text-decoration: none;
      color: #ccc;
      font-size: 12px;
    }
  }
  .creator:hover{
    border: 1px solid #F2F2F2;
    a{
      color: #F7F7F7;
    }
  }
  .block{
    position: relative;
    float: right;
    margin-top: 21px;
    margin-left: 20px;
  }
  .topMsg{
    position: absolute;
    top: -5px;
    left: 20px;
    display: inline-block;
    min-width: 17px;
    height: 17px;
    padding: 0 4px;
    box-sizing: border-box;
    background: #C20C0C;
    border-radius: 18px;
    border: 1px solid #242424;
    line-height: 16px;
    font-size: 12px;
    white-space: nowrap;
    color: #fff;
    text-align: center;
  }
  .showRed{
    position: relative;
  }
  .corOne{
    display: block;
    position: absolute;
    left: 50%;
    bottom: -28px;
    width: 12px;
    height: 7px;
    margin-left: -6px;
    overflow: hidden;
    background: url(../static/imgs/topbar.png) no-repeat 0 9999px;
    background-position: -226px 0;
  }
  @media screen and (min--moz-device-pixel-ratio:0) {
  .txt{
    top:7px
  }
  }
</style>
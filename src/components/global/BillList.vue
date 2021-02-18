<template>
  <div class="BillList">
    <div v-if="type===1" class="top">
      <div class="cver">
        <a href="javascript:void(0)"><img :src="datas.url[0]"></a>
        <a href="javascript:void(0)" :title="datas.name[0]"></a>
      </div>
      <div class="tit">
        <a href="javascript:void(0)" :title="datas.name[0]">
          <h3>{{datas.name[0]}}</h3>
        </a>
        <div class="btn">
          <a class="s_bg9" href="javascript:void(0)" title="播放">播放</a>
          <a class="s_bg10" href="javascript:void(0)" title="收藏">收藏</a>
        </div>
      </div>
    </div>
    <div v-if="type===2" class="top">
      <div class="cver">
        <a href="javascript:void(0)"><img :src="datas.url[1]"></a>
        <a href="javascript:void(0)" :title="datas.name[1]"></a>
      </div>
      <div class="tit">
        <a href="javascript:void(0)" :title="datas.name[1]">
          <h3>{{datas.name[1]}}</h3>
        </a>
        <div class="btn">
          <a class="s_bg9" href="javascript:void(0)" title="播放">播放</a>
          <a class="s_bg10" href="javascript:void(0)" title="收藏">收藏</a>
        </div>
      </div>
    </div>
    <div v-if="type===3" class="top">
      <div class="cver">
        <a href="javascript:void(0)"><img :src="datas.url[2]"></a>
        <a href="javascript:void(0)" :title="datas.name[2]"></a>
      </div>
      <div class="tit">
        <a href="javascript:void(0)" :title="datas.name[2]">
          <h3>{{datas.name[2]}}</h3>
        </a>
        <div class="btn">
          <a class="s_bg9" href="javascript:void(0)" title="播放">播放</a>
          <a class="s_bg10" href="javascript:void(0)" title="收藏">收藏</a>
        </div>
      </div>
    </div>
    <dd>
      <ol class="list_ol">
        <li v-for="(item,index) in datas.songlist" :key="index" @mouseover="addStyle(index)" @mouseout="clearStyle(index)">
          <span class="no_top">{{index+1}}</span>
          <a ref="nm" class="nm" href="javascript:void(0)" :title="item.name">{{item.name}}</a>
          <div ref="oper" class="oper">
            <a class="s_bg11" href="javascript:void(0)" title="播放"></a>
            <a class="u_icn81" href="javascript:void(0)" title="添加到播放列表"></a>
            <a class="s_bg12" href="javascript:void(0)" title="收藏"></a>
          </div>
        </li>
      </ol>
      <div class="more">
        <a href="javascript:void(0)">查看全部 ></a>
      </div>
    </dd>
  </div>
</template>

<script>
export default {
  name: 'BillList',
  props: {
    // 飙升榜数据
    soaringData: {
      type: Array,
      default() {
        return []
      }
    },
    // 新歌榜数据
    newSongData: {
      type: Array,
      default() {
        return []
      }
    },
    // 原创榜数据
    originalData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
       // 用来判断是哪个榜单, 1是飙升榜，2是新歌榜，3是原创榜
      type:-1,
      //组件全部数据
      datas:{
        name: ['云音乐飙升榜','云音乐新歌榜','网易原创歌曲榜'],
        url: [
          'http://p4.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100',
          'http://p4.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=100y100',
          'http://p4.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg?param=100y100'
        ],
        songlist: []
      }
    }
  },
  watch: {
    // 将监听到的飙升榜数据传给datas
    soaringData(val){
      this.datas.songlist = val
      this.type = 1
    },
    // 将监听到的新歌榜数据传给datas
    newSongData(val){
      this.datas.songlist = val
      this.type = 2
    },
    // 将监听到的原创榜数据传给datas
    originalData(val){
      this.datas.songlist = val
      this.type = 3
    }
  },
  methods: {
    // 鼠标放到指定歌曲上显示隐藏的元素
    addStyle(index) {
      // 获取类名为oper的节点
      let oper = this.$refs.oper
      //改变下标为index的oper的样式
      oper[index].style.display = 'block'
      // 设置nm的长度为80px
      let nm = this.$refs.nm
      nm[index].style.width = "90px"
    },
    // 鼠标放到指定歌曲上隐藏指定的元素
    clearStyle(index) {
      // 获取类名为oper的节点
      let oper = this.$refs.oper
      //改变下标为index的oper的样式
      oper[index].style.display = 'none'
      // 设置nm的长度为170px
      let nm = this.$refs.nm
      nm[index].style.width = "170px"
    }
  }
}
</script>

<style lang="less" scoped>
  .BillList{
    width: 230px;
  }
  .top{
    height: 100px;
    padding: 20px 0 0 19px;
  }
  .cver{
    float: left;
    display: inline;
    width: 80px;
    height: 80px;
    position: relative;
    img{
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .tit{
    float: left;
    width: 116px;
    margin: 12px 0 0 10px;
    h3{
      width: 100%;
      font-size: 14px;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
    }
  }
  .btn{
    margin-top: 10px;
    a{
      display: block;
      float: left;
      width: 22px;
      height: 22px;
      margin-right: 10px;
      text-indent: -9999px;
    }
  }
  .s_bg9{
    background: url(../../static/imgs/index.png) no-repeat 0 9999px;
    background-position: -267px -205px;
  }
  .s_bg9:hover{
    background-position: -267px -235px;
  }
  .s_bg10{
    background: url(../../static/imgs/index.png) no-repeat 0 9999px;
    background-position: -300px -205px;
  }
  .s_bg10:hover{
    background-position: -300px -235px;
  }
  .list_ol{
    height: 319px;
    margin-left: 50px;
    line-height: 32px;
    li{
      height: 32px;
    }
  }
  .no_top{
    color: #c10d0c;
    float: left;
    position: relative;
    width: 35px;
    height: 32px;
    margin-left: -35px;
    text-align: center;
    font-size: 16px;
  }
  .no{
    float: left;
    position: relative;
    width: 35px;
    height: 32px;
    margin-left: -35px;
    text-align: center;
    color: #666;
    font-size: 16px;
  }
  .nm{
    float: left;
    width: 170px;
    height: 32px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
  }
  .oper{
    display: none;
    float: right;
    width: 82px;
    margin-top: 7px;
    a{
      float: left;
      width: 17px;
      height: 17px;
      margin-right: 10px;
    }
  }
  .s_bg11{
    background: url(../../static/imgs/index.png) no-repeat 0 9999px;
    background-position: -267px -268px;
  }
  .s_bg11:hover{
    background-position: -267px -288px;
  }
  .u_icn81{
    margin: 2px 6px 0 0;
    background: url(../../static/imgs/icon.png) no-repeat 0 9999px;
    background-position: 0 -700px;
  }
  .u_icn81:hover{
    background-position: -22px -700px;
  }
  .s_bg12{
    background: url(../../static/imgs/index.png) no-repeat 0 9999px;
    background-position: -297px -268px;
  }
  .s_bg12:hover{
    background-position: -297px -288px;
  }
  .more{
    clear: both;
    height: 32px;
    margin-right: 32px;
    text-align: right;
    line-height: 32px;
  }
</style>
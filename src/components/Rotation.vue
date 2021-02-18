<template>
  <!-- 轮播图组件 -->
  <div class="Rotation" @mouseover="stopTime" @mouseout="startTime">
    <div class="warp">
      <!-- 显示轮播图片 -->
      <div class="ban">
        <ul>
          <li class="imgItem" v-for="(item,index) in rotation" :key="index" :data-index="index"><img :src="item" style="height:285px"></li>
        </ul>
        <!-- 左右箭头 -->
        <a class="goPre" hidefocus="true" href="javascript:void(0)" @click="goPre"></a>
        <a class="goNext" hidefocus="true" href="javascript:void(0)" @click="goNext"></a>
        <!-- 小圆点 -->
        <div class="pointList">
          <a class="point" href="javascript:void(0)" v-for="(item,index) in rotation" :key="index" :data-index="index" hidefocus="true" @click="clickPoint(index)"></a>
        </div>
      </div>
      <!-- 下载客户端 -->
      <div class="download">
        <a class="btn" href="javascript:void(0)">下载客户端</a>
        <p>PC   安卓   iPhone   WP   iPad   Mac    六大客户端</p>
        <span class="shadow"></span>
        <span class="shadowr"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'Rotation',
  props: {
    // 获取父组件传过来的图片数据
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      // 保存当前显示的图片在数组中的下标
      index: 0,
      // 保存模糊的背景图
      vagueRotation:[''],
      // 保存显示的图片
      rotation: ['']
    }
  },
  watch: {
    // 监听父组件传过来的banners数据
    banners(val) {
      // 定义两个数组变量用来存放获取的数据
      let rotation = []
      let vagueRotation = []
      for(let i=0; i<val.length;i++) {
        rotation.push(val[i].imageUrl.concat('?imageView&quality=89'))
        vagueRotation.push(val[i].imageUrl.concat('?imageView&blur=40x20'))
      }
      this.rotation = rotation
      this.vagueRotation = vagueRotation
    }
  },
  // vue挂载函数
  mounted(){
    //挂载的时候将获取到的图片数组中的第一张图片显示
    this.init()
    // 启动定时器
    this.setTime()
  },
  // 组件销毁函数
  destroyed() {
    // 关闭计时器
    clearInterval(this.time)
  },
  methods: {
    init() {
      // 清除激活样式
      this.clearActive()
      // 获取所有的包含img元素的li节点
      let items = document.getElementsByClassName('imgItem')
      // 将下标为index的节点显示在最上层
      items[this.index].className = "imgItem active"
      // 显示第一张图片
      let rotation = document.querySelector('.Rotation')
      rotation.style.backgroundImage = `url(${this.vagueRotation[0]})`
      // 将第一个小圆点的样式改为红色
      let points = document.getElementsByClassName('point')
      points[0].className = 'point active'
    },
    // 向后翻
    goPre() {
      // 判断是否为第一张，是的话将index设置为数组的长度-1
      if (this.index > 0) {
          this.index--
      }else {
          this.index = this.rotation.length - 1
      }
      this.goIndex(this.index)
    },
    // 向前翻
    goNext() {
      // 判断是否为最后一张，是的话就将index设置为0
      if (this.index >= this.rotation.length - 1 ) {
          this.index = 0
      } else { 
          this.index++
      }
      this.goIndex(this.index)
    },
    // 显示下标为index的图片
    goIndex(index) {
      // 清除激活样式
      this.clearActive()
      let items = document.getElementsByClassName('imgItem')
      items[index].className = 'imgItem active'
      // 将模糊背景设置为对应的背景
      let rotation = document.querySelector('.Rotation')
      rotation.style.backgroundImage = `url(${this.vagueRotation[index]})`
      // 将点击的小圆点的样式改为红色
      let points = document.getElementsByClassName('point')
      points[index].className = 'point active'
    },
    // 点击小圆点
    clickPoint(index) {
      // 显示下标为index的图片
      this.goIndex(index)
      // 将点击的小圆点的样式改为红色
      let points = document.getElementsByClassName('point')
      points[index].className = 'point active'
    },
    // 清除激活样式
    clearActive() {
      // 获取所有的图片
      let items = document.getElementsByClassName('imgItem')
      // 获取所有的小圆点
      let points = document.getElementsByClassName('point')
      for(let i=0;i<items.length;i++) {
          items[i].className = 'imgItem'
          points[i].className = 'point'
      }
    },
    // 设置定时器
    setTime() {
      // 设置定时器，让图片自动轮播
       this.time = setInterval(() => {
        let index = this.index++
        //当index等于数组长度-1时设置index为0，重新开始轮播
        if (index === this.rotation.length - 1) {
          this.index = 0
        }
        this.goIndex(index)
      },2000)
    },
    //关闭定时器
    stopTime() {
      clearInterval(this.time)
    },
    // 开启定时器
    startTime() {
      this.setTime()
    }
  }
}
</script>

<style lang="less" scoped>
  .Rotation{
    height: 285px;
    width: 100%;
    background-size: 6000px;
    background-position: center center;
    transition: all 0.6s;
  }
  .warp{
    position: relative;
    width: 982px;
    height: 285px;
    margin: 0 auto;
  }
  .ban{
    width: 100%;
    height: 100%;
    z-index: 10;
    ul{
      .imgItem{
        position: absolute;
        z-index: 10;
        opacity: 0;
        transition: all 0.6s;
        img{
          width: 730px;
          height: 100%;
          z-index: 10;
        }
      }
      .active{
        position: absolute;
        z-index: 20;
        opacity: 1;
        img{
          width: 730px;
          height: 100%;
          z-index: 20;
        }
      }
    }
    .go{
      height: 63px;
      width: 37px;
      background-color: pink;
      position: absolute;
      cursor: pointer;
      color: #333;
    }
    .goPre{
      .go();
      left: -68px;
      top: 50%;
      margin-top: -31px;
      background: url('../static/imgs/banner.png') 0 9999px no-repeat;
      background-position: 0 -360px;
    }
    .goPre:hover{
      background-position: 0 -430px;
    }
    .goNext{
      .go();
      right: -68px;
      top: 50%;
      margin-top: -31px;
      background: url('../static/imgs/banner.png') 0 9999px no-repeat;
      background-position: 0 -508px;
    }
    .goNext:hover{
      background-position: 0 -578px;
    }
    .pointList{
      position: absolute;
      top: 259px;
      left: 0;
      width: 730px;
      height: 20px;
      text-align: center;
      z-index: 30;
    }
    .point{
      z-index: 30;
      display: inline-block;
      width: 20px;
      height: 20px;
      background: url('../static/imgs/banner.png') 0 9999px no-repeat;
      background-position: 3px -343px;
    }
    .point.active{
      background-position: -16px -343px;
    }
    .point:hover{
      background-position: -16px -343px;
    }
  }
  .download{
    position: absolute;
    top: 0;
    right: 0;
    width: 254px;
    height: 285px;
    z-index: 101;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    background: url('https://music.163.com/style/web2/img/index/download.png?9170b23449d60d9682711f710425deb9') no-repeat 0 0;
    .btn{
      display: block;
      width: 215px;
      height: 56px;
      margin: 186px 0 0 19px;
      background: url('https://music.163.com/style/web2/img/index/download.png?9170b23449d60d9682711f710425deb9') no-repeat 0 0;
      background-position: 0 9999px;
      text-indent: -9999px;
    }
    .btn:hover{
      background-position: 0 -290px;
      text-decoration: none;
    }
    p{
      height: 17px;
      margin: 10px auto;
      margin-top: 15px;
      text-align: center;
      color: #8d8d8d;
    }
    .shadow{
      display: block;
      position: absolute;
      top: 0;
      left: -20px;
      width: 20px;
      height: 285px;
      background: url(../static/imgs/banner.png) 0 9999px no-repeat;
      background-position: -1px 0;
    }
    .shadowr{
      position: absolute;
      left: auto;
      top: 0;
      right: -20px;
      background: url(../static/imgs/banner.png) 0 9999px no-repeat;
      background-position: -20px 0;
      display: block;
      width: 20px;
      height: 285px;
    }
  }
</style>
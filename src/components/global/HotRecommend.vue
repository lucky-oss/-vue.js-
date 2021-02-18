<template>
  <div class="HotRecommend">
    <div class="u_cover">
      <img :src="hotData.picUrl">
      <a :title="hotData.name" class="msk" href="javascript:void(0)"></a>
      <div class="bottom">
        <a class="icon_play" href="javascript:void(0)"></a>
        <span class="icon_headset"></span>
        <span class="nb">{{hotData.playCount}}万</span>
      </div>
    </div>
    <p class="dec">
      <a :title="hotData.name" href="javascript:void(0)">{{hotData.name}}</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HotRecommend',
  props: {
    hotData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  watch: {
    hotData(val){
      // 将播放数量改为以万为单位
      this.hotData.playCount = Math.floor(val.playCount/10000)
    }
  }
}
</script>

<style lang="less" scoped>
  .HotRecommend{
    width: 140px;
  }
  .u_cover{
    position: relative;
    width: 140px;
    height: 140px;
    img{
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .msk{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(../../static/imgs/coverall.png) no-repeat;
    background-position: 0 0;
  }
  .bottom{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 27px;
    background: url(../../static/imgs/coverall.png) no-repeat;
    background-position: 0 -537px;
    color: #ccc;
  }
  .icon_play{
    position: absolute;
    display: inline-block;
    right: 10px;
    bottom: 5px;
    width: 16px;
    height: 17px;
    background: url(../../static/imgs/iconall.png) no-repeat;
    background-position: 0 0;
  }
  .icon_headset{
    float: left;
    width: 14px;
    height: 11px;
    background: url(../../static/imgs/iconall.png) no-repeat;
    background-position: 0 -24px;
    margin: 9px 5px 9px 10px;
  }
  .nb{
    float: left;
    margin: 9px 0 0 0;
  }
  .dec{
    margin: 8px 0 3px;
    font-size: 14px;
    width: 100%;
    a{
      line-height: 20px;
    }
  }
</style>
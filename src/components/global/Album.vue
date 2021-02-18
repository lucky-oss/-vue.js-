<template>
  <div v-if="newalbumdata" class="Album">
    <div class="alb">
      <img class="alb_img" :src="newalbumdata.picUrl">
      <a :title="newalbumdata.name" href="javascript:void(0)" class="msk"></a>
    </div>
    <p class="f_thide">
      <a class="txt1" :title="newalbumdata.name" href="javascript:void(0)">{{newalbumdata.name}}</a>
    </p>
    <p class="f_thide">
      <a class="txt2" :title="newalbumdata.name" href="javascript:void(0)">{{newalbumdata.artist.name}}</a>
    </p>
  </div>
</template>
<script>
export default {
  name: 'Album',
  props: {
    newalbumdata: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .Album{
    float: left;
    display: inline;
    width: 118px;
    height: 150px;
    margin-left: 11px;
    background: url(../../static/imgs/index.png) no-repeat 0 9999px;;
    background-position: -260px 100px;
  }
  .alb{
    position: relative;
    width: 100px;
    height: 100px;
    margin-bottom: 7px;
  }
  .alb_img{
    display: block;
    width: 100%;
    height: 100%;
  }
  .msk{
    position: absolute;
    top: 0;
    left: 0;
    width: 118px;
    height: 100px;
    background: url(../../static/imgs/coverall.png) no-repeat;
    background-position: 0 -570px;
  }
  .f_thide{
    width: 90%;
    line-height: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .txt1{
    color: #000;
  }
  .txt2{
    color: #666;
  }
</style>
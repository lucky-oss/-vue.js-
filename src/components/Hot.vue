<template>
  <div class="Hot">
    <div class="hot_head">
      <a href="javascript:void(0)" class="title">热门推荐</a>
      <div class="tab">
        <a href="javascript:void(0)" class="s_fc3">华语</a>
        <span class="line">|</span>
        <a href="javascript:void(0)" class="s_fc3">流行</a>
        <span class="line">|</span>
        <a href="javascript:void(0)" class="s_fc3">摇滚</a>
        <span class="line">|</span>
        <a href="javascript:void(0)" class="s_fc3">民谣</a>
        <span class="line">|</span>
        <a href="javascript:void(0)" class="s_fc3">电子</a>
      </div>
      <span class="more">
        <router-link to="/morehot">更多</router-link>
        <i class="arrow">&nbsp;</i>
      </span>
    </div>
    <div class="hot_components">
      <HotRecommend :hotData="hotData[0]" class="hot"/>
      <HotRecommend :hotData="hotData[1]" class="hot"/>
      <HotRecommend :hotData="hotData[2]" class="hot"/>
      <HotRecommend :hotData="hotData[3]" class="hot"/>
      <HotRecommend :hotData="hotData[4]" class="hot"/>
      <HotRecommend :hotData="hotData[5]" class="hot"/>
      <HotRecommend :hotData="hotData[6]" class="hot"/>
      <HotRecommend :hotData="hotData[7]" class="hot"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hot',
  props: {
    hotData: {
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .hot_head{
    margin: 0 20px;
    height: 33px;
    padding: 0 10px 0 34px;
    background: url(../static/imgs/index.png) no-repeat 0 9999px;
    background-position: -225px -156px;
    border-bottom: 2px solid #C10D0C;
  }
  .title{
    float: left;
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
  }
  .tab{
    float: left;
    margin: 10px 0 0 17px;
    a{
      color: #666;
      margin: 0 3px;
    }
  }
  .line{
    margin: 0 10px;
    color: #ccc;
  }
  .more{
    float: right;
    margin-top: 9px;
    a{
      color: #666;
      vertical-align: middle;
    }
    i{
      vertical-align: middle;
    }
  }
  .arrow{
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-left: 4px;
    vertical-align: middle;
    background: url(../static/imgs/index.png) no-repeat 0 9999px;
    background-position: 0 -240px;
  }
  .hot_components{
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .hot{
    margin-right: 22px;
    margin-left: 20px;
    margin-bottom: 30px;
  }
</style>
<template>
  <!-- 榜单 -->
  <div class="MusicList">
    <!-- 榜单头部 -->
    <div class="musiclist_head">
      <a href="javascript:void(0)" class="title">榜单</a>
      <span class="more">
        <a href="javascript:void(0)">更多</a>
        <i class="arrow">&nbsp;</i>
      </span>
    </div>
    <div class="bill_list">
      <BillList :soaringData="soaringData"/>
      <BillList :newSongData="newSongData"/>
      <BillList :originalData="originalData"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MusicList',
  props:{
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
  }
}
</script>

<style lang="less" scoped>
  .musiclist_head{
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
  .bill_list{
    height: 472px;
    margin-top: 20px;
    padding-left: 1px;
    margin-left: 20px;
    background: url(../static/imgs/index_bill.png) no-repeat;
    display: flex;
    flex-direction: row;
  }
</style>
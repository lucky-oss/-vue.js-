<template>
  <!-- 新碟上架 -->
  <div class="NewDiscs">
    <!-- 新碟上架头部 -->
    <div class="newdiscs_head">
      <a href="javascript:void(0)" class="title">新碟上架</a>
      <span class="more">
        <router-link to="/morenewdiscs">更多</router-link>
        <i class="arrow">&nbsp;</i>
      </span>
    </div>
    <!-- 新碟上架内容部分 -->
    <div class="inner">
      <a href="javascript:void(0)" class="pre" @click="pre">&nbsp;</a>
      <div class="roll">
        <div ref="innerRoll" class="innerRoll">
          <Album v-for="(item,index) in newalbumdata" :key="index" class="album" :newalbumdata="newalbumdata[index]"/>
        </div>
      </div>
      <a href="javascript:void(0)" class="next" @click="next">&nbsp;</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewDiscs',
  props: {
    newalbumdata: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
      // 向前翻译
      pre() {
        // 获取innerRoll节点
        let innerRoll = this.$refs.innerRoll
        // 获取innerRoll的属性left的值
        let left = innerRoll.offsetLeft
        // 改变innerRoll的left属性
        if (left === -645){
          innerRoll.style.left = '0px'
        } else if(left === 0) {
          innerRoll.style.left = '-645px'
        }
      },
      // 向后翻译
      next() {
        // 获取innerRoll节点
        let innerRoll = this.$refs.innerRoll
        // 获取innerRoll的属性left的值
        let left = innerRoll.offsetLeft
        // 改变innerRoll的left属性
        if (left === -645){
          innerRoll.style.left = '0px'
        } else if(left === 0) {
          innerRoll.style.left = '-645px'
        }
      }
    }
}
</script>

<style lang="less" scoped>
  .newdiscs_head{
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
  .inner{
    position: relative;
    height: 184px;
    padding-left: 16px;
    background: #f5f5f5;
    border: 1px solid #fff;
    margin: 20px 20px 30px 20px
  }
  .pre{
    left: 4px;
    position: absolute;
    top: 71px;
    width: 17px;
    height: 17px;
    background: url(../static/imgs/index.png) no-repeat 0 9999px;
    background-position: -260px -75px;
  }
  .next{
    position: absolute;
    top: 71px;
    width: 17px;
    height: 17px;
    background: url(../static/imgs/index.png) no-repeat 0 9999px;
    background-position: -300px -75px;
  }
  .roll{
    float: left;
    width: 645px;
    height: 180px;
    overflow: hidden;
    position: relative;
    word-wrap:break-word;
  }
  .album{
    margin-top: 30px;
  }
  .innerRoll{
    position: absolute;
    left: -645px;
    width: 1290px;
    transition: all 0.6s;
  }
</style>
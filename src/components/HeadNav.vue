<template>
  <div class="HeadNav">
    <div class="warp">
      <ul class="nav">
        <li v-for="(item,index) in navData" :key="index">
          <a href="javascript:void(0)">
            <em class="em" @click="changbg(index)">
              {{item}}
              <span class="f_r_white_icon" v-if="index===2" style="display:inline-block;width:8px;height:8px;top:2px;background-size:cover;"></span>
            </em>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:'HeadNav',
  data() {
    return {
       // 头部导航栏数据
      navData: ['推荐','排行榜','歌单','主播电台','歌手','新碟上架']
    }
  },
  mounted() {
    // 挂载的时候设置导航栏第一个的背景颜色
    // 获取所有选项的dom节点
    let ems = document.getElementsByClassName('em')
    // 修改它的样式
    ems[0].className = 'em active'
  },
  methods: {
    // 点击时改变背景颜色
    changbg(index) {
      // 获取所有选项的dom节点
      let ems = document.getElementsByClassName('em')
      // 清空选中样式
      for(let i=0;i<ems.length;i++){
        ems[i].className = 'em'
      }
      // 修改它的样式
      ems[index].className = 'em active'
    }
  }
}
</script>

<style lang="less" scoped>
  .HeadNav{
    z-index: 90;
    height: 35px;
    box-sizing: border-box;
    background-color: #C20C0C;
    border-bottom: 1px solid #a40011;
  }
  .warp{
    width: 1100px;
    height: 34px;
    margin: 0 auto;
  }
  .nav{
    padding-left: 180px;
    list-style: none;
    a{
      float: left;
      text-decoration: none;
      color: #fff;
      font-size: 12px;
      .em{
        position: relative;
        display: inline-block;
        height: 20px;
        padding: 0 13px;
        margin: 7px 17px 0;
        border-radius: 20px;
        line-height: 21px;
        font-style: normal;
        text-align: left; 
        font-size: inherit;
      }
      .em:hover{
        background: #9B0909;
      }
      .em.active{
        background: #9B0909;
      }
    }
  }
  .f_r_white_icon{
    position: absolute;
    background: url(../static/imgs/white-r-icon@3x.png);
  }
</style>
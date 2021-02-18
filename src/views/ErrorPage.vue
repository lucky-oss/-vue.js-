<template>
  <div class="error">
    <!-- 顶部导航栏 -->
    <TopNav :typess="typess"/> 
    <div class="red_bar"></div>
    <div class="error_div">
      <div class="no_404">
        <i></i>
        <p>很抱歉，你要查找的网页找不到</p>
      </div>
    </div>
    <!-- 脚注 -->
    <Footer />
  </div>
</template>
<script>
export default {
  name: 'ErrorPage',
  data() {
    return {
      typess: 'false'
    }
  }
}
</script>

<style lang="less" scoped>
  .error{
    display: flex;
    flex-direction: column;
    background-color: #F5F5F5;
  }
  .red_bar{
    height: 5px;
    box-sizing: border-box;
    background-color: #C20C0C;
  }
  .error_div{
    height: 730px;
    width: 980px;
    margin: 0 auto;
  }
  .no_404{
    padding: 125px 0 0;
    text-align: center;
    i{
      width: 270px;
      height: 112px;
      display: inline-block;
      vertical-align: middle;
      background: url(../static/imgs/logo.png) no-repeat 0 9999px;
      background-position: 0 -405px;
    }
    p{
      margin-top: 35px;
      font-size: 18px;
      font-family: "Microsoft Yahei";
    }
  }
</style>
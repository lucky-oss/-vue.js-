<template>
  <div class="Footer">
    <div class="warp">
      <div class="copy">
        <p>
          <a href="javascript:void(0)" class="item">服务条款</a>
          <span class="line">|</span>
          <a href="javascript:void(0)" class="item">隐私政策</a>
          <span class="line">|</span>
          <a href="javascript:void(0)" class="item">儿童隐私政策</a>
          <span class="line">|</span>
          <a href="javascript:void(0)" class="item">版权投诉指引</a>
          <span class="line">|</span>
          <a href="javascript:void(0)" class="item">意见反馈</a>
          <span class="line">|</span>
        </p>
        <p class="s-fcs">
          <span class="sep">违法和不良信息举报电话:    0571-89853516</span>
          <span>举报邮箱: </span>
          <a class="alink" href="javascript:void(0)">ncm5990@163.com</a>
        </p>
        <p class="s-fcs">
          <span class="sep">粤B2-20090191-18</span>
          <a class="alink2" href="javascript:void(0)">工业和信息化部备案管理系统网站</a>
          <a class="alink2" href="javascript:void(0)">
            <span class="police_logo"></span>
            <span class="police-text">浙公网安备 33010902002564号</span>
          </a>
        </p>
      </div>
      <ul class="enter">
        <li class="unit">
          <a class="logo-amped logo" href="javascript:void(0)"></a>
          <span class="tt tt-amped"></span>
        </li>
        <li class="unit">
          <a class="logo-auth logo" href="javascript:void(0)"></a>
          <span class="tt tt-auth"></span>
        </li>
        <li class="unit">
          <a class="logo-musician logo" href="javascript:void(0)"></a>
          <span class="tt tt-musician"></span>
        </li>
        <li class="unit">
          <a class="logo-reward logo" href="javascript:void(0)"></a>
          <span class="tt tt-reward"></span>
        </li>
        <li class="unit">
          <a class="logo-cash logo" href="javascript:void(0)"></a>
          <span class="tt tt-cash"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="less" scoped>
  .Footer{
    position: relative;
    height: 172px;
    overflow: hidden;
    border-top: 1px solid #d3d3d3;
    background: #f2f2f2;
  }
  .warp{
    width: 980px;
    height: 100%;
    margin: 0 auto;
  }
  .copy{
    float: left;
    width: 520px;
    padding-top: 15px;
    line-height: 24px;
    a:hover{
      text-decoration: underline;
    }
  }
  .item{
    color: #999;
    font-size: 12px;
    text-decoration: none;
  }
  .line{
    font-size: 12px;
    margin: 0 8px 0 10px;
    color: #c2c2c2;
  }
  .sep{
    margin-right: 14px;
  }
  .alink{
    text-decoration: none;
    color: #333;
  }
  .alink2{
    text-decoration: none;
    color: #666;
  }
  .s-fcs{
    font-size: 12px;
    color: #666;
  }
  .police_logo{
    color: #666;
    width: 14px;
    height: 14px;
    margin-left: 10px;
    background: url(../../static/imgs/police.png) no-repeat;
    background-size: cover;
    display: inline-block;
    margin-right: 2px;
    vertical-align: -2px;
  }
  .enter{
    width: 420px;
    margin-top: 33px;
    float: right;
  }
  .unit:first-child {
    margin-left: 0;
  }
  .unit {
    float: left;
    width: 60px;
    height: 70px;
    margin-left: 30px;
    text-align: center;
    color: #666;
  }
  .logo-amped {
    background: url(../../static/imgs/foot_enter_new.png) no-repeat;
    background-size: 110px 552px;
    background-position: -63px -456.5px;
  }
  .logo-auth {
    background: url(../../static/imgs/foot_enter_new.png) no-repeat;
    background-size: 110px 552px;
    background-position: -63px -101px;
  }
  .logo-musician {
    background: url(../../static/imgs/foot_enter_new.png) no-repeat;
    background-size: 110px 552px;
    background-position: 0 0;
  }
  .logo-reward {
    background: url(../../static/imgs/foot_enter_new.png) no-repeat;
    background-size: 110px 552px;
    background-position: -60px -50px;
  }
  .logo-cash {
    background: url(../../static/imgs/foot_enter_new.png) no-repeat;
    background-size: 110px 552px;
    background-position: 0 -101px;
  }
  .logo{
    display: block;
    float: none;
    width: 50px;
    height: 45px;
    margin: 0 auto;
  }
  .tt{
    display: inline-block;
    margin: 5px 5px 0;
    width: 52px;
    height: 14px;
  }
  .tt-amped {
    background: url(../../static/imgs/foot_enter_tt.png) no-repeat;
    background-size: 180px 139px;
    background-position: 0 -108px;
    margin-left: -6px;
    width: 72px;
  }
  .tt-auth {
    background: url(../../static/imgs/foot_enter_tt.png) no-repeat;
    background-size: 180px 139px;
    background-position: -1px -91px;
  }
  .tt-musician {
    background: url(../../static/imgs/foot_enter_tt.png) no-repeat;
    background-size: 180px 139px;
    background-position: 0 0;
  }
  .tt-reward {
    background: url(../../static/imgs/foot_enter_tt.png) no-repeat;
    background-size: 180px 139px;
    background-position: 0 -54px;
  }
  .tt-cash {
    background: url(../../static/imgs/foot_enter_tt.png) no-repeat;
    background-size: 180px 139px;
    background-position: -1px -72px;
  }
</style>
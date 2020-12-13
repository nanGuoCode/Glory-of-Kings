<!--
 * @Author: nanGuo
 * @Date: 2020-12-13 16:30:07
 * @LastEditors: nanGuo
 * @LastEditTime: 2020-12-13 16:55:50
-->
<template>
  <div class="main">
    <div class="tabbar">
     <div class="logo-cont">
     <a href=""></a>
     </div>

    </div>
    <div class="nav">

    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "main",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.tabbar{
  background: url(//game.gtimg.cn/images/yxzj/m/m201706/images/bg/index.png) 0 -27.4615rem /* pxToRem */ no-repeat;
  background-size: 28.8462rem /* pxToRem */35rem /* pxToRem */;
  width: 100%;
  height: 3.4615rem /* pxToRem */;
}

.logo-cont{
  width: 11.5385rem /* pxToRem */;
  height: 2.3077rem /* pxToRem */;

}

</style>
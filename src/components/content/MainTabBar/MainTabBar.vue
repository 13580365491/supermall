<template>
  <tabbar>
      <tabbar-item path="/home">
        <img src="~assets/img/tabbar/home.svg" alt="" slot="item-icon"/>
        <img src="~assets/img/tabbar/home-active.svg" alt="" slot="item-icon-active"/>
        <div slot="item-text">首页</div>
      </tabbar-item>
      <tabbar-item path="/category">
        <img src="~assets/img/tabbar/category.svg" alt="" slot="item-icon"/>
        <img src="~assets/img/tabbar/category-active.svg" alt="" slot="item-icon-active"/>
        <div slot="item-text">分类</div>
      </tabbar-item>
      <tabbar-item path="/cart">
        <img src="~assets/img/tabbar/shopcart.svg" alt="" slot="item-icon"/>
        <img src="~assets/img/tabbar/shopcart-active.svg" alt="" slot="item-icon-active"/>
        <div slot="item-text">购物车</div>
      </tabbar-item>
      <tabbar-item path="/bussiness">
        <img src="~assets/img/tabbar/bussiness-man.svg" alt="" slot="item-icon"/>
        <img src="~assets/img/tabbar/bussiness-man-active.svg" alt="" slot="item-icon-active"/>
        <div slot="item-text">我的</div>
      </tabbar-item>
    </tabbar>
</template>

<script>
import tabbar from "components/common/tabbar/tabbar";
import tabbarItem from "components/common/tabbar/tabbarItem";

export default {
  components: {
    tabbar,
    tabbarItem
  }
}
</script>

<style>

</style>
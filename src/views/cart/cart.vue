<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>

    <cart-list />

    <cart-bottom-bar />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import cartBottomBar from "./childComps/cartBottomBar";
import cartList from "./childComps/cartList";

import {mapGetters} from 'vuex'; 

export default {
  name: "cart",
  components: {
    NavBar,
    cartList,
    cartBottomBar,
  },
  computed: {
    // ...mapGetters(['cartLength', 'cartList'])
    ...mapGetters({
      length: 'cartLength',
      list: 'cartList',
    })
  }
}
</script>

<style>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
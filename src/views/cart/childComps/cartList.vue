<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item, index) in cartList" :key="index" :item-info="item"/>
    </scroll>
  </div>
</template>

<script>
import cartListItem from "./cartListItem";

import Scroll from "components/common/scroll/Scroll";

import { mapGetters } from "vuex";

export default {
  name: "cartList",
  components: {
    cartListItem,
    Scroll,
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
  activated() {
    this.$refs.scroll.refresh();
  }
};
</script>

<style scoped>
.cart_list {
  height: calc(100% - 44px -58px);
}
.content {
  overflow: hidden;
  height: 100%;
}
</style>
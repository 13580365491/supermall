import BackTop from "components/content/backTop/BackTop";

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    // 回到顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
  }
}
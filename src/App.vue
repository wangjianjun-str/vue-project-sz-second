<template>
  <div class="outer">
    <Header></Header>
    <router-view></router-view>
    <Footer v-if="!$route.meta.isHide"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default {
  name: "App",
  components:{
    Header,
    Footer
  },
  //本来我们请求三级分类列表功能是在TypeNavicat里面去做的
  //但是放在TypeNav里面 从home切换到search，这个请求会触发两次，而数据又是一样的，所以造成浪费
  //因此我们可以优化在app当中发请求
   mounted() {
    this.getCategoryList();
  },
  methods:{
     getCategoryList() {
      this.$store.dispatch("getCategoryList");
    },
  }
};

</script>

<style lang="less" scoped>

</style>


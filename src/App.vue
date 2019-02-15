<template>
  <div id="app">
    <router-view/>
    <van-tabbar
      v-model="active"
      active-color="var(--main-color)"
      @change="onChangeTabbar"
    >
      <van-tabbar-item>首页</van-tabbar-item>
      <van-tabbar-item>商城</van-tabbar-item>
      <van-tabbar-item>消息</van-tabbar-item>
      <van-tabbar-item>我</van-tabbar-item>
    </van-tabbar>
    <login ref="login"></login>
    <init-style></init-style>
  </div>
</template>

<script>
  import AliIconfont from './common/ali-iconfont'
  import Login from './views/login'
  import InitStyle from './components/init-style'
  export default {
    data() {
      return {
        active: 0
      }
    },
    components:{
      'login': Login,
      'init-style': InitStyle
    },
    methods:{
      onChangeTabbar(index){
        let routerPathArr = [
          'home',
          'mall',
          'message',
          'mine'
        ];
        this.$router.push({path:'/'+routerPathArr[index]})
      }
    },
    mounted(){
      AliIconfont.loadingIcon();
    }
  }
</script>

<style lang="scss">
</style>

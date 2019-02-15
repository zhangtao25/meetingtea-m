<style>
  #home .van-tabs__wrap{
    padding: 0 100px;
  }
  #home .login-btn{
    color: var(--main-color);
    position: absolute;
    left: 14px;
    line-height: 45px;
    z-index: 1001;
  }
</style>
<template>
  <div id="home">
    <span
      class="login-btn"
      @click="openLoginPopup">登录</span>
    <van-tabs v-model="active">
      <van-tab title="笔记">收藏</van-tab>
      <van-tab title="收藏">发现</van-tab>
      <van-tab title="赞过">附近</van-tab>
    </van-tabs>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  export default {
    components:{
    },
    data(){
      return {
        active: 0
      }
    },
    mounted(){
    },
    methods:{
      ...mapActions(['openLoginPopup']),
    }
  }
</script>

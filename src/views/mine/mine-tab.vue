<style>
  .van-tabs__wrap{
    padding: 0 100px;
  }
</style>
<template>
  <div class="mine-tab">
    <van-tabs v-model="active">
      <van-tab title="笔记">笔记</van-tab>
      <van-tab title="收藏">收藏</van-tab>
      <van-tab title="赞过">赞过</van-tab>
    </van-tabs>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        active: 2
      }
    }
  }
</script>

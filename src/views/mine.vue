<template>
  <div id="mine">
    <van-nav-bar title="我" left-text="返回">
      <van-icon
        class-prefix="my-icon"
        name="liebiao"
        slot="left"
        @click="openSettingPopup"/>
      <van-icon class-prefix="my-icon" name="fasong" slot="right"/>
    </van-nav-bar>
    <mine-card></mine-card>
    <mine-tab></mine-tab>
    <setting ref="setting"></setting>
  </div>
</template>
<script>
  import MineCard from './mine/mine-card'
  import MineTab from './mine/mine-tab'
  import Setting from './setting'
  export default {
    components:{
      'mine-card': MineCard,
      'mine-tab': MineTab,
      'setting':Setting
    },
    methods:{
      openSettingPopup(){
        this.$refs.setting.openPopup()
      }
    }
  }
</script>

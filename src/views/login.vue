<style>
  #login .my-icon-cha{
    font-size: 25px;
    line-height: 2;
    margin-left: 14px;
  }
</style>
<template>
  <div id="login">
    <van-popup
      v-model="show"
      position="bottom"
      overlay
      :close-on-click-overlay="false"
      @click-overlay="closeLoginPopup">
      <div style="height: 100vh;width: 100vw;background-color: white">
        <van-icon class-prefix="my-icon" name="cha" @click="closeLoginPopup"/>
        <van-cell-group>
          <van-field
            v-model="username"
            required
            clearable
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名"
            @click-right-icon="$toast('question')"
          />

          <van-field
            v-model="password"
            type="password"
            label="密码"
            placeholder="请输入密码"
            required
          />

        </van-cell-group>
        <div style="text-align: center">
          <van-button type="warning">登录</van-button>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
    data(){
      return{
        show:false,
        username:'',
        password:''
      }
    },
    methods:{
      ...mapActions(['closeLoginPopup']),
    },
    computed:{
      ...mapGetters(['isShowLogin'])
    },
    watch:{
      isShowLogin(val){
        this.show = val
      }
    }
  }
</script>

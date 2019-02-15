<template>
  <div class="setting">
    <van-popup
      v-model="show"
      position="left"
      :overlay="false"
      overlay>
      <div style="height: 100vh;width: 70vw;background-color: white">

      </div>
    </van-popup>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        show:false
      }
    },
    methods:{
      openPopup(){
        this.show = true
      }
    }
  }
</script>

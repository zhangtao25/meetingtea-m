<style>
  .mine-card{
    padding: 14px;
  }
  .mine-card .head-portrait{
    /*padding: 10px;*/
  }
  .mine-card .head-portrait img{
    width: 100%;
    border-radius: 50%;
  }
  .mine-card p{
    text-align: center;
  }

  .mine-card .personal-data-btn{
    border-radius: 10px;
    border: 1px solid #333;
    height: 20px;
    width: 150px;
    display: inline-block;
  }
  .mine-card .set-btn{
    border-radius: 10px;
    border: 1px solid #333;
    height: 20px;
    width: 40px;
    display: inline-block;
  }
</style>
<template>
  <div class="mine-card">
    <van-row style="text-align: center;">
      <van-col span="8">
        <div class="head-portrait">
          <img :src="headPortraitSrc" alt="">
        </div>
      </van-col>
      <van-col span="16">

        <van-row>
          <van-col span="8">
            <p>1</p>
            <p>粉丝</p>
          </van-col>
          <van-col span="8">
            <p>1</p>
            <p>关注</p>
          </van-col>
          <van-col span="8">
            <p>1</p>
            <p>收藏</p>
          </van-col>
        </van-row>

        <van-row style="padding-top: 14px">
          <van-col span="20">
            <span class="personal-data-btn">个人资料</span>
          </van-col>
          <van-col span="4">
            <span class="set-btn">
              <van-icon class-prefix="my-icon" name="shezhi"/>
            </span>
          </van-col>
        </van-row>
      </van-col>
    </van-row>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        headPortraitSrc: 'https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8f23d548c90bfbf58771bafa206846f8_121_121.jpg'
      }
    }
  }
</script>

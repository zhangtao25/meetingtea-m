<style>
  #home .mint-loadmore-top span:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #home .mint-loadmore-top span:nth-child(2) img {
    margin-right: .3rem;
    animation: turn 2s linear infinite;
    height: .5rem;
    width: .5rem;
  }

  #home .icon-buycar{
    position: fixed;
    right: .5rem;
    bottom: 2rem;
    width: 1.2rem;
    height: 1.2rem;
    color: white;
    font-size: .8rem;
    text-align: center;
    line-height: 1.2rem;
    background-color: black;
    opacity: .6;
    border-radius: 50%;
  }

  @keyframes turn {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
<template>
  <div id="home">
    <i @click="goToBuycar" class="icon-buycar iconfont"></i>
    <header>
      <top-search></top-search>
      <slide-nav-bar
        :nav-bar-options="cateList"
        @onClickNavBar="onClickNavBar"></slide-nav-bar>
    </header>
    <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
      <!--<router-view></router-view>-->
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus !== 'loading' && topStatus !== 'drop'">↓下拉刷新</span>
        <span v-show="topStatus === 'loading'">
          <!--<img src="./../../assets/images/loading.png" alt="">-->
          <span>遇见茶，遇见最好的你。</span>
        </span>
        <span v-show="topStatus === 'drop'">
          松开我嘛~就能刷新蛮~
        </span>
      </div>
    </mt-loadmore>
    <router-view/>
  </div>
</template>
<script>
  import TopSearch from '../widget/top-search'
  import SlideNavBar from '../widget/slide-nav-bar'
  import Goods from './../service/goods'

  export default {
    components: {
      'top-search': TopSearch,
      'slide-nav-bar': SlideNavBar
    },
    data() {
      return {
        cateList: [],
        HomepageData: {},
        topStatus: ''
      }
    },
    mounted() {
      this.initCateList();
      setTimeout(()=>{
        this.$router.push({path: '/mall/lv1-category', query: {id:40}})
      },500)
    },
    methods: {
      onClickNavBar(val) {
        let jump_url = val.data.jump_url
        let id = jump_url.slice(jump_url.length - 2, jump_url.length)
        console.log(id)
        if (val.floor_id == 0) {
          this.$router.push({path: '/mall/recommend'})
        } else {
          this.$router.push({path: '/mall/lv1-category', query: {id}})
        }
      },
      initCateList() {
        Goods.getHomepage().then(res => {
          this.HomepageData = res.data
          for (let i = 0; i < this.HomepageData.data.homepage.floors.length; i++) {
            if (this.HomepageData.data.homepage.floors[i]['module_key'] == 'product_category') {
              this.cateList.push(this.HomepageData.data.homepage.floors[i])
            }
          }
        })
      },
      handleTopChange(status) {
        this.topStatus = status;
      },
      loadTop() {
        setTimeout(() => {
          this.$refs.loadmore.onTopLoaded();
        }, 1500)
      },
      goToBuycar(){
        this.$router.push({path:'/buycar'})
      }
    }
  }
</script>
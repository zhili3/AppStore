<template>
    <div class="content">
        <home-top></home-top>
        <mt-swipe :auto="0">
            <mt-swipe-item><img src="../../image/Amazing_Gifts_750x350.png"></mt-swipe-item>
            <mt-swipe-item><img src="../../image/Amazing_Gifts_750x350.png"></mt-swipe-item>
            <mt-swipe-item><img src="../../image/Amazing_Gifts_750x350.png"></mt-swipe-item>
            <mt-swipe-item><img src="../../image/Amazing_Gifts_750x350.png"></mt-swipe-item>
        </mt-swipe>
        <div class="middle">
            <div class="all-submenu">
                <router-link to="/topseller">
                    <img src="../../image/top-sellers.png" alt="">
                    <span>Top Sellers</span>
                </router-link>
                <router-link to="/arrivals">
                    <img src="../../image/newArrivals.png" alt="">
                    <span>newArrivals</span>
                </router-link>

                <router-link to="/under">
                    <img src="../../image/under-$5.png" alt="">
                    <span>under-$5</span>
                </router-link>

                <router-link to="/home/brands">
                    <img src="../../image/brands.png" alt="">
                    <span>brands</span>
                </router-link>
            </div>
        </div>
        <group-shop-list></group-shop-list>
        <div class="guess">
            <div class="guess-head" >
                Guess You Like
            </div>
            <guess-you-like :showMargin="false">

            </guess-you-like>
        </div>
        <bottom-menu></bottom-menu>
        <router-view>
        </router-view>
    </div>
</template>
<style lang="scss" type="text/css" >
.mint-swipe,
.mint-swipe-items-wrap {
  height: 8.25rem !important;
  // background: yellowgreen;
}
.mint-swipe-items-wrap > div img {
  width: 100%;
  height: 100%;
}
.middle {
  width: 100%;
//   padding: 0.8rem 0.4rem;
  box-sizing: border-box;
  background-color: #fff;
  .all-submenu {
    display: flex;
    justify-content: space-between;
    a {
      flex:1;
      padding:0.6rem 0;
      img {
        width: 2.65rem;
        height: 2.65rem;
        padding:0 1.025rem ;
        // box-sizing: border-box;
      }
      span {
        font-size: 0.55rem;
        font-family:  Helvetica Regular;
        color: #333;
        line-height: 1rem;
        text-align: center;
        display: block;
        width: 100%;
      }
    }
  }
}
.guess {
  margin-bottom: 2.75rem;
  .guess-head {
    height: 50px;
    line-height: 50px;
    margin:0 0.75rem;
    color: #2d2323;
    font-size: 0.75rem;
    font-weight: 600;
  }

}

</style>

<script>
import homeTop from "./head";
import groupShopList from "./groupshoplist";
import bottomMenu from "@/components/common/bottommenu";
import guessYouLike from "@/components/common/guessYouLike";
export default {
  name: "home",
  data() {
    return {
      vulue: ""
    };
  },
  components: {
    homeTop,
    groupShopList,
    bottomMenu,
    guessYouLike
  }
};
</script>

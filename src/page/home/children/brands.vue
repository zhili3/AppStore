<template>
    <div class="brands-content">
         <top-header :titleBar="title"></top-header>
        <div class="ad-goods">
            <router-link to="">
                <img src="../../../image/brand-ad.png" alt="">
            </router-link>
        </div>
        <section>
            <div class="hot-brand">
                <p>Top Brands
                    <router-link to="/home/brands/allbrands">All brands</router-link>
                </p>
                <div class="brand-list">
                    <router-link to="">
                        <img src="../../../image/huawei.png" alt="">
                    </router-link>
                    <router-link to="">
                        <img src="../../../image/huawei.png" alt="">
                    </router-link>
                    <router-link to="">
                        <img src="../../../image/huawei.png" alt="">
                    </router-link>
                    <router-link to="">
                        <img src="../../../image/huawei.png" alt="">
                    </router-link>
                    <router-link to="">
                        <img src="../../../image/huawei.png" alt="">
                    </router-link>
                    <router-link to="">
                        <img src="../../../image/huawei.png" alt="">
                    </router-link>
                </div>
            </div>
            <div class="brand-shop-list">
                <guess-you-like >

                </guess-you-like>
            </div>
        </section>
        <router-view>

        </router-view>
    </div>
</template>
<style scoped lang="scss" type="text/css">
@import "@/style/mixin.scss";
.brands-content {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom:0;
  overflow: scroll;
  z-index: 20;
  background-color: $color;
  .header {
    position: relative;
    @include tcenter(2rem, 2rem);
    font-size: 0.85rem;
    background: #fff;
    span {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 2rem;
      background: url("../../../image/icon/left-arrow.png") no-repeat center
        center/0.5rem;
    }
  }
  .ad-goods {
    width: 100%;
    a {
      img {
        width: 100%;
      }
    }
  }
  section {
    .hot-brand {
      margin: 0.5rem 0;
      padding: 0.5rem;
      background-color: #fff;
      p {
        height: 2rem;
        @include ft(0.85rem, 2rem);
        color: #2d2323;
        a {
          float: right;
          @include ft(0.55rem, 2rem);
          color: #666;
        }
      }
      .brand-list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        a {
          width: 33%;
          padding: 0.2rem;
          box-sizing: border-box;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
<script >
import topHeader from "@/components/common/topheader";
import guessYouLike from "@/components/common/guessYouLike";
export default {
  data() {
    return {
      isShow: true,
      title:"Brands"
    };
  },
  components: {
    topHeader,
    guessYouLike
  },
  mounted() {},
  methods: {
    Back() {
      //   console.log(this);
      this.$router.back();
    }
  }

};
</script>


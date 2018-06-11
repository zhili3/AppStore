<template>
    <div class="page_sub">
        <top-header :titleBar="title" class="header"></top-header>
        <div class="empty">
            <div class="cart-pho">
                <img src="../../../image/smile.png" alt="">
            </div>
            <p>Your Shoping Cart Is Empty .</p>
            <div class="go-shop">
                Unsubscribe
            </div>
        </div>
        <div>

        </div>
    </div>
</template>

<style scoped lang="scss" type="text/css">
.page_sub {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 55;
  background-color: #fff;
  .header {
    width: 100%;
    height: 2rem;
    box-sizing: content-box;
    border-bottom: 1px solid #e6e6e6;
  }
  .empty {
    width: 100%;
    .cart-pho {
      img {
        display: block;
        margin: 2.5rem auto 0;
        // transform: translateY(2.5rem);
        width: 4rem;
        height: 4rem;
      }
    }
    p {
      line-height: 0.8rem;
      padding: 0 2.75rem;
      margin: 1rem 0;
      color: #333333;
      font-size: 0.6rem;
      text-align: center;
    }
    .go-shop {
      margin: 0 auto 1.8rem;
      width: 6.5rem;
      height: 1.75rem;
      line-height: 1.75rem;
      border: 1px solid #e6e6e6;
      color: #4c4c4c;
      font-size: 0.65rem;
      text-align: center;
    }
  }
}
</style>
<script>
import topHeader from "@/components/common/topheader";

export default {
  data() {
    return {
      title: "Subscription"
    };
  },
  components: {
    topHeader
  }
};
</script>


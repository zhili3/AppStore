<template>
    <div class="container">
        <div class="header">
            <div class="head_portrait">
                <div class="head_pho">
                    <img src="../../image/header_pho.png" alt="">
                    <router-link to="/accountSet">
                        sign in / Register
                    </router-link>
                    <svg class="seting">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#seting"></use>
                    </svg>
                </div>
            </div>
            <div class="head_down">
                <div class="head_points">
                    <span>125</span>
                    <b>points</b>
                </div>
                <div class="head_check">
                    check in
                </div>
                <router-link to="/myaccount/wishList" class="head_wish">
                    <span>15</span>
                    <b>wish list</b>
                </router-link>
            </div>
        </div>
        <div class="order">
            <router-link to="" class="order_menu">
                <div class="my_order">
                    <svg class="seting">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#myOrder"></use>
                    </svg>
                    my order
                </div>
                <div class="all_order">
                    all order
                    <svg class="arrowRight">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrowRight"></use>
                    </svg>
                </div>
            </router-link>
            <div class="order_state">
                <div class="pay_ment">
                    pending payment
                </div>
                <div class="ship_ment">
                    pending shipment
                </div>
                <div class="devlivering">
                    devlivering
                </div>
                <div class="completed">
                    completed
                </div>
            </div>
        </div>
        <div class="sub_link">
            <div class="sub_main_link">
                <router-link to="" class="coupon clear">
                    <div class="a_link coupon_left">
                        <svg class="seting">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#coupon"></use>
                        </svg>
                        my coupon
                    </div>
                    <div class="aLinkRight">
                        <svg class="arrowRight">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrowRight"></use>
                        </svg>
                    </div>
                </router-link>
                <router-link to="" class="coupon clear">
                    <div class="a_link coupon_left">
                        <svg class="seting">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#give"></use>
                        </svg>
                        give15
                    </div>
                    <div class="aLinkRight">
                        <svg class="arrowRight">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrowRight"></use>
                        </svg>
                    </div>
                </router-link>
                <router-link to="/myReviews" class="coupon clear">
                    <div class="a_link coupon_left">
                        <svg class="seting">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#review"></use>
                        </svg>
                        my riviews
                    </div>
                    <div class="aLinkRight">
                        <svg class="arrowRight">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrowRight"></use>
                        </svg>
                    </div>
                </router-link>
                <router-link to="/address" class="address clear">
                    <div class="a_link address_left">
                        <svg class="address_svg">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#address"></use>
                        </svg>
                        shipping address
                    </div>
                    <div class="aLinkRight">
                        <svg class="arrowRight">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrowRight"></use>
                        </svg>
                    </div>
                </router-link>

                <router-link to="" class="message clear">
                    <div class="a_link message_left">
                        <svg class="seting message_svg">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#message"></use>
                        </svg>
                        notifacations
                    </div>
                    <div class="aLinkRight">
                        <svg class="arrowRight">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrowRight"></use>
                        </svg>
                    </div>
                </router-link>
            </div>
            <div class="currency_langue">
                <router-link to="" class="clear currency">
                    <div class="a_link coupon_left">
                        <svg class="">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#currency"></use>
                        </svg>
                        currency
                    </div>
                    <div class="aLinkRight">
                        UAG
                        <svg class="arrowRight">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrowRight"></use>
                        </svg>
                    </div>
                </router-link>
                <router-link to="" class="language clear">
                    <div class="a_link coupon_left">
                        <svg class="seting">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#langue"></use>
                        </svg>
                        language
                    </div>
                    <div class="aLinkRight">
                        ENGLISH
                        <svg class="arrowRight">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrowRight"></use>
                        </svg>
                    </div>
                </router-link>
            </div>
        </div>
        <bottom-menu></bottom-menu>
        <router-view>

        </router-view>
    </div>
</template>

<style scoped lang="scss" type="text/css">
@import "@/style/mixin.scss";

.header {
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 0.5rem;
  .head_portrait {
    padding: 0.75rem;
    .head_pho {
      //   height: 3rem;
      position: relative;
      width: 100%;
      border-bottom: 1px solid #e6e6e6;
      img {
        display: block;
        margin: 0 auto;
        width: 3rem;
        height: 3rem;
      }
      a {
        display: block;
        line-height: 0.9rem;
        padding: 0.5rem 0;
        font-size: 0.65rem;
        color: #333;
        text-align: center;
      }
      .seting {
        position: absolute;
        right: 0;
        top: 0.25rem;
        width: 1.15rem;
        height: 1.15rem;
      }
    }
  }
  .head_down {
    height: 3rem;
    padding: 0.75rem;
    display: flex;
    align-items: center;
    line-height: 1.5rem;
    text-align: center;
    .head_points,
    .head_wish {
      width: 5.25rem;
      height: 1.5rem;
      span,
      b {
        display: block;
        width: 100%;
        height: 0.75rem;
        line-height: 0.75rem;
        font-size: 0.75rem;
      }
      span {
        color: #c81623;
      }
      b {
        font-size: 0.6rem;
        color: #333;
      }
    }
    .head_check {
      width: 5.5rem;
      height: 1.5rem;
      border-radius: 4px;
      background-color: $themeColor;
      font-size: 0.6rem;
      color: #fff;
      position: relative;
      margin-right: 1.1rem;
      &::after {
        content: "";
        width: 1px;
        height: 1.25rem;
        background-color: #e6e6e6;
        position: absolute;
        right: -1.1rem;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .head_wish {
      span {
        color: #333;
      }
    }
  }
}
.order {
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 0.5rem;

  .order_menu {
    margin: 0 0.75rem;
    height: 2.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;
    .my_order,
    .all_order {
      height: 0.9rem;
      min-width: 4.5rem;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .seting {
        width: 0.9rem;
        height: 0.9rem;
        margin-right: 0.4rem;
        vertical-align: top;
      }
      .arrowRight {
        width: 0.5rem;
        height: 0.6rem;
        float: right;
        vertical-align: middle;
        margin-left: 0.3rem;
      }
      font-size: 0.65rem;
      color: #1a1a1a;
    }
    .all_order {
      width: 3.2rem;
      justify-content: flex-end;
    }
  }
  .order_state {
    height: 2.25rem;
    padding: 0.45rem 0;
    display: flex;
    align-items: center;
    font-size: 0.55rem;
    div {
      flex: 1;
      //   height: 1.3rem;
      line-height: 0.65rem;
      color: #333;
      text-align: center;

      position: relative;
      &::after {
        content: "";
        width: 1px;
        height: 1.3rem;
        background-color: #e6e6e6;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    div:last-child {
      &::after {
        width: 0;
      }
    }
  }
}
.sub_link {
  //   background-color: #fff;
  //   border-bottom: 1px solid #e6e6e6;
  margin-bottom: 3.25rem;

  a {
    height: 2.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;
    .a_link,
    .aLinkRight {
      height: 0.9rem;
      min-width: 4.5rem;
      text-align: center;
      vertical-align: middle;
      font-size: 0.65rem;
      color: #1a1a1a;
      flex: 1;
    }
    .a_link {
      text-align: left;
      svg {
        width: 0.9rem;
        height: 0.9rem;
        margin-right: 0.4rem;
        vertical-align: middle;
      }
      .address_svg {
        height: 0.85rem;
        width: 1rem;
      }
    }
    .aLinkRight {
      width: 3.2rem;
      text-align: right;

      svg {
        width: 0.5rem;
        height: 0.6rem;
        float: right;
        margin-top: 0.15rem;
        margin-left: 0.3rem;
      }
    }
  }
  .language {
    border: none;
  }
  .message {
    border-bottom: none;
  }
  .sub_main_link {
    margin-bottom: 0.75rem;
    background-color: #fff;
    border-bottom: 1px solid #e6e6e6;
    padding: 0 0.75rem;
  }
  .currency_langue {
    background-color: #fff;
    margin-bottom: 0.75rem;
    border-bottom: 1px solid #e6e6e6;
    padding: 0 0.75rem;
  }
}
</style>
<script>
import bottomMenu from "@/components/common/bottommenu";

export default {
  data() {
    return {};
  },
  components: {
    bottomMenu
  }
};
</script>


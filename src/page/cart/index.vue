<template>
    <div class="page-cart">
        <div class="header">
            Cart
        </div>
        <section class="cart-shop-list">
            <ul class="shop-list">
                <li class="list">
                    <div class="left-part">
                        <router-link to="">
                            <img src="../../image/cart-shop.png" alt="">
                        </router-link>
                    </div>
                    <div class="right-part">
                        <p>xiaomi mi mix 2s core android android 8.04G Phone w/ RAMPhone w/ RAMPhone w/ RAM </p>
                        <P>us $45.85</P>
                        <P>us $45.85
                            <span>$62.19</span>
                        </P>
                        <div class="cart-item-pcs">
                            <div class="cart-count">
                                <button>

                                </button>
                                <input type="text" value="1">
                                <button>

                                </button>
                            </div>
                            <div class="attention-and-del">
                                <svg class="heart">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#heart"></use>
                                </svg>
                                <svg class="heart">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#heart"></use>
                                </svg>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="list">
                    <div class="left-part">
                        <router-link to="">
                            <img src="../../image/cart-shop.png" alt="">
                        </router-link>
                    </div>
                    <div class="right-part">
                        <p>xiaomi mi mix 2s core android android 8.04G Phone w/ RAMPhone w/ RAMPhone w/ RAM </p>
                        <P>us $45.85</P>
                        <P>us $45.85
                            <span>$62.19</span>
                        </P>
                        <div class="cart-item-pcs">
                            <div class="cart-count">
                                <button>

                                </button>
                                <input type="text" value="1">
                                <button>

                                </button>
                            </div>
                            <div class="attention-and-del">
                                <svg class="heart">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#heart"></use>
                                </svg>
                                <svg class="heart">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#heart"></use>
                                </svg>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
        <section class="total">
            <div class="total-top">
                <div class="to-left">
                    Total:
                    <span>$52.19</span>
                </div>
                <div class="to-right">
                    Discount:
                    <span>$2.5</span>
                </div>
            </div>
            <div class="check">
                <div class="check-left"></div>
                <div class="check-md"></div>
                <router-link to="/confirmOrder" class="check-rt">Check Out</router-link>
            </div>
        </section>
        <div class="empty">
            <div class="cart-pho">
                <img src="../../image/shop-cart-2.png" alt="">
            </div>
            <p>Your Shoping Cart Is Empty .</p>
            <div class="go-shop">
                Go Shoping
            </div>
        </div>
        <div class="guess">
            <div class="guess-head">
                Guess You Like
            </div>
            <guess-you-like>
                <div slot="pro-title" class="pro-title">测试数据测试</div>
            </guess-you-like>
        </div>
        <bottom-menu></bottom-menu>
    </div>
</template>

<style scoped lang="scss" type="text/css">
.page-cart {
  .header {
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    font-size: 0.85rem;
    background: #fff;
    border-bottom: 1px solid #e6e6e6;
  }
  .cart-shop-list {
    // padding: 0.75rem;
    background-color: #fff;
    ul {
      width: 100%;
      li {
        width: 100%;
        height: 6.925rem;
        display: flex;
        padding: 0.75rem;
        border-bottom: 1px solid #e6e6e6;
        box-sizing: border-box;
        .left-part {
          width: 5.575rem;
          height: 5.575rem;
          padding: 0 0.35rem;
          box-sizing: content-box;
          img {
            width: 5.575rem;
            height: 5.575rem;
          }
        }
        .right-part {
          flex: auto;
          padding-left: 0.5rem;
          p {
            line-height: 1rem;
            // width: 10.75rem;
            // text-overflow: ellipsis;
            // white-space: wrap;
            // overflow: hidden;
          }
          p:nth-child(1) {
            line-height: 0.7rem;
            font-size: 0.6rem;
            color: #4d4d4d;
            // position: relative;
            /* 3 times the line-height to show 3 lines */
            height: 1.4rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          p:nth-child(2) {
            // padding: 0.2rem 0;
            font-size: 0.6rem;
            color: #999;
          }
          p:nth-child(3) {
            font-size: 0.65rem;
            color: #eb6519;

            span {
              font-size: 0.55rem;
              margin-left: 0.3rem;
              color: #999;
              text-decoration: line-through;
            }
          }
          .cart-item-pcs {
            margin-top: 0.35rem;
            height: 1.5rem;
            .cart-count {
              //   width: 4.4rem;
              height: 100%;
              border: 1px solid #ccc;
              float: left;
              button:nth-child(1) {
                width: 1.35rem;
                height: 100%;
                float: left;
                position: relative;
                // border-right:1px solid #ccc;
                &::before {
                  content: "";
                  display: inline-block;
                  width: 0.45rem;
                  height: 0.1rem;
                  background: #808080;
                  position: absolute;
                  left: 0;
                  right: 0;
                  top: 0;
                  bottom: 0;
                  margin: auto;
                }
              }
              button:nth-child(3) {
                float: left;
                width: 1.35rem;
                height: 100%;
                // border-right:1px solid #ccc;
                position: relative;
                // border-right:1px solid #ccc;
                &::before {
                  content: "";
                  display: inline-block;
                  width: 0.45rem;
                  height: 0.1rem;
                  background: #808080;
                  position: absolute;
                  left: 50%;
                  right: 50%;
                  transform: translate(-0.225rem, -0.05rem);
                }
                &::after {
                  content: "";
                  display: inline-block;
                  width: 0.1rem;
                  height: 0.45rem;
                  background: #808080;
                  position: absolute;
                  left: 50%;
                  top: 50%;
                  transform: translate(-0.05rem, -0.225rem);
                  //   margin: auto;
                }
              }
              input {
                float: left;
                width: 1.5rem;
                height: 100%;
                font-size: 0.7rem;
                text-align: center;
                box-sizing: border-box;
                border-left: 1px solid #ccc;
                border-right: 1px solid #ccc;
              }
            }
            .attention-and-del {
              float: right;
              width: 2.5rem;
              height: 100%;
              display: flex;
              justify-content: space-between;
              .heart {
                padding-top: 0.325rem;
                width: 1rem;
                height: 0.85rem;
              }
            }
          }
        }
      }
    }
  }
  .total {
    height: 4.3rem;
    width: 100%;
    border-top: 1px solid #d5d5d5;
    border-bottom: 1px solid #d5d5d5;
    background-color: #fff;
    padding: 0.35rem 0.75rem;
    position: fixed;
    bottom: 2.5rem;
    left: 0;
    z-index: 3;
    .total-top {
      height: 1.25rem;
      line-height: 1.25rem;
      font-size: 0.6rem;
      color: #999;
      overflow: hidden;
      margin-bottom: .3rem;
      span {
        font-size: 0.9rem;
        color: #eb6519;
      }
      .to-left {
        float: left;
        color: #999;
      }
      .to-right {
        float: right;
        color: #999;
      }
    }
    .check {
        text-align: center;
      .check-left,
      .check-rt,
      .check-md {
        display: inline-block;
        vertical-align: middle;
        // height: 100%;
      }
      .check-left {
        width: 7rem;
        height: 1.875rem;
        border-radius: 4px;
        background:#f8d764 url("../../image/select-pay.png") no-repeat center/80%;
      }
      .check-md {
        width: 0.05rem;
        background-color: #ccc;
        height: 1.75rem;
        margin: 0.06rem 0.6rem;
      }
      .check-rt {

        width: 7rem;
        height: 1.875rem;
        line-height: 1.875rem;
        text-align: center;
        background-color: #df7b18;
        font-size: 0.8rem;
        font-weight: 900;
        color: #fff;
        border-radius: 0.1rem;
      }
    }
  }
  .empty {
    width: 100%;
    .cart-pho {
      img {
        display: block;
        margin: 2.5rem auto 0;
        // transform: translateY(2.5rem);
        width: 5.575rem;
        height: 5.125rem;
      }
    }
    p {
      height: 2.5rem;
      line-height: 2.5rem;
      color: #333333;
      font-size: 0.6rem;
      text-align: center;
    }
    .go-shop {
      margin: 0 auto 1.8rem;
      width: 8rem;
      height: 1.85rem;
      line-height: 1.85rem;
      background-color: #df7b18;
      color: #fff;
      font-size: 0.8rem;
      text-align: center;
      border-radius: 0.2rem;
    }
  }
  .guess {
    margin-bottom: 2.75rem;
    .guess-head {
      height: 50px;
      line-height: 50px;
      margin: 0 0.75rem;
      color: #2d2323;
      font-size: 0.75rem;
      font-weight: 600;

    }
     .pro-title {
        text-align: center;
        height: 1.2rem;
        line-height: 1.2rem;
        font-size: 0.8rem;
        color: #333;
      }
  }
}
</style>
<script>
import bottomMenu from "@/components/common/bottommenu";
import guessYouLike from "@/components/common/guessYouLike";

export default {
  data() {
    return {};
  },
  components: {
    bottomMenu,
    guessYouLike
  }
};
</script>


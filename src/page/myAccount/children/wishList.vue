<template>
    <div class="page-wish">
        <top-header :titleBar="title" class="header_wish"></top-header>
        <section class="cart-shop-list">
            <ul class="shop-list">

                <li class="list">
                    <div class="left-part">
                        <router-link to="">
                            <img src="../../../image/cart-shop.png" alt="">
                        </router-link>
                    </div>
                    <div class="right-part">
                        <p>xiaomi mi mix 2s core android android 8.04G Phone w/ RAMPhone w/ RAMPhone w/ RAM </p>

                        <P>us $45.85
                            <span>$62.19</span>
                        </P>
                        <div class="cart-item-pcs">
                            <div class="cart_icon">
                                 <svg class="cart">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart"></use>
                                </svg>
                            </div>
                            <div class="attention-and-del">
                                <svg class="grayHeart">
                                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#heart"></use>
                                </svg>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </section>

        <div class="empty">
            <div class="cart-pho">
                <img src="../../../image/shop-cart-2.png" alt="">
            </div>
            <p>Your Shoping Cart Is Empty .</p>
            <div class="go-shop">
                Go Shoping
            </div>
        </div>

    </div>
</template>
<style scoped lang="scss" type="text/css">
.page-wish {
    position: fixed;
    left:0;
    right:0;
    top:0;
    bottom: 0;
    background-color: #fff;
  .header_wish {
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    font-size: 0.85rem;
    background: #fff;
    box-sizing: content-box;
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
          padding: 0 0.35rem;
          box-sizing: content-box;
              height: 5.575rem;

          img {
            width: 5.575rem;
            height: 5.575rem;
          }
        }
        .right-part {
          flex: auto;
          padding-left: 0.5rem;
          p {
            line-height: 0.8rem;
            // width: 10.75rem;
            // text-overflow: ellipsis;
            // white-space: wrap;
            // overflow: hidden;
          }
          p:nth-child(1) {
            line-height: 0.8rem;
            font-size: 0.7rem;
            color: #4c4c4c;
            // position: relative;
            /* 3 times the line-height to show 3 lines */
            height: 1.6rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }

          p:nth-child(2) {
            font-size: 0.65rem;
            color: #eb6519;
            padding: 0.6rem 0;
            span {
              font-size: 0.55rem;
              margin-left: 0.3rem;
              color: #999;
              text-decoration: line-through;
            }
          }
          .cart_icon{
              height: 1.5rem;
              float: left;
              .cart{
                  width: 1.2rem;
                  height: 1.15rem;
                  margin-top: 0.15rem;
              }
          }
          .cart-item-pcs {
            margin-top: 0.35rem;
            height: 1.5rem;

            .attention-and-del {
              float: right;
              width: 2.5rem;
              height: 100%;
              display: flex;
              justify-content: space-between;
              .grayHeart {
                padding-top: 0.325rem;
                width: 1.15rem;
                height: 0.85rem;
              }
            }
          }
        }
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

      line-height: .8rem;
      padding:0 2.75rem;
      margin:1rem 0;
      color: #333333;
      font-size: 0.6rem;
      text-align: center;
    }
    .go-shop {
      margin: 0 auto 1.8rem;
      width: 6.5rem;
      height: 1.75rem;
      line-height: 1.75rem;
      background-color: #000;
      color: #fff;
      font-size: 0.8rem;
      text-align: center;

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
import topHeader from "@/components/common/topheader";

export default {
  data() {
    return {
        title:"wish"
    };
  },
    components:{
        topHeader,
    }
};
</script>


<template>
    <div class="container">
        <topHeader :titleBar="title">
            <svg class="bigSearch" slot="search">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#bigSearch"></use>
            </svg>
            <svg class="more" slot="more">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#more"></use>
            </svg>
        </topHeader>
        <section class="change_show_type">
            <ul>
                <li class="active">Overview</li>
                <li>Description</li>
                <li>Review</li>
            </ul>
        </section>
        <div class="cont_md">
            <div class="detail_overview">
                <div class="detail_swipe_content swiper-container">
                    <div class="detail_swipe swiper-wrapper">
                        <div class="swiper-slide"><img src="../../image/confirm_pro_img01.png"></div>
                        <div class="swiper-slide"><img src="../../image/Amazing_Gifts_750x350.png"></div>
                        <div class="swiper-slide"><img src="../../image/Amazing_Gifts_750x350.png"></div>
                    </div>
                    <div class="swiper-pagination ">

                    </div>
                </div>
                <div class="limited-sale">
                    <div class="count-down reservation-ing clearfix">
                        <div class="time-clock">
                            <i class="clock-icon"></i>Super Deal</div>
                        <div class="time-end">
                            Ends in
                            <span class="hour">
                                <em>03</em>
                                <i>H</i>
                            </span>:
                            <span class="minutes">
                                <em>31</em>
                                <i>M</i>
                            </span>:
                            <span class="second">
                                <em>07</em>
                                <i>S</i>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="product">
                    <div class="pro_up">
                        <p class="pro_title">
                            electicelecticelecticelecticelectic
                        </p>
                        <div class="grade"></div>
                    </div>
                    <div class="pro_down">
                        <div class="left_down">
                            USD
                            <svg class="slide-down">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#slide-down"></use>
                            </svg>
                            <span>Add a new address</span>
                            <b>us$95.68</b>
                        </div>

                    </div>
                </div>
                <div class="shipping" @click="showUpShiping">
                    <div class="ship_title">
                        <svg class="plane">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#plane"></use>
                        </svg>
                        Shipping
                    </div>
                    <p>To united states</p>
                    <p class="price">US $1.3</p>
                    <svg class="arrowRight">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrowRight"></use>
                    </svg>
                </div>
                <div class="pro_style">
                    <p class="pro_style_title">color & style</p>
                    <div class="style_content" @click="display_list">
                        <span><img src="../../image/phone_pho02.png" alt=""> white</span>
                        <b></b>
                        <span class="style_gb">6GB+64GB</span> x1
                        <svg class="arrowRight">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrowRight"></use>
                        </svg>
                    </div>
                </div>
                <div class="order_discount">
                    <div class="or_dis_title">
                        bulk order discount
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Qty</td>
                                <td>Qty</td>
                                <td>Qty</td>
                                <td>Qty</td>
                                <td>Qty</td>
                            </tr>
                            <tr>
                                <td>Qty</td>
                                <td>Qty</td>
                                <td>Qty</td>
                                <td>Qty</td>
                                <td>Qty</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="payment">
                    payment
                    <svg class="arrowRight">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrowRight"></use>
                    </svg>
                </div>
                <div class="description">
                    <div class="desc_top payment">
                        Discription
                        <svg class="arrowRight">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrowRight"></use>
                        </svg>
                    </div>
                    <div class="view_all">
                        <div class="view-all">
                            <a href="javascript:;" class="view-all-btn">See All</a>
                        </div>
                    </div>
                </div>
                <review></review>
                <div class="select_price">
                    <div class="mask_layer">
                        <div class="select_price_title">
                            Price
                            <svg class="delete">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#delete"></use>
                            </svg>
                        </div>
                        <div class="price_list">
                            <ul>
                                <li>USD US $154.52</li>
                                <li>USD US $154.52</li>
                                <li>USD US $154.52</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <detail-discription></detail-discription>
            </div>
            <div>
                <review :allComment="true"></review>
            </div>
        </div>
        <div class="guess">
            <div class="guess-head">
                Guess You Like
            </div>
            <guess-you-like :showMargin="true">
            </guess-you-like>
        </div>
        <!-- shipping弹窗 -->
        <div class="select_post" :class="{show_select_post:shipShow}">
            <div class="ship_mask"></div>
            <div class="shipping_select">

                <div class="logi_title">Shopping
                    <svg class="delete" @click="showUpShiping">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#delete"></use>
                    </svg>
                </div>
                <div class="ship_to">
                    <span>Ship to</span>
                    <div class="ship_to_right">
                        <img src="../../image/china_banner.png" alt="">
                        <b>Unite State</b>
                    </div>
                </div>
                <div class="ship_from">
                    <span>Ship from</span>
                    <div class="ship_to_right">
                        <img src="../../image/china_banner.png" alt="">
                        <b>China</b>
                    </div>
                </div>
                <div class="logi_content">
                    <table>
                        <thead>
                            <tr>
                                <th>Method</th>
                                <th>Cost</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border_none">
                                <td class="selec">
                                    <div class="correct">
                                    </div>
                                    Airmail
                                </td>
                                <td>Free Shpping</td>
                                <td>15-35datays</td>
                            </tr>
                            <tr class="border_none">
                                <td class="selec">
                                    <div class="correct">
                                    </div>
                                    Airmail
                                </td>
                                <td>Free Shpping</td>
                                <td>15-35datays</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="logi_confirm">
                    ok
                </div>
            </div>
        </div>
        <!-- color和数量弹窗 -->
        <attribute-layer></attribute-layer>
        <!-- payment部分开始 -->
        <div class="pay_style">
            <div data-v-8e2e2a9e="" class="ship_mask"></div>
            <div class="shipping_select">
                <div class="payment_title">Shopping
                    <svg class="delete" @click="showUpShiping">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#delete"></use>
                    </svg>
                </div>
                <div class="pay_style_list">
                    <ul>
                        <li><img src="../../image/payple-1.png" alt=""></li>
                        <li><img src="../../image/payple-1.png" alt=""></li>
                        <li><img src="../../image/payple-1.png" alt=""></li>
                        <li><img src="../../image/payple-1.png" alt=""></li>
                        <li><img src="../../image/payple-1.png" alt=""></li>
                        <li><img src="../../image/payple-1.png" alt=""></li>
                        <li><img src="../../image/payple-1.png" alt=""></li>

                    </ul>
                </div>
            </div>

        </div>
        <!-- payment部分结束 -->
        <div class="bottom_menu">
            <div class="cart">
                <svg class="addCart">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#addCart"></use>
                </svg>
                <span class="pro_number">15</span>
            </div>
            <button class="addToCart">add to cart</button>
            <button class="buyNow">Buy Now</button>
        </div>

    </div>
</template>

<style>
</style>

<style scoped lang="scss" type="text/css">
@import "@/style/mixin.scss";
.sub-header {
  position: fixed;
  @include tcenter(2rem, 2rem);
  font-size: 0.85rem;
  background: #fff;
  left: 0;
  top: 0;
  z-index: 10;
  .bigSearch {
    position: absolute;
    right: 1.85rem;
    top: 50%;
    transform: translateY(-0.625rem);
    height: 1.25rem;
    width: 1.25rem;
    fill: #666666;
  }
  .more {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-0.625rem);
    height: 1.25rem;
    width: 0.1rem;
    fill: #666666;
  }
}
.change_show_type {
  @include tcenter(2rem, 2rem);
  padding: 0 0.75rem;
  margin-top: 2rem;
  ul {
    display: flex;
    li {
      @include wh(100%, 100%);
      flex: 1;
      font-size: 0.85rem;
      position: relative;
      color: #999;
    }
    li.active {
      color: #1a1a1a;
      &::before {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-1rem);
        @include wh(2rem, 0.1rem);
        background-color: #1a1a1a;
      }
    }
  }
}
.cont_md {
  .detail_overview {
    .detail_swipe_content {
      position: relative;
      @include wh(100%, 18.75rem);
      .detail_swipe {
        width: 100%;
        height: 100%;
        .swiper-slide {
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .swiper-pagination {
        position: absolute;
        left: auto;
        right: 0.75rem;
        bottom: 0.75rem;
        width: 1.65rem;
        min-width: 0.8rem;
        height: 1.65rem;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.3);
        color: #fff;
        font-size: 0.32rem;
        line-height: 1.65rem;
        letter-spacing: -1px;
        span {
          color: #fff;
        }
      }
    }
    .limited-sale {
      height: 1.75rem;
      line-height: 1.75rem;
      background-color: #d74326;
      padding: 0 0.5rem 0 0.75rem;
      .count-down {
        width: 100%;
        height: 100%;
        .time-clock {
          float: left;
          font-size: 0.75rem;
          color: #fff;
          i {
            display: inline-block;
            width: 1rem;
            height: 1.1rem;
            margin-right: 0.4rem;
            background: url("../../image/limit_clock2.png") no-repeat 0 0/1rem
              1.1rem;
            vertical-align: middle;
          }
        }
        .time-end {
          float: right;
          font-size: 0.6rem;
          color: #fff;
          span {
            display: inline-block;
            width: 1.1rem;
            height: 1.05rem;
            font-size: 0.55rem;
            -webkit-border-radius: 4px;
            border-radius: 4px;
            background: #1a1a1a;
            text-align: center;
            vertical-align: middle;
            color: #fff;
            margin-right: 0.15rem;
            em {
              display: block;
              font-size: 0.55rem;
              line-height: 0.55rem;
              font-style: normal;
              margin-top: 0.08rem;
              letter-spacing: 0.02667rem;
              color: #fff;
              margin-top: auto;
            }
            i {
              display: block;
              font-style: normal;
              font-size: 0.45rem;
              line-height: 0.45rem;
              color: #fff;
              letter-spacing: 0.02667rem;
            }
          }
        }
      }
    }
    .product {
      padding: 0.4rem 0.75rem 0 0.75rem;
      background-color: #fff;
      margin-bottom: 0.5rem;
      .pro_up {
        border-bottom: 1px solid #e6e6e6;

        p {
          line-height: 0.85rem;
          text-align: left;
        }
        .grade {
          width: 100%;
          height: 1.4rem;
          background: url("../../image/start.png") no-repeat 0 center/2.75rem
            0.6rem;
        }
      }
      .pro_down {
        height: 2.35rem;
        line-height: 2.35rem;

        .left_down {
          display: inline-block;
          height: 100%;
          float: left;
          color: #666;
          font-size: 0.7rem;
          .slide-down {
            display: inline-block;
            width: 0.6rem;
            height: 0.6rem;
            margin-right: 0.5rem;
          }
          span {
            font-size: 1rem;
            color: #c81623;
            margin-right: 0.7rem;
          }
          b {
            font-size: 0.6rem;
            color: #999;
            text-decoration: line-through;
          }
        }
      }
    }
    // shipping部分
    .shipping {
      height: 3.75rem;
      padding: 0.3rem 0.75rem;
      background-color: #fff;
      margin-bottom: 0.5rem;
      position: relative;
      .ship_title {
        line-height: 1.3rem;
        text-align: left;
        color: #333;
        .plane {
          width: 0.6rem;
          height: 0.6rem;
        }
      }
      p {
        height: 1rem;
        font-size: 0.55rem;
        color: #666;
        line-height: 1rem;
        text-align: left;
      }
      .price {
        color: #e33333;
      }
      .arrowRight {
        width: 0.65rem;
        height: 0.9rem;
        position: absolute;
        right: 0.75rem;
        top: 50%;
        margin-top: -0.45rem;
      }
    }
    // 产品样式
    .pro_style {
      padding: 0 0.75rem;
      height: 3.75rem;
      background-color: #fff;
      margin-bottom: 0.5rem;
      .pro_style_title {
        height: 1.65rem;
        line-height: 1.65rem;
        font-size: 0.7rem;
        color: #333;
        text-align: left;
      }
      .style_content {
        height: 1.4rem;
        width: 100%;
        text-align: left;
        display: flex;
        align-items: center;
        position: relative;
        span {
          display: flex;
          align-items: center;
          width: 4.4rem;
          min-width: 4.4rem;
          height: 1.4rem;
          border: 1px solid #333;
          font-size: 0.6rem;
          color: #1a1a1a;

          img {
            width: 1.3rem;
            height: 1.3rem;
          }
        }
        b {
          display: inline-block;
          width: 0.15rem;
          height: 0.15rem;
          background-color: #999;
          border-radius: 50%;
          margin: auto 0.2rem;
        }
        .style_gb {
          margin-right: 0.5rem;
          justify-content: center;
        }
        .arrowRight {
          width: 0.65rem;
          height: 0.9rem;
          position: absolute;
          right: 0;
        }
      }
    }
    .order_discount {
      padding: 0 0.5rem 0.75rem 0.5rem;
      margin-bottom: 0.5rem;
      background-color: #fff;
      .or_dis_title {
        height: 1.5rem;
        line-height: 1.5rem;
        text-align: left;
        font-size: 0.7rem;
        color: #333;
        padding-left: 0.3rem;
      }
      table {
        tbody {
          tr {
            td {
              width: 3.75rem;
              height: 1.5rem;
              font-size: 0.6rem;
              color: #333;
              text-align: center;
            }
            td:nth-child(1) {
              width: 2.85rem;
              background-color: #ebebeb;
            }
          }
        }
      }
    }
    .payment {
      padding: 0 0.75rem;
      height: 2.1rem;
      line-height: 2.1rem;
      background-color: #fff;
      margin-bottom: 0.5rem;
      font-size: 0.7rem;
      color: #333;
      text-align: left;
      position: relative;
    }
    // 描述部分
    .description {
      height: 5.1rem;
      background-color: #fff;
      margin-bottom: 0.5rem;
      .desc_top {
        font-size: 0.7rem;
        // font-weight: 600;
      }
      .view_all {
        width: 5.3rem;
        height: 1.55rem;
        line-height: 1.55rem;
        font-size: 0.65rem;
        text-align: left;
        padding-left: 1rem;
        border: 0.1rem solid #666;
        margin: 0.4rem auto;
        position: relative;
        display: flex;
        align-items: center;
        a::after {
          content: "";
          position: absolute;
          top: 50%;
          right: 0.8rem;
          width: 0.3rem;
          height: 0.3rem;
          margin-top: -0.15rem;
          border: 1px solid transparent;
          border-top-color: #222;
          border-right-color: #222;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
        }
      }
    }
    .select_price {
      width: 100%;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 51;
      background-color: rgba(0, 0, 0, 0.3);
      line-height: 2.1rem;
      padding: 0 0.75rem;
      display: none;
      .mask_layer {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
        padding: 0 0.75rem;
        background-color: #fff;
        .select_price_title {
          font-size: 0.85rem;
          color: #000;
          text-align: center;
          .delete {
            float: right;
            margin: 0.5rem 0.2rem 0 0;
            width: 1.1rem;
            height: 1.1rem;
          }
        }
        ul {
          li {
            font-size: 0.65rem;
            color: #808080;
            border-bottom: 1px solid #e6e6e6;
          }
          li:last-child {
            border-bottom: none;
          }
        }
      }
    }
  }
}
.guess {
  margin-bottom: 2.75rem;
  .guess-head {
    height: 2.3rem;
    line-height: 2.3rem;
    margin: 0 0.75rem;
    color: #2d2323;
    font-size: 0.75rem;
    font-weight: 600;
  }
}
.select_post {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 55;
  width: 100%;
  height: 100%;
  display: none;
  .ship_mask {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 56;
  }
  .shipping_select {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 57;
    width: 100%;
    max-height: 84%;
    overflow-x: hidden;
    overflow-y: auto;
    animation: layerDownFadeIn 0.2s linear;
    animation-fill-mode: forwards;
    padding: 0 0.75rem;
    background-color: #fff;

    .logi_title {
      width: 100%;
      height: 1.8rem;
      line-height: 1rem;
      text-align: center;
      font-size: 0.85rem;
      color: #000;
      padding-top: 0.5rem;
      // border-top: 1px solid #e6e6e6;
      .delete {
        float: right;
        margin: 0 0.2rem 0 0;
        width: 1.1rem;
        height: 1.1rem;
      }
    }
    .ship_to,
    .ship_from {
      font-size: 0.75rem;
      color: #3333;
      height: 2.35rem;
      line-height: 2.35rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
      }
      .ship_to_right {
        position: relative;
        height: 1.5rem;
        width: 12.8rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border: 1px solid #e6e6e6;
        img {
          width: 1rem;
          height: 0.65rem;
          margin: 0 0.7rem 0 0.5rem;
        }
      }
    }
    .ship_to > .ship_to_right::after {
      content: "";
      position: absolute;
      right: 0.9em;
      top: 0.4rem;
      width: 0.55rem;
      height: 0.55rem;
      border-right: 1px solid #666;
      border-top: 1px solid #666;
      -webkit-transform: rotateZ(45deg);
      transform: rotateZ(45deg);
    }
    .logi_content {
      padding: 0.4rem 0 0.8rem 0;
      // font-size: ;
      table {
        width: 100%;
        thead {
          height: 1.5rem;
          font-size: 0.55rem;
          color: #1a1a1a;
          background: #f2f2f2;
          tr {
            th {
              height: 1.5rem;
              width: 5.5rem;
              border-bottom: none;
            }
          }
        }
        tbody {
          height: 1.5rem;
          font-size: 0.55rem;
          color: #1a1a1a;
          .border_none {
            td {
              height: 1.5rem;
              width: 5.5rem;
              border-top: none;
              text-align: center;
            }
            .selec {
              align-items: center;
              .correct {
                display: inline-block;
                width: 0.9rem;
                height: 0.9rem;
                margin: 0 0.5rem 0 0;
                border: 1px solid #e6e6e6;
                border-radius: 50%;
                vertical-align: middle;
              }
            }
          }
          tr {
            td {
              height: 1.5rem;
              width: 5.5rem;
              // border-top: none;
              text-align: center;
            }
            .selec {
              align-items: center;
              .correct {
                width: 0.9rem;
                height: 0.9rem;
                margin: 0 0.85rem 0 0.4rem;
                border: 1px solid #e6e6e6;
                border-radius: 50%;
              }
            }
          }
        }
      }
    }
    .logi_confirm {
      height: 2.25rem;
      line-height: 2.25rem;
      color: #fff;
      font-size: 0.75rem;
      text-align: center;
      background-color: #1a1a1a;
    }
  }
}
.show_select_post.select_post {
  display: block;
}
// payment部分开始
.pay_style {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 70;
  width: 100%;
  height: 100%;
  display: none;

  .ship_mask {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 71;
  }
  .shipping_select {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 72;
    width: 100%;
    max-height: 84%;
    overflow-x: hidden;
    overflow-y: auto;
    animation: layerDownFadeIn 0.2s linear;
    animation-fill-mode: forwards;
    padding: 0 0.75rem;
    background-color: #fff;
    padding-bottom: 4rem;
    .payment_title {
      width: 100%;
      height: 1.8rem;
      line-height: 1rem;
      text-align: center;
      font-size: 0.85rem;
      color: #000;
      padding-top: 0.5rem;
      .delete {
        float: right;
        margin: 0 0.2rem 0 0;
        width: 1.1rem;
        height: 1.1rem;
      }
    }
    .pay_style_list{

        ul{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-around;
            li{
                width: 3.5rem;
                height: 1.3rem;
                border:1px solid #e6e6e6;
                margin-top: .75rem;
                img{
                    width: 100%;
                }
            }
        }
    }
  }
}
// payment部分结束

// 底部菜单栏
.bottom_menu {
  width: 100%;
  height: 2.5rem;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  padding: 0 0.75rem;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  z-index: 60;
  .cart {
    width: 2.25rem;
    height: 1.75rem;
    border-right: 1px solid #ccc;
    position: relative;

    .addCart {
      position: absolute;
      left: 0;
      bottom: 0;
      top: 0;
      width: 1.35rem;
      height: 1.25rem;
      margin: auto;
    }
    .pro_number {
      @include wh(0.9rem, 0.9rem);
      line-height: 0.9rem;
      background-color: #d74326;
      position: absolute;
      top: -0.1rem;
      right: 0.6rem;
      color: #fff;
      border-radius: 50%;
      font-size: 0.5rem;
      text-align: center;
    }
  }
  button {
    width: 6.75rem;
    height: 2rem;
    line-height: 2rem;
    background-color: #df7b18;
    border-radius: 4px;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 600;
    text-align: center;
    margin-left: 0.6rem;
  }
  .buyNow {
    background-color: #e4341d;
    margin-left: 0.7rem;
  }
}
table,
table tr th,
table tr td {
  border: 1px solid #ccc;
}
table {
  border-collapse: collapse;
}
.arrowRight {
  width: 0.65rem;
  height: 0.9rem;
  position: absolute;
  right: 0.75rem;
  top: 50%;
  margin-top: -0.45rem;
}
// 设置星
.total-star,
.star {
  position: relative;
  width: 5rem;
  height: 1rem;
  background: #e0e0e0;
  float: left;
  .gold-star {
    z-index: 1;
    background: #ff9800;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .transparent-star {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: url("../../image/star02@2x.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }
}
@keyframes layerDownFadeIn {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
</style>

<script>
import topHeader from "@/components/common/topheader";
import guessYouLike from "@/components/common/guessYouLike";
import detailDiscription from "@/components/common/detailDiscription";
import review from "@/components/common/review";
import attributeLayer from "./attributeLayer";

export default {
  data() {
    return {
      title: "Details",
      shipShow: false,
      styleShow: false
    };
  },
  mounted() {
    this.$nextTick(() => {
      new Swiper(".swiper-container", {
        // pagination: ".swiper-pagination",
        // loop: true,
        autoplay: 1000,
        pagination: ".swiper-pagination",
        paginationType: "fraction"
      });
    });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    showUpShiping() {
      this.shipShow = !this.shipShow;
    },
    display_list() {
      this.styleShow = !this.styleShow;
    }
  },
  components: {
    topHeader,
    guessYouLike,
    detailDiscription,
    review,
    attributeLayer
  }
};
</script>


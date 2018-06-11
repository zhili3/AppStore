<template>
    <div class="container">
        <div class="confirmOrHeader">
            <top-header :titleBar="title"></top-header>
        </div>
        <section class="address-part">
            <div class="add-address">
                Ship to
                <div class="add-ads">
                    <svg class="add">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#add"></use>
                    </svg>
                    <span>Add a new address</span>
                </div>
            </div>
            <div class="show-address">
                <div class="name"> Jason Wu</div>
                <div class="state">137 W San Bernardino Rd</div>
                <div class="country">
                    New York ARMED
                </div>
                <div class="phone">0755-0394</div>
                <svg class="arrowRight">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrowRight"></use>
                </svg>
            </div>
        </section>
        <section class="shopping">
            <div class="shop-method">
                Shopping Methods
            </div>
            <div class="pinkage">
                <div class="express_show">
                    <span>Airmail</span>
                    <b>15-35 business days</b>
                </div>
                <div class="select_shop">
                    Free shopping
                    <svg class="arrowRight">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrowRight"></use>
                    </svg>
                </div>
            </div>
        </section>
        <section class="pay_way">
            <div class="pay-method-head">
                Pay width
            </div>
            <div class="pay-style-list">
                <label for="paypal" class="paypal sel">
                    <input type="radio" id="paypal" name="select_pay">
                    <div class="pay-brand">
                        <img src="../../image/payple-1.png" alt="">
                    </div>
                </label>
                <label for="qiwi" class="paypal ">
                    <input type="radio" id="qiwi" name="select_pay">
                    <div class=" cart-pay">
                        <span>Creadit Card</span>
                        <img src="../../image/card_pay.png" alt="">
                    </div>
                </label>
                <label for="webMoney" class="paypal ">
                    <div>
                        <input type="radio" id="webMoney" name="select_pay">
                        <div class="qiwi_pay">
                            <img src="../../image/qiwi_pay.png" alt="">
                        </div>
                    </div>

                </label>
                <label for="webMoney" class="paypal">
                    <input type="radio" id="webMoney" name="select_pay">
                    <div class="pay-brand">
                        <img src="../../image/web_money.png" alt="">
                    </div>
                </label>
            </div>
        </section>
        <section class="coupon">
            <div class="reward">
                <div class="reward_left left">
                    <h3>User Reward Point 282</h3>
                    <p>Coupons cannot be used together width Points to reduce prices</p>
                </div>
                <div class="reward_right right">
                    <label for="re_points" class="sel">
                        -US $2.82
                        <input type="radio" id="re_points">
                    </label>
                </div>
            </div>
            <div class="promo_code">
                <span>Use Promo Code / Coupon</span>
                <div class="promo_coupon">
                    <svg class="coupon">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#coupon"></use>
                    </svg>
                </div>
                <svg class="arrowRight">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrowRight"></use>
                </svg>
            </div>
            <div class="apply_code">
                <div class="apply_up">
                    <input type="text" placeholder="Enter Promo Code">
                    <button>Apply</button>
                </div>
                <div class="apply_down">
                    <p class="left">
                        USD <br>$5.0
                    </p>
                    <p class="right">
                        <i>For a purchase over $50</i>
                        <b>For a purchase over $50</b>
                        <span>For a purchase over $50</span>
                    </p>
                    <label for="coupon_ri" class="active">
                        <input type="radio" id="coupon_ri">
                    </label>

                </div>
            </div>
            <div></div>
        </section>
        <section class="proList">
            <div class="proTitle">
                Product List
            </div>
            <div class="proContent">
                <ul>
                    <li>
                        <div class="pro-left">
                            <img src="../../image/confirm_pro_img01.png" alt="">
                        </div>
                        <div class="pro-right">
                            <p>xiaomi mi mix 2s core android android </p>
                            <P>us $45.85</P>
                            <P>us $45.85
                                <span>x1</span>
                            </P>
                        </div>
                    </li>
                    <li>
                        <div class="pro-left">
                            <img src="../../image/confirm_pro_img01.png" alt="">
                        </div>
                        <div class="pro-right">
                            <p>xiaomi mi mix 2s core android android </p>
                            <P>us $45.85</P>
                            <P>us $45.85</P>
                        </div>
                    </li>
                    <li>
                        <div class="pro-left">
                            <img src="../../image/confirm_pro_img01.png" alt="">
                        </div>
                        <div class="pro-right">
                            <p>xiaomi mi mix 2s core android android </p>
                            <P>us $45.85</P>
                            <P>us $45.85</P>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="proTotal">
                <h3>SubTotal
                    <span>$158.25</span>
                </h3>
                <h3>Shipping Cost
                    <span>$2.5</span>
                </h3>
                <h3>Shipping Cost
                    <span>$2.5</span>
                </h3>
                <p>Shipping Cost
                    <span>$2.5</span>
                </p>

            </div>
        </section>
        <section class="logistics">
            <div class="logi_title">Shopping
                <svg class="delete">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#delete"></use>
                </svg>
            </div>
            <div class="logi_shop_title">Bulk Order Discount</div>
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
        </section>
        <footer class="submit">
            <div class="total_money">
                <p>Total:
                    <span>u$21.25</span>
                </p>
                <p>Your saved:
                    <span>U￥23.25</span>
                </p>
            </div>
            <div class="con_submit">Submit Order</div>
        </footer>

    </div>
</template>

<style scoped lang="scss" type="text/css">
@import "@/style/mixin.scss";
.container {
  .confirmOrHeader {
    height: 2rem;
    width: 100%;
    box-sizing: content-box;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    border-bottom: 1px solid #e6e6e6;
  }
  .address-part {
    background-color: #fff;
    // border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
    padding: 0 0.625rem;
    margin-bottom: 0.5rem;
    margin-top: 2rem;
    .add-address {
      height: 2rem;
      line-height: 2rem;
      font-size: 0.7rem;
      padding-left: 0.15rem;
      border-bottom: 1px solid #e6e6e6;
      .add-ads {
        height: 100%;
        float: right;
        position: relative;
        padding-left: 0.85rem;
        font-size: 0.6rem;
        color: #333;
        .add {
          position: absolute;
          left: 0;
          top: 0.7rem;
          // margin-top: 0.7rem;
          width: 0.675rem;
          height: 0.675rem;
        }
      }
    }
    .show-address {
      padding: 0.7rem 0.35rem;
      position: relative;
      .name {
        height: 1.5rem;
        line-height: 1.5rem;
        font-size: 0.7rem;
        color: #1a1a1a;
      }
      .state,
      .country,
      .phone {
        height: 0.75rem;
        line-height: 0.75rem;
        color: #666;
        font-size: 0.6rem;
      }
    }
  }
  .shopping {
    border-bottom: 1px solid #e6e6e6;
    background-color: #fff;
    margin-bottom: 0.5rem;
    padding: 0 0.625rem;
    .shop-method {
      border-bottom: 1px solid #e6e6e6;
      height: 2.05rem;
      line-height: 2.05rem;
      font-size: 0.7rem;
      color: #000000;
      padding-left: 0.15rem;
    }
    .pinkage {
      padding-left: 0.35rem;
      height: 2.4rem;
      .express_show {
        float: left;
        height: 2.4rem;
        line-height: 1.2rem;
        font-size: 0.65rem;
        color: #000000;
        span {
          display: block;
          color: #000000;
        }
        b {
          color: #333;
          font-size: 0.6rem;
        }
      }
    }
    .select_shop {
      float: right;
      height: 2.4rem;
      line-height: 2.4rem;
      position: relative;
      font-size: 0.65rem;
      color: #000000;
      font-weight: 900;
      padding-right: 1rem;
    }
  }
  .pay_way {
    background-color: #fff;
    margin-bottom: 0.5rem;
    padding: 0 0.625rem;
    .pay-method-head {
      height: 2rem;
      line-height: 2rem;
      font-size: 0.7rem;
      color: #000000;
      padding-left: 0.15rem;
    }
    .pay-style-list {
      label {
        display: block;
        width: 100%;
        height: 2.25rem;
        border-bottom: 1px solid #e6e6e6;
        position: relative;
        .pay-brand {
          height: 100%;
          position: absolute;
          left: 1.75rem;
          top: 0;
          padding: 0.125rem 0;
          img {
          }
        }
        .qiwi_pay {
          height: 100%;
          position: absolute;
          left: 1.3rem;
          top: 0;
          img {
            height: 100%;
          }
        }
        .cart-pay {
          position: absolute;
          left: 1.75rem;
          top: 0;
          width: 100%;
          span {
            font-size: 0.65rem;
            line-height: 2.25rem;
            font-weight: 900;
            height: 2.25rem;
          }
          img {
            width: 7.25rem;
            height: 0.85rem;
            padding-left: 0.75rem;
            vertical-align: middle;
          }
        }
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 6px;
          bottom: 0;
          width: 14px;
          height: 14px;
          margin: auto;
          border: 1px solid #9b9b9b;
          border-radius: 50%;
        }
        &::after {
          content: "";
          width: 6px;
          height: 6px;
          position: absolute;
          top: 0;
          left: 6px;
          bottom: 0;
          margin: auto 5px;
          border-radius: 50%;
        }
        input {
          // opacity: 0;
        }
      }
      label.sel {
        border: 1px solid #eb6519;
        &::before {
          content: "";
          border-color: #eb6519;
        }
        &::after {
          content: "";
          background-color: #eb6519;
        }
      }
    }
  }
  //   优惠券部分
  .coupon {
    padding: 0 0.75rem;
    background-color: #fff;
    margin-bottom: 0.5rem;
    .reward {
      height: 2.8rem;
      width: 100%;
      border-bottom: 1px solid #e6e6e6;
      .reward_left {
        height: 100%;
        width: 68%;
        padding: 0.3rem 0 0.3rem 0.25rem;
        h3 {
          line-height: 1rem;
          font-size: 0.65rem;
          color: #333;
        }
        p {
          line-height: 0.6rem;
          font-size: 0.5rem;
          color: #999;
        }
      }
      .reward_right {
        width: 30%;
        height: 100%;
        label {
          display: block;
          width: 100%;
          height: 100%;
          line-height: 2.8rem;
          font-size: 0.65rem;
          color: #808080;
          position: relative;
          &::before {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            width: 25px;
            height: 15px;
            margin: auto;
            border: 1px solid #bdbdbd;
            border-radius: 14px;
          }
          &::after {
            content: "";
            width: 11px;
            height: 11px;
            background-color: #bdbdbd;
            position: absolute;
            top: 0;
            right: 8px;
            bottom: 0;
            margin: auto 5px;
            border-radius: 50%;
          }
          input {
            // opacity: 0;
          }
        }
        label.sel {
          &::before {
            border: 1px solid #eb6519;
          }
          &::after {
            background-color: #eb6519;
            right: 3px;
            margin: auto 0 auto 0;
          }
        }
      }
    }
    .promo_code {
      height: 2.8rem;
      width: 100%;
      border-bottom: 1px solid #e6e6e6;
      position: relative;
      display: flex;
      align-items: center;
      span {
        display: inline-block;
        line-height: 2.8rem;
        font-size: 0.65rem;
        color: #333;
      }
      .promo_coupon {
        .coupon {
          margin-left: 0.55rem;
          width: 1.25rem;
          height: 0.85rem;
        }
      }
      .arrowRight {
        transform-origin: -50% 50%;
        transition: transform 0.3s;
        transform: rotate(-90deg);
      }
    }
    .apply_code {
      border-bottom: 1px solid #e6e6e6;
      .apply_up {
        height: 3rem;
        padding: 0.75rem 0.125rem;
        input {
          font-size: 0.65rem;
          width: 12.375rem;
          padding: 0 0.4rem;
          margin-right: 0.5rem;
          color: #999;
          height: 1.5rem;
          border: 1px solid #b3b3b3;
          border-radius: 4px;
        }
        button {
          width: 3.8rem;
          height: 1.5rem;
          background-color: #fff;
          border: 1px solid #b3b3b3;
          font-size: 0.65rem;
          color: #333;
          border-radius: 4px;
        }
      }
      .apply_down {
        height: 3.75rem;
        width: 100%;
        margin: 0.3rem 0;
        border-radius: 4px;
        overflow: hidden;
        display: flex;
        position: relative;
        background: url("../../image/coupon01.png") no-repeat 0 0/100% 100%;
        p.left {
          height: 100%;
          line-height: 1.15rem;
          padding: 0.75rem 0;
          width: 5.1rem;
          font-size: 1rem;
          color: #fff;
          text-align: center;
        }
        p.right {
          flex: 1;
          padding: 0.5rem 0.75rem;
          i {
            display: block;
            line-height: 0.9rem;
            font-style: normal;
            font-size: 0.6rem;
            color: #333;
          }
          b {
            display: block;
            font-weight: 500;
            font-size: 0.7rem;
            line-height: 1rem;
          }
          span {
            display: block;
            font-size: 0.5rem;
            line-height: 0.9rem;
            color: #999;
          }
        }
        label {
          position: absolute;
          right: 0.5rem;
          top: 0.5rem;
          width: 13px;
          height: 13px;
          border: 1px solid #b3b3b3;
          border-radius: 50%;
        }
        .active {
          border: 1px solid #eb6519;
          &::before {
            content: "";
            width: 6px;
            height: 6px;
            background-color: #eb6519;
            position: absolute;
            top: 1px;
            left: -1px;
            bottom: 0;
            margin: auto 5px;
            border-radius: 50%;
          }
        }
      }
    }
  }
  // 产品列表部分
  .proList {
    margin-bottom: 3rem;
    background-color: #fff;
    .proTitle {
      padding: 0 0.625rem;
      height: 2rem;
      line-height: 2rem;
      font-size: 0.7rem;
      color: #000000;
    }
    .proContent {
      padding: 0 0.625rem;
      border-top: 1px solid #e6e6e6;
      border-bottom: 1px solid #e6e6e6;
      li {
        width: 100%;
        height: 3.9rem;
        display: flex;
        padding: 0.45rem 0;
        border-bottom: 1px solid #e6e6e6;
        .pro-left {
          width: 3.5rem;
          height: 3rem;
          padding: 0 0.25rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .pro-right {
          flex: auto;
          padding-left: 0.4rem;
          p {
            line-height: 1rem;
            // width: 10.75rem;
            width: 100%;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            span {
              float: right;
              color: #333;
            }
          }
          p:nth-child(1) {
            font-size: 0.65rem;
            color: #333;
          }
          p:nth-child(2) {
            font-size: 0.55rem;
            color: #999;
          }
          p:nth-child(3) {
            font-size: 0.7rem;
            color: #000000;
          }
        }
      }
      li:last-child {
        border-bottom: none;
      }
    }
    .proTotal {
      padding: 0.625rem;
      font-size: 0.65rem;
      // height: 6.2rem;
      border-bottom: 1px solid #e6e6e6;
      h3 {
        line-height: 1.1rem;
        color: #4c4c4c;
      }
      p {
        line-height: 1.4rem;
        color: #000;
        // font-weight: 600;
        span {
          color: #000;
        }
      }
      span {
        float: right;
        color: #4c4c4c;
      }
    }
  }
  // 物流弹窗
  .logistics {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 11;
    width: 100%;
    background-color: #fff;
    .logi_title {
      width: 100%;
      height: 1.8rem;
      line-height: 1rem;
      text-align: center;
      font-size: 0.85rem;
      color: #000;
      padding: .5rem 0.75rem 0 .75rem;
      border-top: 1px solid #e6e6e6;
      .delete {
        float: right;
        margin: 0 0.2rem 0 0;
        width: 1.1rem;
        height: 1.1rem;
      }
    }
    .logi_shop_title{
        padding:0 .75rem;
        height: 1.15rem;
        line-height: .75rem;
        padding-bottom: .4rem;
        font-size: .7rem;
        color:3333;
    }
    .logi_content {
      padding: 0 0.75rem 0.8rem 0;
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
  // 底部提交
  .submit {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 5;
    height: 2.5rem;
    background-color: #fff;
    border-top: 1px solid #e6e6e6;
    padding: 0 0.625rem;
    display: flex;
    align-items: center;
    .total_money {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
      width: 9.25rem;
      font-size: 0.65rem;
      color: #333;
      p {
        line-height: 1.1rem;
      }
      p:nth-child(1) {
        span {
          font-size: 0.85rem;
          color: $themeColor;
        }
      }
      p:nth-child(2) {
        color: #999;
      }
    }
    .con_submit {
      width: 7.5rem;
      height: 1.75rem;
      line-height: 1.75rem;
      background-color: $themeColor;
      border-radius: 4px;
      color: #fff;
      font-size: 0.75rem;
      font-weight: 600;
      text-align: center;
    }
  }
}

.arrowRight {
  width: 0.35rem;
  height: 0.6rem;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-0.3rem);
  fill: #666;
}
table,
table tr th,
table tr td {
  border: 1px solid #ccc;
}

table {
  border-collapse: collapse;
}
</style>

<script>
import topHeader from "@/components/common/topheader";

export default {
  data() {
    return {
      title: "Place Order",
      check: ""
    };
  },
  components: {
    topHeader
  }
};
</script>


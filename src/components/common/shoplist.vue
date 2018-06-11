<template>
  <div class="shop-seller">
    <div class="seller">Top Sellers</div>
    <div class="all-list-shop">
      <div class="top-list">
        <ul class="listAll">
          <li class="list">
            <div class="li-left">
              <span>123</span>
              <div class="shopPhoto"></div>
            </div>
            <div class="right-text">
              <p>OnePlus 5t OnePlus 5t OnePlus 5t  OnePlus 5t</p>
              <div class="star">

              </div>
              <div class="price">US
                <span>$45.48</span>
              </div>
            </div>
          </li>
          <li class="list">
            <div class="li-left">
              <span>123</span>
              <div class="shopPhoto"></div>
            </div>
            <div class="right-text">
              <p>OnePlus 5t OnePlus 5t OnePlus 5t </p>
              <div class="star">

              </div>
              <div class="price">US
                <span>$45.48</span>
              </div>
            </div>
          </li>
          <li class="list">
            <div class="li-left">
              <span>123</span>
              <div class="shopPhoto"></div>
            </div>
            <div class="right-text">
              <p>OnePlus 5t OnePlus 5t OnePlus 5t </p>
              <div class="star">

              </div>
              <div class="price">US
                <span>$45.48</span>
              </div>
            </div>
          </li>
          <li class="list">
            <div class="li-left">
              <span>123</span>
              <div class="shopPhoto"></div>
            </div>
            <div class="right-text">
              <p>OnePlus 5t OnePlus 5t OnePlus 5t </p>
              <div class="star">
              </div>
              <div class="price">US
                <span>$45.48</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="see-all-sellers">See All Sellers
        <svg class="arrow-right">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrowRight"></use>
        </svg>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped  type="text/css">
@import "../../style/mixin";

.seller {
  height: 2.5rem;
  line-height: 2.5rem;
  padding: 0 0.75rem;
  font-size: 0.75rem;
  font-family:  Helvetica;
  font-weight: 600;
  color: black;
}
.all-list-shop {
  margin: 0 0.75rem;
  border-radius: .5rem;
  background: #fff;
  box-shadow: 0 0.25rem 0.25rem #f3f3f3;
  .top-list {
    padding: 0 0.75rem;
    ul.listAll {
      .list {
        overflow: hidden;
        border-bottom: 1px solid #e6e6e6;
        padding: 0.5rem 0;
        height: 4.25rem;
        .li-left {
          width: 5rem;
          height: 100%;
          box-sizing: border-box;
          float: left;
          span {
            float: left;
            width: 0.75rem;
            height: 0.9rem;
            margin: 0 .25rem;
            @include ft(0.6rem, 0.6rem);
            color: #fff;
            text-align: center;
            background: url("../../image/icon/jx-882.png") no-repeat 0 0/100%;
            // float: left;
          }
          .shopPhoto {
            float: left;
            width: 3rem;
            height: 3rem;
            background: url("../../image/pho-5421.png") no-repeat 0 0/100%;
          }
        }
        .right-text {
          width: 68%;
          height: 100%;
          box-sizing: border-box;
          float: left;
          p {
            height: 1rem;
            line-height: 1rem;
            font-size: 0.65rem;
            color: #333;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
          .star {
            width: 100px;
            height: 1.2rem;
            background: url("../../image/start.png") no-repeat 0 0/100%;
          }
          .price {
            color: #c81623;
            font-size: .75rem;
            height: 1.25rem;
            font-size: 0.65rem;
            line-height: 1.25em;
            span {
              color: #c81623;

            }
          }
        }
      }
      .list:last-child {
        border-bottom: none;
      }
    }
  }
  .see-all-sellers {
    height: 2.25rem;
    line-height: 2.25rem;
    text-align: center;
    color: #343434;
    font-size:0.65rem;
    background-color: #f5f5f5;
    .arrow-right {
      display: inline-block;
      vertical-align: middle;
      width: 0.35rem;
      height: 0.5rem;
      margin-left:.6rem;
    }
  }
}
</style>
<script>
export default {
  data() {
    return {};
  }
};
</script>

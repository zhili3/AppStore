<template>
    <div class="container">
        <div class="review" :class="{all:allComment}">
            <div class="block-title">Review</div>
            <div class="review_star">
                <div class="total-star">
                    <span class="gold-star" style="width: 92%;"></span>
                    <span class="transparent-star"></span>
                </div>
                <div class="total-score">
                    26 Reviews
                </div>
            </div>
            <div class="block-con">
                <div class="review-item">
                    <div class="user-star">
                        <div class="star">
                            <span class="gold-star" style="width: 100%;"></span>
                            <span class="transparent-star"></span>
                        </div>
                        <div class="user">
                            <span class="user-name">S***o</span>
                        </div>
                    </div>
                    <div class="review-text">
                        Excellent price, fast delivery, store.</div>
                    <div class="review-pic">
                        <div class="swiper-container ">
                            <div class="swiper-wrapper">
                                <div class="review-pic-item swiper-slide swiper-slide-active">
                                    <div class="pic-item-con"><img src="../../image/phone-001.png" alt=""></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="attribute-date">
                        <div class="date">2018.05.22 21:57</div>
                    </div>
                </div>
            </div>
            <div class="view-all">
                <a href="javascript:;" class="view-all-btn">See All</a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss" type="text/css">
.review {
  background-color: #fff;
  padding: 0 0.75rem;
  margin-bottom: 0.5rem;
  padding-bottom: 0.75rem;
  text-align: left;
  .block-title {
    height: 1.3rem;
    line-height: 1.6rem;
    font-size: 0.7rem;
    color: #333;
  }
  .review_star {
    height: 1.75rem;
    line-height: 1.3rem;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    align-items: center;
    .total-star {
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
    .total-score {
      float: left;
      margin-left: 0.75rem;
      font-size: 0.6rem;
      color: #999;
      //   margin-top: 0.3rem;
    }
  }
  .block-con {
    .review-item {
      .user-star {
        height: 1.5rem;
        line-height: 1.5rem;
        padding-top: 0.3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .star {
          width: 2.75rem;
          height: 0.6rem;
          display: inline-block;
          position: relative;
          background: #e0e0e0;
          vertical-align: middle;
          .gold-star {
            z-index: 1;
            background: #ff9800;
            position: absolute;
            top: 0;
            left: 0;
            width: 80%;
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
        .user {
          font-size: 0.6rem;
          color: #666;
        }
      }
      .review-text {
        height: 0.9rem;
        line-height: 0.9rem;
        font-size: 0.6rem;
        color: #333;
      }
      .review-pic {
        width: 100%;
        height: 2.65rem;
        margin-top: 0.2rem;
        .swiper-container {
          width: 100%;
          height: 2.65rem;
          .review-pic-item {
            width: 2.65rem;
            height: 2.65rem;
            img {
              width: 2.65rem;
              height: 2.65rem;
            }
          }
        }
      }
      .attribute-date {
        height: 1.2rem;
        line-height: 1.2rem;
        font-size: 0.55rem;
        .date {
          color: #999;
        }
      }
    }
  }
  .view-all {
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
.review.all {
  .block-title {
    display: none;
  }
  .review_star {
    .total-score {
      padding-left: 0.5rem;
      height: 0.75rem;
      line-height: 0.75rem;
      border-left: 1px solid #999;
    }
  }
  .block-con {
    border-bottom: 1px solid #e0e0e0;
  }
  .view-all {
    display: none;
  }
}
</style>
<script>
export default {
  data() {
    return {};
  },
  props: ["allComment"]
};
</script>


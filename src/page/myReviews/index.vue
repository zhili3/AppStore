<template>
    <div class="container">
        <top-header :titleBar="title" class="header"></top-header>
        <div class="review_list">
            <div class="menu">
                <span class="postReview" @click="changeState" :class="{active : isActive}">Post Reviews</span>
                <span class="Review" @click="changeState" :class="{active : !isActive}">Reviewed</span>
            </div>
            <section class="list">
                <div class="post_list" :style="{display: (isActive ? 'block' : 'none')}">
                    <div class="awite_comment">
                        <p>
                            <span>Order_details</span>
                            <span>Operating</span>
                        </p>
                        <div class="awi_comment_list">
                            <ul>
                                <li>
                                    <img src="../../image/review.png" alt="">
                                    <div class="pro_details">Excellent price, fast delivery, storeExcellent price, fast delivery, storeExcellent price, fast delivery, store</div>
                                    <router-link to="/myReviews/postReview" class="toReview">
                                        Review
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="post_emmet">
                        <div class="circle">

                        </div>
                        <p>There is no review yet!</p>
                    </div>
                </div>
                <div class="view_list" :style="{display: (isActive ? 'none' : 'block')}">
                    <div class="review">
                        <div class="block-con">
                            <div class="review-item">
                                <div class="user-star">
                                    <div class="star">
                                        <span class="gold-star"></span>
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
                                <div class="goods_detail">
                                    <img src="../../image/review.png" alt="">
                                    <div class="detail">
                                        <p>Excellent price, fast delivery, store.</p>
                                        <p>$15.52</p>
                                    </div>
                                </div>
                                <div class="menu_pro">

                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="already_emmet">
                        <div class="circle">

                        </div>
                    </div>
                    <p>There is no review yet!</p>
                </div>
            </section>
        </div>
        <router-view>

        </router-view>
    </div>
</template>

<style scoped lang="scss" type="text/css">
.header {
  width: 100%;
  height: 2rem;
  box-sizing: content-box;
  border-bottom: 1px solid #e6e6e6;
}
.review_list {
  .menu {
    padding: 0.5rem 0.65rem;
    width: 100%;
    height: 2.5rem;
    background-color: #fff;
    span {
      text-align: center;

      width: 50%;
      float: left;
      height: 1.5rem;
      line-height: 1.5rem;
      font-size: 0.6rem;
      color: #808080;
      border: 1px solid #ccc;
    }
    .active {
      color: #000;
      border-bottom: none;
    }
    span:nth-child(2) {
      border-left: none;
    }
  }
  .list {
    .post_list {
      background-color: #fff;
      padding: 0 0.65rem;
      .awite_comment {
        p {
          height: 1.5rem;
          line-height: 1.5rem;
          background-color: #f0f0f0;
          font-size: 0.6rem;
          color: #333;
          span {
            float: left;
            width: 74%;
            height: 100%;
            text-align: center;
          }
          span:nth-child(2) {
            width: 24%;
          }
        }
        .awi_comment_list {
          width: 100%;
          ul {
            width: 100%;

            li {
              display: flex;
              align-items: center;
              height: 3.75rem;
              padding: 0.55rem 0;
              font-size: 0.6rem;
              border-bottom: 1px solid #e6e6e6;

              img {
                width: 2.35rem;
                height: 2.35rem;
              }
              .pro_details {
                padding: 0.35rem;
                flex: auto;
                line-height: 1rem;
                color: #333;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              }
              .toReview {
                width: 3.5rem;
                height: 1.25rem;
                padding: 0 0.75rem;
                line-height: 1.25rem;
                background-color: #eb6519;
                border-radius: 4px;
                text-align: center;
                color: #fff;
                margin-right: 0.75rem;
              }
            }
          }
        }
      }
      .post_emmet {
        width: 100%;
        // height: 7.5rem;
        .circle {
          width: 7.5rem;
          height: 7.5rem;
          border-radius: 50%;
          background: #f5f5f5 url("../../image/reviewnohave.png") no-repeat
            center 60%/60%;
          margin: 0 auto;
        }
        p {
          margin-top: 0.75rem;
          height: 1.15rem;
          line-height: 1.15rem;
          text-align: center;
          font-size: 0.65rem;
          color: #666;
        }
      }
    }
    .view_list {

      background-color: #fff;
      .review {
        background-color: #fff;
        // padding: 0 0.75rem;
        padding: 0 0.75rem 0.75rem;
        border-bottom: 1px solid #e0e0e0;
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
            .goods_detail {
              width: 100%;
              height: 2.5rem;
              margin-top: .7rem;
              display: flex;
              align-items: center;
              img {
                width: 2.65rem;
                height: 2.65rem;
              }
              .detail {
                  flex: auto;
                  padding-left: .5rem;
                  background: #f5f5f5;
                  p{
                    font-size: .6rem;
                    text-align: left;
                    margin:0;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    color:#000;
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
      .already_emmet {
        width: 100%;
        // height: 7.5rem;
        .circle {
          width: 7.5rem;
          height: 7.5rem;
          border-radius: 50%;
          background: #f5f5f5 url("../../image/big_mes.png") no-repeat center
            60%/60%;
          margin: 0 auto;
        }
      }
      p {
        margin-top: 0.75rem;
        height: 1.15rem;
        line-height: 1.15rem;
        text-align: center;
        font-size: 0.65rem;
        color: #666;
      }
    }
  }
}
</style>
<script>
import topHeader from "@/components/common/topheader";
export default {
  data() {
    return {
      title: "My Reviews",
      isActive: true
    };
  },
  components: {
    topHeader
  },
  methods: {
    changeState() {
      this.isActive = !this.isActive;
    }
  }
};
</script>


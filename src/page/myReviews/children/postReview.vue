<template>
    <div class="emmit_comment">
        <top-header :titleBar="title" class="header"></top-header>
        <div class="pro_detail">
            <div class="pro_title">
                <div class="goods_detail">
                    <img src="../../../image/review.png" alt="">
                    <div class="detail">
                        <p>Excellent price, fast delivery, store.</p>
                        <p>$15.52</p>
                    </div>
                </div>
            </div>
            <div class="pro_star">
                <p>Rating</p>
                <div class="user-star">
                    <div class="star">
                        <span class="gold-star"></span>
                        <span class="transparent-star"></span>
                    </div>
                    <div class="user">
                        <span class="user-name">4</span>star
                    </div>
                </div>
            </div>
        </div>
        <div class="text_emmit">
            <textarea class="comment" maxlength="500" placeholder="Share you shopping" @keyup="countLength" v-model="text">
            </textarea>
            <div class="waring">
                <span>{{textLength}}</span>/
                <span>500</span>
            </div>
        </div>
        <div class="upload_pho">
            <div class="up_list">
                <div class="photos">
                    <img src="../../../image/up_photos.png" alt="">
                </div>
                <div class="photos">
                    <img src="../../../image/up_photos.png" alt="">
                </div>
            </div>
            <div class="up_but">
                <svg class="upPho">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#upPho"></use>
                </svg>
            </div>
            <div class="upTextComment">
                <span>{{photosLength}}</span>
                <span>/6</span>
            </div>
        </div>
        <div class="submitReviews">
            <button>Submit</button>
        </div>
    </div>
</template>

<style scoped lang="scss" type="text/css">
.emmit_comment {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  background-color: #f2f2f2;
  .pro_detail {
    margin-top: 2.5rem;
    background-color: #fff;
    padding: 0.6rem 0.65rem;
    .goods_detail {
      width: 100%;
      height: 2.5rem;
      margin-top: 0.7rem;
      display: flex;
      align-items: center;
      img {
        width: 2.65rem;
        height: 2.65rem;
      }
      .detail {
        flex: auto;
        padding-left: 0.5rem;
        height: 100%;

        background: #f5f5f5;
        p {
          font-size: 0.6rem;
          text-align: left;
          margin-top: .3rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #000;
        }
      }
    }
  }
  .pro_star {
    padding-top: 0.75rem;
    p {
      height: 1.2rem;
      line-height: 1.2rem;
      font-size: 0.65rem;
      color: #333;
    }
    .user-star {
      height: 1.5rem;
      line-height: 1.5rem;
      display: flex;
      justify-content: flex-start;
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
          background: url("../../../image/star02@2x.png") no-repeat;
          -webkit-background-size: 100% 100%;
          background-size: 100% 100%;
        }
      }
      .user {
        padding-left: 0.6rem;
        font-size: 0.6rem;
        color: #666;
        span {
          padding: 0 0.2rem;
          font-weight: 600;
        }
      }
    }
  }
  .text_emmit {
    width: 100%;
    height: 7.5rem;
    position: relative;
    .comment {
      width: 100%;
      height: 100%;
      text-align: left;
      padding: 0.4rem 0.5rem;
      background-color: #f0f0f0;
      position: absolute;
      left: 0;
      top: 0;
    }
    .waring {
      position: absolute;
      bottom: 0.5rem;
      right: 0.5rem;
      font-size: 0.65rem;
      color: #999;
      span {
        color: #999;
      }
    }
  }
  .upload_pho {
    width: 100%;
    height: 3.5rem;
    background-color: #fff;
    padding: 0.95rem 0.6rem 0;
    .up_list {
      float: left;
      height: 100%;
      .photos {
        width: 2.1rem;
        height: 2.1rem;
        margin-right: 0.75rem;
        float: left;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
        &::before {
          content: "";
          position: absolute;
          right: -0.4rem;
          top: -0.4rem;
          width: 0.8rem;
          height: 0.8rem;
          border-radius: 50%;
          background-color: #eb6519;
        }
        &::after {
          content: "";
          position: absolute;
          right: -0.2rem;
          top: -0.025rem;
          width: 0.4rem;
          height: 0.05rem;
          background-color: #fff;
        }
      }
    }
    .up_but {
      float: left;
      width: 2.1rem;
      height: 2.1rem;
      border: 1px solid #ebebeb;
      background-color: #f0f0f0;
      position: relative;
      margin-right: 0.75rem;
      .upPho {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 80%;
        height: 80%;
        transform: translate(-45%, -50%);
      }
    }
    .upTextComment {
      font-size: 0.5rem;
      color: #666;
      float: left;
      height: 100%;
      line-height: 3.5rem;
      letter-spacing: 1px;
      span {
      }
    }

  }
  .submitReviews{
      width:100%;

      padding-top:.8rem;
      background-color: #fff;
      text-align: center;
      button{
          width:15rem;
          height: 2rem;
          background-color: #eb6519;
          color:#fff;
          font-size: .85rem;
          border-radius: 4px;
            margin-bottom: 1.5rem;
      }
  }
}
</style>
<script>
import topHeader from "@/components/common/topheader";
export default {
  data() {
    return {
      text: "",
      textLength: 0,
      photosLength: 0
    };
  },
  methods: {
    countLength() {
      this.textLength = this.text.length;
    }
  }
};
</script>


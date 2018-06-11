<template>
    <div class="arrvals-content">
        <top-header :titleBar="title"></top-header>
        <div class="ad-photo">
            <img src="../../image/newvaills.png" alt="">
        </div>
        <div class="arri-middle-list">
            <div class="arri-middle-all">
                <div class="arri-list-header">Recommonder</div>
                <ul>
                    <li>
                        <div class="pro-left">
                            <img src="../../image/图层-544.png" alt="">
                        </div>
                        <div class="pro-right">
                            <p>xiaomi mi mix 2s core android android<br>8.04G Phone w/ RAM </p>
                            <P>us $45.85</P>
                            <P>us $45.85</P>
                        </div>
                    </li>
                    <li>
                        <div class="pro-left">
                            <img src="../../image/图层-544.png" alt="">
                        </div>
                        <div class="pro-right">
                            <p>xiaomi mi mix 2s core android android<br>8.04G Phone w/ RAM </p>
                            <P>us $45.85</P>
                            <P>us $45.85</P>
                        </div>
                    </li>
                    <li>
                        <div class="pro-left">
                            <img src="../../image/图层-544.png" alt="">
                        </div>
                        <div class="pro-right">
                            <p>xiaomi mi mix 2s core android android<br>8.04G Phone w/ RAM </p>
                            <P>us $45.85</P>
                            <P>us $45.85</P>
                        </div>
                    </li>
                    <li>
                        <div class="pro-left">
                            <img src="../../image/图层-544.png" alt="">
                        </div>
                        <div class="pro-right">
                            <p>xiaomi mi mix 2s core android android<br>8.04G Phone w/ RAM </p>
                            <P>us $45.85</P>
                            <P>us $45.85</P>
                        </div>
                    </li>
                    <li>
                        <div class="pro-left">
                            <img src="../../image/图层-544.png" alt="">
                        </div>
                        <div class="pro-right">
                            <p>xiaomi mi mix 2s core android android<br>8.04G Phone w/ RAM </p>
                            <P>us $45.85</P>
                            <P>us $45.85</P>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="arri-bottom-list">
            <div class="arri-bottom-header">
                <ul>
                    <li class="current">
                        Cell phone & accessories
                    </li>
                    <li>
                        Cell phone & accessories
                    </li>
                </ul>
            </div>
            <guess-you-like ></guess-you-like>
        </div>
    </div>
</template>

<style scoped lang="scss" type="text/css">
.arrvals-content {
  .ad-photo {
    width: 100%;
    height: 7.5rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .arri-middle-list {
    padding: 0.75rem;
    .arri-middle-all {
      padding: 0 0.75rem;
      background-color: #fff;
      border-radius: 10px;
      .arri-list-header {
        height: 2rem;
        font-size: 1rem;
        line-height: 2rem;
        color: #2d2323;
      }
      ul {
        width: 100%;
        li {
          width: 100%;
          height: 5.5rem;
          display: flex;
          padding: 0.2rem;
          .pro-left {
            width: 5rem;
            img {
              width: 5rem;
              height: 5rem;
            }
          }
          .pro-right {
            flex: auto;
            p {
              line-height: 1rem;
              width: 10.75rem;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
            p:nth-child(1) {
              line-height: 0.8rem;
              font-size: 0.7rem;
            }
            p:nth-child(2) {
              padding: 0.2rem 0;
              font-size: 1rem;
              color: #c81623;
            }
            p:nth-child(3) {
              font-size: 0.8rem;
              text-decoration: line-through;
            }
          }
        }
      }
    }
  }
  .arri-bottom-list {
    width: 100%;
    .arri-bottom-header {
        margin-bottom: 0.7rem;
        height: 2rem;
      ul {
        width: 100%;
        height: 100%;
        background-color: #fff;
        li {
          width: 50%;
          float: left;
          height: 2rem;
          line-height: 2rem;
          padding: 0 0.5rem;
          font-size: 0.65rem;
          font-weight: 600;
          box-sizing: border-box;
        }
        .current {
          color: #eb6519;
          border-bottom: 0.15rem solid #eb6519;
        }
      }
    }
  }
}
</style>
<script>
import topHeader from "@/components/common/topheader";
import guessYouLike from "@/components/common/guessYouLike";
export default {
  data() {
    return {
      title: "Arrivals"
    };
  },
  components: {
    topHeader,
    guessYouLike
  },
  mounted() {
    this.$nextTick(() => {
      const liWidth = document.querySelector(".arri-bottom-header li").style
        .width;
      console.log(liWidth);
    });
  }
};
</script>


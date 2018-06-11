<template>
    <div class="group">
        <section>
            <span class="deal">Daily deal</span>
            <div class="countTime">
                <span>10</span>:
                <span>10</span>:
                <span>35</span>
            </div>
            <a class="more">More
                <svg class="arrow-right">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrowRight"></use>
                </svg>
            </a>
        </section>
        <div class="listTop wrapper">
            <ul class="content" ref="shoplist" :style="{width : ulWidth}">
                <li class="shop-list">
                    <router-link to="/details">
                        <img src="../../image/ipnone-538.png" alt="">
                        <p class="price">Us$45.85</p>
                        <p class="del-pri">us$45.88</p>
                        <span>40</span>
                    </router-link>
                </li>
                <li class="shop-list">
                    <a href="">
                        <img src="../../image/ipnone-538.png" alt="">
                        <p class="price">Us$45.85</p>
                        <p class="del-pri">us$45.88</p>
                        <span>50</span>
                    </a>
                </li>
                <li class="shop-list">
                    <a href="">
                        <img src="../../image/ipnone-538.png" alt="">
                        <p class="price">Us$45.85</p>
                        <p class="del-pri">us$45.88</p>
                        <span>40</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="hotShop">
            <img src="../../image/ad-541.png" alt="">
        </div>
        <section>
            <span class="deal">New Arrivals</span>
            <a class="more">More
                 <svg class="arrow-right">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrowRight"></use>
                </svg>
            </a>
        </section>
        <div class="listTop wrapper">
            <ul class="content" ref="shoplist" :style="{width : ulWidth}">
                <li class="shop-list">
                    <a href="">
                        <img src="../../image/ipnone-538.png" alt="">
                        <p class="price">Us$45.85</p>
                        <p class="del-pri">us$45.88</p>
                        <span>40</span>
                    </a>
                </li>
                <li class="shop-list">
                    <a href="">
                        <img src="../../image/ipnone-538.png" alt="">
                        <p class="price">Us$45.85</p>
                        <p class="del-pri">us$45.88</p>
                        <span>50</span>
                    </a>
                </li>
                <li class="shop-list">
                    <a href="">
                        <img src="../../image/ipnone-538.png" alt="">
                        <p class="price">Us$45.85</p>
                        <p class="del-pri">us$45.88</p>
                        <span>40</span>
                    </a>
                </li>
            </ul>
        </div>
        <shop-list></shop-list>
    </div>
</template>
<style lang="scss" scoped type="text/css">
.group {
  width: 100%;
  section {
    padding: 0 0.75rem;
    height: 2.5rem;
    line-height: 2.5rem;
    width: 100%;
    // background-color: #80808017;
    .deal {
      float: left;
      font-size: 0.75rem;
      font-weight: 600;
      font-family: Helvetica;
      padding-right: 0.3rem;
    }
    .countTime {
      display:flex;
      float: left;
    //   flex-direction: column;
      align-items: center;
      span {
        display: inline-block;
        width: 1rem;
        height: 0.75rem;
        line-height: 0.75rem;
        background-color: black;
        text-align: center;
        color: #fff;
        font-size: 0.65rem;
      }
    }
    .more {
      float: right;
      font-size: 0.55rem;
      .arrow-right{
          width: 0.35rem;
          height: 0.5rem;
          padding-left:.2rem;
      }
    }
  }
  .listTop {
    overflow-x: scroll;
    // height: auto;
    padding: 0.4rem 0 0.4rem 0.75rem;
    ul {
      width: 100%;
      li {
        margin-right: 0.5rem;
        width: 7rem;
        height: 9.25rem;
        overflow: hidden;
        float: left;
        list-style: none;
        background-color: #fff;
        border-radius: 0.3rem;
        position: relative;
        a {
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            // height: 100%;
          }
          p {
            text-align: center;
            line-height: 1rem;
          }
          .price {
            font-size: 0.75rem;
            color: #c81623;
          }
          .del-pri {
            font-size: 0.6rem;
            color: #c2c2c2;
          }
          span {
            position: absolute;
            left: 0;
            top: 0;
            width: 2rem;
            height: 1rem;
            line-height: 1rem;
            padding-left: 0.2rem;
            font-size: 0.75rem;
            color: #fff;
            background: url("../../image/tag01.png") no-repeat 0 0/100%;
          }
        }
      }
    }
  }
  .hotShop {
    // width: 100%;
    margin: 1rem 0.75rem;
    height: 5.5rem;
    box-sizing: border-box;
    border-radius: 0.25rem;
    overflow: hidden;
    background: transparent;
    img {
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
    }
  }
}
</style>
<script>
import shopList from "@/components/common/shoplist";
import BScroll from "better-scroll";

export default {
  data() {
    return {
      ulWidth: "",
      liWidth: ""
    };
  },
  components: {
    shopList
  },
  created() {},
  mounted() {
    // this.getSreenWidth();
    this.scrollX();
    this.setUlWidth();
    const vthis = this;
    window.onresize = function getWidth() {
      console.log(vthis);
      vthis.setUlWidth();
    };
  },
  methods: {
    getSreenWidth() {
      console.log(this);
      this.$nextTick(() => {
        const screenWidth = document.documentElement.clientWidth;
        console.log(this.$refs.shoplist);
        const liElement = this.$refs.shoplist.children;
        // console.log(screenWidth)
        const liWidth = screenWidth / 2.5;
        const ulWidth = liWidth * liElement.length;
        this.liWidth = liWidth + "px";
        console.log(ulWidth + "==" + liElement.length);
        this.ulWidth = ulWidth + liElement.length * 10 + "px";
      });
    },
    setUlWidth() {
      this.$nextTick(() => {
        console.log(this.$refs.shoplist);
        const liElementWidth = this.$refs.shoplist.children[0].offsetWidth;

        this.ulWidth =
          (liElementWidth + 10) * this.$refs.shoplist.children.length + "px";
      });
    },
    scrollX() {
      this.$nextTick(() => {
        const wrapper = document.querySelector(".wrapper");
        const scroll = new BScroll(wrapper, { scrollX: true });
      });
    }
  }
};
</script>

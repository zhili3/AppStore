<template>
    <div class="content">
        <header>
            <top-header :titleBar="title"></top-header>
        </header>
        <div class="brand-detail">
            <div class="brand">
                <img src="../../image/brands/xiaomiicon.png" alt="">
                <span>xiaomi</span>
            </div>
            <div class="brand-pro">
                <img src="../../image/brands/xiaomipro.png" alt="">
            </div>
        </div>
        <div class="brands-list">
            <div class="listTop wrapper">

                <ul class="content clear" ref="shoplist">
                    <li>
                        <a href="">
                            <img src="../../image/图层-544.png" alt="">
                            <p class="price">Us$45.85</p>
                            <p class="del-pri">us$45.88</p>
                            <span>40</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="../../image/图层-544.png" alt="">
                            <p class="price">Us$45.85</p>
                            <p class="del-pri">us$45.88</p>
                            <span>40</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="../../image/图层-544.png" alt="">
                            <p class="price">Us$45.85</p>
                            <p class="del-pri">us$45.88</p>
                            <span>40</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img src="../../image/图层-544.png" alt="">
                            <p class="price">Us$45.85</p>
                            <p class="del-pri">us$45.88</p>
                            <span>40</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss" type="text/css">
@import "@/style/mixin.scss";
.content {
  header {
    @include tcenter(2rem, 2rem);
    width: 100%;
    padding: 0 0.4rem;
    background-color: #fff;
    position: relative;
    span {
      position: absolute;
      left: 0.25rem;
      top: 0;
      content: "";
      width: 1.5rem;
      height: 2rem;
      vertical-align: middle;
      background: url("../../image/icon/left-arrow.png") no-repeat center
        center/0.5rem;
    }
  }
  .brand-detail {
    width: 100%;
    .brand {
      width: 100%;
      height: 4.5rem;
      position: relative;
      background: url("../../image/brands/brandback.png") no-repeat center
        center;
      background-size: 100% 100%;

      img {
        position: absolute;
        left: 0.75rem;
        bottom: 0.5rem;
        width: 4rem;
      }
      span {
        position: absolute;
        left: 4.75rem;
        bottom: 0.5rem;
        padding: 0 1rem;
        height: 1.5rem;
        line-height: 1.5rem;
        color: #fff;
      }
    }
    .brand-pro {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
  .brands-list {
    .listTop {
      padding: 10px;
      // margin-bottom: 50px;

      ul {
        width: 100%;
        border-radius: 6px;
        li {
          //   margin-right: 10px;
          width: 48%;
          overflow: hidden;
          float: left;
          list-style: none;
          background-color: #fff;
          position: relative;
          &:nth-of-type(odd) {
            margin-right:0.5rem;
          }
          a {
            width: 100%;
            height: 100%;
            img {
              width: 100%;
              height: 100%;
            }
            p {
              text-align: center;
              line-height: 1rem;
            }
            .price {
              font-size: 1rem;
              color: #c81623;
            }
            .del-pri {
              font-size: 0.8rem;
              color: #c2c2c2;
              text-decoration: line-through;
            }
            span {
              position: absolute;
              left: 4px;
              top: 4px;
              width: 2rem;
              height: 1.2rem;
              line-height: 1.2rem;
              padding-left: 4px;
              font-size: 0.7rem;
              color: #fff;
              background: url("../../image/tag01.png") no-repeat 0 0/100%;
            }
          }
        }
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
        title:"Xiaomi"
    }
  },
  components:{
      topHeader
  },
  methods: {
      back(){
          this.$router.go(-1)
      }
  }
};
</script>


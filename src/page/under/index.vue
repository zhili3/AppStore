<template>
    <div class="content">
        <top-header :titleBar="title"></top-header>
        <div class="under-ad">
            <img src="../../image/underad.png" alt="">
        </div>
        <div class="arri-bottom-list">
            <div class="arri-bottom-header">
                <ul>
                    <li class="current">
                        All
                    </li>
                    <li>
                        $0.99
                    </li>
                    <li>
                        Cell
                    </li>
                    <li>
                        Cell
                    </li>
                    <li>
                        Cell
                    </li>
                     <li>
                        Cell
                    </li>
                </ul>
            </div>
             <brans-shop-list></brans-shop-list>
        </div>

    </div>
</template>

<style scoped lang="scss" type="text/css">
.under-ad {
  width: 100%;
  height: 6rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.arri-bottom-list {
  width: 100%;
  .arri-bottom-header {
    // margin-bottom: 0.7rem;
    height: 2rem;
    ul {
      width: 100%;
      height: 100%;
       padding-left: 0.75rem;
      background-color: #fff;
      li {
        width: 2.9rem;
        float: left;
        height: 2rem;
        text-align: center;
        line-height: 2rem;
        font-size: 0.7rem;
        font-weight: 900;
        box-sizing: border-box;
      }
      .current {
        color: #eb6519;
        border-bottom: 0.15rem solid #eb6519;
      }
    }
  }
}
</style>
<script>
import topHeader from "@/components/common/topheader";
import bransShopList from "@/components/common/bransShopList"
export default {
  data() {
    return {
      title: "under"
    };
  },
  components: {
    topHeader,
    bransShopList
  }
};
</script>


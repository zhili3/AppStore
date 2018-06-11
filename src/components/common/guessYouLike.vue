<template>
    <div class="guess-list">
        <div class="listTop wrapper" :class="{hasMargin:showMargin}">

            <ul class="content clear"  ref="shoplist">
                <li>
                    <a href="">
                        <img src="../../image/图层-544.png" alt="">
                        <slot name="pro-title"></slot>
                        <p class="price">Us$45.85</p>
                        <p class="del-pri">us$45.88</p>
                        <span>40</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="../../image/图层-544.png" alt="">
                        <slot name="pro-title"></slot>
                        <p class="price">Us$45.85</p>
                        <p class="del-pri">us$45.88</p>
                        <span>40</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="../../image/图层-544.png" alt="">
                        <slot name="pro-title"></slot>
                        <p class="price">Us$45.85</p>
                        <p class="del-pri">us$45.88</p>
                        <span>40</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="../../image/图层-544.png" alt="">
                        <slot name="pro-title"></slot>
                        <p class="price">Us$45.85</p>
                        <p class="del-pri">us$45.88</p>
                        <span>40</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss" type="text/css">
.guess-list {
  .listTop {
    padding: 0.75rem;
    padding-top: 0;
    // margin-bottom: 50px;

    ul {
      width: 100%;
      border-radius: 6px;
      li {
        //   margin-right: 10px;
        width: 50%;
        overflow: hidden;
        float: left;
        list-style: none;
        background-color: #fff;
        position: relative;
        padding-bottom: 0.3rem;
        &:nth-of-type(odd) {
          border-right: 1px solid #e6e6e6;
          border-bottom: 1px solid #e6e6e6;
        }
        &:nth-of-type(even) {
          border-bottom: 1px solid #e6e6e6;
        }
        a {
          width: 100%;
          height: 100%;
          img {
            width: 7.5rem;
            height: 7.5rem;
            display: block;
            margin: 0 auto;
          }
          p {
            text-align: center;
            line-height: 1rem;
          }
          .price {
            height: 1rem;
            line-height: 1rem;
            font-size: 0.75rem;
            color: #c81623;
          }
          .del-pri {
            font-size: 0.6rem;
            color: #c2c2c2;
          }
          span {
            position: absolute;
            left: 0.35rem;
            top: 0.5rem;
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
  .listTop.hasMargin {
      padding: 0.5rem;
      padding-top: 0;
    ul {
      li {
        border: none;
        margin: 0.3rem 0;
        width: 48.5%;
      }
      li:nth-of-type(even) {
        float: right;
      }
    }
  }
}
</style>
<script type="text/ecmascript-6">
export default {
  data() {
    return {};
  },
  created() {
    console.log(this.$props.compentIsshow);
  },
  props: ["compentIsshow", "showMargin"]
};
</script>



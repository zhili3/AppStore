<template>
    <div class="page">
        <div class="listTop wrapper">

            <ul class="content clear" ref="shoplist">
                <li >
                    <router-link to="">
                        <img src="../../image/图层-544.png" alt="">
                        <slot name="pro-title" ></slot>
                        <p class="price">Us$45.85</p>
                        <p class="del-pri">us$45.88</p>
                        <span>40</span>
                    </router-link>

                </li>
                <li >
                    <a href="">
                        <img src="../../image/图层-544.png" alt="">
                        <slot name="pro-title" ></slot>
                        <p class="price">Us$45.85</p>
                        <p class="del-pri">us$45.88</p>
                        <span>40</span>
                    </a>
                </li>
                <li >
                    <a href="">
                        <img src="../../image/图层-544.png" alt="">
                        <slot name="pro-title" ></slot>
                        <p class="price">Us$45.85</p>
                        <p class="del-pri">us$45.88</p>
                        <span>40</span>
                    </a>
                </li>
                <li >
                    <a href="">
                        <img src="../../image/图层-544.png" alt="">
                        <slot name="pro-title" ></slot>
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
.listTop {
  padding: 0.25rem;
  // margin-bottom: 50px;

  ul {
    width: 100%;
    border-radius: 6px;
    li {
        margin: .25rem;
      width: 47%;
      overflow: hidden;
      float: left;
      list-style: none;
      background-color: #fff;
      position: relative;
      padding-bottom: 0.3rem;

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
</style>
<script>
export default {
  data() {
    return {};
  }
};
</script>


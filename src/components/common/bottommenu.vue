<template>
    <div class="foot-guide">
        <router-link to="/home" class="current">
            <svg class="guide_list home">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#home"></use>
            </svg>
            <span class="guide-item ">Home</span>
        </router-link>
        <router-link to="/categories">
            <svg class="guide_list category">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#category"></use>
            </svg>
            <span class="guide-item ">Categories</span>
        </router-link>
        <router-link to="/cart">
            <svg class="guide_list cart">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart"></use>
            </svg>
            <span class="guide-item ">Cart</span>
        </router-link>
        <router-link to="/myaccount">
            <svg class="guide_list personal_center">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#personal_center"></use>
            </svg>
            <span class="guide-item ">MyAcount</span>
        </router-link>
    </div>
</template>
<style lang="scss" scoped>
.foot-guide {
  width: 100%;
  height: 2.5rem;
  padding: 0.25rem;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: #fff;
  a {
    display: flex;
    float: left;
    width: 25%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    .guide_list{
      display: block;
      width: 1.2rem;
      height: 1.2rem;
      max-width: 1.75rem;
      max-height: 1.75rem;
      fill:#fff;
    }
    span {
      display: block;
      line-height: 1rem;
      font-size: 0.55rem;
      text-align: center;
    }

  }
  a.current{
      .home,.category,.personal_center,.cart{
          stroke:rgb(113, 113, 113);

      }
      span{
          color: #f87e39;
      }
  }
}
</style>
<script>
</script>

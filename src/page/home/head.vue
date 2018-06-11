<template>
    <div class="top">
        <div class="header">
         <svg class="search">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#search"></use>
        </svg>
            <input type="text" autocomplete="" placeholder="Search" autofocus>
        </div>
    </div>
</template>
<style  lang="scss" scoped>
.top {
  width: 100%;
  padding: 0.5rem 0.75rem;
  background-color: #fff;
  .header {
    height: 1.5rem;
    width: 100%;
    // padding: 0 0.4rem;
    background-color: #e6e6e6;
    border-radius: 1rem;
    overflow: hidden;
    position: relative;
    // &::before {
    //   position: absolute;
    //   left: 0.25rem;
    //   top: 0;
    //   content: "";
    //   width: 1.5rem;
    //   height: 100%;
    //   vertical-align: middle;
    //   background: url(../../image/icon/search-1.png) no-repeat center
    //     center/0.6rem;
    // }
  }
  .search{
      width:1rem;
      height:100%;
      padding:0 0.5rem;
  }
  input {
    position: absolute;
    left: 1.75rem;
    top: 0;
    background-color: transparent;
    width: 85%;
    height: 100%;
    color: #999;
    font-size: 0.6rem;
  }
  input::-webkit-input-placeholder {
    color: #aaa;
    opacity: 1;
  }
}
</style>
<script>
export default {
  data() {
    return {
      value: ""
    };
  }
};
</script>

<template>
    <div class="">
        <div class="sub-header">
            <svg class="arrow-left" @click="back">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrowLeft"></use>
            </svg>
            {{titleBar}}
            <slot name="search"></slot>
            <slot name="more"></slot>
        </div>

    </div>
</template>
<style scoped lang="scss" type="text/css">
@import "@/style/mixin.scss";
.sub-header {
    width: 100%;
  position: fixed;
  left:0;
  top:0;
  z-index: 50;
  @include tcenter(2rem, 2rem);
  font-size: 0.85rem;
  background: #fff;
  .arrow-left {
    position: absolute;
    left: .75rem;
    top: 50%;
    transform:translateY(-0.35rem);
    height: 0.7rem;
    width: 0.65rem;
  }
}
</style>
<script>
export default {
  name: "topHeader",
  data() {
    return {};
  },
  props: ["titleBar"],
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>


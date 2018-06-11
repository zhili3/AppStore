<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <!-- <keep-alive> -->
        <router-view>
        </router-view>
      <!-- </keep-alive> -->
    </transition>
    <svg-icon></svg-icon>
  </div>
</template>
<script>
import svgIcon from './components/common/svg';
export default {
  name: 'App',
  data () {
    return {

    }
  },
  components:{
      svgIcon
  }
}
</script>
<style lang="scss" scoped type="text/css">
#app {
  font-family:  Helvetica,"Avenir", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #f3f3f3;
  width: 100%;
  height: 100%;
}
</style>

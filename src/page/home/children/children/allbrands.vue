<template>
    <div class="all-brands">
        <div class="allbrand-header">
             <top-header :titleBar="title"></top-header>
        </div>
        <div class="brand-list">
            <ul>
                <li>
                    <router-link to="/branddetail">
                        <img src="../../../../image/Doogee.png" alt="">
                    </router-link>
                </li>
                 <li>
                    <router-link to="/branddetail">
                        <img src="../../../../image/Doogee.png" alt="">
                    </router-link>
                </li>
                 <li>
                    <router-link to="/branddetail">
                        <img src="../../../../image/Doogee.png" alt="">
                    </router-link>
                </li>
                 <li>
                    <router-link to="/branddetail">
                        <img src="../../../../image/Doogee.png" alt="">
                    </router-link>
                </li>
                 <li>
                    <router-link to="/branddetail">
                        <img src="../../../../image/Doogee.png" alt="">
                    </router-link>
                </li>
                 <li>
                    <router-link to="/branddetail">
                        <img src="../../../../image/Doogee.png" alt="">
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss" type="text/css">
@import "@/style/mixin.scss";
.all-brands {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: scroll;
  z-index: 21;
  background-color: $color;
  .allbrand-header {
    position: relative;
    @include tcenter(2rem, 2rem);
    font-size: 1.2rem;
    background: #fff;
    span {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 2rem;
      background: url("../../../../image/icon/left-arrow.png") no-repeat center center/0.5rem;
    }
  }
  .brand-list{
      padding:0 0.4rem;
      ul{
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          li{
              width:8.4rem;
              margin:0.4rem 0.2rem 0 0.3rem;
              a{
                  width:100%;
                  img{
                      width:100%;
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
        title:"All Brands"
    }
  },
  created(){

  },
  components:{
      topHeader
  },
  methods:{
      back(){
          this.$router.go(-1)
      }
  }
};
</script>


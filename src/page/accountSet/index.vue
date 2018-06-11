<template>
    <div class="container">
        <top-header :titleBar="title" class="header"></top-header>
        <div class="message_list">
            <div class="menu">
                <span class="myProfile" @click="changeState" :class="{active : isActive}">My proFile</span>
                <span class="changePassword" @click="changeState" :class="{active : !isActive}" >change password</span>
            </div>
            <section class="list">
                <div class="myProfile_list" :style="{display: (isActive ? 'block' : 'none')}">
                    <router-link to="" class="myAvator">
                        <div class="a_link coupon_left">
                            my avator
                        </div>
                        <div class="aLinkRight">
                            <img src="../../image/header_pho.png" alt="">
                            <svg class="arrowRight">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrowRight"></use>
                            </svg>
                        </div>
                    </router-link>
                    <router-link to="/accountSet/name" class="">
                        <div class="a_link coupon_left">
                            Name
                        </div>
                        <div class="aLinkRight">
                            json wu
                            <svg class="arrowRight">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrowRight"></use>
                            </svg>
                        </div>
                    </router-link>
                    <router-link to="" class="">
                        <div class="a_link coupon_left">
                            coutry/region
                        </div>
                        <div class="aLinkRight">
                            Uinte states
                            <svg class="arrowRight">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrowRight"></use>
                            </svg>
                        </div>
                    </router-link>
                    <router-link to="/accountSet/email" class="">
                        <div class="a_link coupon_left">
                            Email Address
                        </div>
                        <div class="aLinkRight">
                            jas...d@163.com
                            <svg class="arrowRight">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrowRight"></use>
                            </svg>
                        </div>
                    </router-link>
                     <router-link to="/accountSet/Subscription" class="">
                        <div class="a_link coupon_left">
                            Subscription
                        </div>
                        <div class="aLinkRight">
                            Subscript /un Subcript
                            <svg class="arrowRight">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrowRight"></use>
                            </svg>
                        </div>
                    </router-link>
                </div>
                <div class="changePass_list" :style="{display: (isActive ? 'none' : 'block')}">
                    <div class="item current_pass">
                        <label for="oldPass">current pass</label>
                        <input type="text" id="oldPass">
                    </div>
                    <div class="item new_pass">
                        <label for="newPass">new pass</label>
                        <input type="text" id="new Pass">
                    </div>
                    <div class="item confirm_pass">
                        <label for="conPass">confirm pass</label>
                        <input type="text" id="conPass">
                    </div>
                    <div class="item save">
                       <input type="button" value="save" class="butt">
                    </div>
                </div>
            </section>
        </div>
        <router-view>

        </router-view>
    </div>
</template>

<style scoped lang="scss" type="text/css">
@import "@/style/mixin.scss";
.header {
  width: 100%;
  height: 2rem;
  box-sizing: content-box;
  border-bottom: 1px solid #e6e6e6;
}
.message_list {
  width: 100%;

  .menu {
    padding: 0 0.75rem;
    margin-bottom: 0.75rem;
    background-color: #fff;
    height: 2.25rem;
    width: 100%;
    span {
      display: block;
      float: left;
      @include wh(50%, 100%);
      line-height: 2.25rem;

      text-align: center;
      font-size: 0.75rem;
    }
    .active {
      color: #eb6519;
      border-bottom: 0.1rem solid #eb6519;
    }
    .myProfile {
    }
    .changePassword {
    }
  }
  .list {
    background-color: #fff;

    margin-bottom: 3.25rem;
    .myProfile_list {
      a {
        height: 2.25rem;
        padding: 0 0.75rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #e6e6e6;
        .a_link,
        .aLinkRight {
        //   height: 0.9rem;
          min-width: 4.5rem;
          text-align: center;
          vertical-align: middle;
          font-size: 0.65rem;
          color: #1a1a1a;
          flex: 1;
        }
        .a_link {
          text-align: left;
        }
        .aLinkRight {
          width: 3.2rem;
          text-align: right;
          color: #999;
          svg {
            width: 0.5rem;
            height: 0.6rem;
            float: right;
            margin-top: 0.15rem;
            margin-left: 0.3rem;
          }
        }
      }
      .myAvator{
          .aLinkRight{
              svg{
                  margin-top: .6rem;
              }
          }
          img{
              width: 1.75rem;
              height: 1.75rem;
          }
      }
    }
    .changePass_list {
      padding: 0.65rem 0.75rem;
      .item {
        padding-top: 0.75rem;

        label {
          display: block;
          height: 0.65rem;
          line-height: 0.65rem;
          padding-bottom: 0.4rem;
          font-size: 0.65rem;
        }
        input {
          border: 1px solid #b3b3b3;
          border-radius: 4px;
          width: 100%;
          height: 1.75rem;
          padding:0 .4rem;
        }
        .butt {
            margin-top: 1.25rem;
            width: 14rem;
            height: 1.75rem;
            line-height: 1.75rem;
            color:#fff;
            font-size: .75rem;
            text-align: center;
            border-radius: 4px;
            background-color: #eb6519;
        }
      }
      .save{
          text-align: center;
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
      title: "Account Seting",
      isActive:true,
    };
  },
  components: {
    topHeader
  },
  methods: {
      changeState(){
          this.isActive = !this.isActive
      },
  }
};
</script>


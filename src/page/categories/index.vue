<template>
    <div class="container">
        <div class="header">
            <svg class="bigSearch">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#bigSearch"></use>
            </svg>Cotegories
        </div>
        <section class="cate-container">
            <section class="menu_left">
                <ul>
                    <li class="menu_left_li activity_menu">
                        <span>Home golden</span>
                    </li>
                    <li class="menu_left_li">
                        <span>Home golden</span>
                    </li>
                    <li class="menu_left_li">
                        <span>Home golden</span>
                    </li>
                    <li class="menu_left_li">
                        <span>Home golden</span>
                    </li> <li class="menu_left_li">
                        <span>Home golden</span>
                    </li>
                     <li class="menu_left_li">
                        <span>Home golden</span>
                    </li>
                     <li class="menu_left_li">
                        <span>Home golden</span>
                    </li>
                </ul>
            </section>
            <section class="menu_right">
                <ul>
                    <li>
                        <div class="left-text">
                            <p>Hand Tools</p>
                        </div>
                        <svg class="arrowRight">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrowRight"></use>
                        </svg>
                    </li>
                    <li>
                        <div class="left-text">
                            <p>Hand ToolsHand Tools Hand Tools Hand Tools  </p>
                        </div>
                        <svg class="arrowRight">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrowRight"></use>
                        </svg>
                    </li>
                    <li>
                        <div class="left-text">
                            <p>Hand Tools Hand Tools Hand Tools Hand Tools </p>
                        </div>
                        <svg class="arrowRight">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrowRight"></use>
                        </svg>
                    </li>
                </ul>
            </section>
        </section>
        <bottom-menu></bottom-menu>
    </div>
</template>

<style scoped lang="scss" type="text/css">
@import "@/style/mixin.scss";

.container {
  background-color: #fff;
  .header {
    position: relative;
    @include tcenter(2rem, 2rem);
    font-size: 0.85rem;
    background: #fff;
    border-bottom: 1px solid #e6e6e6;
    .bigSearch {
      position: absolute;
      right: 00.75rem;
      top: 50%;
      transform: translateY(-0.625rem);
      height: 1.25rem;
      width: 1.25rem;
      fill:#666666;
    }
  }
  .cate-container {
    display: flex;
    .menu_left {
      width: 5rem;
      ul {
        li {
            display: flex;
            flex-direction: column;
            justify-content: center;
          height: 2.5rem;
          line-height: 0.75rem;
        //   padding: 0.75rem 0;
          background-color: #ededed;
          font-size: 0.65rem;
          text-align: center;
          box-sizing: border-box;
          border-bottom: 1px solid #dbdbdb;
          overflow: hidden;
          span{
              line-height: 0.75rem;
          }
        }
        .activity_menu {

          border-left: 0.2rem solid #eb6519;
          background: #fff;
        }
      }
    }
    .menu_right {
      flex-grow: 1;
      ul {
        padding: 0 0.65rem;
        li {
          width: 100%;
          height: 2.3rem;
          border-bottom: 1px solid #ededed;
          box-sizing: border-box;
          font-size: 0.85rem;
          display: flex;
          .left-text {
              flex:1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0.3rem 0 0.3rem 0.6rem;
            p {
              line-height: 0.85rem;
            }
          }
          .arrowRight {
            float: right;
            padding: 0.8rem 0;
            width: 0.35rem;
            height: 0.65rem;
          }
        }
      }
    }
  }
}
</style>
<script>
import bottomMenu from "@/components/common/bottommenu";
export default {
  data() {
    return {}
  },
  components:{
      bottomMenu
  }
};
</script>



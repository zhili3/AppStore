<template>
    <div class="page_email">
        <top-header :titleBar="title" class="header"></top-header>
        <div class="content">
            <div class="changeName" :style="{display: (isActive ? 'none' : 'block')}">
                <div class="item firstName">
                    <label for="oldPass">Email Adress</label>
                    <input placeholder="Email Adress" type="text" id="oldPass">
                </div>

                <div class="item save">
                    <input type="button" value="Save" class="butt">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss" type="text/css">
.page_email {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 55;
  background-color: #fff;
  .header {
    width: 100%;
    height: 2rem;
    box-sizing: content-box;
    border-bottom: 1px solid #e6e6e6;
  }
  .content {
    .changeName {
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
          color: #fff;
          font-size: 0.75rem;
          text-align: center;
          border-radius: 4px;
          background-color: #eb6519;
        }
      }
      .save {
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
      title: "Email Adress"
    };
  },
  components:{
      topHeader
  }
};
</script>


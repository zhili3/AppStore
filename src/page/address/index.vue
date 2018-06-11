<template>
    <div class="container">
        <top-header :titleBar="title" class="header"></top-header>

        <div class="adr-con">
            <!--item-->
            <div class="item " data-addressid="906293">
                <a href="/user/address/edit.do?t=5725793798874662279&amp;addressId=906293" class="item-con">
                    <div class="user-info">
                        <div class="user">
                            <!-- <div class="avator"><img src=" " alt=""></div> -->
                            <div class="name">liunian </div>
                        </div>
                        <div class="phone">
                            <em class="phone-code">+213</em>
                            <span class="phone-num">18681435918</span>
                        </div>
                    </div>
                    <div class="adr-info">
                        <div class="info">
                            shenzhenshi 11521
                        </div>
                        <div class="info">shenzhen ,shenzhen ,Algeria </div>
                        <div class="info">Zip/Post Code:12345</div>
                    </div>
                </a>
                <div class="adr-install">
                    <div class="install-default">
                        <input class="check-ipt" name="riCheck" type="checkbox">
                        <label for="riCheck"></label>
                        <div class="text">
                            default </div>
                    </div>
                    <a href="/user/address/edit.do?t=4704365035515282079&amp;addressId=906293" class="edit-btn">
                        <svg class="editor btn-icon">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#editor"></use>
                        </svg>
                        edit
                    </a>
                    <div class="delete-btn">
                        <svg class="editor btn-icon">
                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#editor"></use>
                        </svg>
                        delete
                    </div>
                </div>
            </div>
            <!--/item-->
        </div>
    </div>
</template>

<style scoped lang="scss" type="text/css">
.header {
  width: 100%;
  height: 2rem;
  box-sizing: content-box;
  border-bottom: 1px solid #e6e6e6;
}

.adr-con .item {
  margin-bottom: 0.26667rem;
  padding: 0.65rem 0.75rem 0;
  background: #fff;
}
.adr-con .item .item-con {
  display: block;
  padding-left: 0.2rem;
  border-bottom: 1px solid #eee;
}
.adr-con .item .user-info {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 0.21333rem;
}
.adr-con .item .user-info .user {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  overflow: hidden;
  color: #222;
}
.adr-con .item .user-info .user .avator {
  display: inline-block;
  width: 0.66667rem;
  height: 0.66667rem;
  -moz-border-radius: 100%;
  border-radius: 100%;
  background: url() no-repeat;
  -moz-background-size: 100%;
  -o-background-size: 100%;
  background-size: 100%;
  vertical-align: middle;
}
.adr-con .item .user-info .user .avator > img {
  width: 100%;
  height: 100%;
  -moz-border-radius: 100%;
  border-radius: 100%;
}
.adr-con .item .user-info .user .name {
  display: inline-block;
  max-width: 80%;
  height: 1.25rem;
  overflow: hidden;
  font-size: 0.7rem;
  line-height: 1.25rem;
  vertical-align: middle;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
}
.adr-con .item .user-info .phone {
  color: #222;
  font-size: 0.6rem;
  em {
    font-style: normal;
  }
}
.adr-con .item .user-info .phone .phone-code {
  padding-right: 0.13333rem;
}
.adr-con .item .adr-info {
  padding-bottom: 0.7rem;
  //   border-bottom: 1px solid #eee;
  color: #666;
  font-size: 0.6rem;
  line-height: 0.85rem;
}
.adr-con .item .adr-info .info {
  word-wrap: break-word;
  word-break: normal;
}
.adr-con .item .adr-install {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
}
.adr-con .item .adr-install .install-default {
  flex: 1;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 2.25rem;
  color: #333;
  line-height: 2.25rem;
  font-size: 0.6rem;
}
.adr-con .item .adr-install .install-default .check-ipt {
  //   -webkit-appearance: none;
  //   position: relative;
  //   width: 0.85rem;
  //   height: 0.85rem;
  //   border: 1px solid #a3a3a3;
  //   -moz-border-radius: 100%;
  //   border-radius: 100%;
  //   vertical-align: middle;
}
.adr-con .item .adr-install .install-default label {
  position: relative;
  width: 0.85rem;
  height: 0.85rem;
  border: 1px solid #a3a3a3;
  -moz-border-radius: 100%;
  border-radius: 100%;
  vertical-align: middle;
  box-sizing: border-box;
}
.adr-con .item .adr-install .install-default .check-ipt:checked + label {
    position: relative;
  border: 0 none;
  display: block;
  border-radius: 50%;
  background-color: #eb6519;
  &::before {
    content: "";
    position: absolute;
    left:50%;
    top:50%;
    width: 0.2rem;
    height: 0.4rem;
    border-right: 0.1rem solid #fff;
    border-bottom: 0.1rem solid #fff;
    transform: rotateZ(45deg) translate(-120%, -24%);
  }
}
.adr-con .item .adr-install .install-default .text {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding-left: 0.3rem;
  line-height: 2.25rem;
  display: inline-block;
}
.adr-con .item .adr-install .delete-btn {
  height: 2.25rem;
  margin-right: -0.29333rem;
  margin-left: 0.18667rem;
  text-align: center;
   font-size: 0.6rem;
  color: #666;
}
.adr-con .item .adr-install .delete-btn .btn-icon {
  display: inline-block;
  width: 0.8rem;
  height: 0.8rem;
  margin-top: 0.725rem;
}
.adr-con .item .adr-install .edit-btn {
  padding-right: 0.2666666667rem;
  height: 2.25rem;
  text-align: center;
  font-size: 0.6rem;
  color: #666;
}
.adr-con .item .adr-install .edit-btn .btn-icon {
  display: inline-block;
  width: 0.8rem;
  height: 0.8rem;
  margin-top: 0.725rem;
}
.adr-nope {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: fixed;
  top: 1.52rem;
  right: 0;
  bottom: 1.33333rem;
  left: 0;
  width: 100%;
}
.adr-nope .nope-pic {
  width: 3.2rem;
  height: 3.2rem;
  margin: 0 auto;
  background: url() no-repeat;
  -moz-background-size: 100%;
  -o-background-size: 100%;
  background-size: 100%;
}
.adr-nope .nope-title {
  margin-top: 0.26667rem;
  color: #666;
  text-align: center;
}
.adr-btn {
  height: 1.33333rem;
}
.adr-btn .adr-btn-con {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 700;
  width: 100%;
  height: 1.33333rem;
}
.adr-btn .adr-btn-con .add-adr-btn {
  display: block;
  background: #000;
  color: #fff;
  font-size: 0.42667rem;
  line-height: 1.33333rem;
  text-align: center;
}
</style>
<script>
import topHeader from "@/components/common/topheader";

export default {
  data() {
    return {
      title: "Shipping Address"
    };
  },
  components: {
    topHeader
  }
};
</script>


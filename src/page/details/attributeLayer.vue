<template>

    <div typepath="" class="attribute-layer" >
        <div class="mask"></div>
        <div class="attribute-list">
            <div class="attribute-header">
                <div class="attribute-header-con">
                    <svg class="delete" >
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#delete"></use>
                    </svg>
                    <div class="title">Color &amp; RAM &amp; Quantity</div>
                    <div class="pic-info">
                        <div class="pic"><img src="//img10.joybuy.com/N1/s800x800_jfs/t17152/171/130843887/266348/5c0e7697/5a5eebeeN1ed5720e.jpg"></div>
                        <div class="price">US $99.99 </div>
                    </div>
                </div>
            </div>
            <div class="attribute-con">
                <div class="attribute-info">
                    <div class="info-title">Color</div>
                    <div class="info-con clear">
                        <div class="info-item active">
                            <!---->
                            <span class="pic">
                                <img src="//img10.joybuy.com/N1/s80x80_jfs/t17152/171/130843887/266348/5c0e7697/5a5eebeeN1ed5720e.jpg"></span>
                            <span class="text">Black</span>
                        </div>
                    </div>
                </div>
                <div class="attribute-info">
                    <div class="info-title">RAM</div>
                    <div class="info-con clear">
                        <div class="info-item active">
                            <!---->
                            <!---->
                            <span class="size">2GB+16GB</span>
                        </div>
                    </div>
                </div>
                <div class="attribute-info">
                    <div class="info-title">Quantity</div>
                    <div class="info-con">
                        <div class="info-count">
                            <span class="minus opt disabled"></span>
                            <div class="num_box"><input type="tel" class="num"></div>
                            <span class="plus opt"></span>
                        </div>
                        <div class="stock-status">in stock</div>
                        <!---->
                        <!---->
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss" type="text/css">
.attribute-layer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 52;
  display: none;
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 900;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }
  .attribute-list {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 910;
    width: 100%;
    min-height: 30%;
    max-height: 72%;
    height: 100%;
    padding: 0 0.75rem 1.33333rem;
    background: #fff;
    -webkit-animation: layerDownFadeIn 0.2s linear;
    animation: layerDownFadeIn 0.2s linear;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    .attribute-header {
      position: relative;
      height: 8.2rem;
      .attribute-header-con {
        // position: fixed;
        top: 0;
        left: 0rem;
        width: 100%;
        height: 8.2rem;
        // padding: 0 0.4rem;
        background: #fff;
        .title {
          height: 2rem;
        //   padding-top: 0.53333rem;
          color: #000;
          font-size: 0.85rem;
          line-height: 2rem;
          text-align: center;
        }
        .delete {
          float: right;
          margin: 0.5rem 0.2rem 0 0;
          width: 1.1rem;
          height: 1.1rem;
        }
        .pic-info {
          padding: 0.4rem 0 .75rem 0;
          border-bottom: 1px dashed #ddd;
          .pic {
            display: inline-block;
            width: 5rem;
            height: 5rem;
            margin-right: 0.75rem;
            border: 1px solid #ddd;
            // background: url("../../assets/image/defaultPic.png") no-repeat center;
            -webkit-background-size: 40% 40%;
            background-size: 40%;
            vertical-align: bottom;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .price {
            display: inline-block;
            color: #c81623;
            font-size: 0.9rem;
            vertical-align: bottom;
            em {
              font-size: 0.4rem;
            }
          }
        }
      }
    }
    .attribute-con {
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      padding-bottom: 5.84rem;
      .attribute-info {
        .info-title {
          padding-top: 0.6rem;
          line-height: 1.5rem;
          color: #333;
          font-size: 0.7rem;
          font-weight: 600;
        }
        .info-con {
          position: relative;
          .info-item {
            float: left;
            position: relative;
            min-width: 4.65rem;
            height: 2rem;
            margin-right: 0.75rem;
            // margin-bottom: 0.75rem;
            border: 1px solid #999;
            color: #999;
            line-height: 1.06667rem;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            max-width: 100%;
            overflow: hidden;
            .pic {
              width: 1.7rem;
              height: 1.7rem;
              -webkit-background-size: 40% 40%;
              background-size: 40%;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .text {
              -webkit-box-flex: 1;
              -webkit-flex: 1;
              -ms-flex: 1;
              flex: 1;
              position: relative;
              max-width: 86%;
              overflow-x: auto;
              overflow-y: hidden;
              padding: 0 0.26667rem;
            //   border-left: 1px dashed #999;
              white-space: nowrap;
              font-size: .65rem;
              color:#333;
            }
            .size {
              display: inline-block;
            //   min-width: 1.06667rem;
            width: 100%;
              max-width: 100%;
              height: 1.06667rem;
              overflow-x: auto;
              overflow-y: hidden;
              padding: 0 0.26667rem;
              font-size: 0.37333rem;
              text-align: center;
              white-space: nowrap;
            }
          }
          .info-item.active {
            border-style: solid;
            border-color: #222;
            color: #222;
          }
          .info-item.sold-out {
            border-style: dashed;
          }
        }
        .info-count {
          display: inline-block;
          border: 1px solid #999;
          vertical-align: middle;
          .opt {
            float: left;
            position: relative;
            width: 1.7rem;
            height: 1.7rem;
          }

          .minus::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            width: .6rem;
            height: .05rem;
            background: #222;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
          }
          .plus::before,
          .plus::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            background: #222;
            -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
          }
          .plus::before {
            width: 0.6rem;
            height: 0.05rem;
          }
          .plus::after {
            width: 0.05rem;
            height: 0.6rem;
          }
          .num_box {
            float: left;
            min-width: 1.33333rem;
            width: 2.15rem;
            height: 1.7rem;
            border-left: 1px solid #999;
            border-right: 1px solid #999;
            .num {
              width: 100%;
              height: 1.7rem;
              padding: 0.13333rem;
              border: 0 none;
              font-size: 0.37333rem;
              line-height: 0.53333rem;
              text-align: center;
              vertical-align: top;
            }
            .num:disabled {
              background: #fff;
              color: #ccc;
            }
          }
        }
        .stock-status {
            display: inline-block;
            padding-left: 0.21333rem;
            vertical-align: middle;
          }
      }
    }
  }
  .attribute-list.active {
    -webkit-animation: layerDownFadeOut 0.2s linear;
    animation: layerDownFadeOut 0.2s linear;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
  .attribute-btn {
  }
}
</style>
<script>
export default {
  data() {
    return {

    };
  },
  props: ['styleShow'],
  computed:{

  },
  methods:{

  }
};
</script>


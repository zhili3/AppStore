<template>
    <div class="container">
        <div class="sub-header">
            <svg class="arrow-left" @click="back">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrowLeft"></use>
                </svg>{{titleBar}}hbg
            <svg class="bigSearch">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#bigSearch"></use>
                </svg>
            <svg class="more">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#more"></use>
                </svg>
        </div>
    </div>
</template>

<style scoped lang="scss" type="text/css">
    @import "@/style/mixin.scss";
    .sub-header {
        position: relative;
        @include tcenter(2rem, 2rem);
        font-size: 0.85rem;
        background: #fff;
        .arrow-left {
            position: absolute;
            left: .75rem;
            top: 50%;
            transform: translateY(-0.35rem);
            height: 0.7rem;
            width: 0.65rem;
        }
        .bigSearch {
            position: absolute;
            right: 1.85rem;
            top: 50%;
            transform: translateY(-0.625rem);
            height: 1.25rem;
            width: 1.25rem;
            fill: #666666;
        }
        .more {
            position: absolute;
            right: 00.75rem;
            top: 50%;
            transform: translateY(-0.625rem);
            height: 1.25rem;
            width: 0.1rem;
            fill: #666666;
        }
    }
</style>

<script>
    export default {
        data() {
            return {
                titleBar: "Details"
            }

        },
        methods: {
            back() {
                this.$router.go(-1);
            }
        }

    };
</script>


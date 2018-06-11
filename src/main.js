// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Mint from 'mint-ui'
import App from './App'
import router from './router'
import store from './store'
import FastClick from 'fastClick'
import 'babel-polyfill'


import './plugins/swiper.min.js';
import './style/swiper.min.css';

// import './svg/iconfont'
// import './config/rem'
// 导入样式
// import 'normalize.css'
import './style/common.scss'
import 'mint-ui/lib/style.min.css'

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.use(Mint)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
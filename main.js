//导入我们的第三方包
import Vue from 'vue' //es5 ===> var vue = require('vue')
import Mint from 'mint-ui'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import moment from 'moment'
import VuePreview from 'vue-preview'
import axios from 'axios'
import Vuex from 'vuex'

//集成到Vue中
Vue.use(Mint)
Vue.use(VueRouter) // vue.$route vue.$router
Vue.use(VueResource) //vue.$http...
Vue.use(VuePreview)
Vue.use(Vuex) //$store

Vue.prototype.$axios = axios

//导入项目中需要用到的css
import 'mint-ui/lib/style.min.css'
import './statics/mui/css/mui.min.css'
import './statics/css/common.css' //自己写的样式，放在最好


//导入我们要渲染的根组件这个模块
import App from './App.vue'

//全局过滤器
Vue.filter('dateFmt',(input,formatString)=>{
    const lastFormatString = formatString || 'YYYY-MM-DD HH:mm:ss'

    /**
     * 参数1：格式化的原始时间
     * 参数2：格式化的字符串
     */
    return moment(input).format(lastFormatString)
})


//导入需要设置路由规则的组件
import home from './components/home/home.vue'
import category from './components/category/category.vue'
import shopcart from './components/shopcart/shopcart.vue'
import mine from './components/mine/mine.vue'
import newslist from './components/news/newslist.vue'
import newsinfo from './components/news/newsinfo.vue'
import photolist from './components/photo/photolist.vue'
import photoinfo from './components/photo/photoinfo.vue'
import goodslist from './components/goods/goodslist.vue'
import goodsinfo from './components/goods/goodsinfo.vue'
import pictureAndTextIntruduction from './components/goods/pictureAndTextIntruduction.vue'
import goodscomment from './components/goods/goodscomment.vue'

//创建路由对象，设置路由规则
const router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:home},
        {path:'/category',component:category},
        {path:'/shopcart',component:shopcart},
        {path:'/mine',component:mine},
        {path:'/news/newslist',component:newslist},
        {path:'/news/newsinfo/:newsId',component:newsinfo},
        {path:'/photo/photolist',component:photolist},
        {path:'/photo/photoinfo/:photoId',component:photoinfo},
        {path:'/goods/goodslist',component:goodslist},
        {path:"/goods/goodsinfo/:goodsId",component:goodsinfo},
        {name:"pictureAndTextIntruduction",path:"/goods/pictureAndTextIntruduction",component:pictureAndTextIntruduction},
        {path:"/goods/goodscomment",component:goodscomment}
    ]
})

//创建一个仓库
const store = new Vuex.Store({
  state: {//存储数据的地方
    goodsList:[]
  },
  getters: {//获取数据
    //获取加入购物车的商品的数组
    getGoodsList(state){
        return state.goodsList
    },
    //获取加入购物车中的总数量
    getGoodsCount(state){
        let totalCount = 0
        for(var i=0;i<state.goodsList.length;i++){
            totalCount+=state.goodsList[i].count
        }

        return totalCount
    }
  },
  mutations: {//`同步更改数据`
    /**
     * 添加商品到购物车的方法
     * 其中参数1固定的，就是代表我们的state
     * 参数2：商品信息的对象
     */
    addGoods(state,goodsObj){
        console.log("添加商品到购物车")
        console.log(goodsObj)
        //goodsObj ==> {goodsId:87,count:3}
        state.goodsList.push(goodsObj)
        console.log(state.goodsList)
    }
  },
  actions: {//`异步更改数据`
    //可以认为是$store对象
    addGoodsAction(context,goodsObj){
        //调用mutations
        context.commit('addGoods',goodsObj)
    }
  }
})

//创建根实例，到时候，Vue去解析id=app的div
new Vue({
    el:"#app",
    router,
    store,
    render:function(createElement){ //项目一启动之后，呈现给用户的第一个组件
        return createElement(App)
    }
})
import Vue from "vue";
import Router from "vue-router";

import App from "../App";
import { request } from "http";


const home = r => require.ensure([], () => r(require('../page/home')), 'home')
const brands = r => require.ensure([], () => r(require('../page/home/children/brands')), 'brands')
const allbrands = r => require.ensure([], () => r(require('../page/home/children/children/allbrands')), 'allbrands')
const branddetail = r => require.ensure([], () => r(require('../page/branddetail')), 'branddetail')
const arrivals = r => require.ensure([], () => r(require('../page/arrivals')), 'arrivals')
const topseller = r => require.ensure([], () => r(require('../page/topseller')), 'topseller')
const under = r => require.ensure([], () => r(require('../page/under')), 'under')
const categories = r => require.ensure([], () => r(require('../page/categories')), 'categories')
const address = r => require.ensure([], () => r(require('../page/address')), 'address')






// 个人中心主模块及子模块
const myAccount = r => require.ensure([], () => r(require('../page/myAccount')), 'myAccount')
const wishList = r => require.ensure([], () => r(require('../page/myAccount/children/wishList')), 'wishList')
const accountSet = r => require.ensure([], () => r(require('../page/accountSet')), 'accountSet')
const myReviews = r => require.ensure([], () => r(require('../page/myReviews')), 'myReviews')
const postReview = r => require.ensure([], () => r(require('../page/myReviews/children/postReview')), 'postReview')
    // const avator = r => require.ensure([], () => r(require('../page/accountSet/children/avator')), 'avator')
const name = r => require.ensure([], () => r(require('../page/accountSet/children/name')), 'name')
const email = r => require.ensure([], () => r(require('../page/accountSet/children/email')), 'email')
const Subscription = r => require.ensure([], () => r(require('../page/accountSet/children/Subscription')), 'Subscription')




// 购物车模块
const cart = r => require.ensure([], () => r(require('../page/cart')), 'cart')
const confirmOrder = r => require.ensure([], () => r(require('../page/confirmOrder')), 'confirmOrder')
const details = r => require.ensure([], () => r(require('../page/details')), 'details')


Vue.use(Router);
export default new Router({
    routes: [{
            path: "",
            redirect: "/home"
        },
        {
            path: "/home",
            component: home,
            children: [{
                path: "brands",
                component: brands,
                meta: { hiddenHider: true },
                children: [{
                    path: "allbrands",
                    component: allbrands
                }]
            }]
        },
        {
            path: "/branddetail",
            component: branddetail
        },
        {
            path: "/arrivals",
            component: arrivals
        },
        {
            path: "/topseller",
            component: topseller
        },
        {
            path: "/under",
            component: under
        },
        {
            path: "/categories",
            component: categories
        },
        {
            path: "/cart",
            component: cart
        },
        {
            path: "/confirmOrder",
            component: confirmOrder
        },
        {
            path: "/details",
            component: details
        },
        {
            path: "/myaccount",
            component: myAccount,
            children: [{
                path: "wishList",
                component: wishList
            }]
        },
        {
            path: "/address",
            component: address
        },
        {
            path: "/accountSet",
            component: accountSet,
            children: [{
                path: "name",
                component: name
            }, {
                path: "email",
                component: email
            }, {
                path: "Subscription",
                component: Subscription
            }]
        },
        {
            path: "/myReviews",
            component: myReviews,
            children: [{
                path: "postReview",
                component: postReview
            }]
        }
    ]
});
import Vue from 'vue'
import App from './App.vue'
import store from "@/store"
import TypeNav from "./components/TypeNav"
import Sliderloop from "@/components/Sliderloop"
import Pagination from "@/components/Pagination"
import '@/mock/mockServer'

import {requBannerList,requFloorList,requCategoryList} from "@/api"
requBannerList()
requFloorList()
requCategoryList()
// console.log(API)
Vue.component('TypeNav',TypeNav)
Vue.component('Sliderloop',Sliderloop)
Vue.component("Pagination",Pagination)
Vue.config.productionTip = false
import router from "@/router"
new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  el:"#app",
  render: h => h(App),
  router,
  store
})

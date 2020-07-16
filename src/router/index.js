import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function(localtion,onResolved,onRejected){
  if(onRejected === undefined && onResolved === undefined){
    return originPush.call(this,localtion).catch(()=>{})
  }else{
    return originPush.call(this,localtion,onResolved,onRejected)
  }
}
VueRouter.prototype.replace = function(localtion,onResolved,onRejected){
  if(onRejected === undefined && onResolved === undefined){
    return originReplace.call(this,localtion).catch(()=>{})
  }else{
    return originReplace.call(this,localtion,onResolved,onRejected)
  }
}
VueRouter.prototype.push
import routes from '@/router/routes'
export default new VueRouter({
  mode:"history",
  routes,
})

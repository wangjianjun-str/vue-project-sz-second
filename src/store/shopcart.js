import {reqAddOrUpdateShopCart,requGetShopCartList,requUpdateIsChecked,requDeleteIsChecked} from "@/api"

const state = {
  shopCartList: []
};
const mutations = {
  RECIVESHOPCARTLIST(state,shopCartList){
    state.shopCartList = shopCartList
  }
};
const actions = {
  //添加或更新购物车数据
 async addorUpdateShopCart({commit},{skuId,skuNum}){
    const result = await reqAddOrUpdateShopCart(skuId,skuNum)
    if(result.code === 200){
      return '购物车添加成功'
    }else{
      return new Promise.reject(new Error())
    }
  },
  //获取购物车列表的数据
  async getShopCartList({commit}){
    const result = await requGetShopCartList()
    if(result.code === 200){
      commit('RECIVESHOPCARTLIST',result.data)
    }
  },
  //请求购物车修改选中状态
 async updateIsChecked({commit},{skuId,isChecked}){
    const result = await requUpdateIsChecked(skuId,isChecked)
    if(result.code === 200){
      return '修改选中状态成功'
    }else{
      return  Promise.reject(new Error('修改选中状态失败'))
    }
  },
  //更新所有选中商品
  updateAllIsChecked({commit,state,dispatch},isChecked){
    let promises = []
    state.shopCartList.forEach(item =>{
      if(item.isChecked === isChecked ) return
     let promise =  dispatch('updateIsChecked',{skuId:item.skuId,isChecked:isChecked}) 
      promises.push(promise)
    })
   return  Promise.all(promises)
  },
  //请求删除单个选中商品
  async deleteIsChecked({commit},skuId){
    let result = await requDeleteIsChecked(skuId)
    if(result.code === 200){
      return "请求删除成功"
    }else{
      return Promise.reject(new Error('请求删除失败'))
    }
  },
  //请求删除所有选中的商品
  deleteAllIsChecked({commit,state,dispatch}){
    let promises = []
    state.shopCartList.forEach(item=>{
      if(item.isChecked === 0) return
      if(item.isChecked){
        let promise = dispatch('deleteIsChecked',item.skuId)  
        promises.push(promise)
      }
    })
    return Promise.all(promises)
  }
};
const getters = {

};

export default{
  state,
  mutations,
  actions,
  getters,
}
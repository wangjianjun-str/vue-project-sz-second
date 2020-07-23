import {requDetailPageInfo} from "@/api"

const state = {
  detailPageInfo:{}
};
const mutations = {
  RECEIVEDETAILPAGEINFO(state,detailPageInfo){
    state.detailPageInfo = detailPageInfo
  },

};
const actions = {
 async getDetailPageInfo({commit},skuId){
    const result = await requDetailPageInfo(skuId)
    if(result.code === 200){
      commit("RECEIVEDETAILPAGEINFO",result.data)
    }
  },
};
const getters = {
  categoryView(state){
    return state.detailPageInfo.categoryView || {}
  },
  skuInfo(state){
    return state.detailPageInfo.skuInfo || {}
  },
  spuSaleAttrList(state){
    return state.detailPageInfo.spuSaleAttrList || []
  },
  imgList(state){
    return (state.detailPageInfo.skuInfo || {}).skuImageList || []
  }
};

export default{
  state,
  mutations,
  actions,
  getters,
}
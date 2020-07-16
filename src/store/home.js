import {requCategoryList,requBannerList,requFloorList} from "@/api"

const state = {
  categoryList: [],
  bannerList:[],
  floorList:[]
};
const mutations = {
  RECEIVECATEGORYLIST(state,categoryList){
    state.categoryList = categoryList
  },
  RECEIVREBANNERLIST(state,bannerList){
    state.bannerList = bannerList
  },
  RECEIVREFLOORLIST(state,floorList){
    state.floorList = floorList
  },
};
const actions = {
  // getCategoryList({commit}){
  //   requCategoryList().then(response=>{
  //     commit("GETCATEGORYLIST",response.data)
  //   })
  // }

 async getCategoryList({commit}){
    const result = await requCategoryList()
    if(result.code === 200){
      commit("RECEIVECATEGORYLIST",result.data)
    }
  },
  async getBannerList({commit}){
    const result = await requBannerList()
    if(result.code === 200){
      commit("RECEIVREBANNERLIST",result.data)
    }
  },
  async getFloorList({commit}){
    const result = await requFloorList()
    
    if(result.code === 200){
      console.log(1111111111)
      commit("RECEIVREFLOORLIST",result.data)
    }
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
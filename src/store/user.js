import {requRegister,requLogin,requLogout} from "@/api"
import {getUserTempId} from '@/utils/userabout'
const state = {
  //把userTempId 存一份在vuex中 获取的效率比在localstorage中高
  userTempId:getUserTempId(),
  userInfo:JSON.parse(localStorage.getItem('USERINFO_KEY'))||{}
};
const mutations = {
  RECEIVEUSERINFO(state,userInfo){
    state.userInfo = userInfo
  },
  RESETUSERINFO(state,userInfo){
    state.userInfo = userInfo
  }
};
const actions = {
 async getuserInfo({commit},userInfo){
  let result = await requRegister(userInfo)
    if(result.code === 200){
      return "注册成功"
    }else{
      return Promise.reject(new Error("注册失败"))
    }
  },
 //请求登录数据   getLoginUserInfo
 async getLoginUserInfo({commit},userInfo){
    const result = await requLogin(userInfo)
    if(result.code === 200){
      //把用户的信息报存起来，为了自动登录（下次再来还可以找到登录状态的用户信息）
      localStorage.setItem('USERINFO_KEY',JSON.stringify(result.data))
      commit("RECEIVEUSERINFO",result.data)
    }else{
      return Promise.reject(new Error('请求登录失败'))
    }
  },
  //退出登录更新数据
 async uerLogout({commit}){
   const result = await requLogout()
   if(result.code === 200){
     localStorage.clear('USERINFO_KEY')
      commit('RESETUSERINFO','')
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

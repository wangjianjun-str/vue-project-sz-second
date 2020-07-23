//对axios的二次封装
// 配置基础路径和超时限制
// 添加进度条信息  nprogress
// 返回的响应不再需要从data属性当中拿数据，而是响应就是我们要的数据
// 统一处理请求错误, 具体请求也可以选择处理或不处理
import axios from "axios"
import Nprogress from "nprogress"
import 'nprogress/nprogress.css'
import store from "@/store"
const service = axios.create({
  baseURL:'/api', //配置基础路径
  timeout:20000 //超时限制
})

service.interceptors.request.use(config =>{
  Nprogress.start()
  //在请求头当中添加用户的临时id，让每一个AJAX请求都带着这个userTemptId
let userTemptId = store.state.user.userTempId
if(userTemptId){
  config.headers.userTempId = userTemptId
}
//添加用户登录后的token信息，让每个AJAX请求都带这个token，为了找到用户登录后的相关信息（订单、购物车）
let token = store.state.user.userInfo.token 
if(token){
  config.headers.token = token
}
  return config
} )

service.interceptors.response.use(response =>{
  Nprogress.done()
  return response.data
},error =>{
  Nprogress.done()
  alert("请求出错" + error.message || "未知错误")
})

export default service

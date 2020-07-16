//对axios的二次封装
// 配置基础路径和超时限制
// 添加进度条信息  nprogress
// 返回的响应不再需要从data属性当中拿数据，而是响应就是我们要的数据
// 统一处理请求错误, 具体请求也可以选择处理或不处理
import axios from "axios"
import Nprogress from "nprogress"
import 'nprogress/nprogress.css'
const service = axios.create({
  baseURL:'/mock', //配置基础路径
  timeout:20000 //超时限制
})

service.interceptors.request.use(config =>{
  Nprogress.start()
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
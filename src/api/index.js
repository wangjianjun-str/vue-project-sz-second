//项目接口请求函数文件
import Ajax from "@/ajax/Ajax"
import mockAjax from '@/ajax/mockAjax'
import Axios from "axios"
// 请求获取三级分类列表数据
// get   /api/product/getBaseCategoryList   参数：无

export const requCategoryList = () => Ajax({
  url:"/product/getBaseCategoryList",
  method:"GET"
})
export const requBannerList = () => mockAjax.get('/banner')
export const requFloorList = () => mockAjax.get('/floor')


//请求search的商品搜索列表数据
// post  /api/list   data   //data如果是空的对象代表没有搜索条件，会返回所有商品信息
export const requGoodsListInfo = (searchParams) => Ajax.post('/list',searchParams)

// 请求detail详情页的数据 
// 地址 /api/item/{ skuId } 
// 请求 GET
//
export const requDetailPageInfo = (skuId) => Ajax.get(`/item/${skuId}`)

//请求添加购物车
//   /api/cart/addToCart/{ skuId }/{ skuNum }  post 

export const reqAddOrUpdateShopCart = (skuId,skuNum) => Ajax.post(`/cart/addToCart/${ skuId }/${ skuNum }`)

// 请求去购物车结算数据
// /api/cart/cartList  get 
export const requGetShopCartList = () => Ajax.get('/cart/cartList')

//请求修改购物车的选中转态
//请求地址 /api/cart/checkCart/{skuID}/{isChecked} GET 

export const requUpdateIsChecked = (skuID,isChecked) => Ajax.get(`/cart/checkCart/${ skuID }/${ isChecked }`)
//请求删除购物车信息
//请求地址 /api/cart/deleteCart/{skuId} DELETE
export const requDeleteIsChecked = (skuId) => Ajax.delete(`/cart/deleteCart/${skuId}`)

//注册请求   /api/user/passport/register
export const requRegister = (userInfo) => Ajax.post('/user/passport/register',userInfo)

//登录请求 /api/user/passport/login  POST

export const requLogin = (userInfo) => Ajax.post('/user/passport/login',userInfo)

//退出登录请求 /api/user/passport/logout  GET
 export const requLogout = () => Ajax.get('/user/passport/logout')
 

//项目接口请求函数文件
import Ajax from "@/ajax/Ajax"
import mockAjax from '@/ajax/mockAjax'
// 请求获取三级分类列表数据
// get   /api/product/getBaseCategoryList   参数：无

export const requCategoryList = () => Ajax({
  url:"/product/getBaseCategoryList",
  method:"GET"
})
export const requBannerList = () => mockAjax.get('/banner')
export const requFloorList = () => mockAjax.get('/floor')

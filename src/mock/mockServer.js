//正儿八经的模拟接口
import Mock from "mockjs"
import banner from './banner.json'
import floor from './floor.json'
//json数据被引入后会变为真正的数组，不再是字符串了
Mock.mock('/mock/banner',{code:200,data:banner})
//第一个参数，是以后我们要请求的模拟接口路径
Mock.mock('/mock/floor',{code:200,data:floor})

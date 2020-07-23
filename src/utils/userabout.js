import { v4 as uuidv4 } from 'uuid';
uuidv4();
function getUserTempId(){
  //这是个工具函数，他是专门用来生成或得到用户的临时id
  
  let userTempId = localStorage.getItem("USERTEMP_KEY")
  //首先判断我的localstorage内有没有这个userTempId，如果获取不到，证明用户之前没有生成过临时id

  if(!userTempId){
    //如果获取不到，证明用户之前没有生成过临时Id
     userTempId = uuidv4();
     localStorage.setItem('USERTEMP_KEY',userTempId)
  }
  //如果存在就直接返回原来的，不存在返回的是新创建的
  return userTempId;
}
export {
  getUserTempId
}
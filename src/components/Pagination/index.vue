<template  v-if="page >= startEnd.start">
  <div class="pagination" >
    <button :disabled="currentPage === 1" @click="$emit('changePage',currentPage-1)">上一页</button>
    <button v-show="startEnd.start > 1" :class="{active:currentPage === 1 }" @click="$emit('changePage',1)" >1</button>
    <button v-show="startEnd.start > 2"  >···</button>
    <button 
       v-for="page in startEnd.end" :key="page" 
       v-if="page >= startEnd.start"
      :class="{active:page === currentPage}"
       @click="$emit('changePage',page)"
      >{{page}}
     </button>
  
    <button v-show="startEnd.end < totalPageNum -1"  >···</button>
    <button v-show="startEnd.end < totalPageNum" :class="{active:currentPage === totalPageNum}" @click="$emit('changePage',totalPageNum)">{{totalPageNum}}</button>
    <button :disabled="totalPageNum === currentPage"  @click="$emit('changePage',currentPage+1)" >下一页</button>
    <button style="margin-left: 30px" >共 {{total}} 条</button>
  </div>
   
</template>

<script>

  export default {
    name: "Pagination",
    props:{
      currentPage:{
        type:Number,
        default:1
      },
      pageSize:{
        type:Number,
        default:4
      },
      total:{
        type:Number,
        default:0
      },
      continueNum:{
        type:Number,
        default:5
      }
    },
    methods:{
    
    },
    computed:{
      //计算总的页数
      totalPageNum(){
        return Math.ceil(this.total/this.pageSize)
      },
      //计算分页的起始和结束页数
      startEnd(){
        //先判断我的总页数和分页数的长度
        let {totalPageNum,currentPage,continueNum} = this
        let start
        let end
        let disNum
        if(totalPageNum <= continueNum ){
          //如果我的总页数比分页数量还要少
          start=1
          end=totalPageNum
        }else{
          //如果我的总页数比分页数量还要多
          //正常的情况下
          start = currentPage - Math.floor(continueNum/2)
          end = currentPage + Math.floor(continueNum/2)
          if(start <= 1){
            disNum = 1-start
            start += disNum
            end += disNum
          }else if(end > totalPageNum){
              disNum=end-totalPageNum
              start -= disNum
              end -= disNum
          }
        }
        return {start,end}
      }
    }
  }
 
</script>

<style lang="less" scoped>
  .pagination {
    button {
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline: none;
      border-radius: 2px;
      padding: 0 4px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;

      &[disabled] {
        color: #c0c4cc;
        cursor: not-allowed;
      }

      &.active {
        cursor: not-allowed;
        background-color: #409eff;
        color: #fff;
      }
    }
  }
</style>
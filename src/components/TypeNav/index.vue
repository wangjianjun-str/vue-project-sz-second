<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="moveOut" @mouseenter="isShow=true">
      <h2 class="all">全部商品分类</h2>
      <transition name="show">
        <div class="sort" v-show="isShow">
        <div class="all-sort-list2" @click="toSearch">
          <div class="item" v-for="(c1, index) in categoryList" :key="c1.categoryId" @mouseenter="moveIn(index)" :class="{item_on:currentIndex === index}">
            <h3>
              
              <!-- <router-link :to="{name:'search',query:{category1Id:c1.categoryId,categoryName:c1.categoryName}}">{{c1.categoryName}}</router-link> -->
              <!-- <a href="javascript:;" @click="$router.push({name:'search',query:{category1Id:c1.categoryId,categoryName:c1.categoryName}})">{{c1.categoryName}}</a> -->
              <a  href="javascript:;" :data-categoryName="c1.categoryName" :data-category2Id="c1.categoryId" >{{c1.categoryName}}</a>
            </h3>
            <div class="item-list clearfix">
              <div class="subitem">
                <dl class="fore" v-for="(c2, index) in c1.categoryChild" :key="c2.categoryId">
                  <dt>
                      <!-- <router-link :to="{name:'search',query:{category2Id:c2.categoryId,categoryName:c2.categoryName}}">{{c2.categoryName}}</router-link> -->
                    <!-- <a  href="javascript:;" @click="$router.push({name:'search',query:{category2Id:c2.categoryId,categoryName:c2.categoryName}})">{{c2.categoryName}}</a> -->
                      <a  href="javascript:;" :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId">{{c2.categoryName}}</a>
                  </dt>
                  <dd>
                    <em v-for="(c3, index) in c2.categoryChild" :key="c3.categoryId">
                       <!-- <router-link :to="{name:'search',query:{category3Id:c3.categoryId,categoryName:c3.categoryName}}">{{c3.categoryName}}</router-link> -->
                      <!-- <a  href="javascript:;" @click="$router.push({name:'search',query:{category3Id:c3.categoryId,categoryName:c3.categoryName}})">{{c3.categoryName}}</a> -->
                      <a  href="javascript:;" :data-categoryName="c3.categoryName" :data-category3Id="c3.categoryId" >{{c3.categoryName}}</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      </transition>

      </div>
        <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
// import _ from "lodash"
import throttle from "lodash/throttle"//只是引入节流功能
import {mapState} from "vuex"
export default {
  name: "TypeNav",
  data(){
    return{
      currentIndex:-1,
      isShow:true,
    }
  },
  mounted(){
    if(this.$route.path !== "/home"){
      this.isShow=false
    }
  },
  methods: {
   
    // moveIn(index){
    //   console.log(index)
    //   this.currentIndex = index
    // },
    moveIn: throttle(function(index){
      this.currentIndex = index
    },50,{"trailing":false}),//{"trailing":true}拖延触发，节流操作函数触发如果是true，那么是在规定时间结束之后触发
    //{"trailing":false} 不拖延触发，节流操作函数触发如果是false,那么是在规定时间开始就触发
    moveOut(){
       this.currentIndex = -1
       if(this.$route.path !== "/home"){
         this.isShow=false;
       }
    },
    //点击分类跳转到search
    toSearch(event){
        let data = event.target.dataset //拿到所有的目标元素的自定义属性组成的一个对象
        console.log(data)
       let {categoryname,category1id,category2id,category3id} = data
       if(categoryname){
         //点的一定是a标签，我们要点的
        let localtion ={
          name:"search",
          }
        let query = {}
        query.categoryName = categoryname
        if(category1id){
          query.category1Id = category1id
        }else if(category2id){
           query.category2Id = category2id
        }else{
          query.category3Id = category3id
        }
        localtion.query = query
        //点击三级分类的时候，我们也不能光关注query参数，也要去看看之前有没有params参数
        //如果有，需要把之前的params参数也带上
        let {params} = this.$route
        if(params){
          localtion.params = params
        }
        this.$router.push(localtion)
       }
    }
  },
  computed:{
      // categoryList(){
      //     return this.$store.state.home.categoryList
      // }
      // categoryList(){
      //   return this.$store.state.categoryList
      // }
      // ...mapState(['categoryList'])
      //上面两种写法是一回事，mapState映射的时候，默认映射的就是总的store的state内部数据
      //如果使用了vuex模块化开发，那么数组的形式就无法使用了
      ...mapState(
        {
          categoryList : state => state.home.categoryList
        }
      )
  }

};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      &.show-enter{
        opacity: 0;
        height: 0;
      }
       &.show-enter-active{
      transition: all .5s;
      }
       &.show-enter-to{
        opacity: 1;
        height: 495px;
      }
      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 650px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &.item_on {
              background: #cccccc;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>

import Home from "@/pages/Home"
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'


export default [
    {
      path:"/home",
      component:Home
    },
    {
      path:"/login",
      component:Login
    },
    {
      path:"/register",
      component:Register
    },
    {
      path:"/search/:keyword",
      component:Search,
      // props:true
      props(route){
        return {keyword:route.params.keyword,keyword1:route.query.keyword1}
      },
      name:"search"
    }
  ]


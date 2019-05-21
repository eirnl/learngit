import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Category from './views/Category.vue'
import Produce from './views/Produce.vue'
import Arg from './views/Arg.vue'
import Detail from './views/Detail.vue'
import User from './views/User.vue'
import Login from './views/Login.vue'
import bus from './bus.js'
import Register from './views/register/register.vue'
import Cart from './views/Cart.vue'
import Product from './views/Product.vue'
Vue.use(Router)

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      // alise:"/home",
      // 别名  多个使用数组
      alise:["/home","/main"]
    },
    {
      path: '/category',
      name: 'category',
      // meta:{reAuth:true},
      component: Category
      
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
     
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/product/:id',
      name: 'product',
      component: Product
    },
    {
      path: '/login',
      name: 'login',
      component: Login 
    },
    {
      path: '/user',
      name: 'user',
      // 添加路由元信息
      // meta:{reAuth:true},
      component: User
     
    },
    {
      // 参数路由 id就是参数是自定义的
      path: '/produce/:id',
      name: 'produce',
      component: Produce
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      children:[
        {path:"arg",component:Arg},
        {path:"detail",component:Detail},
        // 重定向
        {path:"",redirect:"arg"}
      ]
    }
  ]
})
// 导航守卫  当我们进入或者离开某个页面的时候需要 额外操作（进入用户页面，发现没有登录跳回登录页面）
// 如果登录了，就进入用户页面
router.beforeEach(function(to,from,next){
  console.log(to,from);
  if(to.meta.reAuth){
    //检测是否登陆，如果登录了，执行next；没有登录跳转到登录页面

    if(bus.islog){
      next();
    }else{
      next("/login?redirect="+to.path)//从哪个页面到的就去哪个页面
    }

  }else{
    next();
    // next必须被调用，否则页面不会被切换
  }
  //路由独享守卫
  // {
  //   path:"",
  //   component:"",
  //   beforeEnter
  // }



})
export default router;//导出
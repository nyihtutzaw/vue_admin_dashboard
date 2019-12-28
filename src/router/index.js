import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/Login'
import Home from '@/components/Home/Home'
import Course from '@/components/Course/Course'

Vue.use(Router)

var router=new Router({
  
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/course',
      name: 'Course',
      component: Course
    },
   
   
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `Mg Kyaung Thar || ${to.name}`
  next()
})

export default router;
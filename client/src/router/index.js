import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import List from '@/components/todos/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Signin',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'Signup',
      component: SignUp
    },
    {
      path: '/todos',
      name: 'List',
      component: List
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import MainComponent from '@/components/MainComponent'
import Login from '@/components/Login'
import SignUp from '@/components/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/home',
      name: 'MainComponent',
      component: MainComponent
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import HelloWorld from '../views/HelloWorld.vue'
import Test from '../views/Test.vue'
import NotFound from '../views/NotFound.vue'


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/test',
      component: Test
    },
    {
      path: '/404',
      component: NotFound,
    },
    { 
      path: '*', 
      redirect: '/404'
    }
  ]
})

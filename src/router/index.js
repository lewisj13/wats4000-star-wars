import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import PeopleSpace from '@/components/PeopleSpace'
import SpaceShips from '@/components/SpaceShips'
import Planets from '@/components/Planets'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/PeopleSpace',
      name: 'PeopleSpace',
      component: PeopleSpace
    },
    {
      path: '/SpaceShips',
      name: 'SpaceShips',
      component: SpaceShips
    },
    {
      path: '/Planets',
      name: 'Planets',
      component: Planets
    }
  ]
})

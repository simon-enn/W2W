import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index.vue'
import About from './components/About.vue'
import Profile from './components/Profile.vue'
import Show from './components/Show.vue'
import Question from './components/Question.vue'
import Result from './components/Result.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    },
    {
        path: '/show',
        name: 'show',
        component: Show
    },
    {
        path: '/question',
        name: 'question',
        component: Question
    },
    {
        path: '/result',
        name: 'result',
        component: Result
    }
  ]
})
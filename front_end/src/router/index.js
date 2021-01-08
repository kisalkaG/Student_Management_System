import Vue from 'vue'
import VueRouter from 'vue-router'
import Online from '../components/Online'
import Information from '../components/Information'
import Fee from '../components/Fee'
import Result from '../components/Result'
import Pay from '../components/Attendance'
import Library from '../components/Library'
import Dashboard from '../components/Dashboard'


Vue.use(VueRouter)

const routes = [ 
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard    
  },  

  {
    path: '/online-registration',
    name: 'online-registration',
    component: Online    
  },

  {
    path: '/information',
    name: 'information',
    component: Information    
  },

  {
    path: '/fee-management',
    name: 'fee-management',
    component: Fee    
  },

  {
    path: '/result-management',
    name: 'result-management',
    component: Result    
  },

  {
    path: '/attendance-management',
    name: 'attendance-management',
    component: Pay    
  },
  
  {
    path: '/library-management',
    name: 'library-management',
    component:Library    
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

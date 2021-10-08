import Vue from 'vue'
import VueRouter from 'vue-router'
import NewDoctorFormInfo from '../views/newDoctor/NewDoctorFormInfo.vue'
import NewDoctorFormService from '../views/newDoctor/NewDoctorFormService.vue'
import NewDoctorFormReview from '../views/newDoctor/NewDoctorFormReview.vue'
import NewDoctorSuccess from '../views/newDoctor/NewDoctorSuccess.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'NewDoctorFormInfo',
    component: NewDoctorFormInfo
  },
  {
    path: '/NewDoctorFormService',
    name: 'NewDoctorFormService',
    component: NewDoctorFormService
  },
  {
    path: '/NewDoctorFormReview',
    name: 'NewDoctorFormReview',
    component: NewDoctorFormReview
  },
  {
    path: '/NewDoctorSuccess',
    name: 'NewDoctorSuccess',
    component: NewDoctorSuccess
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

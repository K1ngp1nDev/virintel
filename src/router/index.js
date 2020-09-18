import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
    },
    {
      path: '/sign-select',
      name: 'sign-select',
      component: () => import('../views/SignSelect.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/sign-up/doctor',
      name: 'signup-doctor',
      component: () => import('../views/SignDoctor.vue')
    },
    {
      path: '/sign-up/patient',
      name: 'signup-patient',
      component: () => import('../views/SignPatient.vue')
    },
    {
      path: '/doctor/profile',
      name: 'doctor-profile',
      component: () => import('../views/DoctorProfile.vue')
    },
    {
      path: '/patient/profile',
      name: 'patient-profile',
      component: () => import('../views/PatientProfile.vue')
    },
    {
      path: '/doctor/patients',
      component: () => import('../views/Patients.vue'),
      children: [
        {
          path: '/doctor/patients',
          name: 'all-patients',
          component: () => import('../components/AllPatients-Doctor.vue')
        },
        {
          path: '/doctor/patient/view',
          name: 'patient-profile-view',
          component: () => import('../components/PatientProfileView-Doctor.vue')
        },
      ]
    },
    {
      path: '/doctor/tests',
      component: () => import('../views/Tests-Doctor.vue'),
      children: [
        {
          path: '/',
          name: 'doctor-test',
          component: () => import('../components/AllTests-Doctor.vue'),
        },
        {
          path: '/doctor/test/id',
          name: 'test-view',
          component: () => import('../components/TestView-Doctor.vue'),

        }
      ]
    },
    {
      path: '/patient/tests',
      component: () => import('../views/Tests-Patient.vue'),
      children: [
        {
          path: '/',
          name: 'patient-test',
          component: () => import('../components/AllTests-Patient.vue'),
        },
        {
          path: '/patient/test/id',
          name: 'patient-test-view',
          component: () => import('../components/TestView-Patient.vue'),

        }
      ]
    },
    {
      path: '/doctor/messages',
      name: 'doctor-messages',
      component: () => import('../views/Messages.vue')
    },
    {
      path: '',
      component: () => import('../components/AsideTabs-Doctor.vue')
    },
    {
      path: '*',
      name: '404',
      component: () => import('../views/NotFound.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import type { RouteRecordRaw } from 'vue-router'

const publicPages = <RouteRecordRaw>[
  {
    path: 'home',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: 'about',
    name: 'AboutView',
    component: AboutView,
  },
]

export default publicPages

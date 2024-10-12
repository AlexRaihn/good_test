import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import type { RouteRecordRaw } from 'vue-router'
import PublicIndex from '@/views/PublicIndex.vue'

const publicPages = <RouteRecordRaw>[
  {
    path: '/',
    name: 'PublicIndex',
    component: PublicIndex,
    meta: {
      guest: true
    },
    redirect: {
      name: 'HomeView'
    },
    children: [
      {
        path: '/home',
        name: 'HomeView',
        component: HomeView,
      },
      {
        path: '/about',
        name: 'AboutView',
        component: AboutView,
      }
    ]
  }
]

export default publicPages

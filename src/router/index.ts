import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import publicPages from '@/router/publicPages'
//import PublicIndex from '@/views/PublicIndex.vue'

const routes = <RouteRecordRaw>[
  ...publicPages,
  /*
  В идеале вот так, но для более корректной работы GitHubPages - будет вариант выше
  * {
    path: '/'
    name: 'PublicIndex',
    component: PublicIndex,
    meta: {
      guest: true,
    },
    redirect: {
      name: 'HomeView',
    },
    children: [...publicPages],
  },
  * */
]

const router = createRouter({
  history: createWebHistory('/good_test'),
  routes,
})

export default router

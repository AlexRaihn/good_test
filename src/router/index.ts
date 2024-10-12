import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import publicPages from '@/router/publicPages'

const routes = <RouteRecordRaw>[
  ...publicPages,
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

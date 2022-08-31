import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue'),
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import('../pages/Chat.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

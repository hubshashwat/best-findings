import { createRouter, createWebHistory } from 'vue-router'
import CategoryView from '../views/CategoryView.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/category/phones_with_prices'
    },
    {
      path: '/category/:categoryKey',
      name: 'category',
      component: CategoryView
    }
  ]
})

router.beforeEach((to, from, next) => {
  const redirectPath = sessionStorage.getItem('redirectPath')
  if (redirectPath && redirectPath !== import.meta.env.BASE_URL) {
    sessionStorage.removeItem('redirectPath')
    next(redirectPath.replace(import.meta.env.BASE_URL, '/')) // Navigate to the stored path
  } else {
    next() // Proceed as normal
  }
})

export default router

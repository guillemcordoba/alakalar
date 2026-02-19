import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/introduccio', component: () => import('./views/IntroduccioView.vue') },
  {
    path: '/part1',
    redirect: '/part1/granges',
  },
  {
    path: '/part1/:zone',
    component: () => import('./views/Part1View.vue'),
  },
  {
    path: '/part2',
    redirect: '/part2/saqueig',
  },
  {
    path: '/part2/:zone',
    component: () => import('./views/Part2View.vue'),
  },
  {
    path: '/acte3',
    redirect: '/acte3/1',
  },
  {
    path: '/acte3/:room',
    component: () => import('./views/Acte3View.vue'),
  },
  {
    path: '/acte4',
    redirect: '/acte4/9',
  },
  {
    path: '/acte4/:room',
    component: () => import('./views/Acte4View.vue'),
  },
  { path: '/final', component: () => import('./views/FinalView.vue') },
  { path: '/mapes', component: () => import('./views/MapsView.vue') },
  { path: '/objectes', component: () => import('./views/ObjectesView.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash }
    return { top: 0 }
  }
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/member',
    name: 'member',
    component: () => import('../views/MemberView.vue'),
    children: [{
      path: 'a',
      component: () => import('../views/MbrA.vue')
    },
    {
      path: 'b',
      component: () => import('../views/MbrB.vue')
    },
    {
      // 97e4bf19a6e4a323
      path: 'dynamicRouter/:id',
      component: () => import('../views/DynamicRouter.vue')
    },
    {
      path: 'dynamicRouterByProps/:id',
      component: () => import('../views/DynamicRouterByProps.vue'),
      props: (route) => {
        // console.log('route:', route)
        return {
          id: route.params.id
        }
      }
    },
    {
      path: 'routerNavigation',
      component: () => import('../views/RouterNavigation.vue')
    },
    {
      path: 'namedView',
      component: () => import('../views/NamedView.vue'),
      children: [{
        path: 'c2d',
        components: {
          left: () => import('../views/MbrC.vue'),
          right: () => import('../views/MbrD.vue')
        }
      },
      {
        path: 'a2b',
        components: {
          left: () => import('../views/MbrA.vue'),
          right: () => import('../views/MbrB.vue')
        }
      }]
    }]
  },
  // 404頁面
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  },
  // 重新導向
  {
    path: '/member/:pathMatch(.*)*',
    redirect: {
      name: 'home'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active'
})

export default router

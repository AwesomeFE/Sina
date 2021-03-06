import VueRouter from 'vue-router';

export default () => new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('./pages/App'),
      children: [
        {
          name: 'Signup',
          path: '/signup',
          component: () => import('./pages/Signup')
        },
        {
          name: 'Signin',
          path: '/signin',
          component: () => import('./pages/Signin')
        },
        {
          name: 'Dashboard',
          path: '/dashboard',
          component: () => import('./pages/Dashboard')
        },
        {
          name: 'User',
          path: '/user',
          component: () => import('./pages/User')
        },
        {
          name: 'Country',
          path: '/country',
          component: () => import('./pages/Country')
        },
        {
          name: 'CountryCreate',
          path: '/country/create',
          component: () => import('./pages/CountryForm')
        },
        {
          name: 'CountryEdit',
          path: '/country/:countryId',
          component: () => import('./pages/CountryForm')
        },
        {
          path: '*',
          component: () => import('./pages/NotFound')
        }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
});

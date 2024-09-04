import { createRouter, createWebHistory } from 'vue-router';
import Home from '@views/HomeView.vue';
import Convert from '@views/ConvertView.vue';

const root = 'cash-converter';
const routes = [
  {
    name: 'home',
    path: `/${root}`,
    component: Home,
  },
  {
    name: 'convert',
    path: `/${root}/convert`,
    component: Convert,
  },
  {
    path: '/:pathMatch(.*)',
    redirect: `/${root}`,
  },
];

export default createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes,
});

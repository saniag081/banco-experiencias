import { createRouter, createWebHistory } from 'vue-router'
import BuildForm from '@/pages/BuildForm.vue'
import HomeView from '@/pages/HomeView.vue'
import ViewFrom from '@/pages/ViewFrom.vue'
import EditForm from '@/pages/EditForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/formulario',
      name: 'new',
      component: BuildForm,
    },
    {
      path: '/formulario/:id',
      name: 'view',
      component: ViewFrom,
    },
    {
      path: '/editar/:id',
      name: 'edit',
      component: EditForm,
    },
  ],
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import BuildForm from '@/pages/BuildForm.vue'
import HomeView from '@/pages/HomeView.vue'
import ViewFrom from '@/pages/ViewFrom.vue'
import EditForm from '@/pages/EditForm.vue'
import LayoutPrivite from '@/components/layoutPrivite.vue'
import FillForm from '@/pages/FillForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:pathMatch(.*)*",
      redirect: "/form"
    },
    {
      path: "/form",
      component: LayoutPrivite,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: 'new',
          name: 'new',
          component: BuildForm,
        },
        {
          path: ':id',
          name: 'view',
          component: ViewFrom,
        },
        {
          path: ':id/edit',
          name: 'edit',
          component: EditForm,
        },
      ],
    },
    {
      path: '/form/:id/fill',
      name: 'fill',
      component: FillForm,
    },
  ],
})

export default router

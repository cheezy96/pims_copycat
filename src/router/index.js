/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from "vue-router";
import index from "@/pages/index.vue";
import requestPage from "@/components/pims/request/RequestComp.vue";
import InventoryCustodianSlip from "@/components/pims/printable/request/InventoryCustodianSlip.vue";
import AbstractPrint from "@/components/pims/printable/request/AbstractPrint.vue";
// import { setupLayouts } from 'virtual:generated-layouts'
// import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: index,
    },
    {
      path: "/request",
      name: "Request Page",
      component: requestPage,
    },
    {
      path: "/ISCPrint",
      name: "InventoryCustodianSlip",
      component: InventoryCustodianSlip,
    },
    {
      path: "/AbstractPrint",
      name: "AbstractPrintView",
      component: AbstractPrint,
    },
  ],
});

// Workaround for https://github.com/vitejs/vite/issues/11804
// router.onError((err, to) => {
//   if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
//     if (!localStorage.getItem('vuetify:dynamic-reload')) {
//       console.log('Reloading page to fix dynamic import error')
//       localStorage.setItem('vuetify:dynamic-reload', 'true')
//       location.assign(to.fullPath)
//     } else {
//       console.error('Dynamic import error, reloading page did not fix it', err)
//     }
//   } else {
//     console.error(err)
//   }
// })

// router.isReady().then(() => {
//   localStorage.removeItem('vuetify:dynamic-reload')
// })

export default router;

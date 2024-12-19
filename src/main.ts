import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Si une position sauvegardée existe, on y retourne
    if (savedPosition) {
      return savedPosition
    }

    // Si un hash (#ancre) est présent dans l'URL
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth' // Ajoute un défilement fluide (facultatif)
      }
    }

    // Sinon, on remonte en haut de la page
    return { top: 0 }
  }
})

const app = createApp(App)

app.use(router) // Utilise le routeur avec scrollBehavior configuré

app.mount('#app')

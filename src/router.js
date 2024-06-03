import { createWebHistory, createRouter } from 'vue-router';
import AppHome from "./pages/AppHome.vue";
import AppCharacters from "./pages/AppCharacters.vue";
import AppContacts from "./pages/AppContacts.vue";
import AppAbout from "./pages/AppAbout.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:
        [
            {
                path: '/',
                name: 'home',
                component: AppHome,
            },
            {
                path: '/characters',
                name: 'characters',
                component: AppCharacters,
            },
            {
                path: '/contacts',
                name: 'contacts',
                component: AppContacts,
            },
            {
                path: '/about',
                name: 'about',
                component: AppAbout,
            },
        ]
})

export default router;
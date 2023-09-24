import { createRouter, createWebHistory } from 'vue-router';

import HealthPage from '../pages/HealthPage.vue';
import MainPage from '../pages/MainPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Головна',
            component: MainPage
        },
        {
            path: '/health',
            name: 'Здоровя',
            component: HealthPage
        }
    ]
});

export default router;
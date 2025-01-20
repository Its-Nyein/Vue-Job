import JobListings from "@/components/JobListings.vue";
import HomeView from "@/views/HomeView.vue";
import JobView from "@/views/JobView.vue";
import NotFound from "@/views/NotFound.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: JobListings
        },
        {
            path: '/jobs/:id',
            name: 'job',
            component: JobView
        },
        {
            path: '/:pathMatch(.*)',
            name: 'not-found',
            component: NotFound
        }
    ]
})

export default router;
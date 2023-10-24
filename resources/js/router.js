import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {path: '/posts', component: () => import('./components/PostComponent.vue')},
    {path: '/people', component: () => import('./components/Person/Index.vue'), name: 'person.index'},
    {path: '/'}
];

const router = createRouter({
    history: createWebHistory('/'),
    routes
});

export default router;

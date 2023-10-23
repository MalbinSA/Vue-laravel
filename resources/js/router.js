import {createApp} from 'vue';
import {createRouter, createWebHistory} from "vue-router";
import PostComponent from "./components/PostComponent.vue";

const routes = [
    {path: '/posts', component: PostComponent}
];

const router = createRouter({
    history: createWebHistory('/'),
    routes
});

export default router;

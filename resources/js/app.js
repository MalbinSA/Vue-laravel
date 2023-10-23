
import './bootstrap';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from "vue-router";
import Index from './components/Index.vue'
import PostComponent from "./components/PostComponent.vue";
import TagComponent from "./components/TagComponent.vue";

const routes = [
    { path: '/', component: Index},
    { path: '/posts', component: PostComponent},
    { path: '/tags', component: TagComponent}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


const app = createApp();
app.use(router);
app.mount('#app');

// createApp({})
//     .component('Index', Index)
//     .mount('#app')


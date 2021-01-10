import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/MainView.vue'
import PageNotFound from '../views/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/about',
        name: 'About',
        component: Main
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Main
    },
    {
        path: '*',
        name: 'BadUrl',
        component: PageNotFound
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
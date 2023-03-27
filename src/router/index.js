import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/MainView.vue'
import About from '@/views/AboutView.vue'
import Contact from '@/views/ContactView.vue'
import PageNotFound from '@/views/PageNotFound.vue'

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
        component: About
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
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
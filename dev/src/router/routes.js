import Home from '@/views/Home.vue'
import docs from '@/components/layout/docs'

export default [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta:{ title: 'Godspeed' }
    },
    {
        path: '/docs',
        name: 'docs',
        component: docs,
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import('@/views/dashboard'),
                meta:{ title: 'Godspeed' }
            },
        ]
    }
]
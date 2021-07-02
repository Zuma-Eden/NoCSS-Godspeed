import home from '@/views/home'
import Hello from '@/views/Hello.vue'
import docs from '@/components/layout/docs'

export default [
    {
        path: '/',
        name: 'Home',
        component: home,
    },
    {
        path: '/hello',
        name: 'Hello',
        component: Hello,
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
            },
        ]
    }
]
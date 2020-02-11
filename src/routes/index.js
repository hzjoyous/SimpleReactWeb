import {
    About,
    Admin,
    Home,
    MathFunction,
    NotFound,
    SimpleMap,
    Test
} from '@/views'

export const adminRoute = [
    {
        pathname: '/admin',
        component: Admin
    }
]

export const mainRoute = [
    {
        pathname: '/home',
        component: Home
    }, {
        pathname: '/404',
        component: NotFound
    }
]

export const simpleRoute = [
    {
        pathname: '/about',
        component: About
    },
    {
        pathname: '/mathFunction',
        component: MathFunction
    },
    {
        pathname: '/simpleMap',
        component: SimpleMap
    },
    {
        pathname: '/test',
        component: Test
    }
]


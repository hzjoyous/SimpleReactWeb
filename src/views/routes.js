import Loadable from '@loadable/component'
// import { Loading } from '@/components'
//import About from './About'
//import Admin from './Admin'
//import Home from './Home'
//import MathFunction from './MathFunction'
//import NotFound from './NotFound'
//import SimpleMap from './SimpleMap'
//import Test from './Test'

// 懒加载
const About = Loadable(() => import('./About'))
const MathFunction = Loadable(() => import('./MathFunction'))
const NotFound = Loadable(() => import('./NotFound'))
const SimpleMap = Loadable(() => import('./SimpleMap'))
const Test = Loadable(() => import('./Test'))
const Simple = Loadable(() => import('./Simple'))
const Login = Loadable(() => import('./Login/login'))
const Three = Loadable(() => import('./Three/tree.js'))
const Reg = Loadable(() => import('./Login/reg'))
export const Admin = Loadable(() => import('./Admin'))
export const Article = Loadable(() => import('./Admin/article.js'))
export const ArticleEdit = Loadable(() => import('./Admin/articleEdit.js'))
export const Dashboard = Loadable(() => import('./Admin/dashboard.js'))
export const Setting = Loadable(() => import('./Admin/setting.js'))
export const Canvas = Loadable(() => import('./Canvas/canvas.js'))

export const simpleRoute = {
    path: '/',
    component: Simple
}

export const mainRoute = [
    {
        name: "login",
        path: '/login',
        component: Login
    },
    {
        name: "404",
        path: '/404',
        component: NotFound
    },
    {
        name: "about",
        path: '/about',
        component: About
    },
    {
        name: "mathFunction",
        path: '/mathFunction',
        component: MathFunction
    },
    {
        name: "simpleMap",
        path: '/simpleMap',
        component: SimpleMap
    },
    {
        name: "test",
        path: '/test',
        component: Test
    },
    {
        name: "three",
        path: '/three',
        component: Three
    },
    {
        name: "reg",
        path: '/reg',
        component: Reg
    },
    {
        name: "admin",
        path: "/admin",
        component: Admin
    }, {
        name: "Canvas",
        path: "/Canvas",
        component: Canvas
    }
]

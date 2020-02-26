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
const Three = Loadable(() => import('./Three'))
const Reg = Loadable(() => import('./Login/reg'))
export const Admin = Loadable(() => import('./Admin'))
export const Article = Loadable(() => import('./Admin/article.js'))
export const ArticleEdit = Loadable(() => import('./Admin/articleEdit.js'))
export const Dashboard = Loadable(() => import('./Admin/dashboard.js'))
export const Setting = Loadable(() => import('./Admin/setting.js'))


export const simpleRoute = {
    pathname: '/',
    component: Simple
}

export const mainRoute = [
    {
        pathname: '/login',
        component: Login
    },
    {
        pathname: '/404',
        component: NotFound
    },
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
    },
    {
        pathname: '/three',
        component: Three
    },
    {
        pathname: '/reg',
        component: Reg
    }
]

export const simpleRouteMap = [
    { routeName: "SimpleMap", routePath: "/simpleMap" },
    { routeName: "初等函数", routePath: "/mathFunction" },
    { routeName: "About", routePath: "/about" },
    { routeName: "NotFound", routePath: "/404" },
    { routeName: "Three", routePath: "/three" },
    { routeName: "admin", routePath: "/admin" },
    { routeName: "login", routePath: "/login" },
    { routeName: "reg", routePath: "/reg" },

]
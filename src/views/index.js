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
const Admin = Loadable(() => import('./Admin'))
const Home = Loadable(() => import('./Home'))
const MathFunction = Loadable(() => import('./MathFunction'))
const NotFound = Loadable(() => import('./NotFound'))
const SimpleMap = Loadable(() => import('./SimpleMap'))
const Test = Loadable(() => import('./Test'))

export {
    About,
    Admin,
    Home,
    MathFunction,
    NotFound,
    SimpleMap,
    Test
}








import React, { Component } from 'react'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import {
    Admin,
    Article,
    ArticleEdit,
    Dashboard,
    Setting,
    mainRoute, simpleRoute
} from './views/routes.js'

export default class App extends Component {

    constructor() {
        super()
        if (document.hidden !== undefined) {
            var defaultTitle = document.title || '';
            document.addEventListener('visibilitychange', () => {
                switch (document.visibilityState) {
                    case 'visible':
                        document.title = defaultTitle
                        break
                    default:
                        document.title = ('( ╯□╰ )')
                }
                console.debug(document.hidden)
            })
        }
    }

    render() {
        return (
            <Router basename="/">
                <Switch>

                    {/* to do 结构待优化 */}
                    <Route component={simpleRoute.component} path={simpleRoute.path} exact />
                    {
                        mainRoute.map((route) => {
                            return <Route key={route.path} component={route.component} path={route.path} />
                        })
                    }
                    <Route path="/admin" component={(props) => {
                        let basepath = props.match.path
                        return (
                            <>
                                <Switch>
                                    <Route path={`${basepath}`} component={Admin} exact />
                                    <Route path={`${basepath}/article`} component={Article} />
                                    <Route path={`${basepath}/articleEdit`} component={ArticleEdit} />
                                    <Route path={`${basepath}/dashboard`} component={Dashboard} />
                                    <Route path={`${basepath}/setting`} component={Setting} />
                                    <Redirect to="/404" />                
                                </Switch>
                            </>
                        )
                    }} />
                    <Redirect to="/" from="/" exact />
                    <Redirect to="/404" />

                </Switch>
            </Router>
        )
    }
}

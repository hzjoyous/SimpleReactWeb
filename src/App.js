import React, { Component } from 'react'
import { Route, NavLink as Link, Redirect, Switch } from 'react-router-dom'
import {
    Home,
    NotFound,
    About
} from './views'


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
            <>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/404">NotFound</Link></li>
                </ul>
                App
                <Switch>

                    <Route component={Home} path="/home" />
                    <Route component={About} path="/about" />
                    <Route component={NotFound} path="/404" />

                    <Redirect to="/home" from="/" exact />
                    <Redirect to="/404" />
                </Switch>
                <a href="http://www.beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">京ICP备17063724号-1</a>
            </>
        )
    }
}

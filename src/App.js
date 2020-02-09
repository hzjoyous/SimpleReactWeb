import React, { Component } from 'react'
import { Route, NavLink as Link, Redirect, Switch } from 'react-router-dom'
import {
    Home,
    SimpleMap,
    NotFound,
    About,
    MathFunction
} from './views'
import './App.css'


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
            <div className="App" style={{ margin: '0 auto' ,width:"100%",height:"100%"}}>
                <ul style={{margin: '0 auto' }}>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/simpleMap">SimpleMap</Link></li>
                    <li><Link to="/mathFunction">初等函数</Link></li>
                    <li><Link to="/404">NotFound</Link></li>
                </ul>
                <Switch>

                    <Route component={Home} path="/home" />
                    <Route component={SimpleMap} path="/simpleMap" />
                    <Route component={About} path="/about" />
                    <Route component={NotFound} path="/404" />
                    <Route component={MathFunction} path="/mathFunction" />

                    <Redirect to="/home" from="/" exact />
                    <Redirect to="/404" />
                </Switch>
                <div style={{ margin: '0 auto' }}>
                    <a href="http://www.beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">京ICP备17063724号-1</a>
                </div>
            </div>
        )
    }
}

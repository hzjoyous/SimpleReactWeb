import React from "react";
import { render } from 'react-dom'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN';
import App from "./App"
import './index.less'

import { adminRoute, mainRoute, simpleRoute } from './routes'

render(
    <div>
        <ConfigProvider locale={zhCN} >
            <Router>
                <Switch>
                    <Route path="/home" render={(routerProps) => {
                        return <App {...routerProps} />
                    }} />
                    {
                        adminRoute.map((route) => {
                            return <Route key={route.pathname} component={route.component} path={route.pathname} />
                        })
                    }
                    {
                        simpleRoute.map((route) => {

                            return <Route key={route.pathname} component={route.component} path={route.pathname} />
                        })
                    }
                    {
                        mainRoute.map((route) => {
                            return <Route key={route.pathname} component={route.component} path={route.pathname} />
                        })
                    }

                    <Redirect to="/home" from="/" exact />
                    <Redirect to="/404" />
                </Switch>
            </Router>
        </ConfigProvider>
    </div>
    ,
    document.querySelector('#root')
)
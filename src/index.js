import React from "react";
import { render } from 'react-dom'
import { HashRouter as Router, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN';
import App from "./App"
import './index.less'


render(
    <ConfigProvider locale={zhCN}>
        <Router>
            <Route component={App} ></Route>
        </Router>
    </ConfigProvider>
    ,
    document.querySelector('#root')
)